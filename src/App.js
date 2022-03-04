import './App.css';
import Display from "./Display";
import {useState} from "react";
import Create from "./Components/Create";

function App() {
    const [config, setConfig] = useState([])
    return (
        <div className="App">
            <Create value={{config, setConfig}}/>
            <Display value={config}/>
        </div>
    );
}

export default App;
