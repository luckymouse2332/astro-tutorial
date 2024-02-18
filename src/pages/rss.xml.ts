import rss, { pagesGlobToRssItems, type RSSFeedItem } from "@astrojs/rss";
import type { AstroUserConfig } from "astro";

export async function GET(context: AstroUserConfig) {
  return rss({
    title: "Astro Learner | Blog",
    description: "My journey learning Astro",
    site: context.site ?? "https://astro.build",
    items: (await pagesGlobToRssItems(
      import.meta.glob("./**/*.md")
    )) as RSSFeedItem[],
    customData: `<language>en-us</language>`,
  });
}
