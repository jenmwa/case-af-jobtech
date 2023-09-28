import { greyscaleBase, secondaryBase } from "./styled/variables";

interface ISVGCircleProps {
  title: string;
  value: string;
  text: string;
}

export const SVGCircle = ({ title, value, text }: ISVGCircleProps) => {
  return (
    <>
      <div style={{ width: "180px" }}>
        <h4>{title}</h4>
        <svg width="185" height="185">
          <g transform="rotate(-190 100 100)">
            <circle
              r="65"
              cx="108"
              cy="108"
              fill="transparent"
              stroke={greyscaleBase}
              strokeWidth="2rem"
              strokeDasharray="439.8"
              strokeDashoffset="0"
            ></circle>
            <circle
              r="65"
              cx="108"
              cy="108"
              fill="transparent"
              stroke={secondaryBase}
              strokeWidth="2rem"
              strokeDasharray="500"
              strokeDashoffset={value}
            ></circle>
          </g>
          <text x="50%" y="50%" dominantBaseline="central" textAnchor="middle">
            {text}
          </text>
        </svg>
      </div>
    </>
  );
};
