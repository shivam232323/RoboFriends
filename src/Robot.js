import React from 'react';

function Robot({id,name,email}) {
  return (
  	<div className="robots">
    <div className='ba br4 b--solid fl  grow tc bg-light-green'>
         <img alt="robots" src={`https://robohash.org/${name}?size=200x200`}/>
         <h1>{id}</h1>
         <h3>{name}</h3>
         <h4>{email}</h4>   
         </div>
        


     </div>
  );

}

export default Robot;
