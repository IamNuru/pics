
import './App.css';
import PictureState from './Components/context/picture/PictureState';
import Home from './Components/picture/Home'
import ThemeState from './Components/context/theme/ThemeState';

function App() {
  return (
    <ThemeState>
      <PictureState>
        <Home />
      </PictureState>
    </ThemeState>
  );
}

export default App;
