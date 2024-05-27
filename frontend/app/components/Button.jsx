export default function Button({ children, href, onClick, classname = "" }) {
  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`border-2 border-accent text-text rounded-md hover:bg-secondary active:bg-highlight transition-colors py-2 px-5   ${classname}`}
      >
        {children}
      </a>
    );
  }
  return (
    <button
      onClick={onClick}
      className={` border-2 border-accent text-text rounded-md hover:bg-secondary active:bg-highlight transition-colors py-2 px-5  ${classname}`}
    >
      {children}
    </button>
  );
}
