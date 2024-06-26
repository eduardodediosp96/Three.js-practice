import * as THREE from "three";

const positionArray = new Float32Array(9);
// first vertex
positionArray[0] = 0;
positionArray[1] = 0;
positionArray[2] = 0;

// second vertex
positionArray[3] = 0;
positionArray[4] = 1;
positionArray[5] = 0;

// third vertex
positionArray[6] = 1;
positionArray[7] = 0;
positionArray[8] = 0;

const positionsAttribute = new THREE.BufferAttribute(positionArray, 3);
export default positionsAttribute;
