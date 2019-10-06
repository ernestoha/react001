import React, { Component } from "react";

class Counter extends Component {
  //single source of true, removing state
  /*state = {
    // count: 0, //old name when getting value
    value: this.props.counter.value, //execute once on construction. new name geting the value from counters.render.value
    tags: ["tag1", "tag2", "tag3"]
  };*/

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

  componentDidUpdate(prevProps, prevState) {
    //do Ajax calls, save old changes in a history table.
    console.log("prevProps", prevProps); // prevProps con data anterior
    console.log("prevState", prevState);
    if (prevProps.counter.value !== this.props.counter.value) {
      // Ajax call and get new data from the server
    }
  }

  componentWillUnmount() {
    //before component will be remove from dom, ex: to reset variables, sockets and avoid memory leaks
    console.log("Constructor - Umount");
  }

  render() {
    console.log("Counter - Rendered");
    // console.log("Counter-props", this.props); //passing parameters from the other component
    const { counter, onDelete, onIncrement } = this.props; //Destructing Arguments
    return (
      <div>
        {/* <h1>Hello World</h1> */}
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        {/*this.renderTag()*/}
        {/* 
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
         
        <button
          onClick={() => this.handleIncrement({ id: 1 })}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        */}
        <button
          // onClick={() => this.props.onIncrement(this.props.counter)} //without Destructing Arguments
          onClick={() => onIncrement(counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          // onClick={() => this.props.onDelete(this.props.counter.id)} //without Destructing Arguments
          onClick={() => onDelete(counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
        <hr />
      </div>
    );
  }

  /*handleIncrement = product => {
    //airfunction sintax
    //new to handle events:  = () =>
    //   handleIncrement() { //old
    this.setState({ value: this.state.value + 1 }); //value x count  //Save value and render in DOM (refresh)
    console.log(product);
    console.log("Increment Clicked", this.state.value);
  };*/

  doHandleIncrement = () => {
    this.handleIncrement({ id: 1 });
  };

  /*renderTag() {
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
  }*/

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? "Zero" : count;
    // return count === 0 ? <h1>Zero</h1> : count;
  }
}

export default Counter;
