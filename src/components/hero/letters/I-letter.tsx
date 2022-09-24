import React, { useRef, useState } from 'react';
import { useFrame, extend } from '@react-three/fiber'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry'
import roboto from "../../../assets/Roboto.json";

extend({ TextGeometry });

const ILetter = (props: any) => {
  const ref = useRef();
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);

  const font = new FontLoader().parse(roboto);

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
      onPointerOut={(event) => hover(false)}
    >
      <textGeometry args={['I', {font, size: 1, height: 0.5}]}/>
      <meshLambertMaterial attach='material' color={'gold'}/>
    </mesh>
  );
}

export default ILetter;
