import React from "react";
import { useSearchMovieQuery } from "../../hooks/useSearchMovie";
import { useSearchParams } from "react-router-dom";
// import { Container, Row, Col } from "react-bootstrap";
import { MovieCard } from "../../common/MovieCard/movieCard.styled";
// import "bootstrap/dist/css/bootstrap.min.css";
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
    console.log(data);
    return (
        <div>안녕</div>
        // <Container>
        //     <Row>
        //         <Col lg={4} xs={12}>
        //             필터
        //         </Col>
        //         <Col lg={8} xs={12}>
        //             <Row>
        //                 {data?.results?.map((movie, i) => (
        //                     <Col key={i} lg={3} xs={12} className="mb-4">
        //                         <MovieCard movie={movie} />
        //                     </Col>
        //                 ))}
        //             </Row>
        //         </Col>
        //     </Row>
        // </Container>
    );
};

export default Moviespage;
