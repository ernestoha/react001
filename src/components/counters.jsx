import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    return (
      <div>
        <button
          onClick={this.props.onReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>

        {this.props.counters.map(counter => (
          <Counter
            key={counter.id} //handle by react.
            /* 
            id={counter.id}
            value={counter.value}
            instead above lines (id... value...)
            pass all atr using the obj with: counter={counter}
            */
            counter={counter}
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
