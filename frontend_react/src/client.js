// sanity.js
import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2024-09-16", // use current date (YYYY-MM-DD) to target the latest API version
  useCdn: true, // set to `false` to bypass the edge cache
  token: process.env.REACT_APP_SANITY_API_TOKEN,
});

const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}
