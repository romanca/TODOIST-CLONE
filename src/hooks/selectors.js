import { useItems } from "../Providers/ItemProvider";
import { InboxId } from "../shared/constants";

export const useDefaultTodos = () => {
  const { projectsItems } = useItems();
  const inboxId = InboxId;
  const staticItem = {
    [inboxId]: {
      title: "Inbox",
      id: inboxId,
      filterMethod: (i) => i.categoryId === "inbox",
    },
  };

  return {
    ...staticItem,
    ...projectsItems,
  };
};
