import React from 'react';
import { useStopwatch  } from 'react-timer-hook';
import "./index.css"
function MyTimer({ expiryTimestamp }) {
  const {
    totalSeconds,
    seconds,
    minutes,
    hours,
    days,
    isRunning,
  } = useStopwatch ({ autoStart: true });


  return (
    <div style={{textAlign: 'center'}}>
      <div style={{fontSize: '20px', color:"white"}}>
         <div className='div-count'>
            <div>
            <div className='day-text'>day</div>
            <div className='time-text'>{days}</div>
            </div>
            <div>
            <div className='day-text'>Hours</div>
            <div className='time-text'>{hours}</div>
            </div>
            <div>
            <div className='day-text'>Minutes</div>
            <div className='time-text'>{minutes}</div>
            </div>
            <div>
            <div className='day-text'>Seconds</div>
            <div className='time-text'>{seconds}</div>
            </div>
        </div>
      </div>
      {/* <p>{isRunning ? 'Running' : 'Not running'}</p> */}
    </div>
  );
}

export default function Counter() {
 
  return (
    <div>
      <MyTimer   />
    </div>
  );
}