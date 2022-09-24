import { useEffect, useMemo, useState } from 'react';
import styled from "styled-components"
import { Canvas } from '@react-three/fiber'

import Letter from "./Letter";

const Hero = () => {

  const letters = useMemo(() => ['H', 'O', 'U', 'Z', 'A', 'I', 'R'], []);

  const [hLetterPosition, setHLetterPosition] = useState([0, 3, 0]);
  const [oLetterPosition, setOLetterPosition] = useState([0, 2, 0]);
  const [uLetterPosition, setULetterPosition] = useState([0, 1, 0]);
  const [zLetterPosition, setZLetterPosition] = useState([0, 0, 0]);
  const [aLetterPosition, setALetterPosition] = useState([0, -1, 0]);
  const [iLetterPosition, setILetterPosition] = useState([0, -2, 0]);
  const [rLetterPosition, setRLetterPosition] = useState([0, -3, 0]);

  useEffect(() => {
    setLetterPositionStates();
  }, []);

  useEffect(() => {
    const onResize = (event: any) => setLetterPositionStates();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const setLetterPositionStates = () => {
    if (window.innerWidth <= 475) {
      setHLetterPosition([0, 3, 0]);
      setOLetterPosition([0, 2, 0]);
      setULetterPosition([0, 1, 0]);
      setZLetterPosition([0, 0, 0]);
      setALetterPosition([0, -1, 0]);
      setILetterPosition([0, -2, 0]);
      setRLetterPosition([0, -3, 0]);
    } else {
      setHLetterPosition([-3, 0, 0]);
      setOLetterPosition([-2, 0, 0]);
      setULetterPosition([-1, 0, 0]);
      setZLetterPosition([0, 0, 0]);
      setALetterPosition([1, 0, 0]);
      setILetterPosition([2, 0, 0]);
      setRLetterPosition([3, 0, 0]);
    }
  }

  const letterPositions = [
    hLetterPosition,
    oLetterPosition,
    uLetterPosition,
    zLetterPosition,
    aLetterPosition,
    iLetterPosition,
    rLetterPosition
  ]

  return (
    <StyleWrapper className="hero-section">
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        {letters.map((letter, index) => (
          <Letter 
            position={letterPositions[index]} 
            letter={letter} 
            key={letter+index}
          />
        ))}
      </Canvas>
    </StyleWrapper>
  );
}

const StyleWrapper = styled.section`
  &.hero-section {
    background-color: black;
    overflow: hidden;
    height: 100vh;
  }
`

export default Hero;
