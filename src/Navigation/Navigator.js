import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

// Screens Import
import IndexScreen from "../Screens/Index/IndexScreen";
import NotFoundScreen from "../Screens/NotFoundScreen/NotFoundScreen";

const Navigator = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<IndexScreen />} />
                <Route path='*' element={<NotFoundScreen />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Navigator;