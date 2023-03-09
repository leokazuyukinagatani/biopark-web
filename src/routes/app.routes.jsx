import { Routes, Route } from 'react-router-dom'
import { ApartmentDetails } from '../pages/ApartmentDetails'
import { ApartmentNew } from '../pages/ApartmentNew'
import { BuildingDetails } from '../pages/BuildingDetails'
import { BuildingNew } from '../pages/BuildingNew'

import { Home } from '../pages/Home'
import { HomeAdmin } from '../pages/HomeAdmin'
import { LocationsAdminDetails } from '../pages/LocationsAdminDetails'
import { PropositionsDetails} from '../pages/PropositionsDetails'
import { PropositionDetails} from '../pages/PropositionDetails'
import { PropositionsAdminDetails } from '../pages/PropositionsAdminDetails'
import { PropositionAdminDetails } from '../pages/PropositionAdminDetails'
import { BuildingAdminDetails } from '../pages/BuildingAdminDetails'
import { LocationAdminDetails } from '../pages/LocationAdminDetails'
import { LocationDetails } from '../pages/LocationDetails'
import { LocationsDetails } from '../pages/LocationsDetails'
import { PropositionNew } from '../pages/PropositionNew'



export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/details/apartment/:id" element={<ApartmentDetails/>}/>
      <Route path="/details/building/:id" element={<BuildingDetails/>}/>
      <Route path="/details/locations" element={<LocationsDetails/>}/>
      <Route path="/details/propositions" element={<PropositionsDetails/>}/>
      <Route path="/details/proposition/:id" element={<PropositionDetails/>}/>
      <Route path="/new/proposition/:apartmentId" element={<PropositionNew/>}/>


      <Route path="/admin" element={<HomeAdmin/>} />
      <Route path="/admin/new/building" element={<BuildingNew/>}/>
      <Route path="/admin/new/apartment" element={<ApartmentNew/>}/>
      <Route path="/admin/details/building/:id" element={<BuildingAdminDetails/>}/>
      <Route path="/admin/details/locations" element={<LocationsAdminDetails/>}/>
      <Route path="/admin/details/location/:id" element={<LocationAdminDetails/>}/>
      <Route path="/admin/details/propositions" element={<PropositionsAdminDetails/>}/>
      <Route path="/admin/details/proposition/:id" element={<PropositionAdminDetails/>}/>
      
    </Routes>
  )
}
