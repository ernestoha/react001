import React, { Component } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
import "./App.css";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  constructor(props) {
    super(props);
    console.log("App - Constructor -> PROPS -> ", this.props);
    //init setting props vals in costructor
    //  this.state = this.props.something; //OK!!
    // this.setState();//ERROR only render in DOM a component.
    //end setting props vals in costructor
  }

  componentDidMount() {
    //after render to the dom
    console.log("App - Mounted");
    //Ajax Call and then get data from server this.setStates({movies})
  }

  handleIncrement = counter => {
    // console.log("handleIncrement!! Event Handler Called");
    const counters = [...this.state.counters]; // to clone obj
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    console.log(counter);
    console.log(this.state.counters[0]);
    this.setState({ counters }); //Save value and render in DOM (refresh)
  };

  handleReset = () => {
    console.log("RESET Event Handler Called");
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters }); //Save value and render in DOM (refresh)
  };

  handleDelete = counterId => {
    // console.log("DELETE Event Handler Called");
    /* return all the values where the id different from counterId*/
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters }); //Save value and render in DOM (refresh)
  };

  render() {
    console.log("App - Rendered");
    return (
      <React.Fragment>
        <NavBar
          /*Get in the array the length where the values bigger than 0*/
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
