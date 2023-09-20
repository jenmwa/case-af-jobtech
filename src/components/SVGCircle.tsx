interface ISVGCircleProps {
  title: string;
  value: string;
  text: string;
}

export const SVGCircle = ({ title, value, text }: ISVGCircleProps) => {
  return (
    <>
      <div>
        <h4>{title}</h4>
        <svg width="200" height="200">
          <g transform="rotate(-190 100 100)">
            <circle
              r="70"
              cx="100"
              cy="100"
              fill="transparent"
              stroke="lightgrey"
              strokeWidth="2rem"
              strokeDasharray="439.8"
              strokeDashoffset="0"
            ></circle>
            <circle
              r="70"
              cx="100"
              cy="100"
              fill="transparent"
              stroke="#ca2c92"
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
