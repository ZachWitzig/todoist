import { useState } from "react";
import { TodoItem } from "./components/TodoItem";

export type TodoItemType = {
  name: string;
  isDone: boolean;
}

type TodoList = {
  title: string;
  todos: TodoItemType[];
}

const DEFAULT_TODO_LIST: TodoList = {
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

function App() {
  const [todoListItems, setTodoListItems] = useState<TodoItemType[]>(DEFAULT_TODO_LIST.todos);

  function handleTodoItemChecked(index: number, newCheckedState: boolean) {
    const todoListItem = todoListItems[index];

    todoListItem.isDone = newCheckedState;

    todoListItems[index] = todoListItem;

    setTodoListItems([...todoListItems]);

  }

  function handleTodoItemDelete(index: number) {
    todoListItems.splice(index, 1);
    setTodoListItems([...todoListItems]);
  }

  function handleTodoItemAdd() {
    const todoListItemName = prompt("Enter a todo!");
    
    if (todoListItemName == null || todoListItemName == "") {
      return
    }

    todoListItems.push(
      {
        name: todoListItemName,
        isDone: false
      },
    );
    setTodoListItems([...todoListItems]);
  }

  return (
    <div>
      <header>
        <h1>{DEFAULT_TODO_LIST.title}</h1>
      </header>
      <section>
        {
          todoListItems.map((todoListItem, index) => 
            <TodoItem 
              key={index} 
              index={index} 
              item={todoListItem} 
              onTodoItemChecked={handleTodoItemChecked} 
              onDeleteClick={handleTodoItemDelete}/>
        )}
      </section>
      <button onClick={handleTodoItemAdd}>Add New Todo</button>
    </div>
  )
}

export default App
