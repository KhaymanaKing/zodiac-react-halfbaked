import './App.css';
{/* import the zodiac array */}
import { zodiac } from './data.js';
import Header from './Header.js';
import Footer from './Footer.js';
import Main from './Main.js';

function App() {
  return (
    <div className="App">
      {/* import and use the Header. Main, and Footer components here */}
      <Header name=''/>
      <Main />
      <Footer dates=''/>

      {/* the Header component needs a string passed in as the `name` prop */}
      {/* the Footer component needs a year passed in as the `year` prop */}
      {/* pass the zodiac array imported above to the Main component as a `zodiacs` prop */}
    </div>
  );
}

export default App;
