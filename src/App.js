
import './App.css';
import { StartPage } from './components/StartPage';
import { UserLogin } from './components/User/UserLogin';

function App() {
  return (
   <div className="appContainer">
     <UserLogin/>
     <StartPage />
   </div>
  );
}

export default App;
