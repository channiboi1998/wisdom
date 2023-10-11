"use client";

import { createClient } from "contentful";

const useCF = () => {
  console.log(process.env);
  const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE || "",
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN || "",
    host: process.env.NEXT_PUBLIC_CONTENTFUL_HOST || "",
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

export default useCF;
