import useContentful, {
  FeelingEntrySkeleton,
  MessageEntrySkeleton,
  NeedEntrySkeleton,
} from "@/services/contentful";
import { Entry } from "contentful";
import React from "react";

type Props = {
  selectedFeeling: Entry<FeelingEntrySkeleton, undefined, string> | null;
  selectedNeed: Entry<NeedEntrySkeleton, undefined, string> | null;
  selectedMessage: Entry<MessageEntrySkeleton, undefined, string> | null;
  setSelectedMessage: (
    payload: Entry<MessageEntrySkeleton, undefined, string> | null
  ) => void;
};

const Message = ({
  selectedFeeling,
  selectedNeed,
  selectedMessage,
  setSelectedMessage,
}: Props) => {
  const { fetchMessages } = useContentful();

  if (selectedMessage === null) {
    fetchMessages({
      feelingId: selectedFeeling?.sys.id,
      needId: selectedNeed?.sys.id,
    }).then((response) => {
      if (response && response.items.length > 0) {
        const randomIndex = Math.floor(Math.random() * response.items.length);
        setSelectedMessage(response.items[randomIndex]);
      }
    });
  } else {
    console.log("already has message");
  }

  return <p>{selectedMessage ? selectedMessage.fields.message : "no data"}</p>;
};

export default Message;
