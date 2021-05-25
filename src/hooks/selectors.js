import { useItems, useStaticItems } from "../Providers/ItemProvider";
import {
  favoritesId,
  favoritesTitle,
  inboxId,
  projectsId,
  projectsTitle,
} from "../shared/constants";

export const useDefaultTodos = () => {
  const { projectsItems } = useItems();
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

export const useStaticProjectsItems = () => {
  const { staticProjectItems } = useStaticItems();
  return { ...staticProjectItems };
};
