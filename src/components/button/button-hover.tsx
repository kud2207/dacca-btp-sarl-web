import Button from "react-bootstrap/Button";

interface ButtonHoverProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  nameButton: string;
  styleNameButton?: string;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  disabled?: boolean;
}

const ButtonHover: React.FC<ButtonHoverProps> = ({
  nameButton,
  styleNameButton,
  className,
  style,
  onClick,
  disabled,
  ...props
}) => {
  return (
    <div>
      <Button
        variant="outline-success"
        className={`m-0 ${className} `}
        onClick={onClick}
        disabled={disabled}
        {...props}
      >
        <div className={`${styleNameButton} `}>{nameButton}</div>
      </Button>
    </div>
  );
};

export default ButtonHover;
