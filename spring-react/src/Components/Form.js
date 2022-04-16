import React from "react";
import axios from "axios";

export class Form extends React.Component{
    
    constructor(){
        super();
        this.id=React.createRef();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
            const path = "http://localhost:8080/api/react/student/v1/delete?id=";
            const id1 = this.id.current.value;
            axios.delete(path +id1);
            console.log(path);
        

    }

    render(){

    return(<div>
            <form onSubmit={this.handleSubmit}>
                <label>
                    Id
                    <input type="text" name="nome" ref={this.id}/>
                </label>
                    <input type="submit" value="Cancella" />
            </form>
        </div>
    )
    }

}