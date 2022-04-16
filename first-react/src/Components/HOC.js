import React from "react";

const HOC = ComposedComponent => class extends React.Component{

    onClick(){
        console.log("Hello world")
    }

    render(){
        return(
            <ComposedComponent {...this.props} onClick = {this.onClick}/>
        )
    }
}


const firstComponent = (props) =>{
    <div onClick= {props.onClick}>
        Hello, {props.name}! I am a firstComponent.
    </div>
}

export const SharedComponent = HOC(firstComponent);