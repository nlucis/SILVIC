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

  const mvSize = 450;

  return <>
    <div ref={ _mapContainer } style={{ width: '100vw', height: '100vh' }}></div>
    <canvas id='monovision' style={{ 
      width: `${mvSize}px`, 
      height: `${mvSize}px`,
      borderRadius: '50%',
      border: '6px solid #000',
      position: 'absolute',
      left: `calc(50% - ${mvSize / 2}px)`,
      top: `calc(50% - ${mvSize / 2}px)`,
      backgroundColor: '#FFAC00',
      boxShadow: '0px 0px 9px 6px #000',
      outline: 'solid 3px #FFF'
    }}></canvas>
    <object type="image/svg+xml" data="./components/client/Interactron.svg" style={{ 
      position: 'absolute', 
      top: '50wh',
      left: '50vw',
      pointerEvents: 'none' 
    }}></object>
  </>;
}

export default App;