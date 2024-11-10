import { ContadorRed } from "./components/ContadorRed/ContadorRed";
import { Counter } from "./components/Counter/Counter";
import { Formulario } from "./components/Formulario/Formulario";
import { Formulario2 } from "./components/Formulario/Formulario2";
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

			<h1>UseReducer</h1>
			<hr />

			<ContadorRed />
			<br />

			<h2>Custom Hooks</h2>
			<hr />
			<Formulario />
			<br />
			<Formulario2 />
		</>
	);
}

export default App;
