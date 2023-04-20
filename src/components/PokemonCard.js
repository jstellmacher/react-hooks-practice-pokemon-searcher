import React, {useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({name, hp, front, back}) {
  // ! below: added one hardcoded pokemon - changed the div---above: passed a pokemon prop 
  // const pokemon =
  // {
  //   "id": 2,
  //   "name": "ivysaur",
  //   "hp": 60,
  //   "sprites": {
  //     "front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
  //     "back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/2.png"
  //   }
  // };
  
  const [isShowFront, setIsShowFront] = useState(true);
  const toggleSprite = () => {
  setIsShowFront(!isShowFront);
};
  return (
    <Card onClick={toggleSprite}>
      <div>
        <div className="image">
          <img src={isShowFront ? front : back} alt="oh no!" />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
