import React from 'react';
import Robot from './Robot';



function Robotss ({robots}) 
 {
   
return(
	<div>
	
    {robots.map((value,i)=>
{
  return <Robot  key={i}
   id={robots[i].id} 
   name={robots[i].name}
    email={robots[i].email}
      />;

}

 )

}

</div>

	);
}

export default Robotss;