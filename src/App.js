import { Header } from './components/Header/Header';
import './App.css';
import { Footer } from './components/Footer/Footer';
import { Main } from './components/MainContent/MainContent';

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
       <Footer/>
    </div>
  );
}

export default App;
