import Image from "next/image";

type ButtonProps = {
    type: 'button' | 'submit';
    title: string;
    icon?: string;
    variant: string;
    onclick:  (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({ type, title, icon, variant, onclick}: ButtonProps) => {
  return (
    <button
        className={`flex gap-3 rounded-full ${variant}`}
        type={type} onClick={onclick}
    >
        {icon && <Image src={icon} alt={title} width={24} height={24} />}
        {title}
    </button>
  )
}

export default Button