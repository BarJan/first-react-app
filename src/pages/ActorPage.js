import axios from "axios";
import { useEffect, useState } from "react";
import { Col, Container, Form, FormControl, InputGroup, Row } from "react-bootstrap";
import Actor from "../components/Actor";
import ActorClass from "../models/ActorClass";


function ActorPage(){

    //initializing all actors objs into state
    const [actorsData, setActorsData] = useState([]);
    // initialize of filter state
    const [cardsFilter, setCardsFilter] = useState("");
    // initialize of sort state
    const [sortState, setSortState] = useState("fname");

    useEffect(()=>{
        axios.get("actors.json").then(res=>{
                setActorsData(res.data.map((plainActor)=> new ActorClass(plainActor)));
        });
    }, []);

    const filterdData = actorsData.filter(actor => ( actor.fname.toLowerCase().includes(cardsFilter.toLocaleLowerCase()) ||
                                                      actor.lname.toLowerCase().includes(cardsFilter.toLocaleLowerCase())));        // filtering the cards by the Filter state

    function compareActors(actorA, actorB) {
        let compA, compB;
        if(sortState!=="age"){
            compA = actorA[sortState];
            compB = actorB[sortState];
        }
        else{
            compA = actorA.Age();
            compB = actorB.Age();
        }

        if (compA < compB) {
            return -1;
          }
          if (compA > compB) {
            return 1;
          }
        
          // names must be equal
          return 0;
    }
    
    //convert all (filtered) columns of the page, each contains 1 card    
    let actorsCards = filterdData.sort((a,b) => compareActors(a,b)).map( actor => <Col><Actor actor={actor} /></Col>);
    
    return(
        <Container>
            <Row>
                <label htmlFor="basic-url">Enter a name or part of it, to filter</label>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon3">
                            Write here:
                        </InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl id="basic-url" aria-describedby="basic-addon3" value={cardsFilter} onChange ={(e) => setCardsFilter(e.target.value)}/>
                </InputGroup>

                <Form.Group controlId="exampleForm.SelectCustom">
                    <Form.Label>Custom select</Form.Label>
                        <Form.Control as="select" value={sortState} custom onChange={e => setSortState(e.target.value)}>
                            <option value="fname">First name</option>
                            <option value="lname">Last name</option>
                            <option value="age">Age</option>
                        </Form.Control>
                </Form.Group>
            </Row>
            <Row>
                {actorsCards}
            </Row>
        </Container>
    );
}

export default ActorPage;