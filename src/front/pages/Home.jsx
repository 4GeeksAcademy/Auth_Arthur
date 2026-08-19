import React, { useEffect, useState } from "react"
import { useNavigate, Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { login } from "../../services/apiServices"

export const Home = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState(null);
	const [show, setShow] = useState(false);

	const navigate = useNavigate()
	const { store, dispatch } = useGlobalReducer()

	useEffect(() => {
		if (sessionStorage.getItem("token")) {
			navigate("/private");
		}
	}, []);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setError(null);
		const result = await login(email, password);
		if (result.ok) {
			dispatch({
				type: "set_auth",
				payload: {
					token: result.data.token,
					user: result.data.user
				}
			})
			navigate("/private")
		} else {
			setError(result.data.error || "Algo ha salido mal")
		}
	}

	return (
		<div className="row d-flex justify-content-center">
			<div className="col-auto d-flex align-items-center">
				<div className="card m-5 rounded">
					<div className="card-header mb-2  pt-2">
						<h4 className="card-title">Iniciar Sesión</h4>
					</div>
					<form onSubmit={handleSubmit}>
						<div className="card-body">
							<div className="mb-3">
								<label className="form-label">Email</label>
								<input
									type="email"
									className="form-control"
									value={email} onChange={(e) => setEmail(e.target.value)}
									required
									placeholder="E-mail"
								/>
							</div>
							<div className="mb-3">
								<label className="form-label">Contraseña</label>
								<div className="d-flex">
									<input
										type={show ? "text" : "password"}
										className="form-control"
										placeholder="********"
										value={password}
										onChange={(e) => setPassword(e.target.value)}
									/>
									<button
										type="button"
										className="btn"
										onClick={() => setShow(!show)}>
										{show ? <i className="fa-regular fa-eye-slash"></i> : <i className="fa-solid fa-eye text-black"></i>}
									</button>
								</div>
							</div>
						</div>
						<div className="card-footer d-flex flex-column">
							<button type="submit" className="btn btn-primary my-3">Iniciar Sesión</button>
							<label>¿Aún no tienes cuenta? <Link to="/signup">Regístrate aquí</Link></label>
						</div>
					</form>
				</div>
			</div>
		</div >
	);
};

export default Home