const PlusIcon: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      className={className}
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        id="Union"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 0H5V4.99995H0V6.99995H5V12H7V6.99995H12V4.99995H7V0Z"
        fill="#003595"
      />
    </svg>
  );
};

export default PlusIcon;
