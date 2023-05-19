import { useState } from "react";

interface props {
  question: string;
  answer: string;
}

function Faqs({ question, answer }: props) {
  const [visibility, setVisibility] = useState(false);
  return (
    <div className="flex flex-col gap-2 py-4 border-b-2 border-b-[hsl(240,5%,91%)]">
      <div className="flex items-center justify-between gap-4">
        <p
          className={
            visibility
              ? "text-sm font-bold text-[hsl(237,12%,33%)] cursor-pointer hover:text-[hsl(14,88%,65%)]"
              : "text-sm cursor-pointer hover:text-[hsl(14,88%,65%)]"
          }
          onClick={() => {
            if (!visibility) setVisibility(true);
            else setVisibility(false);
          }}
        >
          {question}
        </p>

        <button
          onClick={() => {
            if (!visibility) setVisibility(true);
            else setVisibility(false);
          }}
          className={
            visibility
              ? "rotate-180 transition-all duration-300"
              : "transition-all duration-300"
          }
        >
          <img src="./images/icon-arrow-down.svg" alt="" className="w-3" />
        </button>
      </div>
      <p
        className={
          visibility
            ? "w-11/12 visible opacity-100 transition-all duration-300"
            : "h-0 invisible opacity-0 w-11/12 transition-all duration-300 h-animate"
        }
      >
        {answer}
      </p>
    </div>
  );
}
export default Faqs;
