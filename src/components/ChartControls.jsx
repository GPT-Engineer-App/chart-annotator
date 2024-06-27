import React from 'react';

const ChartControls = ({
  chartType,
  setChartType,
  chartTitle,
  setChartTitle,
  chartData,
  setChartData,
}) => {
  const handleChartTypeChange = (e) => setChartType(e.target.value);
  const handleChartTitleChange = (e) => setChartTitle(e.target.value);
  const handleChartDataChange = (e, rowIndex, colIndex) => {
    const newData = [...chartData];
    newData[rowIndex][colIndex] = e.target.value;
    setChartData(newData);
  };

  const addRow = () => setChartData([...chartData, ['', '']]);
  const removeRow = (index) => setChartData(chartData.filter((_, i) => i !== index));

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="flex space-x-4">
        <label>
          Chart Type:
          <select value={chartType} onChange={handleChartTypeChange}>
            <option value="line">Line</option>
            <option value="bar">Bar</option>
            <option value="pie">Pie</option>
          </select>
        </label>
        <label>
          Chart Title:
          <input type="text" value={chartTitle} onChange={handleChartTitleChange} />
        </label>
      </div>
      <div>
        <table className="table-auto border-collapse border border-gray-400">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2">X</th>
              <th className="border border-gray-300 px-4 py-2">Y</th>
              <th className="border border-gray-300 px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {chartData.map((row, rowIndex) => (
              <tr key={rowIndex}>
                <td className="border border-gray-300 px-4 py-2">
                  <input
                    type="text"
                    value={row[0]}
                    onChange={(e) => handleChartDataChange(e, rowIndex, 0)}
                  />
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <input
                    type="text"
                    value={row[1]}
                    onChange={(e) => handleChartDataChange(e, rowIndex, 1)}
                  />
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <button onClick={() => removeRow(rowIndex)}>Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button onClick={addRow}>Add Row</button>
      </div>
    </div>
  );
};

export default ChartControls;