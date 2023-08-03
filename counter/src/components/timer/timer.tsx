import { useEffect, useState } from "react";
import React from "react";

function TimeCounter() {
  const [seconds, countSeconds] = useState(0);
  const [minutes, countMinutes] = useState(0);
  const [isOn, setIsOn] = useState(false);

  useEffect(() => {
    if(isOn) setTimeout(tick, 100);
  })

  function tick() {
    countSeconds(seconds + 1);
    if(seconds > 59){
      countSeconds(seconds - 60);
      countMinutes(minutes + 1);
    }
    if (minutes > 59){
      countMinutes(minutes - 60);
    }
  }

  function on() {
    if (isOn === false) setIsOn(!isOn);
  }

  function off() {
    if (isOn === true) setIsOn(!isOn);
  }

  function showTime(number: number): string {
    if (number <= 9) return '0'+ number;
    else return `${number}`;
  }
  return (
    <div>
      <div style={{textAlign: 'center'}}>{showTime(minutes)}:{showTime(seconds)}</div>
      <div className="buttons-container">
        <button onClick={on}>Start</button>
        <button onClick={off}>Pause</button>
    </div>
    
    </div>
  )
}

export default TimeCounter;