import { TodoItemType } from "../App";

type TodoItemProps = {
    item: TodoItemType;
}

export function TodoItem({ item }: TodoItemProps) {
    const { isDone, name } = item;

    return (
      <div>
        <input type="checkbox" checked={isDone}/>
        <p>{name}</p>
      </div>
    );
  }
