import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import routes from './router';
import { useRoutes } from 'react-router-dom';


function App() {
  let Router = useRoutes(routes);
  return (
    <div>
      <Navbar></Navbar>
      {Router}
      <Footer></Footer>
    </div>
  );
}

export default App;
