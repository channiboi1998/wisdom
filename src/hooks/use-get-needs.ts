import useContentful from "@/services/contentful";
import { prepareNeeds } from "@/utils/needs.util";
import { Need, useNeedStore } from "@/zustand/need";
import { useEffect } from "react";

const useGetNeeds = () => {
  const { fetchNeeds } = useContentful();
  const { setNeeds } = useNeedStore();
  useEffect(() => {
    fetchNeeds().then((response) => {
      if (response) {
        const { items } = response;
        setNeeds(prepareNeeds(items));
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useGetNeeds;
