import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Book, PenTool } from "lucide-react";
import WordList from "../components/WordList";
import VocabularyQuiz from "../components/VocabularyQuiz";
import { getCategoryById } from "../data/vocabularyData";

const CategoryPage = () => {
  const { id } = useParams<{ id: string }>();
  const category = id ? getCategoryById(id) : undefined;
  const [showQuiz, setShowQuiz] = useState(false);

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
          Trở lại
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
              Tổng {category.words.length} từ vựng
            </div>
            <button
              onClick={() => setShowQuiz(!showQuiz)}
              className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-emerald-200 transition-colors"
            >
              <PenTool className="w-4 h-4" />
              {showQuiz ? "Danh sách từ" : "Kiểm tra"}
            </button>
          </div>
        </div>

        {showQuiz ? (
          <VocabularyQuiz
            words={category.words}
            onFinish={() => setShowQuiz(false)}
          />
        ) : (
          <WordList words={category.words} />
        )}
      </div>
    </div>
  );
};

export default CategoryPage;
