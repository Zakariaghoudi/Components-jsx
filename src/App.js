import Image from './Components/Image';
import Name from './Components/Name'; 
import Price from './Components/Price';
import Description from './Components/Description';
import './App.css'; 

var firstName = window.prompt("Please enter your first name:"); 

function App() {
  return (
    <div className="app-container">
      <div className="card">
        <div className="image-container">
          <Image  />
        </div>
        <div className="card-body">
          <Name />
          <Price />
          <Description />
        </div>
      </div>
      <div className="greeting-container">
        <h3>
          {firstName ? `Hello, ${firstName}!` : "Hello, there!"}
        </h3>
        {firstName && (
          <img 
          src='https://siegfriedcrandall.com/wp-content/uploads/2017/11/gift-cards.jpg'
            className="profile-image"
            alt="Profile"
          />
        )}
      </div>
    </div>
  );
}

export default App;