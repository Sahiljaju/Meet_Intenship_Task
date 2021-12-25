import React from 'react'

function Education(props) {
    return (
    <div> 
        <span className="EducationDegree">{props.courseType}&nbsp;{props.userDegree}-{props.coursename}</span><br />
        <span className="Institute">{props.college}&nbsp;|&nbsp;{props.passingyear}</span>
    </div>  
    )
}

export default Education
