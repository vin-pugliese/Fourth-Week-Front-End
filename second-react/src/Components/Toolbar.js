import React from "react";
import { Bottone } from "./Bottone";

export class Toolbar extends React.Component{

    render(){
        return (<><div>Sono la toolbar di {this.props.name}</div>
        <div><Bottone onClick={this.setName("giovanni")}/></div></>    )
    }

    setName(nome){
        this.props.name = nome;
    }
}