
import Link from 'next/link';

export default function Button({ name, variant, type, href, className }) {
  let typeClass = "";

  if (variant === "primary") {
    typeClass = "transition bg-primary px-6 py-3 rounded-full text-sm hover:bg-transparent hover:text-primary border-2 border-primary transition";
  } else if (variant === "secondary") {
    typeClass = "transition bg-transparent px-6 py-3 rounded-full text-sm hover:bg-white hover:text-black border-2 transition";
  } else if (variant === "danger") {
    typeClass = "transition bg-red-600 px-6 py-3 rounded-full text-sm hover:bg-transparent hover:text-red-600 border-2 transition hover:border-red-600";
  }

  // Render as a Link if href is provided
  if (href) {
    return (
      <Link href={href}>
        <button className={`${typeClass} min-w-[100px] ${className} `}>
          {name}
        </button>
      </Link>
    );
  }

  if (type === "submit") {
    return (
      <button type="submit" className={[typeClass, className]}>
        {name}
      </button>

    )
  }

  // Render as a button if no href is provided
  return (
    <button className={[typeClass, className]}>
      {name}
    </button>
  );
}

