import { useTodos } from "../../hooks/Todo/useTodos";
import { Todo } from "../../interfaces/interfaces";
import { TodoItem } from "./TodoItem";

export const TodoList = () => {
	const { todos } = useTodos();

	return (
		<ul>
			{todos.map((todo: Todo) => (
				<TodoItem key={todo.id} todo={todo} />
			))}
		</ul>
	);
};
