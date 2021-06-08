import { useItems, useStaticItems } from "../Providers/ItemProvider";
import { icon, inboxId, todayId } from "../shared/constants";

export const useDefaultTodos = () => {
  const { projectsItems } = useItems();

  const staticItem = {
    [inboxId]: {
      title: "Inbox",
      id: inboxId,
      icon: icon,
      filterMethod: (i) => i.categoryId === inboxId,
    },
    [todayId]: {
      title: "Today",
      id: todayId,
      filterMethod: (i) => i.categoryId === todayId,
    },
  };

  return {
    ...staticItem,
    ...projectsItems,
  };
};

export const useStaticProjectsItems = () => {
  const { staticProjectItems } = useStaticItems();
  return { ...staticProjectItems };
};
