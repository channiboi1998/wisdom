// import * as contentful from "contentful";

// export type MessageEntrySkeleton = {
//   contentTypeId: "messages";
//   fields: {
//     name: contentful.EntryFieldTypes.Text;
//   };
// };

// const useContentful = () => {
//   const client = contentful.createClient({
//     space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE || "",
//     accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN || "",
//     host: process.env.NEXT_PUBLIC_CONTENTFUL_HOST || "",
//   });

//   const fetchMessages = async () => {
//     try {
//       const entries = await client.getEntries<MessageEntrySkeleton>({
//         content_type: "messages",
//         select: ["fields"],
//       });
//       return entries;
//     } catch (error) {
//       console.error("Error fetching messages:", error);
//     }
//   };

//   return { fetchMessages };
// };

// export default useContentful;
