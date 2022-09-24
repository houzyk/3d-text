import React, { useEffect, useState } from 'react';
import styled from "styled-components"
import { Canvas } from '@react-three/fiber'

import HLetter from "./letters/H-letter";
import OLetter from "./letters/O-letter";
import ULetter from "./letters/U-letter";
import ZLetter from "./letters/Z-letter";
import ALetter from "./letters/A-letter";
import ILetter from "./letters/I-letter";
import RLetter from "./letters/R-letter";

const Hero = () => {

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
      setALetterPosition([0, -1, 0]);
      setILetterPosition([0, -2, 0]);
      setRLetterPosition([0, -3, 0]);
    } else {
      setHLetterPosition([-3, 0, 0]);
      setOLetterPosition([-2, 0, 0]);
      setULetterPosition([-1, 0, 0]);
      setALetterPosition([1, 0, 0]);
      setILetterPosition([2, 0, 0]);
      setRLetterPosition([3, 0, 0]);
    }
  }

  return (
    <StyleWrapper className="hero-section">
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <HLetter position={hLetterPosition} />
        <OLetter position={oLetterPosition} />
        <ULetter position={uLetterPosition} />
        <ZLetter position={zLetterPosition} />
        <ALetter position={aLetterPosition} />
        <ILetter position={iLetterPosition} />
        <RLetter position={rLetterPosition} />
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
