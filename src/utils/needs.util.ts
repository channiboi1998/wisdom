import { NeedEnum } from "@/utils/enums/needs";
import { NeedEntrySkeleton } from "@/services/contentful";
import { Need } from "@/zustand/need";
import { Entry } from "contentful";

export const prepareNeeds = (
  items: Entry<NeedEntrySkeleton, undefined, string>[],
): Need[] => {
  return items.map((item) => {
    return {
      id: item.sys.id,
      label: item.fields.label,
      description: item.fields.description,
    };
  });
};

export const adviceMessage = (selectedNeed: Need | null): string | null => {
  if (selectedNeed) {
    if (selectedNeed.label === NeedEnum.REFLECTION) {
      return "Feel free to reflect in a way that resonates with you—whether through conversation, writing, drawing, getting fresh air, or simply being in silence.";
    } else if (selectedNeed.label === NeedEnum.AFFIRMATION) {
      return "If you are open to it, we recommend reading the following out loud. Stay here however long you need.";
    }
  }
  return null;
};
