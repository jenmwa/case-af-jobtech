import { useOutletData } from "../context/useOutletData";

export const About = () => {
  const { searchData } = useOutletData();
  console.log(searchData?.related_occupations[0]);
  return <>About this page</>;
};
