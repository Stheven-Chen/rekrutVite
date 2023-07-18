interface Label {
  text: string;
  color?: string;
  height?: string;
  width?: string;
  onClick?: () => void;
  textColor?: string;
}

const Button = (props: Label) => {
  const color = props.color ? `${props.color}` : "#0177b9";
  const height = props.height ? props.height : "8";
  const width = props.width ? `w-${props.width}` : "w-32";
  const textColor = props.textColor ? props.textColor : "black";

  const className = `px-4 h-${height} ${width} text-${textColor} rounded-xl transform-gpu transition-transform duration-300 active:scale-90`;

  return (
    <button onClick={props.onClick} className={className} style={{backgroundColor: `${color}`}}>
      {props.text}
    </button>
  );
};

export default Button;
