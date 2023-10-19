
import './App.css'
import { Map, Draggable } from "pigeon-maps";
import React, { useState } from 'react'


function App() {
  const [anchor, setAnchor] = useState([26.1715, 88.4089]);

  return (
    <>

      <Map height={800} width={1000} defaultCenter={[26.1715, 88.4089]} defaultZoom={11}>
        <Draggable offset={[60, 87]} anchor={anchor} onDragEnd={setAnchor}>
          <img src="/kawsar.png" width={40} height={40} alt="Pigeon!" />
        </Draggable>
      </Map>

    </>
  )
}

export default App
