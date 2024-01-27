import { Routes, Route } from "react-router-dom";
import { Home, Login, RentalApartmant, RentalHouse, RentalRoom, RentalSpace, Homepage } from "./containers/Public";
import { path } from "./ultils/constant";const App = () => {
  return (
    <div className=" w-screen bg-primary">
      <Routes>
        <Route path={path.HOME} element={<Home />} >
        <Route path='*' element={<Homepage />} /> 
        <Route path={path.HOME__PAGE} element={<Homepage />} /> 
        <Route path={path.LOGIN} element={<Login />} />
        <Route path={path.CHO_THUE_CAN_HO} element={<RentalApartmant />} />
        <Route path={path.CHO_THUE_MAT_BANG} element={<RentalSpace />} />
        <Route path={path.CHO_THUE_PHONG_TRO} element={<RentalRoom />} />
        <Route path={path.NHA_CHO_THUE} element={<RentalHouse />} />
        <Route path={path.NHA_CHO_THUE} element={<Homepage />} />
        </Route>

      </Routes>
    </div>
  )
}
export default App; 