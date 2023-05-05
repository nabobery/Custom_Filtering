import React, { useState } from 'react';

function Step4({ filterSize, onGridValueChange, gridValues, nextStep }) {
  const [isIncrementMode, setIsIncrementMode] = useState(true);
  let [grid, setGrid] = useState(gridValues);

  const handleIncrementDecrementClick = () => {
    setIsIncrementMode(!isIncrementMode);
  };

  const handleGridValueButtonClick = (index, increment) => {
    const newGridValues = [...grid];
    if (increment) {
      newGridValues[index]++;
    } else {
      newGridValues[index]--;
    }
    //console.log(newGridValues);
    setGrid(newGridValues);
    //console.log(index, grid);
    // console.log(gridValues);
    // newGridValues = [...gridValues];
    // if (increment) {
    //   newGridValues[index]++;
    // } else {
    //   newGridValues[index]--;
    // }
    onGridValueChange(newGridValues);
  }

  const renderGrid = () => {
    if (!filterSize) {
      return null;
    }

    const gridItems = gridValues
    .fill(0)
    .map((_, index) => (
      <div
        key={index}
        className="filter-cell"
        onClick={() => {
          //const currentValue = gridValues[index];
          handleGridValueButtonClick(index, isIncrementMode);
        }}
        style={{
          // background: value === 1 ? '#333' : 'transparent',
          border: '1px solid #ccc',
          boxSizing: 'border-box',
          height: '50px',
          width: '50px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '1.5rem',
          fontWeight: 'bold',
          color: '#333',
          cursor: 'pointer',
        }}
      >
        {grid[index]}
      </div>
    ));

    return (
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${filterSize}, 50px)`,
          gap: '10px',
          marginTop: '20px',
        }}
      >
        {gridItems}
      </div>
    );
  };

  return (
    <div className = 'container'>
        <style><style>{'\n' +
            '@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap");\n' +
            '@import url(\'https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap\');\n' +
            '\n' +
            '* {\n' +
            '  margin: auto;\n' +
          'align : center;' +
            '  padding: 20px;\n' +
            '  box-sizing: border-box;\n' +
            '  font-family: "Poppins", sans-serif;\n' +
            '}\n' +
            '\n' +
            '.container {\n' +
            '  height: 100%;\n' +
            '  width: 100%;\n' +
            '  align-items: center;\n' +
            '  display: flex;\n' +
            '  justify-content: center;\n' +
            '  background-color: #fcfcfc;\n' +
            '}\n' +
            '\n' +
            '.card {\n' +
            '  border-radius: 10px;\n' +
            '  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.3);\n' +
            '  width: auto;\n' +
            '  height: auto;\n' +
            '  background-color: #ffffff;\n' +
            '  padding: 10px 30px 40px;\n' +
            '}\n' +
            '\n' +
            '.card h3 {\n' +
            '  font-size: 22px;\n' +
            '  font-weight: 600;\n' +
            '\n' +
            '}\n' +
            '\n' +
            '.drop_box {\n' +
            '  margin: 10px 0;\n' +
            '  padding: 30px;\n' +
            '  display: flex;\n' +
            '  align-items: center;\n' +
            '  justify-content: center;\n' +
            '  flex-direction: column;\n' +
            '  border: 3px dotted #a3a3a3;\n' +
            '  border-radius: 5px;\n' +
            '}\n' +
            '\n' +
            '.drop_box h4 {\n' +
            '  font-size: 16px;\n' +
            '  font-weight: 400;\n' +
            '  color: #2e2e2e;\n' +
            '}\n' +
            '\n' +
            '.drop_box p {\n' +
            '  margin-top: 10px;\n' +
            '  margin-bottom: 20px;\n' +
            '  font-size: 12px;\n' +
            '  color: #a3a3a3;\n' +
            '}\n' +
            '\n' +
            '.btn {\n' +
            '  text-decoration: none;\n' +
            '  background-color: #005af0;\n' +
            '  color: #ffffff;\n' +
            '  align-items: center;\n' +
            '  padding: 10px 20px;\n' +
            '  border: none;\n' +
            '  outline: none;\n' +
            '  transition: 0.3s;\n' +
            '}\n' +
            '\n' +
            '.btn:hover{\n' +
            '  text-decoration: none;\n' +
            '  background-color: #ffffff;\n' +
            '  color: #005af0;\n' +
            '  padding: 10px 20px;\n' +
            '  border: none;\n' +
            '  outline: 1px solid #010101;\n' +
            '}\n' +
            '.form input {\n' +
            '  margin: 10px 0;\n' +
            '  width: 100%;\n' +
            '  background-color: #e2e2e2;\n' +
            '  border: none;\n' +
            '  outline: none;\n' +
            '  padding: 12px 20px;\n' +
            '  border-radius: 4px;\n' +
            '}\n'}</style>
        <style>{
            '.img1 {'+
  'width : auto;'+
    'height : auto;' +
            'align-items : center'+
  // 'margin : 10px;'+
  // 'padding : 10px;'+
'}'
        } </style></style>
        <div className = 'card'>
      <h2>Step 4: Select Filter Values</h2>
      <p>Select the values for the filter:</p>
      {renderGrid()}
      <div style={{ marginTop: '20px' }}>
        <button  className = 'btn' onClick={handleIncrementDecrementClick}>
          {isIncrementMode ? 'Decrement' : 'Increment'}
        </button>
        <button className = 'btn' onClick={nextStep}>Next</button>
      </div>
            </div>
    </div>
  );
}

export default Step4;





