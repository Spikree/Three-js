import React from 'react';
import './App.css'
import { Canvas } from '@react-three/fiber';
import { BoxGeometry, MeshBasicMaterial } from 'three';

const App = () => {

  const Cube = ({position,size,color}) => {
    return (
      <mesh position={position}>
        <boxGeometry args={size} />
        <meshStandardMaterial color={color} />
      </mesh>
    )
  }

  return (
    <Canvas>

      <directionalLight position={[0,0,2]} intensity={0.5}/>
      <ambientLight intensity={0.1}/>

      <group position={[0, -1, 0]}>
      <Cube position={[1,0,0]} color={"green"} size={[1,1,1]}/>
      <Cube position={[-1,0,0]} color={"hotpink"} size={[1,1,1]}/>
      <Cube position={[-1,2,0]} color={"yellow"} size={[1,1,1]}/>
      <Cube position={[1,2,0]} color={"orange"} size={[1,1,1]}/>
      </group>
      
    </Canvas>
  );
};

export default App;
