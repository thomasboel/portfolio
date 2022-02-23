import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { colors } from '../util/theme';

interface SignatureSVGProps {
  strokeWidth: number;
  strokeColor: string;
  strokeOpacity: number;
  strokeOffsets: number[];
  strokeDashArray: number[];
  style?: any;
}

const SignatureSVG = ({ strokeWidth, strokeColor, strokeOffsets, strokeDashArray, strokeOpacity, style=null }: SignatureSVGProps) => {
  return (
    <svg 
      width="800" 
      height="600"
      style={style}
    >
      <path 
        className="sq_thomas" 
        d="m193.33333,298.33333c0,0 -116.66667,72.66667 -110.66667,92c6,19.33333 358,-188 303.33333,-186.66667c-54.66667,1.33333 -220,68 -213.33333,81.33333c6.66667,13.33333 344.66667,-98 336,-101.33333c-8.66667,-3.33333 -132,45.33333 -135.33333,50c-3.33333,4.66667 -119.33333,97.33333 -116.66667,102.66667c2.66667,5.33333 79.33333,-60.66667 94,-56.66667c14.66667,4 -38,31.33333 -37.33333,37.33333c0.66667,6 37.33333,2.66667 37.33333,-8.66667c0,-11.33333 -29.33333,-6 -26,3.33333c3.33333,9.33333 44.66667,-14 46,-11.33333c1.33333,2.66667 -32.66667,16.66667 -20.66667,17.33333c12,0.66667 32,-12 28.66667,-15.33333c-3.33333,-3.33333 -38.66667,31.33333 -15.33333,16.66667c23.33333,-14.66667 24,-34.66667 22,-15.33333c-2,19.33333 25.33333,-5.33333 8,2.66667c-17.33333,8 -54.66667,56.66667 -14.66667,24.66667c40,-32 110.66667,-116.66667 110,-117" 
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeOpacity={strokeOpacity}
        strokeDashoffset={strokeOffsets[0]}
        strokeDasharray={strokeDashArray[0]}
        fill="transparent"
      />
      <path 
        className="sq_b" 
        d="m387.33333,273.66667c102,-59.33333 151.33333,-88.66667 154.66667,-83.33333c3.33333,5.33333 -102,74 -93.33333,79.33333c8.66667,5.33333 124,-68 127.33333,-56.66667c3.33333,11.33333 -194,131.33333 -190.66667,142" 
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeOpacity={strokeOpacity}
        strokeDashoffset={strokeOffsets[1]}
        strokeDasharray={strokeDashArray[1]}
        fill="transparent"
      />
      <path 
        className="sq_m" 
        d="m464.66667,309c-76,56.66667 146,-120 150.66667,-116.66667c4.66667,3.33333 -68,50.66667 -63.33333,53.33333c4.66667,2.66667 108.66667,-77.33333 112.66667,-72.66667c4,4.66667 -108.66667,116 -108,121.33333" 
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeOpacity={strokeOpacity}
        strokeDashoffset={strokeOffsets[2]}
        strokeDasharray={strokeDashArray[2]}
        fill="transparent"
      />
    </svg>
  );
}

const Wrapper = styled.div`
  position: relative;
  width: 800px;
  height: 600px;
`;

interface SignatureProps {
  strokeWidth?: number;
  strokeColor?: string;
  strokeOpacity?: number;
}

const Signature = ({ strokeWidth=3, strokeColor=colors.red, strokeOpacity=1 }: SignatureProps) => {
  const [ offsetA, setOffsetA ] = useState(2200);
  const [ offsetB, setOffsetB ] = useState(700);
  const [ offsetC, setOffsetC ] = useState(700);

  const [ speed ] = useState(3);

  let interval: NodeJS.Timer;

  useEffect(() => {
    startTimer()

    return () => {
      clearInterval(interval);
    }
  }, [offsetA, offsetB, offsetC]);

  const startTimer = () => {
    interval = setInterval(() => {
      if (offsetA >= 0) {
        setOffsetA(offsetA - speed);
      }
      else if (offsetB >= 0) {
        setOffsetB(offsetB - speed);
      }
      else if (offsetC >= 0) {
        setOffsetC(offsetC - speed);
      }
      else {
        console.log(offsetA, offsetB, offsetC)
        clearInterval(interval);
      }
    }, 0);
  }

  return (
    <Wrapper>
      <SignatureSVG
        strokeColor={strokeColor}
        strokeWidth={strokeWidth}
        strokeOpacity={strokeOpacity}
        strokeOffsets={[
          offsetA < 0 ? 0 : offsetA, 
          offsetB < 0 ? 0 : offsetB, 
          offsetC < 0 ? 0 : offsetC
        ]}
        strokeDashArray={[2200, 700, 700]}
        style={{ position: 'absolute' }}
      />
      <SignatureSVG
        strokeColor={strokeColor}
        strokeWidth={strokeWidth}
        strokeOpacity={.2}
        strokeOffsets={[
          offsetA < 0 ? 0 : offsetA, 
          offsetB < 0 ? 0 : offsetB, 
          offsetC < 0 ? 0 : offsetC
        ]}
        strokeDashArray={[2200, 700, 700]}
        style={{ position: 'absolute', top: 10, left: 10 }}
      />
    </Wrapper>
  );
}

export default Signature;
