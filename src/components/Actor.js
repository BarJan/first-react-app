import "../models/ActorClass.js";
import "./Actor.css";
import Card from 'react-bootstrap/Card';


function Actor(props){
    const {actor} = props;
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={actor.image} />
            <Card.Body>
                <Card.Title><a href={actor.imdbLnk} title={actor.fname+" "+actor.lname} target="blank">{actor.fname+" "+actor.lname}</a></Card.Title>
                <Card.Text>
                    {actor.Age()}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default Actor;