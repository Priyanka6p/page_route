import React from "react";

interface ProductCartProps {
    onIncrement: ()=>void,
    count: number,
    disabled: boolean,
    show: boolean,
    reset: ()=>void,
    text: string,
    showText: boolean
}

const ProductCart:React.FC<ProductCartProps> = ({onIncrement, count, disabled, show, reset, text, showText}) =>{
    return (
        <div>
            <h1>Child component</h1>
            <div className="childBtn">
                <button className="childBtn" value={count} onClick={onIncrement} disabled={disabled}> Increment </button>
                {count}
                <button className="childBtn" hidden={show} onClick={reset}> Reset </button>
            </div>
            <div id="doneDiv">
                <p hidden={showText}>{text}</p>
            </div>
        </div>
    );
}

export default ProductCart;