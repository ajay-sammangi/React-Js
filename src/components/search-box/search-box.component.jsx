// import { Component } from 'react';

import './search-box.styles.css';

 const SearchBox = ({className,placeholder,onChangeHandler}) => {
   return (
     <input
       className={` search-box  ${className}`}
       type="search"
       placeholder={placeholder}
       onChange={
         // console.log({startingArray : this.state.monsters});
         // console.log(event.target.value);
         onChangeHandler
       }
     />
   );
 };
 

 export default SearchBox;