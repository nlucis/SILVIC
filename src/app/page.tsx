'use client';
import React, { 
  useRef,
  useEffect,
  // useState,
} from 'react';
import Mapbox, { 
  GeolocateControlOptions, 
  NavigationControlOptions 
} from 'mapbox-gl';
import { NextPage } from 'next';
import Image from 'next/image';
import { MAP } from 'res/lib/constants';


const App: NextPage = () => {

  // Viewer State
  const _mapContainer = useRef<HTMLDivElement>(null);

  // Initialize Map
  useEffect(() => {
    if (_mapContainer.current) {
      const map = new Mapbox.Map({
        container: _mapContainer.current,
        style: MAP.ZON,
        projection: 'globe',
        attributionControl: false,
        // preserveDrawingBuffer: true,
        hash: true,
        accessToken: process.env['NEXT_PUBLIC_MAPBOX_TOKEN'],
        antialias: true,
        
      });

      // Map Controls Config
      const geoControls = new Mapbox.GeolocateControl({
        showUserHeading: true,
        showUserLocation: true,
        trackUserLocation: true,
        showAccuracyCircle: true,
        positionOptions: { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 },
        fitBoundsOptions: { maxZoom: 18, duration: 1000 },
      } as GeolocateControlOptions);

      if ('navigator' in window) {  
        geoControls.options.geolocation = navigator.geolocation;
      }

      const mapControls = new Mapbox.NavigationControl({
        showCompass: true,
        showZoom: true,
        visualizePitch: true,
      } as NavigationControlOptions);

      const fullscreenToggle = new Mapbox.FullscreenControl({
        container: document.getElementById('app') as HTMLElement,
      });

      // Mapbox Controls - Order Sensitive
      map.addControl(geoControls, 'top-right');
      map.addControl(mapControls, 'top-right');
      map.addControl(fullscreenToggle, 'top-right');
      return () =>  map.remove();  
    }
    
  }, []);

  return <>
    <div ref={ _mapContainer } style={{ width: '100vw', height: '100vh' }}></div>
    <div id='telemetry'></div>
    <div id='monocle'>
      <canvas id='monovision'></canvas>
    </div>
    <Image id='interactron' src='/assets/interactron.svg' alt='interactron' width={ 100 } height={ 100 } />
  </>;
}

export default App;