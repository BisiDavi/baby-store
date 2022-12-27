export default function PromoCounter() {
  const duration = [
    { time: 21, period: "Days" },
    { time: 24, period: "Hours" },
    { time: 60, period: "Minutes" },
    { time: 60, period: "Secs" },
  ];
  return (
    <div className="promo-counter h-auto -ml-4 lg:-ml-8 p-2 lg:p-4 bg-blue-900 rounded-lg">
      <ul className="text-white h-auto flex flex-col">
        {duration.map((item) => (
          <li key={item.period} className="flex text-center flex-col text-sm lg:text-lg pb-2">
            {item.time}
            <span className="text-sm">{item.period}</span>
            <hr className=" w-2/3 mx-auto h-0.5 bg-white my-2" />
          </li>
        ))}
      </ul>
    </div>
  );
}
