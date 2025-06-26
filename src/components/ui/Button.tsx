import Link from "next/link";

interface ButtonProps {
    text: string;
    size?: "small" | "medium" | "large";
    link?: string;
}

export default function Button({ text, size = "medium", link }: ButtonProps) {
    const sizeClasses = {
        small: "px-4 py-2 text-sm",
        medium: "px-6 py-3 text-base",
        large: "px-10 py-4 text-lg",
    };

    const buttonClass = `font-medium bg-orange-500 text-white rounded-full ${sizeClasses[size]}`;

    return link ? (
        <Link href={link} className={`inline-block ${buttonClass}`}>
            {text}
        </Link>
    ) : (
        <button className={buttonClass}>{text}</button>
    );
}
