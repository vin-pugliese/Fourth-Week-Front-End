
import './App.css';
import { Numbers } from './Components/Numbers';
import {Display} from './Components/Display'
import React, {Component} from 'react';

class App extends Component{
  constructor(){
    super();

    this.state = {
        result: ""
    }
}

onClick = button => {

    if(button === "="){
        this.calculate()
    }

    else if(button === "C"){
        this.reset()
    }
    else if(button === "CE"){
        this.backspace()
    }

    else {
        this.setState({
            result: this.state.result + button
        })
    }
};

calculate = () => {
    try {
        this.setState({
            result: (eval(this.state.result) || "" ) + ""
        })
    } catch (e) {
        this.setState({
            result: "error"
        })

    }
};

reset = () => {
    this.setState({
        result: ""
    })
};

backspace = () => {
    this.setState({
        result: this.state.result.slice(0, -1)
    })
};

render() {
    return (
        <div>
            <div className="calculator-body">
              <h3>Randstad Java Academy - Calculator</h3>
                <Display result={this.state.result}/>
                <Numbers onClick={this.onClick}/>
            </div>
        </div>
    );
 }
}

export default App;
