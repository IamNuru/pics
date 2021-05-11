
import './App.css';
import ProductState from './Components/context/picture/PictureState';
import Home from './Components/picture/Home'
import ThemeState from './Components/context/theme/ThemeState';

function App() {
  return (
    <ThemeState>
      <ProductState>
        <Home />
      </ProductState>
    </ThemeState>
  );
}

export default App;
