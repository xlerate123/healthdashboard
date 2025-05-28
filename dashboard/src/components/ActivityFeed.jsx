import { activityFeed } from "../data/activities"

const ActivityFeed = () => {
  return (
    <div className="activity-container">

      <div className="activity-main">
        <h4>Activity</h4>
        <span>3 appointments this week</span>
      </div>

      <div className="activity-chart">
        <img src="src/assets/graph.svg" alt="chart1"></img>
        <img src="src/assets/graph.svg" alt="chart1"></img>
      </div>

      <div className="activity-days">
        {activityFeed.map((day) => (
          <span key={day}>{day}</span>
        ))}
      </div>
    </div>
  )
}

export default ActivityFeed