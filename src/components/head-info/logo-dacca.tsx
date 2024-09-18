import logoDacca from "../../assets/logoDacca.jpg";

interface ILogoDaccaProps {
  className?: string;
  classNameImg?: string;
  classNameDacca?: string;
  IsVisibleDacca?: boolean;
}

const LogoDacca: React.FunctionComponent<ILogoDaccaProps> = ({
  className,
  classNameImg,
  classNameDacca,
  IsVisibleDacca = true,
  ...props
}) => {
  const VisibleDacca = IsVisibleDacca;

  return (
    <div className={`flex justify-center items-center ${className} `}>
      <img
        src={logoDacca}
        alt=""
        className={`w-14 ${classNameImg}`}
        {...props}
      />
      {VisibleDacca && (
        <div className={` ${classNameDacca}`}>DACCA BTP SARL</div>
      )}
    </div>
  );
};

export default LogoDacca;
