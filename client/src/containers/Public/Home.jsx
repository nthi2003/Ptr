import React from "react";
import Header from './Header'
import {Outlet} from 'react-router-dom'
import Navigation from "./Navigation";

const Home = () =>
{
    return (
             <div className="w-full  h-full m-auto border border-red-500">
                <Header/>
                <Navigation/>
                <div className="w-1100 border border-red-500 flex flex-col items-center justify-start">
                     <Outlet />
                </div>
             </div>
    )
}

export default Home