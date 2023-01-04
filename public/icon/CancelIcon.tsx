export default function CancelIcon() {
  return (
    <>
      <svg
        width="30px"
        height="30px"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs></defs>
        <g id="cross">
          <line className="cls-1" x1="7" x2="25" y1="7" y2="25" />
          <line className="cls-1" x1="7" x2="25" y1="25" y2="7" />
        </g>
      </svg>
      <style jsx>
        {`
          .cls-1 {
            fill: none;
            stroke: white;
            stroke-linecap: round;
            stroke-linejoin: round;
            stroke-width: 2px;
          }
        `}
      </style>
    </>
  );
}
