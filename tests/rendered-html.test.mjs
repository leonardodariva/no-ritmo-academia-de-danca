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
  assert.match(html, /A dança começa no movimento/i);
  assert.match(html, /aria-label="Navegação principal"/i);
  assert.match(html, /aria-label="Conversar com a No Ritmo pelo WhatsApp"/i);
});

test("todas as rotas públicas principais respondem sem erro", async () => {
  const routes = ["/sobre", "/aulas", "/aulas-particulares", "/modalidades", "/coreografias", "/professores", "/horarios", "/galeria", "/faq", "/contato", "/conhecimento", "/conhecimento/danca-de-salao", "/artigos", "/artigos/comecar-a-dancar", "/artigos/categoria/comunicacao", "/eventos", "/autores", "/autores/equipe-no-ritmo"];
  for (const route of routes) { const response = await render(route); assert.equal(response.status, 200, `${route} deveria responder 200`); }
});

test("contato e horários exibem os dados centralizados", async () => {
  const contactHtml = await (await render("/contato")).text();
  assert.match(contactHtml, /\(43\) 99921-6027/);
  assert.match(contactHtml, /noritmo@live\.com/);
  assert.doesNotMatch(contactHtml, /Lorem ipsum/i);

  const scheduleHtml = await (await render("/horarios")).text();
  assert.match(scheduleHtml, /Segunda-feira/);
  assert.match(scheduleHtml, /Turma iniciante, das 7h às 8h30/);
});

test("modalidades e aulas apresentam conteúdo útil sem texto de preparação", async () => {
  const modalitiesHtml = await (await render("/modalidades")).text();
  assert.match(modalitiesHtml, /Samba de gafieira/);
  assert.match(modalitiesHtml, /Para quem está começando/);
  assert.doesNotMatch(modalitiesHtml, /será atualizada|terá uma explicação/i);

  const classesHtml = await (await render("/aulas")).text();
  assert.match(classesHtml, /Aulas em grupo/);
  assert.match(classesHtml, /Coreografias para eventos/);
  assert.doesNotMatch(classesHtml, /Aqui explicaremos/i);
});

test("sobre e FAQ usam conteúdo consolidado sem placeholders", async () => {
  const aboutHtml = await (await render("/sobre")).text();
  assert.match(aboutHtml, /Nossa forma de ensinar/);
  assert.match(aboutHtml, /Aprender no seu ritmo/);
  assert.doesNotMatch(aboutHtml, /Lorem ipsum|será ampliada|A página contará/i);

  const faqHtml = await (await render("/faq")).text();
  assert.match(faqHtml, /Como funciona a aula experimental/);
  assert.match(faqHtml, /A aula experimental deve ser agendada pelo WhatsApp/);
});

test("home apresenta os três caminhos e a rede editorial da V4", async () => {
  const html = await (await render("/")).text();
  assert.match(html, /Samba de gafieira/i);
  assert.match(html, /Conhecer/);
  assert.match(html, /Aprender/);
  assert.match(html, /Participar/);
  assert.match(html, /Biblioteca de conhecimento/);
  assert.doesNotMatch(html, /https:\/\/www\.(instagram|facebook)\.com\//i);
  assert.doesNotMatch(html, /Desde 2010|15\+.*anos de história/i);
});

test("entra diretamente na home sem tela de carregamento e sem título duplicado", async () => {
  const response = await render();
  const html = await response.text();

  assert.doesNotMatch(html, /class="intro-loader"/i);
  assert.equal((html.match(/<h1\b/gi) ?? []).length, 1);
});

test("a V4 conecta artigos e páginas de conhecimento", async () => {
  const knowledgeHtml = await (await render("/conhecimento/comunicacao")).text();
  assert.match(knowledgeHtml, /O que sabemos \/ conceito/i);
  assert.match(knowledgeHtml, /Como a No Ritmo trabalha esse conceito/i);
  assert.match(knowledgeHtml, /href="\/artigos\/danca-e-comunicacao"/i);

  const articleHtml = await (await render("/artigos/danca-e-comunicacao")).text();
  assert.match(articleHtml, /Transparência editorial/i);
  assert.match(articleHtml, /href="\/conhecimento\/comunicacao"/i);
  assert.match(articleHtml, /Sobre a autoria/i);
});
