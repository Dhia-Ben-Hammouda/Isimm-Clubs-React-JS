import React from "react";
import {useState , useEffect} from "react";
import { FaChevronRight as Right , FaChevronLeft as Left } from "react-icons/fa";
import {IconContext} from "react-icons";
import img1 from "./img1.png";
import img2 from "./img2.png";
import img3 from "./img3.jpg";
import img4 from "./img4.png";
import img5 from "./img5.png";

const Carousel = ()=>{
  let images = [img1 , img2 , img3 , img4 ,img5];
  const [Src , setSrc] = useState(0);

  useEffect( ()=>{
    const interval = setInterval( ()=>{
      if(Src === 4)
      {
        setSrc(0);
      }
      else
      {
        setSrc(Src+1);
      }
    } , 3500);
    return ()=>{clearInterval(interval)}
  });

  const leftClickHandler = ()=>{
    if(Src === 0)
    {
      setSrc(4);
    }
    else
    {
      setSrc(Src-1);
    }
  }

  const rightClickHandler = ()=>{
    if(Src=== 4)
    {
      setSrc(0);
    }
    else
    {
      setSrc(Src+1);
    }
  }

  return(
    <div className="carousel">
      <IconContext.Provider value={ {size:"2.5rem" , color:"#333" , top:"50%"} } >
        <Left onClick={leftClickHandler} style={ 
          { 
            zIndex:5,
            cursor:"pointer", 
            position:"absolute",
            top:"50%",
            left:"2%", 
            transform:"translateY(-50%)"
          } 
        }/>
        
        <Right onClick={rightClickHandler} style={
          {
            zIndex:5,
            cursor:"pointer",
            position:"absolute", 
            top:"50%",
            right:"2%", 
            transform:"translateY(-50%)"
          }   
        }/>
        {
          images.map( (url,index)=>{
            if(index === Src)
            {
              return(
                <img alt="" key={index} src={images[Src]} className="active" />
              );
            }
            else
            {
              return(
                <img alt="" key={index} src={images[Src]} className="disabled" />
              );
            }
          })
        }
      </IconContext.Provider>
    </div>
  );
}

export default Carousel;