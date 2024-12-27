import { BookOpen, ChevronLeft } from "lucide-react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ConfirmModal from "../components/ConfirmModal";

interface HeaderProps {
  title?: string;
  subtitle?: string;
  showBack?: boolean;
  backUrl?: string;
  hasModal?: boolean;
  titleModal?: string;
  messageModal?: string;
}

export function Header({
  title = "English Vocabulary Builder",
  subtitle,
  showBack,
  backUrl,
  hasModal = false,
  titleModal = "Exit Quiz?",
  messageModal = "Are you sure you want to exit the quiz? Your progress will be lost.",
}: HeaderProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const isQuizPage = location.pathname.includes("/quiz");
  const isVocabularyPage = !isQuizPage && location.pathname.includes("/category");

  const [showConfirm, setShowConfirm] = useState(false);

  const getBackText = () => {
    if (isQuizPage) return "Back to Vocabulary List";
    if (isVocabularyPage) return "Back to Category";
    return "Back";
  };

  const handleConfirm = () => {
    setShowConfirm(false);
    navigate(backUrl || "/");
  };

  return (
    <>
      <header className="text-center py-12 bg-gradient-to-r from-blue-500 to-purple-600">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center justify-center mb-4">
            <BookOpen className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">{title}</h1>
          <p className="text-xl text-blue-100">
            {subtitle ||
              "Expand your English vocabulary with our curated word lists"}
          </p>
        </div>
      </header>

      {showBack && (
        <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
          <div
            className="max-w-4xl mx-auto px-4 cursor-pointer"
            onClick={() => (hasModal ? setShowConfirm(true) : handleConfirm())}
          >
            <div className="group flex items-center py-3 text-gray-600 hover:text-blue-600 transition-all duration-200">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 group-hover:bg-blue-100 transition-colors duration-200 mr-2">
                <ChevronLeft className="w-5 h-5" />
              </span>
              <span className="font-medium">{getBackText()}</span>
            </div>
          </div>
        </nav>
      )}

      <ConfirmModal
        isOpen={showConfirm}
        onConfirm={handleConfirm}
        onCancel={() => setShowConfirm(false)}
        title={titleModal}
        message={messageModal}
      />
    </>
  );
}
