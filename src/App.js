
import logo from './logo.svg';

import TopNav from './components/topnav';
import SideNav from './components/sidenav';
import Dashboard from './components/dashboard';


function App() {
  return <div className='App'>
    {/* Top navigation */}
    <TopNav />
    {/* Side navigation */}
    <SideNav/>
    {/* Dashboard */}
    <div className='main'>
    <Dashboard />
    </div>
    
  </div>

   
    
  
}

export default App;