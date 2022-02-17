import React from "react";

function handleClick1() {
    const c = document.getElementsByClassName('box');
    // console.log(c);
    c[0].classList.toggle('d');
}
function handleClick2() {
    const c = document.getElementsByClassName('box');
    // console.log(c);
    c[1].classList.toggle('d');
}


export const Button1 = () => {
    return (
        <button className="btn-style btn1" onClick={handleClick1}>To see styling in functional component</button>
    )
}

export const Button2 = () => {
    return (
        <button className="btn-style btn2" onClick={handleClick2}>To see styling in class component</button>
    )
}