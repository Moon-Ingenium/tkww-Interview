import React from "react";
import './Image.css';
    
// Shortened up functional component, nothing wrong with the longer version
// Used destructing to pull out relevant props as well
const Image = ({ className, src, width, alt }) =>  
    <img className={className} src={src} width={width} alt={alt} />

export default Image;