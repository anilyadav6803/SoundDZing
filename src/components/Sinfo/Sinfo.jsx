import React from 'react'
import './Sinfo.css'
import {studentIcon,videoIcon ,bgElement2} from '../../assets/index'
const Sinfo = () => {
  return (
    <div className='wrap'>
<div>
 <div className='containt-container'>
 <div className='info-cont'>
    <img src={studentIcon}></img>
    <div className='amount'>23,000+</div>
    <div className='type'>Studnets</div>
  </div>
  <div className='info-cont'>
    <img src={videoIcon}></img>
    <div className='amount'>26 Hrs</div>
    <div className='type'>Vedio</div>
  </div>
 
 </div>
<img className='bg-element2' src={bgElement2}></img>
</div>
    </div>
  )
}

export default Sinfo