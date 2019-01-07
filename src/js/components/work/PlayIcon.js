import React from 'react'
import {ReactComponent as PlayIconSvg } from '../../../assets/play_icon.svg';

const PlayIcon = ({ style, className, onClick, onMouseEnter, onMouseLeave}) => (
    <div className={className} style = {style} 
    onClick={onClick} 
    onMouseEnter={onMouseEnter}  
    onMouseLeave={onMouseLeave} 
   >
    <div className="PlayIconHolder" >
               <div className="PlayIconHolderBg" style = {style} > </div>
               < PlayIconSvg  className = {className} alt = "playIcon" / > 
            </div>
    </div>
)


export default PlayIcon
