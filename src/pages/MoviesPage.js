import axios from "axios";
import { useEffect, useState } from "react";
import { Col, Container, Form, FormControl, InputGroup, Row } from "react-bootstrap";
import Movie from "../components/Movie";
import MovieClass from "../models/MovieClass";

function MoviesPage(props) {
    const {show} = props;
    //initializing all actors objs into state
    const [moviesData, setMoviesData] = useState([]);

    useEffect(()=>{
        axios.get("movies.json").then(res=>{
                setMoviesData(res.data.map((plainMovie)=> new MovieClass(plainMovie)));
        });
    }, []);
    const filtereData = moviesData.filter(movie => show.some(v => movie.mainActors.includes(v) ));
    const moviesCards = filtereData.map( movie => <Col><Movie movie={movie} /></Col>);

    return(
        <Container>
            <Row>
                {moviesCards}
            </Row>
        </Container>
    );
}

export default MoviesPage;