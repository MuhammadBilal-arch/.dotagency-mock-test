import React from "react";
import "./WidgetLayout.css"; // External CSS
import {
  FaRegCircleQuestion, 
} from "react-icons/fa6";
 
import { ASSETS } from "./assets/path";  
import { Sidebar } from "./components/sidebar";

const WidgetLayout = () => {
  return (
    <div className="page-container">
      {/* Sidebar Section */}
      <Sidebar />

      {/* Main Content Section */}
      <div className="main-content">
        <header className="header space-between">
          <div className="text-left">
            <h1>Beginnen Sie Ihre Verkaufsreise 👋</h1>
            <p>
              Entdecken Sie mühelos jede Facette Ihres Verkaufsmandatsvertrags.
            </p>
          </div>

          <div>
            <FaRegCircleQuestion />
            <div>Reload</div>
          </div>
        </header>

        {/* Grid Layout for Content Blocks */}
        <div className="grid-container">
          <div className="grid-item grid-cols-1 grid-row-7">
            <img src={ASSETS.IMAGE} alt="" />
          </div>
          <div className="grid-item grid-cols-1 grid-row-4">
            <img src={ASSETS.IMAGE} alt="" />
          </div>
          <div className="grid-item grid-cols-1 grid-row-4">
            <img src={ASSETS.IMAGE} alt="" />
          </div>
          <div className="grid-item grid-cols-1 grid-row-7 bg-red center">
            <div className="">Insert Textblock</div>
          </div>
          <div className="grid-item grid-cols-2 grid-row-6 bg-red">
            <div className="overlay">
              <button className="overlay-button">Nesting</button>
            </div>
          </div>
          <div className="grid-item grid-cols-1 grid-row-3 ">
            <img src={ASSETS.IMAGE} alt="" />
          </div>
          <div className="grid-item grid-cols-1 grid-row-7">
            <img src={ASSETS.IMAGE} alt="" />
          </div>
          <div className="grid-item grid-cols-2 grid-row-4 center bg-red">
            Item 2
          </div>
          <div className="grid-item grid-cols-1 grid-row-4">
            <img src={ASSETS.IMAGE} alt="" />
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default WidgetLayout;
