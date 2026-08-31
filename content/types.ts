export type ContentStatus = "draft" | "published" | "archived";

export type Author = { slug: string; name: string; role: string; bio?: string; photo?: string; specialties?: string[] };
export type Article = { slug: string; title: string; summary: string; body: string[]; category: string; tags: string[]; author: Author; publishedAt?: string; updatedAt?: string; readingTime: number; relatedArticles?: string[]; relatedKnowledge?: string[]; status: ContentStatus; seoTitle?: string; seoDescription?: string };
export type KnowledgePage = { slug: string; title: string; summary: string; definition: string; application: string; perspective: string; relatedConcepts: string[]; relatedArticles: string[]; updatedAt?: string; author?: Author; reviewer?: Author; status: ContentStatus };
export type Modality = { slug: string; name: string; summary: string; audience: string; details: string[]; status: ContentStatus };
export type Event = { slug: string; title: string; description: string; date?: string; time?: string; location?: string; registrationUrl?: string; status: ContentStatus };
