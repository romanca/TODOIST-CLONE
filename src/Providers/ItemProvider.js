import React from "react";
import usePersistedState from "../hooks/use-persisted-state";
import { staticItems } from "../shared/mockData";

const Context = React.createContext(null);

const initialItems = {};
const initialTodos = {};
const initialStaticItems = staticItems;

const ItemProvider = ({ children }) => {
  const [projectsItems, setProjectsItems] = usePersistedState(
    "projectsItems",
    initialItems
  );
  const [todos, setTodos] = usePersistedState("todos", initialTodos);
  const [staticProjectItems, setStaticProjectItems] = usePersistedState(
    "staticItems",
    initialStaticItems
  );
  const [selectedProjectId, setSelectedProjectId] = React.useState();
  const [selectedTodoId, setSelectedTodotId] = React.useState();

  const selected = React.useMemo(
    () => Object.values(projectsItems).find((i) => i.id === selectedProjectId),
    [projectsItems, selectedProjectId]
  );

  const selectedTodo = React.useMemo(
    () => Object.values(todos).find((i) => i.id === selectedTodoId),
    [todos, selectedTodoId]
  );

  const handleSelected = React.useCallback((i) => {
    setSelectedProjectId(i.id);
  }, []);

  const handleSelectedTodo = React.useCallback((i) => {
    setSelectedTodotId(i.id);
  }, []);

  const createProject = (title, id) => {
    setProjectsItems((current) => {
      const newItem = {
        ...current,
        [id]: Object.assign({
          title,
          id,
          favorite: false,
        }),
      };
      return newItem;
    });
  };

  const removeProject = React.useCallback((id) => {
    setProjectsItems((current) => {
      const newState = { ...current };
      delete newState[id];
      return newState;
    });
  }, []);

  const favoriteProjects = (item) => {
    setProjectsItems(
      Object.values(projectsItems).map((i) => {
        if (i === item) {
          return {
            ...i,
            favorite: !i.favorite,
          };
        }
        return i;
      })
    );
  };

  const staticItems = (item) => {
    setStaticProjectItems(
      Object.values(staticProjectItems).map((i) => {
        if (i === item) {
          return {
            ...i,
            opened: !i.opened,
          };
        }
        return i;
      })
    );
  };

  const createTodo = (title, categoryId) => {
    const newId = String(Date.now());
    setTodos((current) => {
      const newItem = {
        ...current,
        [newId]: Object.assign({
          title,
          id: newId,
          categoryId,
          favorite: false,
        }),
      };
      return newItem;
    });
  };

  const removeTodo = React.useCallback((id) => {
    setTodos((current) => {
      const newState = { ...current };
      delete newState[id];
      return newState;
    });
  }, []);
  // const getTodoById = (id) => {
  //   return Object.values(todos).find((i) => i.id === id);
  // };

  return (
    <Context.Provider
      value={{
        todos,
        projectsItems,
        selectedTodo,
        selected,
        createProject,
        createTodo,
        removeProject,
        removeTodo,
        handleSelected,
        handleSelectedTodo,
        favoriteProjects,
        staticProjectItems,
        staticItems,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useProjectActions = () => {
  const {
    createProject,
    removeProject,
    handleSelected,
    selected,
    favoriteProjects,
    staticItems,
  } = React.useContext(Context);
  return {
    createProject,
    removeProject,
    handleSelected,
    selected,
    favoriteProjects,
    staticItems,
  };
};

export const useTodoActions = () => {
  const {
    createTodo,
    handleSelectedTodo,
    selectedTodo,
    removeTodo,
    getTodoById,
  } = React.useContext(Context);
  return {
    createTodo,
    removeTodo,
    handleSelectedTodo,
    selectedTodo,
    getTodoById,
  };
};

export const useItems = () => {
  const { projectsItems } = React.useContext(Context);

  return {
    projectsItems: Object.values(projectsItems),
  };
};

export const useStaticItems = () => {
  const { staticProjectItems } = React.useContext(Context);

  return {
    staticProjectItems: Object.values(staticProjectItems),
  };
};

export const useTodos = () => {
  const { todos } = React.useContext(Context);

  return {
    todos: Object.values(todos),
  };
};

export default ItemProvider;
