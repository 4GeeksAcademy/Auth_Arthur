import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { signup } from '../../services/apiServices';

export const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await signup(email, password);
        if (result.ok) {
            alert("¡Registro exitoso! Ya puedes iniciar sesión")
            navigate("/")
        } else {
            alert("Error al registrar: ", + result.data.error)
        }
    }
    return (
        <div className="row d-flex justify-content-center">
            <div className="col-auto d-flex align-items-center">
                <div className="card m-5 rounded">
                    <div className="card-header mb-2  pt-2">
                        <h4 className="card-title">Regístrate</h4>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="card-body">
                            <div className="mb-3">
                                <label htmlFor='email' className="form-label">Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    name="email"
                                    placeholder="E-mail"
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor='password' className="form-label">Contraseña</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    name="password"
                                    placeholder="Contraseña"
                                />
                            </div>
                        </div>
                        <div className="card-footer d-flex flex-column">
                            <button type="submit" className="btn btn-primary my-3">Regístrate</button>
                            <label >¿Ya tienes una cuenta? <Link to="/">Inicia sesión aquí</Link></label>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}


