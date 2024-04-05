import logo from './logo.svg';
import './App.css';
import Dashboard from './dashboard';

function App() {
  return (
    <>
      <nav className='nav'>
      <h2 className='nav-brand'>My React Application</h2>
        <ul className='nav-menu'>
          <li className='nav-item'>
            <a href='#' className='nav-link'>Dashboard</a>
          </li>
          <li className='nav-item'>
            <a href='#' className='nav-link'>About</a>
          </li>
          <li className='nav-item'>
            <a href='#' className='nav-link'>Skills</a>
          </li>
          <li className='nav-item'>
            <a href='#' className='nav-link'>Contact</a>
          </li>
        </ul>
      </nav>
      <div style={{ backgroundColor: 'white', margin: '180px 80px' }}>
        <Dashboard></Dashboard>
        {/* <HashRouter>
          <Routes>
          <Route exact path='/' render={() => (<div><DashboardNavbar /></div>)} />
          </Routes>
          </HashRouter> */}
      </div>
    </>
  );
}

export default App;
