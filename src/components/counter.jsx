import React, { Component } from "react";

class Counter extends Component {
  state = {
    // count: 0, //old name when getting value
    value: this.props.counter.value, //new name geting the value from counters.render.value
    tags: ["tag1", "tag2", "tag3"]
  };

  styles = {
    //for test purpouses
    fontSize: "20px"
  };

  /*  constructor() {
    super();
    // console.log(this);
    //init to avoid undefined this.state.count in handleIncrement function for each event function add line like this
    this.handleIncrement = this.handleIncrement.bind(this);
    //end to avoid undefined this.state.count in handleIncrement function
  } but BETTER: handleIncrement = () => { */

  render() {
    console.log("props", this.props); //passing parameters from the other component

    return (
      <React.Fragment>
        {/* <h1>Hello World</h1> */}
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        {this.renderTag()}
        {/* 
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
         */}
        <button
          onClick={() => this.handleIncrement({ id: 1 })}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
        <br />
      </React.Fragment>
    );
  }

  handleIncrement = product => {
    //airfunction sintax
    //new to handle events:  = () =>
    //   handleIncrement() { //old
    this.setState({ value: this.state.value + 1 }); //value x count
    console.log(product);
    console.log("Increment Clicked", this.state.value);
  };

  doHandleIncrement = () => {
    this.handleIncrement({ id: 1 });
  };

  renderTag() {
    if (this.state.value === 0)
      return (
        <div className="alert alert-danger alert-dismissible fade show">
          There is no tags
        </div>
      );
    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.state;
    return count === 0 ? "Zero" : count;
    // return count === 0 ? <h1>Zero</h1> : count;
  }
}

export default Counter;
