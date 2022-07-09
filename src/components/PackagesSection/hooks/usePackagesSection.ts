import { useEffect, useState } from "react";
import { PackagesData } from "../Packages.types";

const usePackagesSection = () => {
  const [data, setData] = useState<PackagesData["packages"]>();
  const [activePackage, setActivePackage] = useState(0);
  const [activeFeature, setActiveFeature] = useState('');

  const getData = () => {
    fetch("./data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data: PackagesData) => {
        setData(data.packages);
      })
      .catch((error) => console.log(error.message));
  };

  useEffect(() => {
    getData();
  }, []);

  return {
    data,
    activePackageData: data?.[activePackage],
    setActivePackage,
    activeFeature,
    setActiveFeature,
  };
};

export default usePackagesSection;
