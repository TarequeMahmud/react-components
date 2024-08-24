import { useState } from "react";
import "./styles.css";

export default function Tabs({ tabsContent }) {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  const handleClick = (index) => {
    setCurrentTabIndex(index);
  };

  return (
    <div className="wrapper">
      <div className="heading">
        {tabsContent.map((item, index) => (
          <div
            className={`tab-item ${currentTabIndex === index ? "active" : ""}`}
            onClick={() => handleClick(index)}
          >
            <span>{item.label}</span>
          </div>
        ))}
      </div>
      <div className="content" style={{ color: "red" }}>
        {tabsContent[currentTabIndex] && tabsContent[currentTabIndex].content}
      </div>
    </div>
  );
}
