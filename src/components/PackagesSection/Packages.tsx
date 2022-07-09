import React from "react";
import usePackagesSection from "./hooks/usePackagesSection";
import { CheckBox, CheckBoxLabel, CheckBoxWrapper, Container, Heading, Image, Middle, Name, NavButtons, Option, OptionMeta, OptionRight, Options, PackagesContainer, Quotte, Role, SubHeading } from "./Packages.styles";
import Lines from "./UI/Lines";

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
          <button key={label + id} onClick={() => setActivePackage(+id)}>
            {label}
          </button>
        ))}
      </NavButtons>
      <PackagesContainer>
        <Options>
          {activePackageData?.features.left.map(({ label, subLabel, id }) => (
            <Option key={id}>
              <OptionMeta>
                <h5>{label}</h5>
                <p>{subLabel}</p>
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
        <Lines
          {...{
            position: "left",
            activeFeature,
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
        <Lines
          {...{
            position: "right",
            activeFeature,
            activePackage: activePackageData?.id,
          }}
        />
        <Options>
          {activePackageData?.features.right.map(({ label, subLabel, id }) => (
            <OptionRight key={id}>
              <OptionMeta>
                <h5>{label}</h5>
                <p>{subLabel}</p>
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
            </OptionRight>
          ))}
        </Options>
      </PackagesContainer>
    </Container>
  );
};

export default Packages;
