import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Dashboard from "../Pages/Dashboard";
import Search from "../Pages/Search";
import User from "../Pages/User";
import Inventory from "../Pages/Inventory";
import Jobs from "../Pages/Jobs";
import Dataview from "../Pages/Dataview";
import Data
import Settings from "../Pages/Settings";

export default function AppRouting() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/dashboard" element={<Dashboard/>}></Route>
                <Route path="/search" element={<Search/>}></Route>
                <Route path="/user" element={<User/>}></Route>
                <Route path="/inventory" element={<Inventory/>}></Route>
                <Route path="/jobs" element={<Jobs/>}></Route>
                <Route path="/dataview" element={<Dataview/>}></Route>
                <Route path="/dataviz" element={<Dataviz/>}></Route>
                <Route path="/settings" element={<Settings/>}></Route>
                <Route path="/admin-dashboard" element={<AppHome />} />
            </Routes>
        </>
    )
}