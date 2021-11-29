
import './App.css';
import { SideBar } from './components/SideBar';
import { StartPage } from './components/StartPage';

function App() {
  return (
   <div className="appContainer">
     <SideBar/>
     <StartPage />
   </div>
  );
}

export default App;
