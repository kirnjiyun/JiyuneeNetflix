import React from "react";
import AppLayout from "./layout/AppLayout";
import Homepage from "./pages/Homepage/Homepage";
import MovieDetailpage from "./pages/MovieDetailpage/MovieDetailpage";
import Moviespage from "./pages/Moviespage/Moviespage";
import NotFoundpage from "./pages/NotFoundpage/NotFoundpage";
import { Route, Routes } from "react-router";

function App() {
    return (
        <Routes>
            <Route path="/" element={<AppLayout />}>
                <Route index element={<Homepage />}></Route>
                <Route path="movies">
                    <Route index element={<Moviespage />}></Route>
                    <Route path="/:id" element={<MovieDetailpage />}></Route>
                </Route>
            </Route>

            <Route path="*" element={<NotFoundpage />}></Route>
        </Routes>
    );
}
export default App;
