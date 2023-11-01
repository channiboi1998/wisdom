import useContentful from "@/services/contentful";
import { Feeling, useFeelingStore } from "@/zustand/feeling";
import { Asset } from "contentful";
import { useEffect } from "react";

const useGetFeelings = () => {
  const { fetchFeelings } = useContentful();
  const { setFeelings } = useFeelingStore();
  useEffect(() => {
    fetchFeelings().then((response) => {
      if (response) {
        const { items, includes } = response;

        const feelings: Feeling[] = items.map((item) => {
          const imageId = item.fields.image?.sys.id;
          const image = includes?.Asset?.find(
            (asset) => asset.sys.id === imageId
          ) as Asset;
          if (image) {
            return {
              label: item.fields.label,
              id: item.sys.id,
              image: {
                url:
                  image.fields.file?.url &&
                  typeof image.fields.file.url === "string"
                    ? `https:${image.fields.file.url}`
                    : undefined,
                title: image.fields.title,
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
        setFeelings(feelings);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useGetFeelings;
