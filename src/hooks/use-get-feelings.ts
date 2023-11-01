import useContentful from "@/services/contentful";
import { prepareFeelings } from "@/utils/feelings-util";
import { useFeelingStore } from "@/zustand/feeling";
import { useEffect } from "react";

const useGetFeelings = () => {
  const { fetchFeelings } = useContentful();
  const { setFeelings } = useFeelingStore();
  useEffect(() => {
    fetchFeelings().then((response) => {
      if (response) {
        const { items, includes } = response;
        setFeelings(prepareFeelings(items, includes));
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useGetFeelings;
