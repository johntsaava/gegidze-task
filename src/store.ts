import { makeAutoObservable, reaction } from "mobx";
import { v4 as uuidv4 } from "uuid";

export type Todo = {
  id: string;
  title: string;
  completed: boolean;
  selected: boolean;
  createdAt: string;
};

export type QueryType = "all" | "completed";

export class ObservableTodoStore {
  todos: Todo[] = [];
  queryText: string = "";
  queryType: QueryType = "all";

  constructor() {
    makeAutoObservable(this);
  }

  get todosCount() {
    return this.todos.length;
  }

  get completedTodosCount() {
    return this.todos.filter((todo) => todo.completed).length;
  }

  get selectedTodosCount() {
    return this.todos.filter((todo) => todo.selected).length;
  }

  get queriedTodos() {
    return this.todos
      .filter((todo) => {
        return (
          !this.queryText ||
          todo.title.toLowerCase().includes(this.queryText.toLowerCase())
        );
      })
      .filter((todo) => this.queryType === "all" || todo.completed)
      .sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
  }

  addTodo(title: Todo["title"]) {
    this.todos.push({
      id: uuidv4(),
      title: title,
      completed: false,
      selected: false,
      createdAt: new Date().toISOString(),
    });
  }

  deleteTodo = (id: Todo["id"]) => {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  };

  toggleSelect(id: Todo["id"]) {
    const todo = this.todos.find((todo) => todo.id === id);
    if (todo) {
      todo.selected = !todo.selected;
    }
  }

  toggleComplete(id: Todo["id"]) {
    const todo = this.todos.find((todo) => todo.id === id);
    if (todo) {
      todo.completed = !todo.completed;
    }
  }

  batchDelete() {
    this.todos = this.todos.filter((todo) => !todo.selected);
  }

  batchComplete(completed: boolean) {
    this.todos
      .filter((todo) => todo.selected)
      .forEach((todo) => {
        todo.completed = completed;
      });
  }

  batchSelect(selected: boolean) {
    this.todos.forEach((todo) => {
      todo.selected = selected;
    });
  }

  setQueryText(queryText: string) {
    this.queryText = queryText;
  }

  setQueryType(queryType: QueryType) {
    this.queryType = queryType;
  }

  unselectAll() {
    this.todos.forEach((todo) => {
      todo.selected = false;
    });
  }
}

export const observableTodoStore = new ObservableTodoStore();

reaction(
  () => observableTodoStore.queryText,
  (value, prevValue) => {
    if (value !== prevValue) {
      observableTodoStore.unselectAll();
    }
  }
);

reaction(
  () => observableTodoStore.queryType,
  (value, prevValue) => {
    if (value !== prevValue) {
      observableTodoStore.unselectAll();
    }
  }
);
