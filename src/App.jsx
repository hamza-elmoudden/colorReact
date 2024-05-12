import './App.css';
import React, { useEffect, useState } from 'react';

function App() {

  const [colorbox, setColorbox] = useState(null);
  const [isColor, setIsColor] = useState(null);
  const [listColor ,setListColor] = useState([])

  const changeColorHex = () => {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  };


  useEffect(()=>{

    const boxColor = changeColorHex();
    const colorOne = changeColorHex();
    const colorTwo = changeColorHex();

    setColorbox(boxColor);


    setListColor([boxColor,colorOne,colorTwo])

    
  },[])


  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * 3);
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  

  const HandelChangeColor = (color)=>{

    if(color === colorbox){
      setIsColor(true);

      const boxColor = changeColorHex();
      const colorOne = changeColorHex();
      const colorTwo = changeColorHex();

      setTimeout(()=>{
        setColorbox(boxColor)

        setListColor(shuffleArray([colorOne, colorTwo, boxColor]))
        setIsColor(null)
      },[1000])
      
    }else{
      setIsColor(false)
    }
  }

  console.log(colorbox)
 
  return (
   <>
      <section className="container mx-auto flex justify-center items-center h-[100vh]">
        <div className="w-90 space-y-10">
          <div className=' h-96  bg-blue-500 box' style={{background:`${colorbox}`}}>
          </div>
          <div className='h-10 flex gap-2'>
              {
                listColor.map((item,index)=>{
                 return(
                  <div key={index} className="py-3 px-6 border border-spacing-1  flex items-center cursor-pointer hover:shadow-lg hover:translate-z-10 bg-gray-400 rounded-xl">
                  <h1 className="text-xl font-serif uppercase" onClick={()=>HandelChangeColor(item)}>{item}</h1>
                  </div>
                 )
                })
              }
          </div>
          <div className="text-center" style={{opacity: isColor === null ? 0 : 1}}>
            {isColor === true ? <h1 className="text-xl uppercase font-serif" style={{color:`${colorbox}`}}>Anser  is true</h1>:<h1 style={{color:`${colorbox}`}} className="text-xl uppercase font-serif">Anser Not True</h1>}
          </div>
        </div>
      </section>
   </>
  );
}

export default App;