import React from "react";

import "./Options.css";

const Options = (props) => {
  const options = [
    {
      text: "Type Got it",
      handler: props.actionProvider.greet,
      id: 1,
    },
  ];

  console.log(props.state);

  const buttonsMarkup = options.map((option) => (
    <button key={option.id} onClick={option.handler} className="option-button">
      {option.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default Options;