import { days } from '../data/days'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTooth, faPlus } from '@fortawesome/free-solid-svg-icons';

const CalendarView = () => {
  return (
  <div>
    <div className="calendar-container">

    <div className="calendar-top-right">
      <div style={{padding: '4px' ,backgroundColor: '#463fd3', borderRadius: '5px', color: '#fff'}}>
      <img src="src/assets/avatar.png" alt="Add icon" className="calendar-img-icon" /></div>
      <div style={{padding: '4px' ,backgroundColor: '#463fd3', borderRadius: '5px', color: '#fff'}}>
      <FontAwesomeIcon icon={faPlus} style={{  fontSize: '1.6rem',
      cursor: 'pointer'}} />
      </div>
    </div>

      <div className="calendar-header">
        <h2>October 2021</h2>
        <div className="calendar-nav">
          <span>{"<"}</span>
          <span>{">"}</span>
        </div>
      </div>

<div className="calendar-grid">
  {days.map((d, idx) => (
    <div
      key={idx}
      className={`calendar-day ${d.date === 26 ? "active-day" : ""}`}
    >
      <div className="day-name">{d.day}</div>
      <div className="day-date">{d.date}</div>
      <div className="times">
        {d.times.map((time, i) => {
          if (
            (d.date === 30 && time === "12:00") ||
            (d.date === 31 && time === "09:00")
          ) {
            return (
              <div className='grouped-main'>
              <div key={i} className="grouped-times">
                <div className="timeslot3">
                  {time !== "-" ? time : <span className="dash">&mdash;</span>}
                </div>
              </div>
              </div>
            );
          }
          
          else if (d.date === 28 && time === "11:00") {
            return (
              <div key={i} className="time-slot2">
                {time !== "-" ? time : <span className="dash">&mdash;</span>}
              </div>
            );
          }
          // Default case (other timings)
          else {
            return (
              <div
                key={i}
                className={`time-slot ${d.date === 26 && time === "09:00" ? "highlighted" : ""}`}
              >
                {time !== "-" ? time : <span className="dash">&mdash;</span>}
              </div>
            );
          }
        })}
      </div>
    </div>
  ))}
</div>
    </div>
     <div className='calendar-cards'>
        
        <div className="dentist-card">
        <div className="labelicon">
        <h4 className="label">Dentist</h4>
        <FontAwesomeIcon icon={faTooth} className="icon" />
        </div>
          <p className="calvalue">09:00-11:30</p>
          <p className="calvalue">Dr. Cameron Williamson</p>   
      </div>

      <div className="physio-card">
        <div className="labelicon">
        <h4 className="label">Physiotherapy Appointment</h4>
        <img src='src/assets/muscle.png' alt="muscle icons"></img>
        </div>
          <p className="value1">11:00-12:00</p>
          <p className="value1">Dr. Kevin Djones</p>
      </div>
      </div>
  </div>  
  )
}

export default CalendarView