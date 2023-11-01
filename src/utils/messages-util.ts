import { MessageEntrySkeleton } from "@/services/contentful";
import { Message } from "@/zustand/message";
import { Entry } from "contentful";

export const prepareRandomMessage = (
  items: Entry<MessageEntrySkeleton, undefined, string>[]
): Message | null => {
  if (items && items.length > 0) {
    const randomIndex = Math.floor(Math.random() * items.length);
    const item = items[randomIndex];
    return {
      label: item.fields.label,
      message: item.fields.message,
    };
  }
  return null;
};
