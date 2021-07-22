import React from "react";
import usePersistedState from "../hooks/use-persisted-state";
import { staticItems, staticProjects } from "../shared/mockData";

const Context = React.createContext(null);

const initialItems = {};
const initialTodos = {};
const initialStaticItems = staticItems;
const initialStaticProjects = staticProjects;

const ItemProvider = ({ children }) => {
  const [projectsItems, setProjectsItems] = usePersistedState(
    "projectsItems",
    initialItems
  );
  const [staticProjectItems, setStaticProjectItems] = usePersistedState(
    "staticItems",
    initialStaticItems
  );
  const [staticProjects, setStaticProjects] = usePersistedState(
    "staticProjects",
    initialStaticProjects
  );
  const [todos, setTodos] = usePersistedState("todos", initialTodos);
  const [selectedProjectId, setSelectedProjectId] = React.useState();
  const [selectedTodoId, setSelectedTodotId] = React.useState();

  const selectedProject = React.useMemo(
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

  const createProject = React.useCallback(
    (title, id, color, favorite) => {
      setProjectsItems((current) => {
        const newItem = {
          ...current,
          [id]: Object.assign({
            title,
            id,
            favorite,
            color,
          }),
        };
        return newItem;
      });
    },
    [setProjectsItems]
  );

  const removeProject = (id) => {
    setProjectsItems((current) => {
      const newState = { ...current };
      delete newState[id];
      return newState;
    });
    Object.values(todos).forEach((i) => {
      if (i.categoryId === id) {
        removeTodo(i.id);
      }
    });
  };

  const editProject = React.useCallback(
    (item) => {
      setProjectsItems((current) => {
        const oldItem = current[item.id];
        return {
          ...current,
          [item.id]: {
            ...oldItem,
            ...item,
          },
        };
      });
    },
    [setProjectsItems]
  );

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

  const createTodo = React.useCallback(
    (title, categoryId, date, priority, completed, visible) => {
      const newId = String(Date.now());
      setTodos((current) => {
        const newItem = {
          ...current,
          [newId]: Object.assign({
            title,
            id: newId,
            categoryId,
            date,
            priority,
            completed,
            visible,
          }),
        };
        return newItem;
      });
    },
    [setTodos]
  );

  const removeTodo = React.useCallback(
    (id) => {
      setTodos((current) => {
        const newState = { ...current };
        delete newState[id];
        return newState;
      });
    },
    [setTodos]
  );

  const editTodo = React.useCallback(
    (item) => {
      setTodos((current) => {
        const oldItem = current[item.id];
        return {
          ...current,
          [item.id]: {
            ...oldItem,
            ...item,
          },
        };
      });
    },
    [setTodos]
  );

  const completeTodo = (item) => {
    setTodos(
      Object.values(todos).map((i) => {
        if (i === item) {
          return {
            ...i,
            completed: !i.completed,
            visible: !i.visible,
          };
        }
        return i;
      })
    );
  };

  return (
    <Context.Provider
      value={{
        todos,
        projectsItems,
        selectedTodo,
        selectedProject,
        createProject,
        createTodo,
        removeProject,
        removeTodo,
        handleSelected,
        handleSelectedTodo,
        favoriteProjects,
        staticProjectItems,
        staticProjects,
        staticItems,
        editProject,
        editTodo,
        completeTodo,
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
    selectedProject,
    favoriteProjects,
    staticItems,
    editProject,
  } = React.useContext(Context);
  return {
    createProject,
    removeProject,
    handleSelected,
    selectedProject,
    favoriteProjects,
    staticItems,
    editProject,
  };
};

export const useTodoActions = () => {
  const {
    createTodo,
    handleSelectedTodo,
    selectedTodo,
    removeTodo,
    editTodo,
    completeTodo,
  } = React.useContext(Context);
  return {
    createTodo,
    removeTodo,
    handleSelectedTodo,
    selectedTodo,
    editTodo,
    completeTodo,
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

export const useDefaultStaticProjects = () => {
  const { staticProjects } = React.useContext(Context);

  return {
    staticProjects: Object.values(staticProjects),
  };
};

export const useTodos = () => {
  const { todos } = React.useContext(Context);

  return {
    todos: Object.values(todos),
  };
};

export default ItemProvider;
