import React from 'react'
import { Link } from 'react-router-dom';

export const Signup = () => {
    return (
        <div className="row d-flex justify-content-center">
            <div className="col-auto d-flex align-items-center">
                <div className="card m-5 rounded">
                    <div className="card-header mb-2  pt-2">
                        <h4 className="card-title">Regístrate</h4>
                    </div>
                    <div className="card-body">
                        <div className="mb-3">
                            <label htmlFor='name' className="form-label">Nombre</label>
                            <input type="text" className="form-control" name="name" id="" aria-describedby="emailHelpId"
                                placeholder="Nombre" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor='lastName' className="form-label">Apellido</label>
                            <input type="text" className="form-control" name="lastName" id="" aria-describedby="emailHelpId"
                                placeholder="Apellido" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor='email' className="form-label">Email</label>
                            <input type="email" className="form-control" name="email" id="" aria-describedby="emailHelpId"
                                placeholder="E-mail" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor='password' className="form-label">Contraseña</label>
                            <input type="password" className="form-control" name="password" id="" aria-describedby="passwordHelpId"
                                placeholder="Contraseña" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor='repeatPassword' className="form-label">Repite tu contraseña</label>
                            <input type="password" className="form-control" name="repearPassword" id="" aria-describedby="passwordHelpId"
                                placeholder="Contraseña" />
                        </div>
                    </div>
                    <div className="card-footer d-flex flex-column">
                        <button type="submit" className="btn btn-primary my-3">Regístrate</button>
                        <label >¿Ya tienes una cuenta? <Link to="/">Inicia sesión aquí</Link></label>
                    </div>
                </div>
            </div>
        </div>
    )
}


