import React from "react";
import { Route, Routes } from "react-router";
import GlobalStyles from "./styles/GlobalStyle";
import AppLayout from "./layout/AppLayout";
import Homepage from "./pages/Homepage/Homepage";
import MovieDetailpage from "./pages/MovieDetailpage/MovieDetailpage";
import Moviespage from "./pages/Moviespage/Moviespage";
import NotFoundpage from "./pages/NotFoundpage/NotFoundpage";
import TvShowspage from "./pages/TvShowspage/TvShowspage";
import TvDetailpage from "./pages/TvDetailpage/TvDetailpage";
import Personpage from "./pages/PersonPage/PersonPage";
import PersonDetailpage from "./pages/PersonDetailpage/PersonDetailpage";
import Multipage from "./pages/Multipage/Multipage";
function App() {
    return (
        <>
            <GlobalStyles />
            <Routes>
                <Route path="/" element={<AppLayout />}>
                    <Route index element={<Homepage />}></Route>
                    <Route path="multi">
                        <Route index element={<Multipage />}></Route>
                    </Route>
                    <Route path="movies">
                        <Route index element={<Moviespage />}></Route>
                        <Route path=":id" element={<MovieDetailpage />}></Route>
                    </Route>
                    <Route path="tv">
                        <Route index element={<TvShowspage />}></Route>
                        <Route path=":id" element={<TvDetailpage />}></Route>
                    </Route>
                    <Route path="person">
                        <Route index element={<Personpage />}></Route>
                        <Route
                            path=":id"
                            element={<PersonDetailpage />}
                        ></Route>
                    </Route>
                </Route>
                <Route path="*" element={<NotFoundpage />}></Route>
            </Routes>
        </>
    );
}

export default App;
