 import React from 'react';
 

 function Search({searchfield , onsearch})
 {

 	return(
 		 <div className="Search">
             <h1 id="font">RoboFriends</h1>
            <input id="field"
            type="text" 
            placeholder="Search robots"
            onChange={onsearch}
            />
 	        </div>	
 		 );
 }


 export default Search;