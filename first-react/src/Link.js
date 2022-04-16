import React from "react"
import { Counter } from "./Counter";

export class Link extends React.Component{

    //constructor (){}    //solo se bisogna passare dei dati

    render(){
        return(<div>{this.props.obj.name}{' '}{this.props.obj.lastName}
        
        </div>)
    }
}

export function Div(){
    return(<div>sono un div</div>);
}

export const P = () => (<p>sono un paragrafo</p>)