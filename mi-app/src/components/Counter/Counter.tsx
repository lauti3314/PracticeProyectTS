import { count } from "console";
import { useState } from "react";

export const Counter = () => {
	const [counter, setCounter] = useState(0);

    const incrementar = (number: number = 1 ):void =>{
        setCounter(counter + number)
    }

	return (
		<div className="mt-5">
			<h3>Counter</h3>
			<span> {counter} </span>
			<br />

			<button onClick={() => incrementar()} className="btn btn-outline-primary mt-2">Incrementar +1</button>
            <br />
            <button onClick={() => incrementar(2)} className="btn btn-outline-primary mt-2">Incrementar + 2</button>
            <br />
            <button onClick={() => setCounter(0)} className="btn btn-outline-primary mt-2">En cero</button>
		</div>
	);
};
