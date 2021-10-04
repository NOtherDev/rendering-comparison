import React from 'react'

function Card({offer, onClick}) {
    return (
        <div className="card m-3">
            <img src={offer.imageUrl} className="card-img-top" width="100%"/>
            <div className="card-body pt-0 px-0">
                <div className="d-flex flex-row justify-content-between mb-0 px-3">
                    <small className="text-muted mt-1">STARTING AT</small>
                    <h6>${offer.price}*</h6>
                </div>
                <hr className="mt-2 mx-3"/>
                <div className="d-flex flex-row justify-content-between px-3 pb-4">
                    <div className="d-flex flex-column"><span className="text-muted">Fuel Efficiency</span>
                        <small className="text-muted">L/100KM*</small>
                    </div>
                    <div className="d-flex flex-column">
                        <h5 className="mb-0">{offer.fuelEfficiencyCity}/{offer.fuelEfficiencyHwy}</h5>
                        <small className="text-muted text-right">(city/Hwy)</small>
                    </div>
                </div>
                <div className="d-flex flex-row justify-content-between p-3 mid">
                    <div className="d-flex flex-column">
                        <small className="text-muted mb-1">ENGINE</small>
                        <div className="d-flex flex-row">
                            <img src="https://imgur.com/iPtsG7I.png" width="35px" height="25px"/>
                            <div className="d-flex flex-column ml-1">
                                {offer.engine.map((e) => (
                                    <small className="ghj" key={e}>{e}</small>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="d-flex flex-column">
                        <small className="text-muted mb-2">HORSEPOWER</small>
                        <div className="d-flex flex-row"><img src="https://imgur.com/J11mEBq.png"/>
                            <h6 className="ml-1">{offer.horsepower} hp*</h6>
                        </div>
                    </div>
                </div>
                <small className="text-muted key pl-3">Standard key Features</small>
                <div className="mx-3 mt-3 mb-2">
                    <button type="button" className="btn btn-danger btn-block"
                            onClick={onClick}>
                        <small>BUILD & PRICE</small>
                    </button>
                </div>
                <small className="d-flex justify-content-center text-muted">*Legal Disclaimer</small>
            </div>
        </div>
    );
}

export default Card;
