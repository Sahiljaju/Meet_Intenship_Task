import React from 'react'
import ExploreIcon from '@mui/icons-material/Explore';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

function Opentab(event,Tabname){
    var i ;
   
    var x = document.getElementsByClassName("fhhfh");
    for(i=0; i<x.length; i++){
      x[i].style.display = "none";
    }
    
    var ActiveTabContent=document.getElementById(Tabname)
    ActiveTabContent.style.display = "block"
    
    var y = document.getElementsByClassName("tabs")
    for(i=0; i<y.length; i++){
      y[i].classList.remove("Active");
    }
  
    event.target.classList.add("Active");
  }

function Header() {
    return (
        <div className="topNav">

        <div>
          <img src="Meetphoto.JPG" className="ndhhd" />
        </div>
        
        <div className="tab">
            <button className="tabs Active" onClick={(e) => Opentab(e,'Discovery')}><ExploreIcon /><br />Discovery</button>
            <button className="tabs" onClick={(e) => Opentab(e,'Invited')}><PeopleAltIcon /><br />Invited</button>
            <button className="tabs" onClick={(e) => Opentab(e,'Support')}><SupportAgentIcon /><br />Support</button>  
        </div>
        <div>
            <button className="dhdgdg">Post Job</button>
            <button className="ddbdbd">Sign In</button>
        </div>    
        
    </div>   
   
    )
}

export default Header
