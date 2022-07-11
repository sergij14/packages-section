import React from "react";
import styled, { css } from "styled-components";

export type Props = {
  position: "left" | "right";
  activeFeature: string[];
  activePackage: string | undefined;
};


const SVGLines = ({ position, activeFeature, activePackage }: Props) => {

  const getActiveLine = (features: string[]) => {
    let str:string = position;
    
    if(position === 'left'){
      if(features[2] === '3') str='third-'+ str;
      if(features[2] === '2') str='second-'+ str;
      if(features[2] === '1') str='first-'+ str;
    }

    if(position === 'right'){
      if(features[2] === '3') str='first-'+ str;
      if(features[2] === '2') str='second-'+ str;
      if(features[2] === '1') str='third-'+ str;
    }

    return str;
  } 

  return (
    <LinesContainer {...{ position, activeFeature, activePackage }}>
      <svg
        height="100%"
        width="100%"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id={`first-${position}`}>
          <FirstPath
            {...{ position, activeFeature, activePackage }}
            d="m1,42 h40 a16,16 0 0 1 16,16 v66 m16,16 a16,16 0 0 1 -16,-16 m16,16 h48"
            fill="transparent"
          />
        </g>
        <g id={`second-${position}`}>
          <SecondPath
            {...{ position, activeFeature, activePackage }}
            d="m0,140 h200"
            fill="transparent"
          />
        </g>
        <g id={`third-${position}`}>
          <ThirdPath
            {...{ position, activeFeature, activePackage }}
            d="m58,156 a16,16 0 0 1 16,-16 h48 m-64,16 v66 a16,16 0 0 1 -16,16 m-40,0 h40"
            fill="transparent"
          />
        </g>
        <use xlinkHref={`#${getActiveLine(activeFeature)}`} />
      </svg>
    </LinesContainer>
  );
};

const LinesContainer = styled.div<Props>`
  width: 200px;
  ${({ position, activeFeature, activePackage }) => {
    if (position === "right") {
      return css`
        transform: rotate(-180deg);
      `;
    }
  }}
`;

const FirstPath = styled.path<Props>`
  stroke: ${({ theme }) => theme.colors.purpleLight};
  stroke-width: 2px;
  ${({ position, activeFeature, activePackage }) => {
    if (position === "left") {
      if (
        activePackage === activeFeature[0] &&
        activeFeature[1] === "1" &&
        activeFeature[2] === "1"
      ) {
        return css`
          stroke: ${({ theme }) => theme.colors.violetSoft};
        `;
      }
    }

    if (position === "right") {
      if (
        activePackage === activeFeature[0] &&
        activeFeature[1] === "2" &&
        activeFeature[2] === "3"
      ) {
        return css`
          stroke: ${({ theme }) => theme.colors.violetSoft};
        `;
      }
    }
  }}
`;

const SecondPath = styled.path<Props>`
  stroke: ${({ theme }) => theme.colors.purpleLight};
  stroke-width: 2px;
  ${({ position, activeFeature, activePackage }) => {
    if (position === "left") {
      if (
        activePackage === activeFeature[0] &&
        activeFeature[1] === "1" &&
        activeFeature[2] === "2"
      ) {
        return css`
          stroke: ${({ theme }) => theme.colors.violetSoft};
        `;
      }
    }

    if (position === "right") {
      if (
        activePackage === activeFeature[0] &&
        activeFeature[1] === "2" &&
        activeFeature[2] === "2"
      ) {
        return css`
          stroke: ${({ theme }) => theme.colors.violetSoft};
        `;
      }
    }
  }}
`;

const ThirdPath = styled.path<Props>`
  stroke: ${({ theme }) => theme.colors.purpleLight};
  stroke-width: 2px;
  ${({ position, activeFeature, activePackage }) => {
    if (position === "left") {
      if (
        activePackage === activeFeature[0] &&
        activeFeature[1] === "1" &&
        activeFeature[2] === "3"
      ) {
        return css`
          stroke: ${({ theme }) => theme.colors.violetSoft};
        `;
      }
    }

    if (position === "right") {
      if (
        activePackage === activeFeature[0] &&
        activeFeature[1] === "2" &&
        activeFeature[2] === "1"
      ) {
        return css`
          stroke: ${({ theme }) => theme.colors.violetSoft};
        `;
      }
    }
  }}
`;

export default SVGLines;
