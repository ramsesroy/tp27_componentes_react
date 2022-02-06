import React from 'react';
import RowTable from './RowTable';

let data = [
    {
        title: "Billy Eliot",
        length: 123,
        rating: 5,
        genre: ["Drama", "Comedia"],
        awards: 2
    },
    {
        title: "Alicia en el país de las maravillas",
        length: 142,
        rating: 4.8,
        genre: ["Drama", "Acción", "Comedia"],
        awards: 3
    }
]

function Additional() {
    return(
        <table class="table w-75 p-3 mx-auto">
            <thead>
                <tr>
                <th scope="col">Título</th>
                <th scope="col">Duración</th>
                <th scope="col">Rating</th>
                <th scope="col">Género</th>
                <th scope="col">Premios</th>
                </tr>
            </thead>
            <tbody>
                {data.map((movie, index) => (
                    <RowTable 
                     title={movie.title}
                     length={movie.length}
                     rating={movie.rating}
                     genre={movie.genre}
                     awards={movie.awards}
                     key={index}
                     />
                ))}
            </tbody>
        </table>
    )
}

export default Additional;