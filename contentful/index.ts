"use client";

import { createClient } from "contentful";

const useContentFul = () => {
  console.log(process.env);
  const client = createClient({
    space: process.env.CF_SPACE || "wsgjajoblzwj",
    accessToken:
      process.env.CF_ACCESS_TOKEN ||
      "sDMHT9fWSevsd-T14ju39P6QZS4c83ypxMJ4QxZgL7A",
    host: process.env.CF_HOST || "cdn.contentful.com",
  });

  const fetchMessages = async () => {
    try {
      const entries = await client.getEntries({
        content_type: "messages",
      });
      return entries;
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  };

  return { fetchMessages };
};

export default useContentFul;
