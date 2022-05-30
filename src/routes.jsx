import { Route } from "react-router-dom"
import Appointment from "./pages/Appointment"
import Apps from "./pages/Apps"
import Authentication from "./pages/Authentication"
import Blogs from "./pages/Blogs"
import Components from "./pages/Components"
import Dashboard from "./pages/Dashboard"
import Doctors from "./pages/Doctors"
import Pages from "./pages/Pages"
import Pharmacy from "./pages/Pharmacy"

export const routes = [
	<Route path='/' element={<Dashboard />} />,
	<Route path='/dashboard' element={<Dashboard />} />,
	<Route path='/appointment' element={<Appointment />} />,
	<Route path='/apps' element={<Apps />} />,
	<Route path='/authentication' element={<Authentication />} />,
	<Route path='/blogs' element={<Blogs />} />,
	<Route path='/components' element={<Components />} />,
	<Route path='/doctors' element={<Doctors />} />,
	<Route path='/pages' element={<Pages />} />,
	<Route path='/pharmacy' element={<Pharmacy />} />,
]