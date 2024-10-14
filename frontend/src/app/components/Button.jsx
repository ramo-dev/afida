
import Link from 'next/link';
import { Loader2 } from 'lucide-react';

export default function Button({ name, variant, type, href, className, loading, disabled }) {
  let typeClass = "";

  // Button styles based on variant
  if (variant === "primary") {
    typeClass = "flex justify-center transition bg-primary px-6 py-3 rounded-full text-sm hover:bg-transparent hover:text-primary border-2 border-primary transition";
  } else if (variant === "secondary") {
    typeClass = "lex justify-center  transition bg-transparent px-6 py-3 rounded-full text-sm hover:bg-white hover:text-black border-2 transition";
  } else if (variant === "danger") {
    typeClass = "lex justify-center  transition bg-red-600 px-6 py-3 rounded-full text-sm hover:bg-transparent hover:text-red-600 border-2 border-red-600 transition";
  }

  // Dark shade for disabled state
  const disabledClass = "!bg-gray-400 text-gray-700 cursor-not-allowed opacity-50 border-none hover:!bg-gray-400 hover:!text-gray-700";

  // Render as a Link if href is provided
  if (href) {
    return (
      <Link href={href}>
        <button
          className={`${typeClass} min-w-[100px] ${className} ${disabled ? disabledClass : ''}`}
          disabled={disabled}
        >
          {loading ? <Loader2 className="animate-spin" /> : name}
        </button>
      </Link>
    );
  }

  if (type === "submit") {
    return (
      <button
        type="submit"
        className={`${typeClass} min-w-[100px] ${className} ${disabled ? disabledClass : ''}`}
        disabled={disabled}
      >
        {loading ? <Loader2 className="animate-spin" /> : name}
      </button>
    );
  }

  // Render as a regular button if no href is provided
  return (
    <button
      className={`${typeClass} min-w-[100px] ${className} ${disabled ? disabledClass : ''}`}
      disabled={disabled}
    >
      {loading ? <Loader2 className="animate-spin" /> : name}
    </button>
  );
}
