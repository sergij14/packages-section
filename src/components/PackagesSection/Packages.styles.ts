import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PackagesContainer = styled.div`
  display: flex;
  margin-top: 8rem;
`;

export const NavButtons = styled.div`
  margin-top: 4rem;
  display: flex;
  justify-content: center;
  gap: 1rem;
  & > button {
    all: unset;
    border: 1px red solid;
  }
`;

export const Heading = styled.h2`
  margin: 4rem 0;
  font-size: 6.4rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.violetDark};
  text-align: center;
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
`;

export const Option = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  height: 8rem;
  border: ${({ theme }) => theme.colors.grayLight} 1px solid;
  padding: 1.8rem;
  background-color: white;
  border-radius: 1.2rem;
  position: relative;
`;

export const OptionRight = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  height: 8rem;
  border: ${({ theme }) => theme.colors.grayLight} 1px solid;
  padding: 1.8rem;
  background-color: white;
  border-radius: 1.2rem;
  position: relative;
`;

export const OptionMeta = styled.div``;

export const CheckBoxWrapper = styled.div`
  position: relative;
`;
export const CheckBoxLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 42px;
  height: 26px;
  border-radius: 15px;
  background: #bebebe;
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: 3px;
    background: #ffffff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
  }
`;
export const CheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 42px;
  height: 26px;
  &:checked + ${CheckBoxLabel} {
    background: #4fbe79;
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      margin-left: 21px;
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
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  position: relative;
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