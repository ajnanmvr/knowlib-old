import React from 'react'
import './SubHeading.css'
function SubHeading() {
  return (
    <div className="content-header">
    <div className="content-header-intro">
      <h2>Darul Huda Web Library</h2>
      <p>
    Collection of Educational and Useful Websites
      </p>
    </div>
    <div className="content-header-actions">
      <a href="#" className="button">
        <i className="ph-faders-bold" />
        <span>Filters</span>
      </a>
      <a href="#" className="button">
        <i className="ph-plus-bold" />
        <span>Suggest Other</span>
      </a>
    </div>
  </div>  )
}

export default SubHeading