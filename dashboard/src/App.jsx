import { useState } from "react";
import Sidebar from "./components/Sidebar";
import DashboardMainContent from "./components/DashboardMainContent";

function App() {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <button className="sidebar-toggle" onClick={() => setSidebarOpen(!sidebarOpen)}>
        ☰
      </button>

    <div className="container">
      <Sidebar isOpen={sidebarOpen}/>
      <DashboardMainContent />
    </div>
    </>
  )
}

export default App
