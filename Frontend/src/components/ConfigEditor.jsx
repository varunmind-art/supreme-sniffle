import React, { useState } from "react";

const defaultConfig = {
  riskLevel: "Medium",
  maxPosition: 5,
  autoTrade: true,
};

const ConfigEditor = () => {
  const [config, setConfig] = useState(defaultConfig);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setConfig({
      ...config,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSave = (e) => {
    e.preventDefault();
    alert("Configuration saved!");
    // Here you would send config to backend/API
  };

  return (
    <form className="config-editor" onSubmit={handleSave}>
      <h2>Bot Configuration</h2>
      <label>
        Risk Level:
        <select name="riskLevel" value={config.riskLevel} onChange={handleChange}>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </label>
      <label>
        Max Position:
        <input
          type="number"
          name="maxPosition"
          value={config.maxPosition}
          onChange={handleChange}
          min={1}
          max={20}
        />
      </label>
      <label>
        Auto Trade:
        <input
          type="checkbox"
          name="autoTrade"
          checked={config.autoTrade}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Save</button>
    </form>
  );
};

export default ConfigEditor;
