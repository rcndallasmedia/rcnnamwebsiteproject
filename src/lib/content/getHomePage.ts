import { homePageData } from "@/content/home";
import { parseHomePageDocument } from "@/lib/cms";
import type { HomePageDocument } from "@/lib/cms/types";

/**
 * Server-only content loader. Swap implementation to fetch from Sanity/Contentful/etc.
 * Keep returning the same `HomePageDocument` shape and validate with `parseHomePageDocument`.
 */
export async function getHomePage(): Promise<HomePageDocument> {
  return parseHomePageDocument(homePageData);
}
