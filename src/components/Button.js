import React from "react";




export const Button1 = () => {

    function handleClick() {
        const c = document.getElementsByClassName('box1');
        // console.log(c);
        c[0].classList.toggle('d');
    }

    return (
        <button className="btn-style btn1" onClick={handleClick}>To see styling in functional component</button>
    )

}

export const Button2 = () => {

    function handleClick() {
        const c = document.getElementsByClassName('box2');
        // console.log(c);
        c[0].classList.toggle('d');
    }


    return (
        <button className="btn-style btn2" onClick={handleClick}>To see styling in class component</button>
    )
}