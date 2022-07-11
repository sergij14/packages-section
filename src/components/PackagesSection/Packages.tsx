import React from "react";
import usePackagesSection from "./hooks/usePackagesSection";
import {
  CheckBox,
  CheckBoxLabel,
  CheckBoxWrapper,
  Container,
  Heading,
  Image,
  Middle,
  Name,
  NavButton,
  NavButtons,
  Option,
  OptionLabel,
  OptionMeta,
  Options,
  OptionSubLabel,
  PackagesContainer,
  Quotte,
  Role,
  SubHeading,
} from "./Packages.styles";
import SVGLines from "./UI/SVGLines";

const Packages = () => {
  const {
    data,
    activePackageData,
    setActivePackage,
    activeFeature,
    setActiveFeature,
  } = usePackagesSection();

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
          <NavButton
            key={label + id}
            isActive={activePackageData?.id === id}
            onClick={() => setActivePackage(+id)}
          >
            {label}
          </NavButton>
        ))}
      </NavButtons>
      <PackagesContainer>
        <Options>
          {activePackageData?.features.left.map(({ label, subLabel, id }) => (
            <Option key={id} isActive={id === activeFeature}>
              <OptionMeta onClick={() => setActiveFeature(id)}>
                <OptionLabel>{label}</OptionLabel>
                <OptionSubLabel>{subLabel}</OptionSubLabel>
              </OptionMeta>
              <CheckBoxWrapper>
                <CheckBox
                  id={"checkbox-" + id}
                  type="checkbox"
                  onChange={() => setActiveFeature(id)}
                  checked={id === activeFeature}
                />
                <CheckBoxLabel htmlFor={"checkbox-" + id} />
              </CheckBoxWrapper>
            </Option>
          ))}
        </Options>
        <SVGLines
          {...{
            position: "left",
            activeFeature: activeFeature.split("."),
            activePackage: activePackageData?.id,
          }}
        />
        <Middle isActive={activePackageData?.id === activeFeature.slice(0, 1)}>
          <Image
            src={activePackageData?.person.imgUrl}
            alt={activePackageData?.person.name}
          />
          <Name>{activePackageData?.person.name}</Name>
          <Role>{activePackageData?.person.position}</Role>
          <Quotte>{activePackageData?.person.quotte}</Quotte>
        </Middle>
        <SVGLines
          {...{
            position: "right",
            activeFeature: activeFeature.split("."),
            activePackage: activePackageData?.id,
          }}
        />
        <Options>
          {activePackageData?.features.right.map(({ label, subLabel, id }) => (
            <Option key={id} isActive={id === activeFeature}>
              <OptionMeta onClick={() => setActiveFeature(id)}>
                <OptionLabel>{label}</OptionLabel>
                <OptionSubLabel>{subLabel}</OptionSubLabel>
              </OptionMeta>
              <CheckBoxWrapper>
                <CheckBox
                  id={"checkbox-" + id}
                  type="checkbox"
                  onChange={() => setActiveFeature(id)}
                  checked={id === activeFeature}
                />
                <CheckBoxLabel htmlFor={"checkbox-" + id} />
              </CheckBoxWrapper>
            </Option>
          ))}
        </Options>
      </PackagesContainer>
    </Container>
  );
};

export default Packages;
