export * from "./types";
export * from "./schemas";

import { homePageDocumentSchema } from "./schemas";
import type { HomePageDocument } from "./types";

export function parseHomePageDocument(data: unknown): HomePageDocument {
  return homePageDocumentSchema.parse(data) as HomePageDocument;
}
