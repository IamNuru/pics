
import './App.css';
import ProductState from './Components/context/picture/PictureState';
import Header from './Components/picture/Header'
import Pictures from './Components/picture/Pictures'
import Search from './Components/picture/Search'
import Footer from './Components/picture/Footer'

function App() {
  return (
    <ProductState>
      <div className="max-w-screen-sm m-auto h-screen flex flex-col">
        <Header />
        <Search />
        <Pictures />
      <div className="flex-grow"></div>
        <Footer />
      </div>
      
      </ProductState>
  );
}

export default App;
