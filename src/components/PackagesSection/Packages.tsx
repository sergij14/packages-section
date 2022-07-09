import React from "react";
import styled from "styled-components";
import usePackagesSection from "./hooks/usePackagesSection";
import Lines from "./UI/Lines";

const Packages = () => {
  const { data, activePackageData } = usePackagesSection();

  return (
    <Container>
      <Heading>Easy Turn-Key Integration</Heading>
      <SubHeading>
        Increase job satisfaction, improve engagement, decrease burnout and
        lower payroll liability by reimagining what employees can do with their
        PTO.
      </SubHeading>
      <NavButtons>
        {data?.map(({ label, id }) => (
          <button key={label + id}>{label}</button>
        ))}
      </NavButtons>
      <FlexContainer>
        <Options>
          {activePackageData?.features.left.map(({ label, subLabel, id }) => (
            <Option key={id}>
              <OptionMeta>
                <h5>{label}</h5>
                <p>{subLabel}</p>
              </OptionMeta>
              <CheckBoxWrapper>
                <CheckBox id={'checkbox-' + id} type="checkbox" />
                <CheckBoxLabel htmlFor={'checkbox-' + id} />
              </CheckBoxWrapper>
            </Option>
          ))}
        </Options>
        <Lines position="left" />
        <Middle>
          <div>{activePackageData?.person.imgUrl}</div>
          <h4>{activePackageData?.person.position}</h4>
          <h4>{activePackageData?.person.name}</h4>
          <p>{activePackageData?.person.quotte}</p>
        </Middle>
        <Lines position="right" />
        <Options>
          {activePackageData?.features.right.map(({ label, subLabel, id}) => (
            <OptionRight key={id}>
              <OptionMeta>
                <h5>{label}</h5>
                <p>{subLabel}</p>
              </OptionMeta>
              <CheckBoxWrapper>
                <CheckBox id={'checkbox-' + id} type="checkbox" />
                <CheckBoxLabel htmlFor={'checkbox-' + id} />
              </CheckBoxWrapper>
            </OptionRight>
          ))}
        </Options>
      </FlexContainer>
    </Container>
  );
};

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FlexContainer = styled.div`
  display: flex;
  margin-top: 6rem;
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

const CheckBoxWrapper = styled.div`
  position: relative;
`;
const CheckBoxLabel = styled.label`
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
    transition: 0.2s;
  }
`;
const CheckBox = styled.input`
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
      transition: 0.2s;
    }
  }
`;

export const Middle = styled.div`
  background: ${({ theme }) => theme.colors.purpleLight};
  border: ${({ theme }) => theme.colors.violetSoft} 2px solid;
  border-radius: 2.4rem;
  padding: 3rem;
  flex-grow: 1;
`;

export default Packages;
