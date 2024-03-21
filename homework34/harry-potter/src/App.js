import './App.css';
import HousesList from "./Components/HousesList";
import {Provider} from "react-redux";
import {store} from "./reducers/store/store";
import Search from "./Components/Search";
import CharactersList from "./Components/CharactersList";


function App() {
  return (
      <Provider store={store}>
        <div className="container">
          <h1>&#x2728;Harry Potter Characters &#x2728;</h1>
          <HousesList/>
          <Search/>
          <CharactersList/>
        </div>
      </Provider>
=======
=======
>>>>>>> 702596998f27b3902fc9be8f8648cf611a3ad693
import { useEffect, useState, useMemo } from 'react';


const houses = ['Gryffindor', 'Slytherin', 'Ravenclaw', 'Hufflepuff'];

function App() {
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState('');
  const [selectedHouse, setSelectedHouse] = useState('');

  const filteredCharacters = useMemo(() => {
    const filteredByHouse = selectedHouse
        ? characters.filter((character) => character === selectedHouse)
        : characters;

    return filteredByHouse.filter((character) =>
        character.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [characters, search, selectedHouse]);

  useEffect(() => {
    const loadCharacters = async () => {
      try {
        const res = await fetch('https://hp-api.herokuapp.com/api/characters');
        setCharacters(await res.json());
      } catch (err) {
        console.error(err);
      }
    };

    loadCharacters();
  }, []);

  function handleSelectHouse(house) {
    setSelectedHouse(house === selectedHouse ? '' : house);
  }

  return (
      <>
        <div className="container">
          <h1>&#x2728;Harry Potter Characters &#x2728;</h1>
          <div className="hogwarts-houses">
            {houses.map((house, i) => (
                <div
                    className="house"
                    key={i}
                    onClick={() => handleSelectHouse(house)}
                >
                  <img src={`houses/${house}.png`} alt={house} />
                </div>
            ))}
          </div>
          <div id="searchWrapper">
            <input
                type="text"
                name="searchBar"
                id="searchBar"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="search for a character"
            />
          </div>
          <ul id="charactersList">
            {filteredCharacters.map((item, i) => (
                <li className="character" key={i}>
                  <h2>{item.name}</h2>
                  <p>House: {item.house}</p>
                  <img src={item.image} alt={item.name}></img>
                </li>
            ))}
          </ul>
        </div>
      </>
<<<<<<< HEAD
>>>>>>> f6e3f946 (not ready)
=======
>>>>>>> 702596998f27b3902fc9be8f8648cf611a3ad693
  );
}

export default App;

