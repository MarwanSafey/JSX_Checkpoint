import { product } from './Product';
import { Name } from './Name';
import { Description } from './Description';
import { Price } from './Price';
// import { Image } from './Image';
import Both from './mainPic.JPG'
import Rolex from './Rolex.PNG';
import Card from 'react-bootstrap/Card';
import './App.css';


function App() {
  const firstName = "Marwan";
  return (
    <div className="App">
      <img alt="Pic" src={Rolex} style={{display:"flex"}}/>
      <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>
          <Name name={product.name}/>
        </Card.Title>
        <Card.Text>
          <Description description={product.description}/>
        </Card.Text>
        <Card.Text>
          <Price price={product.price}/>
        </Card.Text>
      </Card.Body>
    </Card>
    <h2>
    {firstName  ? `Hello ${firstName}!` :"Hello, There!" }
    </h2>
    {firstName && (<img src={Both} alt="Pic"/>)}
    
    </div>
  );
}

export default App;
