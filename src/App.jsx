import { Routes, Route } from "react-router-dom"

import Landing from "./pages/Landing"
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import BusinessSetup from "./pages/BusinessSetup"

import Dashboard from "./pages/Dashboard"
import Leads from "./pages/Leads"
import LeadDetails from "./pages/LeadDetails"
import Automation from "./pages/Automation"
import Analytics from "./pages/Analytics"
import Messages from "./pages/Messages"
import Integrations from "./pages/Integrations"
import Settings from "./pages/Settings"
import Profile from "./pages/Profile"
import EmailIntegrations from "./pages/EmailIntegrations"
import Notifications from "./pages/Notifications"
import TeamMembers from "./pages/TeamMembers"

function App(){

return(



<Routes>

<Route path="/" element={<Landing/>} />

<Route path="/signup" element={<Signup/>} />

<Route path="/login" element={<Login/>} />

<Route path="/setup" element={<BusinessSetup/>} />

<Route path="/dashboard" element={<Dashboard/>} />

<Route path="/leads" element={<Leads/>} />

<Route path="/leads/:id" element={<LeadDetails/>} />

<Route path="/automation" element={<Automation/>} />

<Route path="/messages" element={<Messages/>} />

<Route path="/analytics" element={<Analytics/>} />

<Route path="/integrations" element={<Integrations />} />

<Route path="/settings" element={<Settings/>} />

<Route path="/profile" element={<Profile/>} />

<Route path="/email-integrations" element={<EmailIntegrations/>}/>

<Route path="/notifications" element={<Notifications/>}/>

<Route path="/team-members" element={<TeamMembers/>}/>

</Routes>


)

}

export default App