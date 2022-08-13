import "./RecruiterSearch.css";
import JSONDATA from "./MOCK_DATA.json";
import {useState} from 'react';
function RecruiterSearch() {
  const [searchTerm, setSearchTerm] = useState('')
  return (
    <div className="App">
      <input type="text" placeholder="Search..." onChange={(event) => {setSearchTerm(event.target.value)}}/>
      {JSONDATA.filter((val)=> { 
        if (searchTerm === ""){ 
          return val
        } else if(val.skills.toLowerCase().includes(searchTerm.toLowerCase())){
          return val
        }
      }).map((val,key)=>{
          return (
            <div className="user" key={key}> 
              <p class="RecruiterSearch"> Name: {val.name}, Email: {val.email}, Phone: {val.phone}, Skills: {val.skills}</p>
            </div>
          );
      })}
    </div>
  );
}

export default RecruiterSearch;
