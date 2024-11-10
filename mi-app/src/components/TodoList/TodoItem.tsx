import { useTodos } from "../../hooks/Todo/useTodos";
import { Todo } from "../../interfaces/interfaces";

interface TodoItemProps {
	todo: Todo;
}

export const TodoItem = ({ todo }: TodoItemProps) => {
	const { toggleTodo } = useTodos();

	return (
		<li
			style={{
				cursor: "pointer",
				textDecoration: todo.completed ? "line-through" : "",
			}}
			onDoubleClick={() => toggleTodo(todo.id)}>
			{todo.desc}
		</li>
	);
};
