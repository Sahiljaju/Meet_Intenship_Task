import React from 'react'

function Companies(props) {
    return (
        <>
        <div className="kjsnsn">
            <div className="ahdbd">
                <img src={props.logo} className="hhsggd" />
            </div>
            <div className="fnnffk">               
                <p className="CompanyName">{props.companyname}<br />
                <span className="JobTitle">{props.jobRole}</span><br />   
                <span className="TimePeriod">{props.Startdate}-{props.Enddate}</span></p>
                <span><p className="AboutRole">{props.role}</p></span>     
            </div> 
        </div>        
        </>
    )
}

export default Companies
