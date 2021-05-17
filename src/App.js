import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css';


function App() {
  return (
    <div className="App">
      <Navbar dark color='danger'>
        <div className='container'>
            <NavbarBrand href='/'>
              Confusion App navbar
            </NavbarBrand>
        </div>
      </Navbar>
    </div>
  );
}

export default App;
