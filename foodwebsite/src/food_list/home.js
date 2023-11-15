import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import './home.css'; // Import your custom CSS file

function Home() {
  const recipesSets = [
    [
      {
        id: 1,
        title: 'Recipe 1',
        description: 'Some quick example text for Recipe 1.',
        image: 'https://spoonacular.com/recipeImages/654959-312x231.jpg',
      },
      {
        id: 2,
        title: 'Recipe 2',
        description: 'Some quick example text for Recipe 2.',
        image: 'https://spoonacular.com/recipeImages/123456-312x231.jpg',
      },
      // Add more recipe data as needed for the first set
    ],
    [
      {
        id: 3,
        title: 'Recipe 3',
        description: 'Some quick example text for Recipe 3.',
        image: 'https://spoonacular.com/recipeImages/789012-312x231.jpg',
      },
      {
        id: 4,
        title: 'Recipe 4',
        description: 'Some quick example text for Recipe 4.',
        image: 'https://spoonacular.com/recipeImages/345678-312x231.jpg',
      },
      // Add more recipe data as needed for the second set
    ],
    // Add more sets of recipes as needed
  ];

  return (
    <>
      <header className='main-picture'>
        <em>
          <h2>Welcome to the food Website, where you can find the best recipes in the world!!!</h2>
        </em>
      </header>
      <div className="p-3 mb-2 bg-light text-dark">
        {recipesSets.map((recipes, setIndex) => (
          <Container key={setIndex} className="list-random">
            <Row>
              {recipes.map((recipe) => (
                <Col key={recipe.id}>
                  <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={recipe.image} alt={recipe.title} />
                    <Card.Body>
                      <Card.Title>{recipe.title}</Card.Title>
                      <Card.Text>{recipe.description}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        ))}
      </div>
    </>
  );
}

export default Home;