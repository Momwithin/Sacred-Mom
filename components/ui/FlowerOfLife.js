
export function FlowerOfLife({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="50" cy="50" r="45" stroke="#e0c27c" strokeWidth="2.5"/>
      <circle cx="50" cy="15" r="20" stroke="#e0c27c" strokeWidth="1" />
      <circle cx="50" cy="85" r="20" stroke="#e0c27c" strokeWidth="1" />
      <circle cx="15" cy="50" r="20" stroke="#e0c27c" strokeWidth="1" />
      <circle cx="85" cy="50" r="20" stroke="#e0c27c" strokeWidth="1" />
      <circle cx="30" cy="30" r="20" stroke="#e0c27c" strokeWidth="1" />
      <circle cx="70" cy="70" r="20" stroke="#e0c27c" strokeWidth="1" />
    </svg>
  );
}
