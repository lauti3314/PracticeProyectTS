import { ChangeEvent, useState } from "react";
import { useForm } from "../../hooks/useForm/useForm";

interface FormData {
	email: string;
	nombre: string;
}

export const Formulario = () => {
	const { formulario, handleChange } = useForm<FormData>({
		email: "",
		nombre: "",
	});

	const { email, nombre } = formulario;

	return (
		<form autoComplete="off">
			<div className="mb-3">
				<label className="form-label">Email:</label>
				<input
					type="email"
					name="email"
					className="form-control"
					value={email}
					onChange={handleChange}
				/>
			</div>

			<div className="mb-3">
				<label className="form-label">Nombre: </label>
				<input
					type="text"
					name="nombre"
					className="form-control"
					value={nombre}
					onChange={handleChange}
				/>
			</div>

			<pre>{JSON.stringify(formulario)}</pre>
		</form>
	);
};
