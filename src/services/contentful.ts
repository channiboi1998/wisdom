import * as contentful from "contentful";

export type NeedEntrySkeleton = {
  contentTypeId: "needs";
  fields: {
    label: contentful.EntryFieldTypes.Text;
  };
};

export type FeelingEntrySkeleton = {
  contentTypeId: "feelings";
  fields: {
    label: contentful.EntryFieldTypes.Text;
  };
};

const useContentful = () => {
  const client = contentful.createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE || "",
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN || "",
    host: process.env.NEXT_PUBLIC_CONTENTFUL_HOST || "",
  });

  const fetchNeeds = async () => {
    try {
      const entries = await client.getEntries<NeedEntrySkeleton>({
        content_type: "needs",
        select: ["fields"],
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

  return { fetchFeelings, fetchNeeds };
};

export default useContentful;
