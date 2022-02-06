import React from 'react';
import Card from './Card';

let data = [
    {
        title: "Movies in Data Base",
        titleColor: "text-primary",
        borderColor: "border-left-primary",
        quantity: 21,
        icon: "fa-film"
    },
    {
        title: "Total awards",
        titleColor: "text-success",
        borderColor: "border-left-success",
        quantity: 79,
        icon: "fa-award"
    },
    {
        title: "Actors quantity",
        titleColor: "text-warning",
        borderColor: "border-left-warning",
        quantity: 49,
        icon: "fa-user"
    }
]

function ContentRowMovies() {
    return(
        <div className="row">
        {/* <!-- Movies in Data Base --> */}
            {data.map((card, index) => (
                <Card 
                    title={card.title} 
                    titleColor={card.titleColor}
                    borderColor={card.borderColor} 
                    quantity={card.quantity} 
                    icon={card.icon}
                    key={index}
                />
            ))}       
        </div>
    )
}

export default ContentRowMovies;