import React, { useState } from "react";

export default function HEX2RGB () {

  const [hexValue, setHEX] = useState('');

  const [rgb, setRGB] = useState({
    rgbText: 'RGB',
    rgbValue: '',
    rgbaValue: ''
  });

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
      error();
      return false;
    }

    const firstNumRgb = hexToDec(newHexValue[1] + newHexValue[2]);
    const secondNumRgb = hexToDec(newHexValue[3] + newHexValue[4]);
    const thirdNumRgb = hexToDec(newHexValue[5] + newHexValue[6]);

    if (!isNaN(firstNumRgb) && !isNaN(secondNumRgb) && !isNaN(thirdNumRgb)) {
      setRGB({
        rgbText: 'rgb(' + firstNumRgb + ', ' + secondNumRgb + ', ' + thirdNumRgb + ')',
        rgbValue: 'rgb(' + firstNumRgb + ', ' + secondNumRgb + ', ' + thirdNumRgb + ')',
        rgbaValue: 'rgba(' + firstNumRgb + ', ' + secondNumRgb + ', ' + thirdNumRgb + ', 0.5)'
      });
      return false;
    }
    
    error();
  }

  const error = () => {
    setRGB({
      rgbText: 'Ошибка',
      rgbValue: 'rgb(255, 0, 0)',
      rgbaValue: 'rgba(255, 0, 0, 0.5)'
    });    
  }

  const hexToDec = (hex) => {
    return parseInt(hex, 16);
  }

  return (
    <div className="wrapper" style={{backgroundColor: rgb.rgbaValue }}>
      <div className="converter">
        <form onSubmit={onSubmitForm}>
          <input 
            className="convert-input"
            value={hexValue} placeholder="Цвет в формате #e6f0ff"
            onChange={onChangeHandler} />
        </form>
        <div className="convert-result" style={{backgroundColor: rgb.rgbValue }}>
          {rgb.rgbText}
        </div>
      </div>
    </div>
  )
}