import logo from "./logo.svg";
import "./App.css";
import PersonCard from "./components/PersonCard";

function App() {
  return (
    <div className="App">
      <PersonCard
        firstName="Mikey"
        lastName="Navarro"
        age={22}
        hairColor="brown"
      />
      <PersonCard
        firstName="Tommy"
        lastName="Caulfield"
        age={23}
        hairColor="brown"
      />
      <PersonCard
        firstName="Ben"
        lastName="Watson"
        age={24}
        hairColor="blond"
      />
      <PersonCard
        firstName="Cody"
        lastName="Stuart"
        age={23}
        hairColor="brown"
      />
      <PersonCard
        firstName="Jake"
        lastName="Alspaw"
        age={23}
        hairColor="blond"
      />
      <PersonCard
        firstName="Isaac"
        lastName="Diaz"
        age={23}
        hairColor="black"
      />
      <PersonCard
        firstName="Carlos"
        lastName="Alatore"
        age={23}
        hairColor="black"
      />
      <PersonCard
        firstName="Nolan"
        lastName="Lanza"
        age={22}
        hairColor="blond"
      />
    </div>
  );
}

export default App;
