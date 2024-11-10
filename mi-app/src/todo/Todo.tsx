import { Title } from "../components/TodoList/Title";
import { TodoList } from "../components/TodoList/TodoList";
import { TodoProvider } from "../context/TodoProvider/TodoProvider";

export const Todo = () => {
	return (
		<TodoProvider>
			<Title />
			<TodoList />
		</TodoProvider>
	);
};
