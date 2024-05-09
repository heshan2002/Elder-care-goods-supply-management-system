import React from "react";

//classbase approach
class CounterClass extends React.Component {

    //constructor
    constructor() {
        super();
        this.increment = this.increment.bind(this)
        this.state =  { //define  a state (state is a javascript object in {})
            number: 0            
        }
    }

    increment(){
        this.setState({
            number: this.state.number + 1
        })
    }

    render() {
        return( 
        //use return to display navigation bar, card, input form 
            <div>
                <h3>Classbase Component</h3>
                <h1>Counter = {this.state.number}</h1>
                <button onClick={this.increment}>Increment</button>
                <hr></hr>
            </div>
        )
    }

}

export default CounterClass;

//we have to use the function App in App.js to call CounterClass component