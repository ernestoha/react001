import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    console.log("Counters - Rendered");
    const { onReset, counters, onDelete, onIncrement } = this.props; //Destructing Arguments
    return (
      <div>
        <button
          // onClick={this.props.onReset} //without Destructing Arguments
          onClick={onReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>

        {/* {this.props.counters.map(counter => ( //without Destructing Arguments */}
        {counters.map(counter => (
          <Counter
            key={counter.id} //handle by react.
            /* 
            id={counter.id}
            value={counter.value}
            instead above lines (id... value...)
            pass all atr using the obj with: counter={counter}
            */
            counter={counter}
            // onDelete={this.props.onDelete} //without Destructing Arguments
            onDelete={onDelete}
            // onIncrement={this.props.onIncrement} //without Destructing Arguments
            onIncrement={onIncrement}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
