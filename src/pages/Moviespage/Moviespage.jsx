import React from "react";
import { useSearchMovieQuery } from "../../hooks/useSearchMovie";
import { useSearchParams } from "react-router-dom";
import MovieCard from "../../common/MovieCard/MovieCard";
import * as S from "./moviespage.styled";

const Moviespage = () => {
    const [query] = useSearchParams();
    const keyword = query.get("q");
    const { data, isLoading, isError, error } = useSearchMovieQuery({
        keyword,
    });

    if (isLoading) {
        return <div>Loading... (loadingspinner 추가해야됨)</div>;
    }

    if (isError) {
        return <div>{error.message}</div>;
    }

    console.log(data.results);

    return (
        <S.MoviespageContainer>
            <S.FilterContainer>
                <form action="#">
                    <label for="lang">Language</label>
                    <select name="languages" id="lang">
                        <option value="javascript">JavaScript</option>
                        <option value="php">PHP</option>
                        <option value="java">Java</option>
                        <option value="golang">Golang</option>
                        <option value="python">Python</option>
                        <option value="c#">C#</option>
                        <option value="C++">C++</option>
                        <option value="erlang">Erlang</option>
                    </select>
                    <input type="submit" value="Submit" />
                </form>
                <form action="#">
                    <label for="lang">Language</label>
                    <select name="languages" id="lang">
                        <option value="javascript">JavaScript</option>
                        <option value="php">PHP</option>
                        <option value="java">Java</option>
                        <option value="golang">Golang</option>
                        <option value="python">Python</option>
                        <option value="c#">C#</option>
                        <option value="C++">C++</option>
                        <option value="erlang">Erlang</option>
                    </select>
                    <input type="submit" value="Submit" />
                </form>
            </S.FilterContainer>
            <S.MoviesContainer>
                {data?.results?.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </S.MoviesContainer>
        </S.MoviespageContainer>
    );
};

export default Moviespage;
