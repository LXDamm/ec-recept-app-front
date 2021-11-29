
import './App.css';
import { SideBar } from './components/SideBar';
import { StartPage } from './components/StartPage';
import { UserLogin } from './components/User/UserLogin';

function App() {
  return (
   <div className="appContainer">
     <SideBar/>
     <UserLogin/>
     <StartPage />
   </div>
  );
}

export default App;
