import React from "react";
import usePersistedState from "../hooks/use-persisted-state";

const Context = React.createContext(null);

const initialItems = {};
const initialTodos = {};

const ItemProvider = ({ children }) => {
  const [projectsItems, setProjectsItems] = usePersistedState(
    "projectsItems",
    initialItems
  );
  const [todos, setTodos] = usePersistedState("todos", initialTodos);
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
  } = React.useContext(Context);
  return {
    createProject,
    removeProject,
    handleSelected,
    selected,
    favoriteProjects,
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

export const useTodos = () => {
  const { todos } = React.useContext(Context);

  return {
    todos: Object.values(todos),
  };
};

export default ItemProvider;
