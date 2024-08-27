const ChevronRightIcon: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      width="6"
      height="11"
      className={className}
      viewBox="0 0 6 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        id="Vector 1"
        d="M1 9.5L5 5.5L1 1.5"
        stroke="#003595"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ChevronRightIcon;
