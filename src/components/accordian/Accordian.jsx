import data from "./data";
import "./accordian.css";
import { useState } from "react";

export default function Accordian() {
  const [selected, setSelected] = useState(null);
  const [enableMultiple, setEnableMultiple] = useState(false);
  const [multiple, setMultiple] = useState([]);
  const [buttonName, setButtonName] = useState("Enable Multiple Selection");

  const handleSingleSelection = (itemId) =>
    setSelected(itemId === selected ? null : itemId);

  const handleMultipleSelection = (itemId) => {
    let multipleArr = [...multiple];
    const findItemIndex = multipleArr.indexOf(itemId);
    if (findItemIndex === -1) multipleArr.push(itemId);
    else multipleArr.splice(findItemIndex, 1);
    setMultiple(multipleArr);
  };

  return (
    <div className="acc-wrapper">
      <button
        onClick={() => {
          //a bug was here; due to enableMultiple
          let newEnableMultiple = !enableMultiple;
          setEnableMultiple(newEnableMultiple);
          setButtonName(
            newEnableMultiple
              ? "Enable Single Selection"
              : "Enable Multiple Selection"
          );
        }}
      >
        {buttonName}
      </button>
      <div className="accordion">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item">
              <div
                onClick={() =>
                  enableMultiple
                    ? handleMultipleSelection(dataItem.id)
                    : handleSingleSelection(dataItem.id)
                }
                className="title"
              >
                <h4>{dataItem.question}</h4>
                <span>+</span>
              </div>
              {enableMultiple
                ? multiple.indexOf(dataItem.id) !== -1 && (
                    <div>{dataItem.answer}</div>
                  )
                : selected === dataItem.id && (
                    <>
                      <hr></hr>
                      <div className="info">{dataItem.answer}</div>
                    </>
                  )}
            </div>
          ))
        ) : (
          <div>no data found</div>
        )}
      </div>
    </div>
  );
}
