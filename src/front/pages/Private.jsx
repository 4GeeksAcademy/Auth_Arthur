import React from 'react'
import { Link } from 'react-router-dom'

export const Private = () => {
    return (
        <div class="d-flex justify-content-center align-items-center flex-column">
            <h2>¡Sessión iniciada con éxito!</h2>
            <img src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExbTcxMmRmMHV2MTMwMjY2aXkzd3JkeTdtdjQ1b3ZzdTR6eTVvbWZzNiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/l0MYt5jPR6QX5pnqM/100.webp" />
            <h4>Si puedes ver esta página es porque el token ha funcionado perfectamente ¡Bailemos!</h4>
        </div>
    )
}


