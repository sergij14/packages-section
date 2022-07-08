import React from "react";
import styled from "styled-components";

const Intergration = () => {
  return (
    <Container>
      <Options>
        <Option>
          <OptionMeta>
            <h5>Sapling</h5>
            <p>hr management</p>
          </OptionMeta>
          <CheckBoxWrapper>
            <CheckBox id="checkbox" type="checkbox" />
            <CheckBoxLabel htmlFor="checkbox" />
          </CheckBoxWrapper>
        </Option>
        <Option>
          <OptionMeta>
            <h5>asfas sasfasfasf</h5>
            <p>hr mandf ssasfasfas</p>
          </OptionMeta>
          <CheckBoxWrapper>
            <CheckBox id="checkbox2" type="checkbox" />
            <CheckBoxLabel htmlFor="checkbox2" />
          </CheckBoxWrapper>
        </Option>
        <Option>
          <OptionMeta>
            <h5>Saplidfhdfhng</h5>
            <p>hr managdfhdfhement</p>
          </OptionMeta>
          <CheckBoxWrapper>
            <CheckBox id="checkbox3" type="checkbox" />
            <CheckBoxLabel htmlFor="checkbox3" />
          </CheckBoxWrapper>
        </Option>
      </Options>
      <Middle>
        <div>img</div>
        <h4>text</h4>
        <p>pararprag</p>
      </Middle>
      <div>right</div>
    </Container>
  );
};

export const Container = styled.div`
  display: flex;
  gap: 13rem;
  & > div {
    flex: 0 0 calc(100% / 3);
    max-width: calc(100% / 3);
  }
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
  border: ${({ theme }) => theme.colors.grayLight} 1px solid;
  padding: 1.8rem;
  background-color: white;
  border-radius: 1.2rem;
  position: relative;
  &:nth-child(1) {
    &:after {
      content: "";
      position: absolute;
      z-index: -1;
      height: 100%;
      width: 100%;
      left: 25%;
      right: -60px;
      top: 50%;
      border: 2px solid ${({ theme }) => theme.colors.violetDark};
      border-radius: 16px;
      border-left-width: 0;
      border-bottom-width: 0;
      border-bottom-right-radius: 0;
    }
    &:before {
      content: "";
      position: absolute;
      z-index: -1;
      height: calc(50% - 4px);
      width: 100%;
      left: 125%;
      top: 150%;
      border: 2px solid ${({ theme }) => theme.colors.violetDark};
      border-radius: 16px;
      border-right-width: 0;
      border-top-width: 0;
      border-top-left-radius: 0;
    }
  }
  &:nth-child(2) {
    &:after {
      content: "";
      position: absolute;
      z-index: -6;
      height: 2px;
      width: 100%;
      right: calc(-25% - 11px);
      top: 50%;
      border-top: 2px solid ${({ theme }) => theme.colors.purpleLight};
    }
  } 
  &:nth-child(3) {
    &:after {
      content: "";
      position: absolute;
      z-index: -4;
      height: 100%;
      width: 100%;
      left: 125%;
      right: -60px;
      bottom: calc(50% + 2rem);
      border: 2px solid ${({ theme }) => theme.colors.purpleLight};
      border-radius: 16px;
      border-right-width: 0;
      border-bottom-width: 0;
      border-bottom-left-radius: 0;
    }
    &:before {
      content: "";
      position: absolute;
      z-index: -4;
      height: 100%;
      width: 100%;
      left: 25%;
      bottom: 50%;
      border: 2px solid ${({ theme }) => theme.colors.purpleLight};
      border-radius: 16px;
      border-left-width: 0;
      border-top-width: 0;
      border-top-right-radius: 0;
    }
  }
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
  padding: 4rem;
`;

export default Intergration;
