import React from "react";
import "./RadioButton.css";

const RadioButton = () => {
  return (
    <div classNameName="radioButtons">
      <div className="button">
        <input type="radio" id="radio1" name="check-substitution-2" />
        <label className="btn btn-default" for="radio1">
          Tammikuu
        </label>
      </div>
      <div className="button">
        <input type="radio" id="radio2" name="check-substitution-2" />
        <label className="btn btn-default" for="radio2">
          Huhtikuu
        </label>
      </div>
      <div className="button">
        <input type="radio" id="radio3" name="check-substitution-2" />
        <label className="btn btn-default" for="radio3">
          maaliskuu
        </label>
      </div>
      <div className="button">
        <input type="radio" id="radio4" name="check-substitution-2" />
        <label className="btn btn-default" for="radio4">
          maaliskuu
        </label>
      </div>
      <div className="button">
        <input type="radio" id="radio5" name="check-substitution-2" />
        <label className="btn btn-default" for="radio5">
          maaliskuu
        </label>
      </div>
    </div>
  );
};

export default RadioButton;
