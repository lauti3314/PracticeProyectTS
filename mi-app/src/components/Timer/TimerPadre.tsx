import React, { useState } from "react";
import { Timer } from "./Timer";

export const TimerPadre = () => {
	const [milisegundos, setMilisegundos] = useState(1000);

	return (
		<>
			<Timer milisegundos={milisegundos}/>

			<span>milisegundos {milisegundos}</span>

			<br />

			<button
				className="btn btn-outline-success mt-2"
				onClick={() => setMilisegundos(1000)}>
				1000
			</button>

			<br />

			<button
				className="btn btn-outline-success mt-2"
				onClick={() => setMilisegundos(2000)}>
				2000
			</button>
		</>
	);
};
