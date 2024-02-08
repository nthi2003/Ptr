import { Routes, Route } from "react-router-dom";
import { Home, Login, Rental, Homepage, DetailPost } from "./containers/Public";
import { path } from "./ultils/constant";const App = () => {
  return (
    <div className=" w-screen bg-primary">
      <Routes>
        <Route path={path.HOME} element={<Home />} >
        <Route path='*' element={<Homepage />} /> 
        <Route path={path.LOGIN} element={<Login />} />
        <Route path={path.CHO_THUE_CAN_HO} element={<Rental />} />
        <Route path={path.CHO_THUE_MAT_BANG} element={<Rental />} />
        <Route path={path.CHO_THUE_PHONG_TRO} element={<Rental />} />
        <Route path={path.NHA_CHO_THUE} element={<Rental />} />
        <Route path={path.NHA_CHO_THUE} element={<Homepage />} />
        <Route path={path.DETAL_POST__TITLE__POSTID} element={<DetailPost />} />
        <Route path={'chi-tiet/*'} element={<DetailPost />} />
        </Route>

      </Routes>
    </div>
  )
}
export default App; 