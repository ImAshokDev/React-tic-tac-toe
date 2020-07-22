import React, { useState } from "react";
import { connect } from "react-redux";
import { PLAYER1 } from "../Redux/types";
import { InputField } from "./InputField";

function Form(props) {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");

  const formSubmit = (e) => {
    e.preventDefault();

    props.dispatch({
      type: PLAYER1,
      payload: {
        player1: value1,
        player2: value2,
      },
    });
    setValue1("");
    setValue2("");
  };

  return (
    <div className="form-block">
      <form onSubmit={formSubmit}>
        <InputField
          name="value1"
          value={value1}
          inputChange={(e) => setValue1(e.target.value)}
          placeholder="Player1 Name"
        />

        <InputField
          name="value2"
          value={value2}
          inputChange={(e) => setValue2(e.target.value)}
          placeholder="Player2 Name"
        />

        <button type="submit">Go</button>
      </form>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
  };
};

export default connect(null, mapDispatchToProps)(Form);
