import React from 'react';

import axios from 'axios'
import {useState, useEffect} from 'react';  
import Image from './image.jsx'
import Info from  './info.jsx' 
import ShareIcon from '@mui/icons-material/Share';

function BelowHeader() {
    const [persondata, setpersondata] = useState([]);      
        
        useEffect(() => {
          getData();     
          
          async function getData() {
            axios
              .post('https://api.meetworks.in/users/get_unique_jobseeker_profile', {
                jobseeker_id: "614b410c2c4b197356a37f18",        
              })
              .then(function (response) {
                // console.log(response.data);
                setpersondata(response.data)
              })
              .catch(e => {
                  console.log(e)
              })
            }  
        },[])  

        
    

    return ( 
            <>
             <div id="Discovery" className="fhhfh" style = {{display:"block"}} >
                 {persondata.map(userdata =>(
                     <div id="hdhhd" className="hfhfh">
                     <Image image={userdata.user_image_url} />
                     <Info

                     name = {userdata.jobseeker_name}
                     city = {userdata.city}
                     district = {userdata.distric}
                     userExperience = {userdata.user_experiences}
                     userQualification = {userdata.user_qualifications}
                     totalExperience = {userdata.total_months_exp}
                     />
                     </div>
                     
                 ))}
            <button className="jdhdh"><ShareIcon />&nbsp; &nbsp; Share</button>
            </div>
        
        
        
        <div id="Invited" className="fhhfh" style = {{display:"none"}}>
            Invited
        </div>

        <div id="Support" className="fhhfh" style = {{display:"none"}}>
            Support
        </div>

        
        </> 
    )
}

export default BelowHeader


