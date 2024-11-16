import "cesium/Build/Cesium/Widgets/widgets.css";
import { Cartesian3, createOsmBuildingsAsync, Ion, Math as CesiumMath, Terrain, Viewer, CesiumWidget } from 'cesium';

// Your access token can be found at: https://ion.cesium.com/tokens.
// Replace `your_access_token` with your Cesium ion access token.

Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI0OTc0NzA0ZS0xZmQ0LTQyMGUtOTdhZC00YzhlNWUzZjI1NjUiLCJpZCI6ODIyOTgsImlhdCI6MTY0NDcwMjM1NX0.u4vAVHg4GuAwPjpurJXtzi7Ru0wHBACUnkVjVjHt2Us';

// Initialize the Cesium Viewer in the HTML element with the `cesiumContainer` ID.
const viewer = new CesiumWidget('map-container', {
  terrain: Terrain.fromWorldTerrain(),
});    

// Fly the camera to San Francisco at the given longitude, latitude, and height.
viewer.camera.flyTo({
  destination: Cartesian3.fromDegrees(-122.4175, 37.655, 400),
  orientation: {
    heading: CesiumMath.toRadians(0.0),
    pitch: CesiumMath.toRadians(-15.0),
  }
});

// Add Cesium OSM Buildings, a global 3D buildings layer.
const buildingTileset = await createOsmBuildingsAsync();
viewer.scene.primitives.add(buildingTileset);   