import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PackagesContainer = styled.div`
  display: flex;
  margin-top: 8rem;
  @media (max-width: ${({ theme }) => theme.breakPoints.md}) {
    gap: 2rem;
    flex-direction: column;
    margin-top: 4rem;
  }
`;

export const NavButtons = styled.div`
  margin-top: 4rem;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  @media (max-width: ${({ theme }) => theme.breakPoints.md}) {
    gap: 1rem;
    flex-wrap: wrap;
  }
`;

export const NavButton = styled.button<{ isActive: boolean }>`
  all: unset;
  cursor: pointer;
  border-radius: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.2rem 1.5rem;
  color: ${({ theme }) => theme.colors.violetLight};
  font-size: 1.4rem;
  font-weight: 700;
  ${({ theme, isActive }) =>
    isActive
      ? css`
          background-color: ${theme.colors.violetSoft};
          border: 2px ${theme.colors.violetSoft} solid;
          color: white;
        `
      : css`
          background-color: white;
          border: 2px ${theme.colors.grayLight} solid;
        `};

  &:focus {
    outline: 4px ${({ theme }) => theme.colors.grayLight} solid;
  }
  @media (max-width: ${({ theme }) => theme.breakPoints.md}) {
    font-size: 1.2rem;
  }
`;

export const Heading = styled.h2`
  margin: 4rem 0;
  font-size: 6.4rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.violetDark};
  text-align: center;
  @media (max-width: ${({ theme }) => theme.breakPoints.md}) {
    font-size: 4.4rem;
  }
`;

export const SubHeading = styled.h5`
  font-size: 1.8rem;
  color: ${({ theme }) => theme.colors.violetLight};
  text-align: center;
  font-weight: 400;
`;

export const Options = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  flex-grow: 1;
  flex-basis: 35%;
`;

export const Option = styled.li<{ isActive: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  height: 8rem;
  outline: ${({ theme, isActive }) =>
      isActive
        ? theme.colors.violetSoft + " 2px"
        : theme.colors.grayLight + " 1px"}
    solid;
  padding: 1.8rem;
  background-color: white;
  border-radius: 1.2rem;
  position: relative;
`;

export const OptionMeta = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  opacity: 0.7;
  gap: 0.5rem;
  &:hover {
    opacity: 1;
  }
`;

export const CheckBoxWrapper = styled.div`
  position: relative;
  width: 24px;
  height: 16px;
`;

export const OptionLabel = styled.h5`
  color: ${({ theme }) => theme.colors.violetDark};
  font-weight: 500;
  font-size: 1.5rem;
`;

export const OptionSubLabel = styled.h6`
  color: ${({ theme }) => theme.colors.violetLight};
  font-weight: 400;
  font-size: 1.2rem;
`;

export const CheckBoxLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 24px;
  height: 16px;
  border-radius: 15px;
  background: white;
  border: 2px ${({ theme }) => theme.colors.gray} solid;
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 5px;
    height: 5px;
    background: ${({ theme }) => theme.colors.gray};
    margin-top: 3.5px;
    margin-left: 3px;
  }
`;
export const CheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 22px;
  height: 14px;
  &:checked + ${CheckBoxLabel} {
    background: ${({ theme }) => theme.colors.violetSoft};
    border: 2px ${({ theme }) => theme.colors.violetSoft} solid;
    &::after {
      content: "";
      background: white;
      margin-left: 12px;
    }
  }
`;

export const Middle = styled.div<{ isActive: boolean }>`
  background: ${({ theme }) => theme.colors.purpleLight};
  border: ${({ theme, isActive }) =>
      isActive ? theme.colors.violetSoft : theme.colors.purpleLight}
    2px solid;
  border-radius: 2.4rem;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  position: relative;
  @media (max-width: ${({ theme }) => theme.breakPoints.md}) {
    margin: 4rem 0 2rem 0;
  }
`;

export const Image = styled.img`
  height: 8.6rem;
  width: 8.6rem;
  object-fit: cover;
  object-position: 50% 0;
  border-radius: 1rem;
  position: absolute;
  top: -4rem;
`;

export const Role = styled.h4`
  color: ${({ theme }) => theme.colors.violetLight};
  font-weight: 400;
  font-size: 1.4rem;
`;

export const Name = styled.h3`
  color: ${({ theme }) => theme.colors.violetDark};
  font-size: 1.8rem;
  font-weight: 700;
  margin-top: 4rem;
`;

export const Quotte = styled.p`
  color: ${({ theme }) => theme.colors.violetDark};
  font-size: 1.6rem;
  font-weight: 400;
  margin-top: 1rem;
  text-align: center;
`;
