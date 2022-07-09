export interface PackagesData {
  packages: {
    label: string;
    id: string;
    features: {
      left: { label: string; id: string; subLabel: string }[];
      right: { label: string; id: string; subLabel: string }[];
    };
    person: {
      imgUrl: string;
      position: string;
      name: string;
      quotte: string;
    };
  }[];
}
