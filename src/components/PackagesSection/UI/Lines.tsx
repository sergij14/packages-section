import React from "react";
import {
  Bottom,
  CurlyLines,
  LineLeft,
  LineLeftB,
  LineRight,
  LineRightB,
  StraightLine,
  Top,
} from "./Lines.styles";

export type Props = {
  position: "left" | "right";
  activeFeature: string;
  activePackage: string | undefined;
};

const Lines = ({ position, activeFeature, activePackage }: Props) => {
  const props = {
    position,
    activeFeature: activeFeature.split("."),
    activePackage,
  };

  return (
    <CurlyLines>
      <Top>
        <LineLeft {...props} />
        <LineRight {...props} />
      </Top>
      <StraightLine {...props} />
      <Bottom>
        <LineLeftB {...props} />
        <LineRightB {...props} />
      </Bottom>
    </CurlyLines>
  );
};

export default Lines;
