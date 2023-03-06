import { Routes, Route } from 'react-router-dom'
import { ApartmentDetails } from '../pages/ApartmentDetails'
import { ApartmentNew } from '../pages/ApartmentNew'
import { BuildingDetails } from '../pages/BuildingDetails'
import { BuildingNew } from '../pages/BuildingNew'

import { Home } from '../pages/Home'
import { HomeAdmin } from '../pages/HomeAdmin'
import { LocationsDetails } from '../pages/LocationsDetails'



export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/details/apartment/:id" element={<ApartmentDetails/>}/>
      <Route path="/details/building/:id" element={<BuildingDetails/>}/>
      <Route path="/details/locations" element={<LocationsDetails/>}/>

      <Route path="/admin" element={<HomeAdmin/>} />
      <Route path="/admin/new/building" element={<BuildingNew/>}/>
      <Route path="/admin/new/apartment" element={<ApartmentNew/>}/>
      <Route path="/admin/details/building/:id" element={<BuildingDetails/>}/>
      <Route path="/admin/details/locations" element={<LocationsDetails/>}/>
    </Routes>
  )
}
