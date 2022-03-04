import './App.css';
import Display from "./Display";

function App() {
  let demoObject1 = {
    title: "My Title is amazing",
    numberOfAuthors: 2,
    date: new Date()
  }
  let demoObject2 = {
    superTitle: "My Title is Super",
    description: "WOW MY DESCRIPTION IS AWESOME",
    created_at: new Date()
  }
  return (
    <div className="App">
        <Display myObject={demoObject1} partner="Entreprise 1"/>
        <Display myObject={demoObject2} partner="Entreprise 2"/>
    </div>
  );
}

export default App;
