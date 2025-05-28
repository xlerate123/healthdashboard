import DashboardOverview from "./DashboardOverview";
import CalendarView from "./CalendarView";
import UpcomingSchedule from "./UpcomingSchedule";
import ActivityFeed from "./ActivityFeed";
import Header from "./Header"

const DashboardMainContent = () => {
  return (
      <div className="dashboard-content">
        <div className="leftview">
          <Header />
          <DashboardOverview />
          <ActivityFeed />
        </div>

        <div className="rightview">
          <CalendarView />
          <UpcomingSchedule />
        </div>
      </div>
  )
}

export default DashboardMainContent