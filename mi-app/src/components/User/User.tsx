import { stringify } from "querystring";
import React, { useState } from "react";

interface User {
	name: string;
	age: number;
}

export const User = () => {
	const [user, setUser] = useState<User>();

	const handleLogin = () => {
		setUser({ name: "John Doe", age: 30 });
	};

	return (
		<div className="mt-5">
			<h1>Login User</h1>

			<button onClick={handleLogin} className="btn btn-outline-primary mt-2">
				Enviar
			</button>

			<pre> {JSON.stringify(user)}</pre>
		</div>
	);
};
