import React from "react";
import { Link } from "react-router-dom";

const Taskbar = () => {
  return (
    <nav className="taskbar">
      <ul className="taskbar-list">
        <li className="taskbar-item">
          <Link to="/" className="taskbar-link">Home</Link>
        </li>
        <li className="taskbar-item">
          <Link to="/products" className="taskbar-link">Product</Link>
        </li>
        {/* Thêm các mục khác nếu cần */}
      </ul>
    </nav>
  );
};

export default Taskbar;