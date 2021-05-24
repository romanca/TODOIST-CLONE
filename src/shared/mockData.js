import { useParams } from "@reach/router";

export const selectedItems = {
  id1: {
    id: "id1",
    color: "rgb(184, 37, 95)",
    title: "Berry Red",
  },
  id2: {
    id: "id2",
    color: "rgb(219, 64, 53)",
    title: "Red",
  },
  id3: {
    id: "id3",
    color: "rgb(255, 153, 51)",
    title: "Orange",
  },
  id4: {
    id: "id4",
    color: "rgb(250, 208, 0)",
    title: "Yellow",
  },
  id5: {
    id: "id5",
    color: "rgb(219, 64, 53)",
    title: "Olive Green",
  },
  id6: {
    id: "id6",
    color: "rgb(126, 204, 73)",
    title: "Lime Green",
  },
  id7: {
    id: "id7",
    color: "rgb(41, 148, 56)",
    title: "Green",
  },
  id8: {
    id: "id8",
    color: "rgb(106, 204, 188)",
    title: "Mint Green",
  },
  id9: {
    id: "id9",
    color: "rgb(21, 143, 173)",
    title: "Teal",
  },
  id10: {
    id: "id10",
    color: "rgb(20, 170, 245)",
    title: "Sky Blue",
  },
  id11: {
    id: "id11",
    color: "rgb(150, 195, 235)",
    title: "Light Blue",
  },
  id12: {
    id: "id12",
    color: "rgb(64, 115, 255)",
    title: "Blue",
  },
  id13: {
    id: "id13",
    color: "rgb(136, 77, 255)",
    title: "Grape",
  },
  id14: {
    id: "id14",
    color: "rgb(175, 56, 235)",
    title: "Violet",
  },
  id15: {
    id: "id15",
    color: "rgb(235, 150, 235)",
    title: "Lavender",
  },
  id16: {
    id: "id16",
    color: "rgb(224, 81, 148)",
    title: "Magenta",
  },
  id17: {
    id: "id17",
    color: "rgb(255, 141, 133)",
    title: "Salmon",
  },
  id18: {
    id: "id18",
    color: "rgb(128, 128, 128)",
    title: "Charcoal",
  },
  id19: {
    id: "id19",
    color: "rgb(184, 184, 184)",
    title: "Grey",
  },
  id20: {
    id: "id20",
    color: "rgb(204, 172, 147)",
    title: "Taupe",
  },
};

export const projects = {
  id1: {
    title: "project1",
    number: 9,
    id: "id1",
    // filterMethod: (i) => i.categoryId === "id1",
    filterMethod: (i) => i.categoryId === "project1",
    favorite: false,
  },
  id2: {
    title: "project2",
    number: 9,
    id: "id2",
    filterMethod: (i) => i.categoryId === "project2",

    favorite: false,
  },
  id3: {
    title: "project3",
    number: 9,
    id: "id3",
    filterMethod: (i) => i.categoryId === "project1",

    favorite: false,
  },
  id4: {
    title: "project4",
    number: 9,
    id: "id4",
    filterMethod: (i) => i.categoryId === "project1",

    favorite: false,
  },
  id5: {
    title: "project5",
    number: 9,
    id: "id5",
    filterMethod: (i) => i.categoryId === "project3",

    favorite: false,
  },
  id6: {
    title: "project6",
    number: 9,
    id: "id6",
    filterMethod: (i) => i.categoryId === "project1",
    favorite: false,
  },
};

export const items = {
  id1: {
    title: "Todo 1 Todo 1Todo 1Todo 1Todo 1Todo 1Todo 1 ",
    number: 9,
    id: "id1",
    priority: "priority1",
    categoryId: "inbox",
  },
  id2: {
    title: "Todo 2 ",
    number: 9,
    id: "id2",
    priority: "priority2",
    categoryId: "inbox",
  },
  id3: {
    title: "Todo 3 ",
    number: 9,
    id: "id3",
    priority: "priority3",
    categoryId: "project1",
  },
  id4: {
    title: "Todo 4 ",
    number: 9,
    id: "id4",
    priority: "priority4",
    categoryId: "project1",
  },
  id5: {
    title: "Todo 5 ",
    number: 9,
    id: "id5",
    priority: "priority1",
    categoryId: "project5",
  },
  id6: {
    title: "Todo 6 ",
    number: 9,
    id: "id6",
    priority: "priority1",
    categoryId: "project6",
  },
};

export const filters = {
  id1: {
    title: "Assigned to me",
    number: 9,
    id: "id1",
    filterMethod: (i) => i.priority === "Assigned to me",
  },
  id2: {
    title: "Assigned to others",
    number: 9,
    id: "id2",
    filterMethod: (i) => i.priority === "Assigned to others",
  },
  id3: {
    title: "Priority 1",
    number: 9,
    id: "id3",
    filterMethod: (i) => i.priority === "priority1",
  },
  id4: {
    title: "Priority 2",
    number: 9,
    id: "id4",
    filterMethod: (i) => i.priority === "priority2",
  },
  id5: {
    title: "Priority 3",
    number: 9,
    id: "id5",
    filterMethod: (i) => i.priority === "priority3",
  },
  id6: {
    title: "Priority 4",
    number: 9,
    id: "id6",
    filterMethod: (i) => i.priority === "priority4",
  },
  id7: {
    title: "View all",
    number: 9,
    id: "id7",
    filterMethod: (i) => i.priority === "View all",
  },
  id8: {
    title: "No due date",
    number: 9,
    id: "id8",
    filterMethod: (i) => i.priority === "No due date",
  },
};

// filters[id12];

// Object.keys(filters).map;

export const favorites = {
  id1: {
    title: "Todo 1 Todo 1Todo 1Todo 1Todo 1Todo 1Todo 1 ",
    number: 9,
    id: "id1",
    // filterMethod: priority1FilterMethod,
  },
  id2: {
    title: "Todo 2 ",
    number: 9,
    id: "id2",
  },
  id3: {
    title: "Todo 3 ",
    number: 9,
    id: "id3",
  },
  id4: {
    title: "Todo 4 ",
    number: 9,
    id: "id4",
  },
  id5: {
    title: "Todo 5 ",
    number: 9,
    id: "id5",
  },
  id6: {
    title: "Todo 6 ",
    number: 9,
    id: "id6",
  },
};

// const dueDateFilterMethod = (todo) => {
//   return todo.data < new Date();
// };

// const priority1FilterMethod = (todo) => {
//   return todo.priority === 1;
// };
