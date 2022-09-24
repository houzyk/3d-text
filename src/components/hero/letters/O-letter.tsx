import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

const OLetter = (props: any) => {
  const ref = useRef();
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);
  useFrame((state, delta) => {
    const letterRef = ref.current as any;
    if (letterRef) {
      // letterRef.rotation.x += 0.01
    }
  });

  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}>
      <boxGeometry args={[0.8, 0.8, 0.8]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  );
}

export default OLetter;
