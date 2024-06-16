import React from 'react'
import './ToggleSwitch.css'

const ToggleSwitch = ({toggleTheme}) => (
  <div className="toggle-switch">
    <label className="switch" htmlFor="theme-toggle">
      <input type="checkbox" id="theme-toggle" onChange={toggleTheme} />
      <span className="slider round" />
    </label>
  </div>
)

export default ToggleSwitch
