import Faqs from "./Faqs";
import FaqData from "../data/FaqData";

function FaqCard() {
  return (
    <div className="relative">
      <div className="relative flex flex-col items-center justify-center gap-6 text-[hsl(240,6%,50%)] bg-white rounded-3xl md:flex-row md:justify-start md:gap-36 md:overflow-hidden">
        <img
          src="./images/illustration-woman-online-mobile.svg"
          alt=""
          className="absolute -top-28 w-3/4 md:hidden"
        />
        <div className="absolute -left-16 w-1/2 hidden md:block z-10 overflow-hidden">
          <img
            src="./images/illustration-woman-online-desktop.svg"
            alt=""
            className=""
          />
        </div>
        <img
          src="./images/bg-pattern-mobile.svg"
          alt=""
          className="md:hidden"
        />
        <div className="md:relative md:w-2/5 md:h-[26rem]">
          <img
            src="./images/bg-pattern-desktop.svg"
            alt=""
            className="hidden md:absolute md:bottom-32 md:-left-36 md:block md:scale-[300%]"
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-2 px-5 pb-12 md:justify-self-end md:items-start md:pl-14 md:py-12 md:px-0">
          <h1 className="text-4xl font-bold text-[hsl(237,12%,33%)]">FAQ</h1>
          <div className="w-full md:w-[82.5%]">
            {FaqData.map((faq) => (
              <Faqs question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </div>
      <img
        src="./images/illustration-box-desktop.svg"
        alt=""
        className="absolute left-0 bottom-0 w-1/5 hidden -translate-x-1/2 -translate-y-1/2 z-10 md:block"
      />
    </div>
  );
}
export default FaqCard;
