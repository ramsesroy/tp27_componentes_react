import React from 'react';
import propTypes from 'prop-types';

function Card({title = "Data", titleColor , borderColor = "border-left-primary", quantity = 20, icon}){

    return(

        <div className="col-md-4 mb-4">
            <div className={`card ${borderColor} shadow h-100 py-2`}>
                <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                            <div className={`text-xs font-weight-bold ${titleColor} text-uppercase mb-1`}>{title}
                            </div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800">{quantity}</div>
                        </div>
                        <div className="col-auto">
                            <i className={`fas ${icon} fa-2x text-gray-300`}></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
};
Card.propTypes  = {
    title : propTypes.string.isRequired,
    titleColor : propTypes.string,
    borderColor : propTypes.string.isRequired,
    quantity : propTypes.number.isRequired,
    icon : propTypes.string
}

export default Card;