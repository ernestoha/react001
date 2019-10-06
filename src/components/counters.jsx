import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  handleIncrement = counter => {
    // console.log("handleIncrement!! Event Handler Called");
    const counters = [...this.state.counters]; // to clone obj
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    console.log(counter);
    console.log(this.state.counters[0]);
    this.setState({ counters });
  };

  handleReset = () => {
    console.log("RESET Event Handler Called");
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleDelete = counterId => {
    // console.log("DELETE Event Handler Called");
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
  };

  render() {
    return (
      <div>
        <button
          onClick={this.handleReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>

        {this.state.counters.map(counter => (
          <Counter
            key={counter.id} //handle by react.
            /* 
            id={counter.id}
            value={counter.value}
            instead above lines (id... value...)
            pass all atr using the obj with: counter={counter}
            */
            counter={counter}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
