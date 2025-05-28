const SimpleAppointmentCard = ({ title, time, icon, className}) => {
  return (
    <div>
    <div className={`appointment-card ${className || ''}`}>
      <div className="labelicon1">
       <h3 className="appointment-title">{title}</h3>
        <img src={icon} alt="muscle icons" className="icon1"></img>
       </div>
        <span className="appointment-time">{time}</span>    
    </div>
    </div>
  )
}

export default SimpleAppointmentCard