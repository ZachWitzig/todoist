import { ChangeEvent } from "react";
import { TodoItemType } from "../App";

type TodoItemProps = {
  index: number;
  item: TodoItemType;
  onTodoItemChecked: (index: number, newCheckedState: boolean) => void;
  onDeleteClick: (index: number) => void;
};

export function TodoItem({
  index,
  item,
  onTodoItemChecked,
  onDeleteClick,
}: TodoItemProps) {
  const { isDone, name } = item;

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newCheckedState = event.target.checked;

    onTodoItemChecked(index, newCheckedState);
  };

  function handleDeleteClick() {
    onDeleteClick(index);
  }

  function TodoItemName({ name, isDone }: { name: string; isDone: boolean }) {
    if (!isDone) {
      return <p>{name}</p>;
    }

    return (
      <p>
        <s>{name}</s>
      </p>
    );
  }

  return (
    <div
      style={{
        marginBottom: `2px`,
      }}>
      <input type="checkbox" checked={isDone} onChange={handleOnChange} />
      <TodoItemName name={name} isDone={isDone} />
      <button onClick={handleDeleteClick}>Delete</button>
    </div>
  );
}
