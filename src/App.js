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
    fetch('https://run.mocky.io/v3/01635460-b47a-42cf-8e6a-712e87cde4a9')
    .then(response => response.json())
    .then(data => {
      data.map((item,index) => item.id = index)
      setPlayers(data)
    });
  },[]);

  const addPlayer = (player) => {
    const existingPlayer = cart.find(pl => player.id === pl.id);
    if(existingPlayer){
      alert("You have already added this player to your list");
    }
    else{
      const updatedCart = [...cart, player];
      setCart(updatedCart);
    }
  }
  console.log(cart)
  const removePlayer = (id) => {
    const newList = cart.filter(item => item.id !== id)
    setCart(newList)
  }

  return (
    <div className="App">
      <Header totalPlayer={players.length} cart={cart} removePlayer={removePlayer}></Header>
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
