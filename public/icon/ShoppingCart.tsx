interface Props {
  fill?: string;
  className?: string;
}
export default function ShoppingCart({ fill = "black", className }: Props) {
  return (
    <svg viewBox="0 0 32 32" className={`w-8 ${className}`} fill={fill}>
      <path d="M23.52,29h-15a5.48,5.48,0,0,1-5.31-6.83L6.25,9.76a1,1,0,0,1,1-.76H24a1,1,0,0,1,1,.7l3.78,12.16a5.49,5.49,0,0,1-.83,4.91A5.41,5.41,0,0,1,23.52,29ZM8,11,5.11,22.65A3.5,3.5,0,0,0,8.48,27h15a3.44,3.44,0,0,0,2.79-1.42,3.5,3.5,0,0,0,.53-3.13L23.28,11Z"></path>
      <path d="M20,17a1,1,0,0,1-1-1V8a3,3,0,0,0-6,0v8a1,1,0,0,1-2,0V8A5,5,0,0,1,21,8v8A1,1,0,0,1,20,17Z"></path>
    </svg>
  );
}
