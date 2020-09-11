import React ,{Component} from 'react';
import Robotss from './Robotss';
import Search from './Search';
import './App.css'


class App extends Component  {

    constructor()
    {
    	super()

    	this.state=
    	{
    		robot:[],
            searchfield:' '
    	}
    	 
    }

    search = (event) => {
   
          this.setState({searchfield: event.target.value});
        
    }

      componentDidMount()
      {
      	fetch('https://jsonplaceholder.typicode.com/users').then(response=> response.json()).then(users =>
      	 this.setState({robot:users}));
      	
      	
      }


      render()
      {
      	const filterrobots=this.state.robot.filter(robot =>{
      	 return  robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
     
                  
        })
             
  return (
  	<div className="tc">

         <Search onsearch={this.search}/>
         <Robotss robots={filterrobots}/>
   </div>
      );
}

}

export default App;

