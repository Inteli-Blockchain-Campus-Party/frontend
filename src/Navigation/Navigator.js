import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

// Screens Import
import IndexScreen from "../Screens/IndexScreen";
import NotFoundScreen from "../Screens/NotFoundScreen";

const Navigator = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/teste' element={<IndexScreen />} />
                <Route path='*' element={<NotFoundScreen />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Navigator;