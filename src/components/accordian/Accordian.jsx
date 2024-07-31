import data from "./data";
import "./accordian.css";
import { useState } from "react";

export default function Accordian() {
  const [selected, setSelected] = useState(null);
  const handleSingleSelection = (itemId) =>
    setSelected(itemId === selected ? null : itemId);
  console.log(selected);
  return (
    <div className="acc-wrapper">
      <div>
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item">
              <div
                onClick={() => handleSingleSelection(dataItem.id)}
                className="title"
              >
                <h4>{dataItem.question}</h4>
                <span>+</span>
              </div>
              {selected === dataItem.id && (
                <>
                  <hr></hr>
                  <div>{dataItem.answer}</div>
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
