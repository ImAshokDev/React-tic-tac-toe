import React, { Component } from "react";
import { connect } from "react-redux";
import { PLAYER1 } from "./types";

class ReduxForm extends Component {
  state = {
    value1: "",
    value2: "",
  };

  handleChange(e) {
    // console.log(this.state.value);
    this.setState({ [e.target.name]: e.target.value });
  }

  formSubmit(e) {
    e.preventDefault();

    this.props.dispatch({
      type: PLAYER1,
      payload: {
        player1: this.state.value1,
        player2: this.state.value2,
      },
    });

    this.setState({ value1: "", value2: "" });
  }
  render() {
    const { value1, value2 } = this.state;
    const { pName1, pName2 } = this.props;

    return (
      <div>
        <form onSubmit={this.formSubmit.bind(this)}>
          <input
            name="value1"
            type="text"
            value={value1}
            onChange={this.handleChange.bind(this)}
            placeholder="Player1 Name"
          />

          <input
            name="value2"
            type="text"
            value={value2}
            onChange={this.handleChange.bind(this)}
            placeholder="Player2 Name"
          />

          <button type="submit">Submit</button>
        </form>

        <p>player1: {pName1}</p>
        <p>player2: {pName2}</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    pName1: state.player1,
    pName2: state.player2,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReduxForm);
