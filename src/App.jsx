import React from "react";
import Place from './Place'
import './main.css'
export default function App(){

  const [state, setState] = React.useState([])
  const [loading, setLoading] = React.useState(true)
    

    const mapper = state.map(item=>{  //maping the state array and send it to Places.jsx
        
        return (
            
                <Place name={item.name} img={item.image} info={item.info} 
                price={item.price}
                />
            
            
        )
        
    })

    function getData(){
        const url = 'https://course-api.com/react-tours-project'
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            setState(data)
            setLoading(false)
        })
        
        
      }
    
    React.useEffect(()=>{
        getData() //get API data after rendering
        
        
    }, [])

return (
        
    loading? <h1>Loading...</h1> : mapper
        
)

  
}




