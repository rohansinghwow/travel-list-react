import React from "react";
import Place from './Place'
import './main.css'
export default function App(){

  const [state, setState] = React.useState([])
  const [loading, setLoading] = React.useState(true)

  const delTours = (id) => {
        const newTours = state.filter((item=>item.id !== id))
        setState(newTours)
  }

    const mapper = state.map(item=>{  //maping the state array and send it to Places.jsx
        
        return (
            
                <Place key={item.id} id={item.id} toursDel={delTours} name={item.name} img={item.image} info={item.info} 
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
        
    <>
    <h1>Items Left : {state.length}</h1>
    {loading ? <h1>Loading...</h1> : mapper }
    <button className="refresh-btn" onClick={getData}>Refresh</button>
    </>
        
)

  
}




