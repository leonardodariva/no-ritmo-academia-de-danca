import assert from "node:assert/strict";
import test from "node:test";

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("renderiza a página inicial da No Ritmo", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<html lang="pt-BR">/i);
  assert.match(html, /<title>No Ritmo Academia de Dança \| Apucarana<\/title>/i);
  assert.match(html, /<h1><span>No Ritmo<\/span>/i);
  assert.match(html, /aria-label="Navegação principal"/i);
  assert.match(html, /aria-label="Conversar com a No Ritmo pelo WhatsApp"/i);
});

test("todas as rotas públicas principais respondem sem erro", async () => {
  const routes = ["/sobre", "/aulas", "/aulas-particulares", "/modalidades", "/coreografias", "/professores", "/horarios", "/galeria", "/faq", "/contato", "/conhecimento", "/conhecimento/danca-de-salao", "/artigos", "/artigos/comecar-a-dancar", "/eventos", "/autores"];
  for (const route of routes) { const response = await render(route); assert.equal(response.status, 200, `${route} deveria responder 200`); }
});

test("entra diretamente na home sem tela de carregamento e sem título duplicado", async () => {
  const response = await render();
  const html = await response.text();

  assert.doesNotMatch(html, /class="intro-loader"/i);
  assert.equal((html.match(/<h1\b/gi) ?? []).length, 1);
});
