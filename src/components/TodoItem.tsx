import { ChangeEvent, MouseEvent } from "react";
import { TodoItemType } from "../App";

type TodoItemProps = {
    index: number;
    item: TodoItemType;
    onTodoItemChecked: (index: number, newCheckedState: boolean) => void;
    onDeleteClick: (index: number) => void;
}

export function TodoItem({ index, item, onTodoItemChecked, onDeleteClick }: TodoItemProps) {
    const { isDone, name } = item;

    const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
      const newCheckedState = event.target.checked;

      onTodoItemChecked(index, newCheckedState);
    };

    function handleDeleteClick() {
      onDeleteClick(index);
    }

    if (isDone){
      return (
        <div style={{
          marginBottom: `2px`
        }}>
          <input type="checkbox" checked={isDone} onChange={handleOnChange}/>
          <p><s>{name}</s></p>
          <button onClick={handleDeleteClick}>Delete</button>
        </div>)
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
