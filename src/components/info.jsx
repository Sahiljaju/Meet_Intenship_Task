import React from 'react'
import Companies from './Companies.jsx'
import Education from './Education.jsx'
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import SchoolIcon from '@mui/icons-material/School';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function info(props) {
    return (
        <>
        <div className="jaldill">
                <p className="dhhdhd">{props.name}
                    &nbsp;<line className="nfffjf"></line>&nbsp;
                <LocationOnIcon className="jffbfk" />
                <span className="nfnff">&nbsp; {props.city},{props.district}</span></p>
                
                <br />
                <span className="hdhufj"><BusinessCenterIcon /> &nbsp; EXPERIENCE &nbsp;</span>
                 
                <span className="hfhddf">{props.totalExperience} yrs EXP</span><br /><br />
                {props.userExperience.map(work => (
                        <Companies 
                        companyname={work.company_name}
                        jobRole = {work.user_post}
                        Startdate = {work.company_starting_date}
                        Enddate = {work.company_ending_date}
                        role = {work.role_discription}
                        logo = {work.company_logo}
                        />
                ))}
                
                <br />      


                <span className="Education"><SchoolIcon /> &nbsp; EDUCATION</span><br /><br />
                {props.userQualification.map(qualification => (
                        <Education 
                        courseType ={qualification.course_type}
                        userDegree = {qualification.user_degree}
                        coursename = {qualification.course_name}
                        college = {qualification.user_college}
                        passingyear = {qualification.user_passing_year}
                        />
                ))}
                

        </div>
        </>

    )
}

export default info;
