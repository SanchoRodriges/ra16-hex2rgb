import React, { useState } from "react";

export default function HEX2RGB () {

  const [hexValue, setHEX] = useState('');

  const [rgbValue, setRGB] = useState('RGB');

  const [rgbaValue, setRGBa] = useState('');

  const onSubmitForm = (e) => {
    e.preventDefault();
  }

  const onChangeHandler = (e) => {

    const hex = e.target.value;

    if (hex.length > 7) {
      return false;
    }

    setHEX(hex);

    if (hex.length === 7) {
      showRGB(hex);
    }
  }

  const showRGB = (hex) => {
    const newHexValue = hex.split('');

    if (newHexValue[0] !== '#') {
      setRGB('Ошибка');
      return false;
    }

    const firstNumRgb = hexToDec(newHexValue[1] + newHexValue[2]);
    const secondNumRgb = hexToDec(newHexValue[3] + newHexValue[4]);
    const thirdNumRgb = hexToDec(newHexValue[5] + newHexValue[6]);

    if (!isNaN(firstNumRgb) && !isNaN(secondNumRgb) && !isNaN(thirdNumRgb)) {
      setRGB('rgb(' + firstNumRgb + ', ' + secondNumRgb + ', ' + thirdNumRgb + ')');
      setRGBa('rgba(' + firstNumRgb + ', ' + secondNumRgb + ', ' + thirdNumRgb + ', 0.5)');
      return false;
    }
    
    setRGB('Ошибка');    
  }

  const hexToDec = (hex) => {
    return parseInt(hex, 16);
  }

  return (
    <div className="wrapper" style={{backgroundColor: rgbaValue }}>
      <div className="converter">
      <form onSubmit={onSubmitForm}>
        <input 
          className="convert-input"
          value={hexValue} placeholder="Цвет в формате #e6f0ff"
          onChange={onChangeHandler} />
      </form>
      <div className="convert-result" style={{backgroundColor: rgbValue }}>
        {rgbValue ? rgbValue : '' } 
      </div>
    </div>
    </div>

  )
}