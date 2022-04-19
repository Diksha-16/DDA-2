import React from "react";
import Card from'react-bootstrap/Card';
import {Row, Col} from 'react-bootstrap';
import './Courses.css';

function Courses(){
    return(
      <Row xs={1} md={4} class="g-4 my-5">
    {Array.from({ length: 4 }).map((_, idx) => (
      <Col class="mx-auto my-auto">
        <Card style={{ width: '18rem' }} class='mx-auto'>
          <Card.Img variant="top" src="https://picsum.photos/200/300" height="200px"  />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit longer.
            </Card.Text>
          </Card.Body>
          {/* {/* <br/>
          <br/>
          <br/> */}
          <Card.Img variant="top" src="https://picsum.photos/200/300" height="200px"  />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit longer.
            </Card.Text>
          </Card.Body>  
          
        </Card>
        {/* <br/>
        <br/>
        <br/> */}
      </Col>
    ))}
  </Row>

  

  
    )
  };
  export default Courses;