import { Counter } from "./components/Counter/Counter";
import { TimerPadre } from "./components/Timer/TimerPadre";
import { User } from "./components/User/User";

function App() {
	return (
		<>
			<h1>useState</h1>
			<hr />

			<Counter />

			<hr />
			<User />

			<h1>useEffect - useRef</h1>
			<hr />

			<TimerPadre />
		</>
	);
}

export default App;
