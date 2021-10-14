import React, { useState } from "react";
import { AddCategory } from "./Components/AddCategory";
import { GifGrid } from "./Components/GifGrid";

export const GifExpertApp = () =>{

  const [categories, setCategories] = useState([
      "One Punch"
        ]);

   /*  const handleAdd= () =>{
      
     /*  setCategories([...categories, "Match 5"]) *
      setCat/egories(cats => [...cats, "Match 5"])
      
    } */

    return (
      <>
        <h2>GifExpertApp</h2>
        <AddCategory setCategories={setCategories}/>
        <hr />
      <img src="https://mega.nz/file/XBBhDaJQ#zkvTPbo52uyyxMM93swgQWgKEorfBUcOQCI1RkElUaw" alt=video/>
        <ol>
          {
            categories.map(category =>(
              <GifGrid
               key={category}
              category={category}/>
            ))
          }
        </ol>
      </>
    );
}
