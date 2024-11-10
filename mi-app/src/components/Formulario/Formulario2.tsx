import { useForm } from "../../hooks/useForm/useForm";

interface formData{
    postal: number,
    ciudad: string
}


export const Formulario2 = () => {

    
	const {formulario, handleChange} = useForm<formData>({
        postal: 3,
        ciudad: 'Miami'
    })
     
     const {postal, ciudad} = formulario

	return (
		<form autoComplete="off">
			<div className="mb-3">
				<label className="form-label">Codigo Postal:</label>
				<input
					type="text"
					name="postal"
					className="form-control"
                    value={postal}
					onChange={handleChange}
				/>
			</div>

			<div className="mb-3">
				<label className="form-label">ciudad: </label>
				<input
					type="text"
					name="ciudad"
					className="form-control"
                    value={ciudad}
					onChange={handleChange}
				/>
			</div>

			<pre>{JSON.stringify(formulario)}</pre>
		</form>
	);
};
