import React from 'react'

function Button({id, idx}) {
    console.log('rendering Card.Button', id);
    return (
        <button type="button" className="btn btn-danger btn-block"
                onClick={() => alert(`Clicked on element #${idx + 1}`)}>
            <small>BUILD & PRICE</small>
        </button>
    );
}

export default Button;
