import AnatomySection from "./AnatomySection"
import HealthStatusCards from "./HealthStatusCards"

const DashboardOverview = () => {
  return (
    <div className="dashboard-overview">
        <AnatomySection />
        <HealthStatusCards/>
        
    </div>
  )
}

export default DashboardOverview