import { TodoItem } from "./components/TodoItem";

export type TodoItemType = {
  name: string;
  isDone: boolean;
}

type TodoList = {
  title: string;
  todos: TodoItemType[];
}

function todoItemDataToTodoItemComponent(todoItemData: TodoItemType) {
  return <TodoItem item={todoItemData} />
}

function App() {
  const myTodoList: TodoList = {
    title: "Todoist",
    todos: [
      {
        name: "Make the todo object",
        isDone: true
      },
      {
        name: "Walk the dog",
        isDone: false
      },
      {
        name: "Feed goldfish",
        isDone: false
      },
      {
        name: "Eat goldfish",
        isDone: false,
      }
    ],
  };

  return (
    <div>
      <header>
        <h1>{myTodoList.title}</h1>
      </header>
      <section>
        {
          myTodoList.todos.map(todoItemDataToTodoItemComponent)
        }
      </section>
    </div>
  )
}

export default App
