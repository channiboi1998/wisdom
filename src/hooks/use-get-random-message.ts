import useContentful from "@/services/contentful";
import { useFeelingStore } from "@/zustand/feeling";
import { useMessageStore } from "@/zustand/message";
import { useNeedStore } from "@/zustand/need";
import { useEffect } from "react";

const useGetRandomMessage = (): void => {
  const { fetchMessages } = useContentful();
  const { selectedFeeling } = useFeelingStore();
  const { selectedNeed } = useNeedStore();
  const { setRandomMessage } = useMessageStore();
  useEffect(() => {
    if (selectedFeeling && selectedNeed) {
      fetchMessages({
        feelingId: selectedFeeling.id,
        needId: selectedNeed.sys.id,
      }).then((response) => {
        if (response && response.items.length > 0) {
          const randomIndex = Math.floor(Math.random() * response.items.length);
          setRandomMessage(response.items[randomIndex]);
        } else {
          setRandomMessage(null);
        }
      });
    } else {
      console.log("nothing changed");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedFeeling, selectedNeed]);
};

export default useGetRandomMessage;
