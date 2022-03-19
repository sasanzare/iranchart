import { useState,useEffect } from 'react';
import ReactMapGL,{Marker,Popup} from 'react-map-gl';
import location from './Map.json';
import Pin from './Pin';
import token from '../../microComponents/mapBoxToken.json'

const  MAPBOX_TOKEN = token.data[0];

function Map() { 
  const [viewport, setViewport] = useState({
    width: "100%",
    height: 400,
    latitude: 29.6314,
    longitude: 52.5192,
    zoom: 11,
  });
  const [selectedLocation,setSelectedLocation] = useState(null);
  const clickHandeler = (district)=>{
    setSelectedLocation(district);
  }
  useEffect(()=>{
    const listener = event =>{
      if(event.key === "Escape"){
        setSelectedLocation(null)
      }
    }
    window.addEventListener("keydown",listener);
    return()=>{
      window.removeEventListener("keydown",listener);
    }
  },[])

  
  return (
    <ReactMapGL className='rounded'
      {...viewport}
      onViewportChange={nextViewport => setViewport(nextViewport)}
      mapboxApiAccessToken={MAPBOX_TOKEN}
      mapStyle='mapbox://styles/parsakhojaste/ckyqp57zt0hug14oav773sq17'
    >
      {
       location.RECORDS.map((district)=>(
          <Marker 
            key={district.id}
            latitude={district.geometry.cordinates[0]} 
            longitude={district.geometry.cordinates[1]}
            
          >
          <Pin clicked={()=>clickHandeler(district)} /> 
          </Marker>
        ))
      }
      {
        selectedLocation?
        <Popup
        latitude={selectedLocation.geometry.cordinates[0]} 
        longitude={selectedLocation.geometry.cordinates[1]}
        onClose={()=>setSelectedLocation(null)}
        >
          {selectedLocation.name}
        </Popup>
        :null
      }


    </ReactMapGL>
  );
}

export default Map;