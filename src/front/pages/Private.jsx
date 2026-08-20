import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useGlobalReducer from "../hooks/useGlobalReducer.jsx"
import { deleteUser } from '../../services/apiServices'

export const Private = () => {
    const navigate = useNavigate()
    const { dispatch } = useGlobalReducer()

    const handleLogout = () => {
        dispatch({ type: "logout" });
        navigate("/")
    }

    const handleDelete = async () => {
        const confirm = window.confirm("Esta accion es irreversible.")
        if (confirm) {
            const result = await deleteUser();
            if (result.ok) {
                alert("Cuenta eliminada correctamente.")
                dispatch({ type: "logout" })
                navigate("/")
            } else {
                alert(result.data.error || "Error al eliminar.")
            }
        }
    }
    return (
        <div class="d-flex justify-content-center align-items-center flex-column">
            <h2>¡Sessión iniciada con éxito!</h2>
            <img src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExbTcxMmRmMHV2MTMwMjY2aXkzd3JkeTdtdjQ1b3ZzdTR6eTVvbWZzNiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/l0MYt5jPR6QX5pnqM/100.webp" />
            <h4>Si puedes ver esta página es porque el token ha funcionado perfectamente ¡Bailemos!</h4>
            <div className='d-flex gap-3'>
                <button className='btn btn-warning' onClick={handleLogout}>
                    Cerrar sesión
                </button>
                <button className='btn btn-danger' onClick={handleDelete}>
                    Eliminar cuenta
                </button>

            </div>
        </div>
    )
}


