import React, { useRef } from "react";

const Inputfield = (props) => {
  const textInput = useRef(null);
  const inputLang = useRef(null);
  const inputTargetLang = useRef(null);

  const getInput = () => {
    const inputTextValue = textInput.current.value.trim(); // Trim leading and trailing spaces
    const inputLangValue = inputLang.current.value;
    const inputTargetLangValue = inputTargetLang.current.value;

    if (inputTextValue && inputLangValue && inputTargetLangValue) {
      props.userInputData(inputTextValue, inputLangValue, inputTargetLangValue);
    } else {
      alert("Please fill in all fields before translating.");
    }
  };

  return (
    <div className="Container">
      <div className="inputContainer">
        <div className="srcContainer">
          {/* Input Language */}
          <select name="srcLang" id="" ref={inputLang} className="srcLanguage">
            <option value="">Select Language</option>
            {props.language.map((ele, idx) => (
              <option key={`src-${idx}`} value={ele.code}>
                {ele.name}
              </option>
            ))}
          </select>
          <textarea
            ref={textInput}
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Enter text to translate..."
          ></textarea>
        </div>
        <div className="targetContainer">
          {/* Target Language */}
          <select
            name=""
            id=""
            className="targetLanguage"
            ref={inputTargetLang}
          >
            <option value="">Select Language</option>
            {props.language.map((ele, idx) => (
              <option key={`target-${idx}`} value={ele.code}>
                {ele.name}
              </option>
            ))}
          </select>
          <div className="translatedText">{props.translated}</div>
        </div>
      </div>
      <button onClick={getInput}>Translate</button>
    </div>
  );
};

export default Inputfield;
