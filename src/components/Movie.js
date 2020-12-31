import "../models/MovieClass.js";
import "./Movie.css";
import Card from 'react-bootstrap/Card';


function Movie(props){
    const {movie} = props;
    return (
        <Card style={{ width: '18rem' }}>
            <a href={movie.poster} title={movie.name} target="blank"><Card.Img variant="top" src={movie.poster} /></a>
            <Card.Body>
                <Card.Title>{movie.name}</Card.Title>
                <Card.Text>
                    <div>Director: {movie.director}</div>
                    <div>Length: {movie.length}</div>
                    <div>Main actors: {movie.mainActors}</div>
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default Movie;