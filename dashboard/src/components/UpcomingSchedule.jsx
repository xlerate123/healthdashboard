import SimpleAppointmentCard from "./SimpleAppointmentCard"

const UpcomingSchedule = () => {
  return (
    <div className="upcoming"> 
      <h3>The Upcoming Schedule</h3>
      <p className="appointment-time"  style={{marginTop: '16px'}}>On Thursday</p>
      <div className="schedule-card">
      <SimpleAppointmentCard
        title="Health checkup complete"
        time="11:00 AM"
        icon={'src/assets/injection.png'}
      />

      <SimpleAppointmentCard
        title="Opthalmologist"
        time="14:00 PM"
        icon={'src/assets/eye.png'}
        className="small-card"
      />
     </div>

     <p className="appointment-time" style={{marginTop: '16px'}}>On Saturday</p>
     <div className="schedule-card">
      <SimpleAppointmentCard
        title="Cardiologist"
        time="12:00 AM"
        icon={'src/assets/heart.png'}
        className="small-card"
      />

      <SimpleAppointmentCard
        title="Neurologist"
        time="16:00 PM"
        icon={'src/assets/doctor.png'}
        className="small-card"
      />
      
      </div>
    </div>
  )
}

export default UpcomingSchedule