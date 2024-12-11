'use client';

import { NextPage } from 'next';
import { 
  useState,
  useEffect, 
} from 'react';
import * as Cesium from 'cesium';

const App: NextPage = () => {

  // Viewer State
  const [
    cesiumViewer, 
    setCesiumViewer
  ] = useState<Cesium.Viewer | Cesium.CesiumWidget | null>(null);

  useEffect(() =>{


    const initCesium = async () => {
      // Assign access token
      Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJhZDM0OTQ5Yi1lYjQ1LTRkMjQtYjllMC00YjkzOWNkZmIzMDYiLCJpZCI6ODIyOTgsImlhdCI6MTY4OTIxODI0MX0.5o0xQ4T4BCI8afp_0lXzjO_wa0kTOkc7dCdCGnJDiro';

      // Assign Cesium Base URL
      const runtime = window as any;

      // Setup Terrain Provider
      const terrainProvider = await Cesium.createWorldTerrainAsync({
        requestVertexNormals: true,
        requestWaterMask: true,
      });

      // Initialize the Cesium Viewer
      const viewer = new Cesium.Viewer('map-container', {
        terrainProvider: terrainProvider,
        animation: false,
        timeline: false,
      });

      // Assign Viewer
      setCesiumViewer(viewer);
    };

    initCesium();
  }, [cesiumViewer]);

  return <>
    <div id='map-container' className='w-full h-full fixed'></div>
  </>;
}

export default App;