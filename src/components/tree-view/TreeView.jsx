import { useState } from "react";
import menus from "./data";
import { FaPlus, FaMinus } from "react-icons/fa";

function MenuItems({ menu }) {
  const [showCurrentChild, setShowCurrentChild] = useState({});
  const handleToggleChild = (label) => {
    setShowCurrentChild({
      ...showCurrentChild,
      [label]: !showCurrentChild[label],
    });
  };
  return (
    <li>
      <div className="menu-item">
        <p>{menu.label}</p>
        {menu && menu.children && menu.children.length ? (
          <span onClick={() => handleToggleChild(menu.label)}>
            {showCurrentChild[menu.label] ? <FaMinus /> : <FaPlus />}
          </span>
        ) : null}
      </div>
      {menu &&
      menu.children &&
      menu.children.length > 0 &&
      showCurrentChild[menu.label] ? (
        <MenuList menus={menu.children} />
      ) : null}
    </li>
  );
}

function MenuList({ menus }) {
  return (
    <ul className="menu-list-container">
      {menus && menus.length
        ? menus.map((menu) => <MenuItems menu={menu} />)
        : null}
    </ul>
  );
}

export default function TreeView() {
  return (
    <div className="tree-view-container">
      <MenuList menus={menus} />
    </div>
  );
}
