import React from "react";

export function A(){


    return (
        <div name="A component">
            <B>
                <C/>
            </B>



        </div>
    );
}

export function B(){


    return (
        <div name="B component"></div>
    );
}

export function C(){


    return (
        <div name="C component"></div>
    );
}