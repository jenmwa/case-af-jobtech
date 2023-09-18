import { IOccupation } from "../models/IOccupation";

interface ResultSummaryProps {
  occupation: IOccupation;
}

export const ResultSummary = ({ occupation }: ResultSummaryProps) => {
  console.log("occupation", occupation);
  return <>test</>;
};
