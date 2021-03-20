import { useEffect, useState } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header/Header';
import Player from './component/Player/Player';

function App() {
  const [players, setPlayers] = useState([]);
  // const [selectedPlayer, setSelectedPlayer] = useState(0);
  const [cart, setCart] = useState([]);

  useEffect(()=>{
    fetch('https://api.mocki.io/v1/b833cff0')
    .then(response => response.json())
    .then(data => setPlayers(data));
  },[]);

  const addPlayer = (player) => {
    const existingPlayer = cart.find(pl => player.id === pl.id);
    console.log(existingPlayer);
    if(existingPlayer){
      alert("You have already added this player to your list");
    }
    else{
      const updatedCart = [...cart, player];
      setCart(updatedCart);
    }
  }

  return (
    <div className="App">
      <Header totalPlayer={players.length} cart={cart} ></Header>
      <div className="container ">
        <div className="row">

          {
            players.map(player => <Player addPlayer={addPlayer} key={player.id} player={player} ></Player>)
          }
        </div>
        
      </div>
    </div>
  );
}

export default App;
