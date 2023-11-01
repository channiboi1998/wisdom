import { FeelingEntrySkeleton } from "@/services/contentful";
import { Feeling } from "@/zustand/feeling";
import { Asset, Entry } from "contentful";

export const prepareFeelings = (
  items: Entry<FeelingEntrySkeleton, undefined, string>[],
  includes:
    | {
        Entry?: any[] | undefined;
        Asset?: any[] | undefined;
      }
    | undefined
): Feeling[] => {
  return items.map((item) => {
    const imageId = item.fields.image?.sys.id;
    const image = includes?.Asset?.find(
      (asset: Asset) =>
        asset.fields.file?.contentType === "image/png" &&
        asset.sys.id === imageId
    ) as Asset;
    if (image) {
      return {
        label: item.fields.label,
        id: item.sys.id,
        image: {
          url: image.fields.file?.url
            ? `https:${image.fields.file.url}`
            : undefined,
          title: image.fields.title ?? "no alternative text",
          id: image.sys.id,
        },
      };
    }
    return {
      label: item.fields.label,
      id: item.sys.id,
      image: null,
    };
  });
};
