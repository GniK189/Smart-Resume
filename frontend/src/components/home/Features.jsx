import React from "react";
import Title from "./Title";
import { Check } from "lucide-react";

const Features = () => {
  const [isHover, setIsHover] = React.useState(false);

  return (
    <div
      id="features"
      className="flex flex-col items-center my-10 scroll-mt-12"
    >
      <div className="flex items-center gap-2 text-sm text-blue-800 bg-blue-400/10 border border-indigo-200 rounded-full px-4 py-1">
        <svg
          width="13"
          height="14"
          viewBox="0 0 13 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.613 8.2a.62.62 0 0 1-.553-.341.59.59 0 0 1 .076-.637l6.048-6.118a.31.31 0 0 1 .375-.069c.061.033.11.084.137.147a.3.3 0 0 1 .014.197L6.537 4.991a.59.59 0 0 0 .07.552.61.61 0 0 0 .504.257h4.276a.62.62 0 0 1 .553.341.59.59 0 0 1-.076.637l-6.048 6.119a.31.31 0 0 1-.375.067.295.295 0 0 1-.15-.344l1.172-3.61a.59.59 0 0 0-.07-.553.61.61 0 0 0-.504-.257z"
            stroke="#1E4BAF"
            strokeMiterlimit="5.759"
            strokeLinecap="round"
          />
        </svg>
        <span>Save 80% of your time</span>
      </div>
      <Title
        title={"Build your resume"}
        description={
          "Our streamlined process helps you create a professional resume in minutes with intelligent AI-powered tools and features."
        }
      />
      <div className="flex flex-col md:flex-row items-center justify-center">
        <img
          className="max-w-2xl w-full xl:-ml-32"
          src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/features/group-image-1.png"
          alt=""
        />
        <div
          className="px-4 md:px-0"
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          <div
            className={
              "flex items-center justify-center gap-6 max-w-md group cursor-pointer"
            }
          >
            <div
              className={`p-6 group-hover:bg-violet-100 border border-transparent group-hover:border-violet-300  flex gap-4 rounded-xl transition-colors ${!isHover ? "border-violet-300 bg-violet-100" : ""}`}
            >
              <Check />
              <div className="space-y-2">
                <h3 className="text-base font-semibold text-slate-700">
                  Smart CV Builder
                </h3>
                <p className="text-sm text-slate-600 max-w-xs">
                  Create your professional CV in minutes with AI-powered
                  suggestions for layout, skills, and wording tailored to your
                  industry.
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-6 max-w-md group cursor-pointer">
            <div className="p-6 group-hover:bg-green-100 border border-transparent group-hover:border-green-300 flex gap-4 rounded-xl transition-colors">
              <Check />
              <div className="space-y-2">
                <h3 className="text-base font-semibold text-slate-700">
                  AI Assistant
                </h3>
                <p className="text-sm text-slate-600 max-w-xs">
                  Get instant enhance on your CV, improve job descriptions, and
                  receive keyword recommendations to help you pass ATS filters.
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-6 max-w-md group cursor-pointer">
            <div className="p-6 group-hover:bg-orange-100 border border-transparent group-hover:border-orange-300 flex gap-4 rounded-xl transition-colors">
              <Check />
              <div className="space-y-2">
                <h3 className="text-base font-semibold text-slate-700">
                  Customizable Templates
                </h3>
                <p className="text-sm text-slate-600 max-w-xs">
                  Choose from modern, eye-catching templates. Personalize
                  colors, fonts, and layouts to reflect your unique professional
                  style.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
