export function IcDeleteForever(props: iIconProps) {
  const { size = 30 } = props;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 30"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M7.80087 23.75C7.80087 25.125 8.971 26.25 10.4011 26.25H20.8023C22.2324 26.25 23.4025 25.125 23.4025 23.75V8.75H7.80087V23.75ZM10.9992 14.85L12.8324 13.0875L15.6017 15.7375L18.358 13.0875L20.1912 14.85L17.4349 17.5L20.1912 20.15L18.358 21.9125L15.6017 19.2625L12.8454 21.9125L11.0122 20.15L13.7685 17.5L10.9992 14.85ZM20.1522 5L18.852 3.75H12.3514L11.0512 5H6.50073V7.5H24.7027V5H20.1522Z" />
    </svg>
  );
}
