import React from "react";
import { Button1, Button2 } from "./Button";
import Heading from "./heading";
import './index.css'
import { C1, C2 } from "./pagecontent";

const Content = () => {
    return (
        <div className="background">
            <Heading />
            <div className="button">
                <Button1 />
                <Button2 />
            </div>
            <div className="content-parent">
                <C1 />
                <C2 />
            </div>
        </div>
    )
}

export default Content;