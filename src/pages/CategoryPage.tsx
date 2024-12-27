import { ArrowLeft, Book, PenTool } from "lucide-react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import ConfirmModal from "../components/ConfirmModal";
import LoadingSpinner from "../components/LoadingSpinner";
import VocabularyQuiz from "../components/VocabularyQuiz";
import WordList from "../components/WordList";
import { getCategoryById } from "../data/vocabularyData";

const CategoryPage = () => {
  const { id } = useParams<{ id: string }>();
  const category = id ? getCategoryById(id) : undefined;
  const [showQuiz, setShowQuiz] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  if (!category) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Category not found
          </h2>
          <Link to="/" className="text-blue-500 hover:text-blue-600">
            Return to home
          </Link>
        </div>
      </div>
    );
  }

  const handleModeSwitch = () => {
    if (showQuiz) {
      setShowConfirm(true);
    } else {
      setIsLoading(true);
      setTimeout(() => {
        setShowQuiz(true);
        setIsLoading(false);
      }, 500);
    }
  };

  const handleConfirm = () => {
    setShowConfirm(false);
    setShowQuiz(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-8">
        <Link
          to="/"
          className="inline-flex items-center text-gray-600 hover:text-gray-800 mb-8 group"
        >
          <ArrowLeft
            className="mr-2 group-hover:-translate-x-1 transition-transform"
            size={20}
          />
          Back to Categories
        </Link>

        <div className="mb-12 text-center">
          <div className="flex items-center justify-center mb-4">
            <Book className="w-8 h-8 text-blue-500 mr-3" />
            <h1 className="text-4xl font-bold text-gray-900">
              {category.title}
            </h1>
          </div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            {category.description}
          </p>
          <div className="mt-4 space-x-4">
            <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
              {category.wordCount} words in this category
            </div>
            <button
              onClick={handleModeSwitch}
              className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-emerald-200 transition-colors"
            >
              <PenTool className="w-4 h-4" />
              {showQuiz ? "View Word List" : "Take Quiz"}
            </button>
          </div>
        </div>

        {isLoading ? (
          <LoadingSpinner />
        ) : showQuiz ? (
          <VocabularyQuiz
            words={category.words}
            onFinish={() => setShowQuiz(false)}
          />
        ) : (
          <WordList words={category.words} />
        )}

        <ConfirmModal
          isOpen={showConfirm}
          onConfirm={handleConfirm}
          onCancel={() => setShowConfirm(false)}
          title="Exit Quiz?"
          message="Are you sure you want to exit the quiz? Your progress will be lost."
        />
      </div>
    </div>
  );
};

export default CategoryPage;
