import React, { useEffect, useState } from 'react'
import Controls from './components/Controls'
import Map from './components/Map'
import './styles.css'

const URL = 'https://api.wheretheiss.at/v1/satellites/25544'

export default function App() {
  const [coords, setCoords] = useState({
    longitude: 0,
    latitude: 0,
  })

  useEffect(() => {
    const interval = setInterval(getISSCoords, 5000);
    return () => clearInterval(interval)
  }, [])

  async function getISSCoords() {
    fetch(URL)
      .then(response => response.json())
      .then(data => {
        console.log("fetched data");
        setCoords({longitude: data.longitude, latitude: data.latitude});
      })
  }

  return (
    <main>
      <Map {...coords} />
      <Controls
        longitude={coords.longitude}
        latitude={coords.latitude}
        onRefresh={getISSCoords}
      />
    </main>
  )
}
