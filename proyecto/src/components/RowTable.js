import React from 'react'
import propTypes from 'prop-types';


function RowTable({title, length, rating, genre, awards}) {
    return(
        <tr>
            <th scope="row">{title}</th>
            <td>{length}</td>
             <td>{rating}</td>
            <td>
                <ul>
                    {genre.map((genre, i) => 
                        <li key={i}>{genre}</li>
                    )}
                </ul>

            </td>
            <td>{awards}</td>
        </tr>
    )
}

RowTable.propTypes = {
    title : propTypes.string,
    length : propTypes.number,
    rating : propTypes.number,
    genre : propTypes.string,
    awards : propTypes.number
}

export default RowTable;