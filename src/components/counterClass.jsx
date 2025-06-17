import React from "react"

class CounterClass extends React.Component{
    constructor(props){
        super(props)
        this.state = {count:0}
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this)
    }
    increment(){
        this.setState(prevState => ({ count: prevState.count + 1 }))
    }
    decrement(){
        this.setState(prevState => ({ count: prevState.count - 1 }))
    }

    render(){
        return(<>
         <p>count:{this.state.count}</p>
         <button onClick={this.increment} >Increment</button>
         <button onClick={this.decrement} disabled={this.state.count<=0}>Decrement</button>
        </>)
    }
}
export default CounterClass;
