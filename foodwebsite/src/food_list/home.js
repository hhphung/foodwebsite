import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import './home.css'; // Import your custom CSS file

function Home() {
  const foodImage = 'https://spoonacular.com/recipeImages/654959-312x231.jpg';

  return (
    <>
      <header className='main-picture'>
        <em>
          <h2>Welcome to the food Website, where you can find the best recipes in the world!!!</h2>
        </em>
      </header>
      <div className="p-3 mb-2 bg-light text-dark">
        <Container className="list-random">
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={foodImage} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Container>
      </div>
    </>
  );
}

export default Home;