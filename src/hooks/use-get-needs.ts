import useContentful from "@/services/contentful";
import { useNeedStore } from "@/zustand/need";
import { useEffect } from "react";

const useGetNeeds = () => {
  const { fetchNeeds } = useContentful();
  const { setNeeds } = useNeedStore();
  useEffect(() => {
    fetchNeeds().then((response) => {
      if (response) {
        setNeeds(response);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useGetNeeds;
