import Link from 'next/link';
import { Loader2 } from 'lucide-react';

export default function Button({
  name,
  variant,
  type,
  href,
  className,
  loading,
  disabled,
  onClick
}) {
  let typeClass = "";

  // Button styles based on variant
  if (variant === "primary") {
    typeClass =
      "flex justify-center items-center transition bg-primary px-4 py-3 md:px-6 md:py-3 rounded-full text-xs md:text-sm hover:bg-transparent hover:text-primary border-2 border-primary transition";
  } else if (variant === "secondary") {
    typeClass =
      "flex justify-center items-center transition bg-transparent px-4 py-3 md:px-6 md:py-3 rounded-full text-xs md:text-sm hover:bg-white hover:text-black border-2 transition";
  } else if (variant === "danger") {
    typeClass =
      "flex justify-center items-center transition bg-red-600 px-4 py-3 md:px-6 md:py-3 rounded-full text-xs md:text-sm hover:bg-transparent hover:text-red-600 border-2 border-red-600 transition";
  }

  // Dark shade for disabled state
  const disabledClass =
    "!bg-gray-400 text-gray-700 py-3 cursor-not-allowed opacity-50 border-none hover:!bg-gray-400 hover:!text-gray-700";

  // Render as a Link if href is provided
  if (href) {
    return (
      <Link href={href}>
        <button
          onClick={onClick}
          className={`${typeClass} min-w-[80px] md:min-w-[100px] ${className} ${disabled ? disabledClass : ""
            }`}
          disabled={disabled}
        >
          {loading ? <Loader2 className="animate-spin" /> : name}
        </button>
      </Link>
    );
  }

  // Render as a regular button if type === "submit"
  if (type === "submit") {
    return (
      <button
        type="submit"
        onClick={onClick}
        className={`${typeClass} min-w-[80px] md:min-w-[100px] ${className} ${disabled ? disabledClass : ""
          }`}
        disabled={disabled}
      >
        {loading ? <Loader2 className="animate-spin" /> : name}
      </button>
    );
  }

  // Render as a regular button
  return (
    <button
      onClick={onClick}
      className={`${typeClass} min-w-[80px] md:min-w-[100px] ${className} ${disabled ? disabledClass : ""
        }`}
      disabled={disabled}
    >
      {loading ? <Loader2 className="animate-spin" /> : name}
    </button>
  );
}
