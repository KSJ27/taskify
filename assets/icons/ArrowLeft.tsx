export default function ArrowLeft({
  width = '26',
  height = '26',
  color = '#333236',
}: {
  width?: string;
  height?: string;
  color?: string;
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 10 16"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M2.64075 8.00006L8.918 1.72281C9.08359 1.55721 9.16426 1.3601 9.16 1.13148C9.15572 0.902838 9.07078 0.705728 8.90518 0.540145C8.73959 0.374547 8.54248 0.291748 8.31385 0.291748C8.08523 0.291748 7.88811 0.374547 7.72252 0.540145L1.3427 6.93277C1.19206 7.08341 1.08042 7.25221 1.00777 7.43917C0.935127 7.62614 0.898808 7.8131 0.898808 8.00006C0.898808 8.18702 0.935127 8.37399 1.00777 8.56096C1.08042 8.74792 1.19206 8.91671 1.3427 9.06735L7.73533 15.46C7.90093 15.6256 8.09591 15.7062 8.32027 15.702C8.54461 15.6977 8.73959 15.6128 8.90518 15.4472C9.07078 15.2816 9.15358 15.0845 9.15358 14.8558C9.15358 14.6272 9.07078 14.4301 8.90518 14.2645L2.64075 8.00006Z" />
    </svg>
  );
}
