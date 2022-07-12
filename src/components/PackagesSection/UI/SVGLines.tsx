import React from "react";
import styled, { css } from "styled-components";

export type Props = {
  position: "left" | "right";
  activeFeature: string[];
  activePackage: string | undefined;
};

const SVGLines = ({ position, activeFeature, activePackage }: Props) => {
  const getActiveLine = (features: string[]) => {
    let str: string = position;

    if (position === "left") {
      if (features[2] === "3") str = "third-" + str;
      if (features[2] === "2") str = "second-" + str;
      if (features[2] === "1") str = "first-" + str;
    }

    if (position === "right") {
      if (features[2] === "3") str = "first-" + str;
      if (features[2] === "2") str = "second-" + str;
      if (features[2] === "1") str = "third-" + str;
    }

    return str;
  };

  const isActiveLine = (
    activeFeature: Props["activeFeature"],
    activePackage: Props["activePackage"],
    number: string
  ) => {
    let activePositionNumber = position === "left" ? "1" : "2";
    if (
      activePackage === activeFeature[0] &&
      activeFeature[1] === activePositionNumber &&
      activeFeature[2] === number
    ) {
      return true;
    }

    return false;
  };

  return (
    <LinesContainer {...{ position }}>
      <svg
        height="100%"
        width="100%"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id={`first-${position}`}>
          <Path
            isActive={isActiveLine(
              activeFeature,
              activePackage,
              position === "left" ? "1" : "3"
            )}
            d="m1,42 h40 a16,16 0 0 1 16,16 v66 m16,16 a16,16 0 0 1 -16,-16 m16,16 h48"
            fill="transparent"
          />
        </g>
        <g id={`second-${position}`}>
          <Path
            isActive={isActiveLine(activeFeature, activePackage, "2")}
            d="m0,140 h200"
            fill="transparent"
          />
        </g>
        <g id={`third-${position}`}>
          <Path
            isActive={isActiveLine(
              activeFeature,
              activePackage,
              position === "left" ? "3" : "1"
            )}
            d="m58,156 a16,16 0 0 1 16,-16 h48 m-64,16 v66 a16,16 0 0 1 -16,16 m-40,0 h40"
            fill="transparent"
          />
        </g>
        <use xlinkHref={`#${getActiveLine(activeFeature)}`} />
      </svg>
    </LinesContainer>
  );
};

const LinesContainer = styled.div<{ position: Props["position"] }>`
  width: 200px;
  ${({ position }) => {
    if (position === "right") {
      return css`
        transform: rotate(-180deg);
      `;
    }
  }}
  @media (max-width: ${({ theme }) => theme.breakPoints.md}) {
    display: none;
  }
`;

const Path = styled.path<{ isActive: boolean }>`
  stroke: ${({ theme }) => theme.colors.purpleLight};
  stroke-width: 2px;
  ${({ isActive }) => {
    if (isActive) {
      return css`
        stroke: ${({ theme }) => theme.colors.violetSoft};
      `;
    }
  }}
`;

export default SVGLines;
