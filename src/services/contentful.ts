import * as contentful from "contentful";

export type FeelingEntrySkeleton = {
  contentTypeId: "feelings";
  fields: {
    label: contentful.EntryFieldTypes.Text;
    image?: contentful.EntryFieldTypes.AssetLink;
  };
};

export type NeedEntrySkeleton = {
  contentTypeId: "needs";
  fields: {
    label: contentful.EntryFieldTypes.Text;
  };
};

export type MessageEntrySkeleton = {
  contentTypeId: "messages";
  fields: {
    message: contentful.EntryFieldTypes.Text;
    feeling: any;
    need: any;
  };
};

const useContentful = () => {
  ``;
  const client = contentful.createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID || "",
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN || "",
    host: process.env.NEXT_PUBLIC_CONTENTFUL_HOST || "",
  });

  const fetchNeeds = async () => {
    try {
      const entries = await client.getEntries<NeedEntrySkeleton>({
        content_type: "needs",
        //select: ["fields"],
      });
      return entries;
    } catch (error) {
      console.error("Error fetching needs:", error);
    }
  };

  const fetchFeelings = async () => {
    try {
      const entries = await client.getEntries<FeelingEntrySkeleton>({
        content_type: "feelings",
        select: ["fields"],
      });
      return entries;
    } catch (error) {
      console.error("Error fetching feelings:", error);
    }
  };

  const fetchMessages = async ({
    feelingId,
    needId,
  }: {
    feelingId?: string | null;
    needId?: string | null;
  }) => {
    try {
      const entries = await client.getEntries<MessageEntrySkeleton>({
        content_type: "messages",
        select: ["fields"],
        "fields.feeling.sys.id": feelingId ?? "",
        "fields.need.sys.id": needId ?? "",
      });

      return entries;
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  };

  return { fetchFeelings, fetchNeeds, fetchMessages };
};

export default useContentful;
