import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css';
import KanbanBoard from './KanbanBoard'
import Navb from './Navb'
// import New from './New'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Navb /> */}
        <KanbanBoard />
      </BrowserRouter>
    </div>
  );
}

export default App;
