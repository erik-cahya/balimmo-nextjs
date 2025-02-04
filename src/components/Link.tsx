import Image from "next/image";
import Link from "next/link";

type ButtonProps = {
    title: string;
    icon?: string;    
    variant: string;
    href?: string;
    target?: boolean;
}

const Links = ({ title, icon, variant, href, target}: ButtonProps) => {
  return (
    <Link
        className={`flex items-center justify-center gap-3 rounded-full ${variant}`}
        href={href || '/'}
        target={target ? '_blank' : '_self'}
    >
        {icon && <Image src={icon} alt={title} width={24} height={24} />}
        {title}
    </Link>
    
  )
}

export default Links