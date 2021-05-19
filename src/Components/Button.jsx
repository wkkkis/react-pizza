import React from "react";
import classNames from "classnames";

export default function Button({children, className}){
    return(
        <button className={classNames("button", className)}>
            {children}
        </button>
    );
}