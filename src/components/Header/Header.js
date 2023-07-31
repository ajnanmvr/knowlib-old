import React from "react";
import Nav from "./Nav";

function Header() {
  return (
    <header className="header bg-white top-0 w-full z-50">
      <div className="header-content responsive-wrapper">
        <div className="header-logo">
          <a href="#" className="text-black font-semibold text-lg flex items-center">
            <div>
              <img src="https://assets.codepen.io/285131/untitled-ui-icon.svg" alt="Logo" />
            </div>
            <h1 className="pl-2">KnowLibrary</h1>
          </a>
        </div>
        <div className="header-navigation">
          <Nav />
          <div className="header-navigation-actions">
            <a href="#" className="button flex items-center">
              <i className="ph-lightning-bold" />
              <span className="ml-1">Contact Admin</span>
            </a>
            <a href="#" className="icon-button">
              <i className="ph-gear-bold" />
            </a>
            <a href="#" className="icon-button">
              <i className="ph-bell-bold" />
            </a>
            <a href="http://dhiu.in/" target="_blank" title="Darul Huda Official Website" className="avatar">
              <img
                src="https://upload.wikimedia.org/wikipedia/ml/f/f3/Dhiu_logo.jpg"
                alt="Avatar"
              />
            </a>
          </div>
        </div>
        <a href="#" className="button flex items-center">
          <i className="ph-list-bold" />
          <span className="ml-1">Menu</span>
        </a>
      </div>
    </header>
  );
}

export default Header;
