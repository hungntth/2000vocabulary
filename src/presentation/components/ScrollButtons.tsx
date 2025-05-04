import { ArrowDown, ArrowUp } from "lucide-react";

const ScrollButtons = () => {
  const scrollTo = (position: "top" | "bottom") => {
    window.scrollTo({
      top: position === "top" ? 0 : document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed right-6 bottom-6 flex flex-col gap-2 z-50">
      <button
        onClick={() => scrollTo("top")}
        className="p-2.5 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-gray-50 transition-colors"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-4 h-4 text-gray-600" />
      </button>
      <button
        onClick={() => scrollTo("bottom")}
        className="p-2.5 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-gray-50 transition-colors"
        aria-label="Scroll to bottom"
      >
        <ArrowDown className="w-4 h-4 text-gray-600" />
      </button>
    </div>
  );
};

export default ScrollButtons;
