import React  , { useEffect , useState , useRef} from 'react'
import { StyledTimer } from './../Styles/StyledTimer';

export const TimerCoundown = () => {

const [ timersDays , setTimersDays ] = useState("00");
const [ timersHours , setTimersHours ] = useState("00");
const [ timersMinutes , setTimersMinutes ] = useState("00");
const [ timersSeconds , setTimersSeconds ] = useState("00");


let interval = useRef();


const startTimers = () =>{
    const coundownDate = new Date("Sep 08, 2022").getDate();

    interval = setInterval(() =>{
        const now = new Date().getDate();
        const distance = coundownDate - now;
        const days = Math.floor((distance / (1000 * 60 * 60 * 24)));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
        const minutes = Math.floor((distance % (1000 * 60 * 60) / (1000 * 60)));
        const seconds = Math.floor((distance % (1000 * 60) / 1000));

        if(distance < 0){
            // stop timer
        clearInterval(interval.current);
        }else{
            // update timer
            setTimersDays(days)
            setTimersHours(hours)
            setTimersMinutes(minutes)
            setTimersSeconds(seconds)
        }

    }, 1000)

};
useEffect(()=>{
    startTimers();
    return(()=> {
        clearInterval(interval.current);
    })
})


  return (
 
        <StyledTimer>
                  <h2 className="coundown_title">Poplin top with ruffle</h2>
                  <div className="coundown_timer">
                    <div className="days count">
                      <p className="day_count">{timersDays}</p>
                      <span className="coundown_text">days</span>
                    </div>
                    <span className="coundown_devider">:</span>
                    <div className="hours count">
                    <p className="day_count">{timersHours}</p>
                      <span className="coundown_text">Hours</span>
                    </div>
                    <span className="coundown_devider">:</span>
                    <div className="minutes count">
                    <p className="day_count">{timersMinutes}</p>
                      <span className="coundown_text">Minutes</span>
                    </div>
                    <span className="coundown_devider">:</span>
                    <div className="seconds count">
                    <p className="day_count">{timersSeconds}</p>
                      <span className="coundown_text">Seconds</span>
                    </div>
                  </div>
                  <div className="coundown_cta">
                    <button className="btn">Get Only $20</button>
                  </div>
                </StyledTimer>
    
  )
}
