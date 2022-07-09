import styled, { css } from "styled-components";
import { Props } from "./Lines";

export const CurlyLines = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const Top = styled.div`
  height: 14rem;

  width: 12rem;
  position: relative;
  & > div {
    position: absolute;
  }
`;

export const LineLeft = styled.div<{
  position: Props["position"];
  activeFeature: string[];
  activePackage: string | undefined;
}>`
  width: 6.2rem;
  height: 5.2rem;
  border: 2px solid ${({ theme }) => theme.colors.purpleLight};
  border-radius: 16px;
  top: 4rem;
  ${({ position, activeFeature, activePackage }) => {
    if (position === "right") {
      let normalStyles = () => css`
        border-right-width: 0;
        border-bottom-width: 0;
        border-top-right-radius: 0;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        top: 4rem;
        right: 0;
      `;
      if (
        activePackage === activeFeature[0] &&
        activeFeature[1] === "2" &&
        activeFeature[2] === "1"
      ) {
        return css`
          border: 2px solid ${({ theme }) => theme.colors.violetSoft};
          z-index: -1 !important;
          ${normalStyles};
        `;
      } else {
        return css`
          ${normalStyles}
        `;
      }
    }
  }}

  ${({ position, activeFeature, activePackage }) => {
    if (position === "left") {
      let normalStyles = () => css`
        border-radius: 16px;
        border-left-width: 0;
        border-bottom-width: 0;
        border-bottom-right-radius: 0;
        border-top-left-radius: 0;
        top: 4rem;
      `;
      if (
        activePackage === activeFeature[0] &&
        activeFeature[1] === "1" &&
        activeFeature[2] === "1"
      ) {
        return css`
          border: 2px solid ${({ theme }) => theme.colors.violetSoft};
          z-index: -1 !important;
          ${normalStyles};
        `;
      } else {
        return css`
          ${normalStyles}
        `;
      }
    }
  }}


    z-index: -2;
`;

export const LineRight = styled.div<{
  position: Props["position"];
  activeFeature: string[];
  activePackage: string | undefined;
}>`
  width: 6rem;
  height: 5.2rem;
  border: 2px solid ${({ theme }) => theme.colors.purpleLight};
  border-radius: 16px;

  ${({ position, activeFeature, activePackage }) => {
    if (position === "left") {
      let normalStyles = () => css`
        border-right-width: 0;
        border-top-width: 0;
        border-top-left-radius: 0;
        border-bottom-right-radius: 0;
        bottom: -3px;
        right: 0;
      `;
      if (
        activePackage === activeFeature[0] &&
        activeFeature[1] === "1" &&
        activeFeature[2] === "1"
      ) {
        return css`
          border: 2px solid ${({ theme }) => theme.colors.violetSoft};
          z-index: -1 !important;
          ${normalStyles};
        `;
      } else {
        return css`
          ${normalStyles}
        `;
      }
    }
  }}

  ${({ position, activeFeature, activePackage }) => {
    if (position === "right") {
      let normalStyles = () => css`
        border-left-width: 0;
        border-top-width: 0;
        border-top-right-radius: 0;
        border-bottom-left-radius: 0;
        bottom: -3px;
        left: 0;
      `;
      if (
        activePackage === activeFeature[0] &&
        activeFeature[1] === "2" &&
        activeFeature[2] === "1"
      ) {
        return css`
          border: 2px solid ${({ theme }) => theme.colors.violetSoft};
          z-index: -1 !important;
          ${normalStyles};
        `;
      } else {
        return css`
          ${normalStyles}
        `;
      }
    }
  }}

z-index: -2;
`;

export const StraightLine = styled.div<{
  position: Props["position"];
  activeFeature: string[];
  activePackage: string | undefined;
}>`
  position: absolute;
  height: 1px;
  width: 200px;
  top: 14.1rem;
  left: 0;
  z-index: -4;
  ${({ position, activeFeature, activePackage }) => {
    if (position === "right") {
      if (
        activePackage === activeFeature[0] &&
        activeFeature[1] === "2" &&
        activeFeature[2] === "2"
      ) {
        return css`
          border-bottom: ${({ theme }) => theme.colors.violetSoft} 2px solid;
          z-index: -1 !important;
        `;
      } else {
        return css`
          border-bottom: ${({ theme }) => theme.colors.purpleLight} 2px solid;
        `;
      }
    }
  }}

  ${({ position, activeFeature, activePackage }) => {
    if (position === "left") {
      if (
        activePackage === activeFeature[0] &&
        activeFeature[1] === "1" &&
        activeFeature[2] === "2"
      ) {
        return css`
          border-bottom: ${({ theme }) => theme.colors.violetSoft} 2px solid;
          z-index: -1 !important;
        `;
      } else {
        return css`
          border-bottom: ${({ theme }) => theme.colors.purpleLight} 2px solid;
        `;
      }
    }
  }}
`;

export const Bottom = styled.div`
  height: 14rem;
  width: 12rem;
  position: relative;
  & > div {
    position: absolute;
  }
`;

export const LineLeftB = styled.div<{
  position: Props["position"];
  activeFeature: string[];
  activePackage: string | undefined;
}>`
  width: 6rem;
  height: 5rem;
  border: 2px solid ${({ theme }) => theme.colors.purpleLight};
  border-radius: 16px;

  ${({ position, activeFeature, activePackage }) => {
    if (position === "left") {
      let normalStyles = () => css`
        border-right-width: 0;
        border-bottom-width: 0;
        border-top-right-radius: 0;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        top: 1px;
        right: 0;
      `;
      if (
        activePackage === activeFeature[0] &&
        activeFeature[1] === "1" &&
        activeFeature[2] === "3"
      ) {
        return css`
          border: 2px solid ${({ theme }) => theme.colors.violetSoft};
          z-index: -1 !important;
          ${normalStyles};
        `;
      } else {
        return css`
          ${normalStyles}
        `;
      }
    }
  }}

  ${({ position, activeFeature, activePackage }) => {
    if (position === "right") {
      let normalStyles = () => css`
        border-left-width: 0;
        border-bottom-width: 0;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        top: 1px;
        left: 0;
      `;
      if (
        activePackage === activeFeature[0] &&
        activeFeature[1] === "2" &&
        activeFeature[2] === "3"
      ) {
        return css`
          border: 2px solid ${({ theme }) => theme.colors.violetSoft};
          z-index: -1 !important;
          ${normalStyles};
        `;
      } else {
        return css`
          ${normalStyles}
        `;
      }
    }
  }}

z-index: -2;
`;

export const LineRightB = styled.div<{
  position: Props["position"];
  activeFeature: string[];
  activePackage: string | undefined;
}>`
  width: 6.2rem;
  height: 5.2rem;
  border: 2px solid ${({ theme }) => theme.colors.purpleLight};
  border-radius: 16px;

  ${({ position, activeFeature, activePackage }) => {
    if (position === "left") {
      let normalStyles = () => css`
        border-left-width: 0;
        border-top-width: 0;
        border-top-right-radius: 0;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        top: 5rem;
        left: 0;
      `;
      if (
        activePackage === activeFeature[0] &&
        activeFeature[1] === "1" &&
        activeFeature[2] === "3"
      ) {
        return css`
          border: 2px solid ${({ theme }) => theme.colors.violetSoft};
          z-index: -1 !important;
          ${normalStyles};
        `;
      } else {
        return css`
          ${normalStyles}
        `;
      }
    }
  }}

  ${({ position, activeFeature, activePackage }) => {
    if (position === "right") {
      let normalStyles = () => css`
        border-radius: 16px;
        border-right-width: 0;
        border-top-width: 0;
        border-top-right-radius: 0;
        border-top-left-radius: 0;
        border-bottom-right-radius: 0;
        top: 5rem;
        right: 0;
      `;
      if (
        activePackage === activeFeature[0] &&
        activeFeature[1] === "2" &&
        activeFeature[2] === "3"
      ) {
        return css`
          border: 2px solid ${({ theme }) => theme.colors.violetSoft};
          z-index: -1 !important;
          ${normalStyles};
        `;
      } else {
        return css`
          ${normalStyles}
        `;
      }
    }
  }}

z-index: -2;
`;
