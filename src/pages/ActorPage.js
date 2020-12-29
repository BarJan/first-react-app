import { Col, Container, Row } from "react-bootstrap";
import Actor from "../components/Actor";
import ActorClass from "../models/ActorClass";


function ActorPage(){
    
    const actors = [
                    new ActorClass("David", "Guetta", "1967-11-07", "https://m.media-amazon.com/images/M/MV5BMTg0NzY2NjYzM15BMl5BanBnXkFtZTcwNzk5NTc0NA@@._V1_UY317_CR15,0,214,317_AL_.jpg", "https://www.imdb.com/name/nm1615892/?ref_=nv_sr_srsg_1"),
                    new ActorClass("Eddie", "Murphy", "1961-04-03", "https://m.media-amazon.com/images/M/MV5BMTc0NDQzODAwNF5BMl5BanBnXkFtZTYwMzUzNTk3._V1_UY317_CR6,0,214,317_AL_.jpg","https://www.imdb.com/name/nm0000552/?ref_=nv_sr_srsg_0"),
                    new ActorClass("Johnny", "Depp", "1963-06-09", "https://m.media-amazon.com/images/M/MV5BMTM0ODU5Nzk2OV5BMl5BanBnXkFtZTcwMzI2ODgyNQ@@._V1_UY317_CR4,0,214,317_AL_.jpg","https://www.imdb.com/name/nm0000136/?ref_=nv_sr_srsg_0"),
                    new ActorClass("Matt", "Damon", "1970-10-08", "https://m.media-amazon.com/images/M/MV5BMTM0NzYzNDgxMl5BMl5BanBnXkFtZTcwMDg2MTMyMw@@._V1_UY317_CR11,0,214,317_AL_.jpg","https://www.imdb.com/name/nm0000354/?ref_=nv_sr_srsg_0"),
                    new ActorClass("George", "Clooney", "1961-05-06", "https://m.media-amazon.com/images/M/MV5BMjEyMTEyOTQ0MV5BMl5BanBnXkFtZTcwNzU3NTMzNw@@._V1_UY317_CR9,0,214,317_AL_.jpg","https://www.imdb.com/name/nm0000123/?ref_=nv_sr_srsg_1"),
                    new ActorClass("Leonardo", "DiCaprio", "1974-11-11", "https://m.media-amazon.com/images/M/MV5BMjI0MTg3MzI0M15BMl5BanBnXkFtZTcwMzQyODU2Mw@@._V1_UY317_CR10,0,214,317_AL_.jpg","https://www.imdb.com/name/nm0000138/?ref_=nv_sr_srsg_0"),
                    new ActorClass("Adam", "Sandler", "1966-09-09", "https://m.media-amazon.com/images/M/MV5BMjQyNzM2MjM1Ml5BMl5BanBnXkFtZTcwMDE5NjI3Mg@@._V1_UY317_CR7,0,214,317_AL_.jpg","https://www.imdb.com/name/nm0001191/?ref_=nv_sr_srsg_0"),
                    new ActorClass("Antonio", "Banderas", "1960-08-10", "https://m.media-amazon.com/images/M/MV5BMTUyOTQ3NTYyNF5BMl5BanBnXkFtZTcwMTY2NjIzNQ@@._V1_UX214_CR0,0,214,317_AL_.jpg","https://www.imdb.com/name/nm0000104/?ref_=nv_sr_srsg_0")
    ];

    const actorsRend = actors.map( actress => <Col><Actor actor={actress} /></Col>);

    return(
        <Container>
            <Row>
                {actorsRend}
            </Row>
        </Container>
    );
}

export default ActorPage;