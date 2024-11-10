import { useTodos } from "../../hooks/Todo/useTodos";

export const Title = () => {
	const { pendingTodos } = useTodos();

	return <h1>Todos: {pendingTodos}</h1>;
};
