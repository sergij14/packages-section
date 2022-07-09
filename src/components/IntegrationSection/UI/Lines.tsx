import React from "react";
import styled, { css } from "styled-components";

type Props = {
  position: "left" | "right";
};

const Lines = ({ position }: Props) => {
  return (
    <CurlyLines>
      <Top>
        <LineLeft {...{ position }}></LineLeft>
        <LineRight {...{ position }}></LineRight>
      </Top>
      <StraightLine></StraightLine>
      <Bottom>
        <LineLeftB {...{ position }}></LineLeftB>
        <LineRightB {...{ position }}></LineRightB>
      </Bottom>
    </CurlyLines>
  );
};

const CurlyLines = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Top = styled.div`
  height: 14rem;

  width: 12rem;
  position: relative;
  & > div {
    position: absolute;
  }
`;

const LineLeft = styled.div<{ position: Props["position"] }>`
  width: 6.2rem;
  height: 5.2rem;
  border: 2px solid ${({ theme }) => theme.colors.violetDark};
  border-radius: 16px;
  top: 4rem;
  ${({ position }) =>
    position === "right" &&
    css`
      border-right-width: 0;
      border-bottom-width: 0;
      border-top-right-radius: 0;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      top: 4rem;
      right: 0;
    `}

  ${({ position }) =>
    position === "left" &&
    css`
      border-radius: 16px;
      border-left-width: 0;
      border-bottom-width: 0;
      border-bottom-right-radius: 0;
      border-top-left-radius: 0;
      top: 4rem;
    `}
  z-index: -2;
`;

const LineRight = styled.div<{ position: Props["position"] }>`
  width: 6rem;
  height: 5.2rem;
  border: 2px solid ${({ theme }) => theme.colors.violetDark};
  border-radius: 16px;

  ${({ position }) =>
    position === "left" &&
    css`
      border-right-width: 0;
      border-top-width: 0;
      border-top-left-radius: 0;
      border-bottom-right-radius: 0;
      bottom: -3px;
      right: 0;
    `}

  ${({ position }) =>
    position === "right" &&
    css`
      border-left-width: 0;
      border-top-width: 0;
      border-top-right-radius: 0;
      border-bottom-left-radius: 0;
      bottom: -3px;
      left: 0;
    `}
  z-index: -2;
`;

const StraightLine = styled.div`
  border-bottom: ${({ theme }) => theme.colors.purpleLight} 2px solid;
  position: absolute;
  height: 1px;
  width: 200px;
  top: 14.1rem;
  left: 0;
  z-index: -1;
`;

const Bottom = styled.div`
  height: 14rem;
  width: 12rem;
  position: relative;
  & > div {
    position: absolute;
  }
`;

const LineLeftB = styled.div<{ position: Props["position"] }>`
  width: 6rem;
  height: 5rem;
  border: 2px solid ${({ theme }) => theme.colors.violetDark};
  border-radius: 16px;

  ${({ position }) =>
    position === "right" &&
    css`
      border-left-width: 0;
      border-bottom-width: 0;
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      top: 1px;
      left: 0;
    `}
  ${({ position }) =>
    position === "left" &&
    css`
      border-right-width: 0;
      border-bottom-width: 0;
      border-top-right-radius: 0;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      top: 1px;
      right: 0;
    `}
  z-index: -2;
`;

const LineRightB = styled.div<{ position: Props["position"] }>`
  width: 6.2rem;
  height: 5.2rem;
  border: 2px solid ${({ theme }) => theme.colors.violetDark};
  border-radius: 16px;
  ${({ position }) =>
    position === "left" &&
    css`
      border-left-width: 0;
      border-top-width: 0;
      border-top-right-radius: 0;
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
      top: 5rem;
      left: 0;
    `}
  ${({ position }) =>
    position === "right" &&
    css`
      border-radius: 16px;
      border-right-width: 0;
      border-top-width: 0;
      border-top-right-radius: 0;
      border-top-left-radius: 0;
      border-bottom-right-radius: 0;
      top: 5rem;
      right: 0;
    `}
  z-index: -2;
`;

export default Lines;
