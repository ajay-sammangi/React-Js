// import { Component } from 'react';
import SearchBox from './components/search-box/search-box.component';

import CardList from './components/cards-list/card-list.component'
import { useEffect, useState } from 'react';

// import CardList from './components/cards-list/card-list.component';
// import logo from './logo.svg';

import './App.css';


const App = () => {
  console.log("render");
// console.log("initial");
// console.log(useState);

const [searchField, setSearchField] = useState('');
const [monsters,setMonsters] = useState([]);


useEffect(() =>{
  console.log("fetch");
  fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
}, []);




// console.log(searchField);


const onSearchChange=(event) => {
    // console.log("event started");
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
    // console.log("event ended");
    }
console.log("return starts");

const filteredMonsters = monsters.filter((monster) => {
        return monster.name.toLocaleLowerCase().includes(searchField); 
      });


  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>

      <SearchBox
        className="monsters-search-box"
        onChangeHandler={onSearchChange}
        placeholder="search monsters"
      />
      {
    
      <CardList monsters={filteredMonsters} />
      }
    </div>
  );
}
  


// class App extends Component {
//   constructor() {
//     super();
//     // debugger;
//     this.state = {
//       monsters: [],
//       searchField: "",
//     };
//   }

//   componentDidMount() {
//     // debugger;
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((users) =>
//         this.setState(
//           () => {
//             return { monsters: users };
//           },
//           // () => {
//           //   console.log(this.state);
//           // }
//         )
//       );
//   }
//   onSearchChange = (event) => {
//     const searchField = event.target.value.toLocaleLowerCase();
//     this.setState(() => {
//       return { searchField };
//     });
//   };

//   render() {
//     // debugger;
//     // console.log("render from app")
//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;
//     // console.log("this:",this);
//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchField);
      
//     });
//     // console.log(filteredMonsters);
//     return (
      
//       <div className="App">
        
//           <h1 className='app-title'>Monsters Rolodex</h1>
//       {// {filteredMonsters.map((monster) => {
//       //     return (
//       //       <div key={monster.id}>
//       //         <h1>{monster.name}</h1>
//       //       </div>
//       //     );
//       //   })
//       // }
//       }
//       <SearchBox className="monsters-search-box" onChangeHandler={onSearchChange} placeholder='search monsters'/>
      
//       <CardList monsters={filteredMonsters} />
//     </div>
//     );
//   }
// }
  
export default App;
