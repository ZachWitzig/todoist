import { ChangeEvent } from "react";
import { TodoItemType } from "../App";

type TodoItemProps = {
    index: number;
    item: TodoItemType;
    handleTodoItemChecked: (index: number, newCheckedState: boolean) => void;
}

export function TodoItem({ index, item, handleTodoItemChecked }: TodoItemProps) {
    const { isDone, name } = item;

    const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
      const newCheckedState = event.target.checked;

      handleTodoItemChecked(index, newCheckedState);
    };

    const handleDeleteClick = () => {
      // TODO: build me!
    }

    return (
      <div style={{
        marginBottom: `2px`
      }}>
        <input type="checkbox" checked={isDone} onChange={handleOnChange}/>
        <p>{name}</p>
        <button onClick={handleDeleteClick}>Delete</button>
      </div>
    );
  }
