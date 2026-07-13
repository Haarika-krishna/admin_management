import { BrowserRouter, Routes, Route } from "react-router-dom";
import BusinessType from "./components/BusinessType";
import BusinessInfo from "./components/BusinessInfo";
import BusinessLocation from "./components/BusinessLocation";
import './App.css'
import QueueConfig from "./components/QueueConfig";
import VisualIdentity from "./components/VisualIdentity";
import BrandingReview from "./components/BrandingReview";
import AdminLayout from "./layout/AdminLayout";
import Dashboard from "./components/Dashboard";
import Reports from "./components/Reports";
import Livequeue from "./components/Livequeue";
import Settings from "./components/Settings";


function App() {

  return (
    <>
      
      <Routes>
        <Route path="/" element={<BusinessType />} />
        <Route path="/business-info" element={<BusinessInfo />} />
        <Route path="/business-location" element={<BusinessLocation />} />
        <Route path="/queue-configuration" element={<QueueConfig />} />
        <Route path="/visual-identity" element={<VisualIdentity />} />
        <Route path="/branding-review" element={<BrandingReview />} />
         {/* Dashboard Layout */}
        <Route element={<AdminLayout />}>

          <Route
            path="/dashboard"
            element={<Dashboard />}
          />

          <Route
            path="/live-queue"
            element={<Livequeue />}
          />

          <Route
            path="/reports"
            element={<Reports />}
          />

          <Route
            path="/settings"
            element={<Settings />}
          />

        </Route>
      </Routes>
    
    </>
  )
}

export default App
