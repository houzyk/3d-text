import { useRef, useState } from 'react';
import { useFrame, extend } from '@react-three/fiber'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry'
import roboto from "../../assets/Roboto.json";

extend({ TextGeometry });

interface LetterProps {
  position: any;
  letter: string;
}

const Letter: React.FunctionComponent<LetterProps> = ({
  position,
  letter
}) => {
  const elRef = useRef(null);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const font = new FontLoader().parse(roboto);

  useFrame(() => {
    const letterRef = elRef.current as any;
    if (letterRef && isHovered) {
      // todo
    }
  });

  return (
    <mesh
      position={position}
      ref={elRef}
      scale={isClicked ? 1.5 : 1}
      onClick={() => setIsClicked(!isClicked)}
      onPointerOver={() => setIsHovered(true)}
      onPointerOut={() => setIsHovered(false)}
    >
      <textGeometry args={[letter, {font, size: 1, height: 0.5}]}/>
      <meshLambertMaterial attach='material' color={'white'}/>
    </mesh>
  );
}

export default Letter;
