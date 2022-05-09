

import Card from '../card/card-component';
import './card-list.styles.css'

const CardList=({monsters}) =>{

    // console.log("render from cardlist");
    // const {monsters} = props;
    console.log(monsters);
    // const { name, email, id} = monsters[3];
    // console.log(id);

    return (
      <div className="card-list">
        {monsters.map((monster) => {
          return <Card monster={monster} />;
        })}
      </div>
    );
        }
export default CardList;