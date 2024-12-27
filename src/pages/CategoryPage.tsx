import { PenTool } from "lucide-react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import ConfirmModal from "../components/ConfirmModal";
import WordList from "../components/WordList";
import { getCategoryById } from "../data/vocabularyData";
import { Header } from "../layout/Header";
import NotFoundPage from "./NotFoundPage";

const CategoryPage = () => {
  const { id } = useParams<{ id: string }>();
  const category = id ? getCategoryById(id) : undefined;
  const [showConfirm, setShowConfirm] = useState(false);

  const handleConfirm = () => {
    setShowConfirm(false);
  };

  return category ? (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header
        title={category?.title}
        subtitle={category?.description}
        showBack
        backUrl="/"
      />

      <div className="container mx-auto px-4 py-8">
        <div className="mb-12 text-center">
          <div className="mt-4 space-x-4">
            <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
              {category.words.length} words in this category
            </div>

            <Link
              to={`/category/${id}/quiz`}
              className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-emerald-200 transition-colors"
            >
              <PenTool className="w-4 h-4" />
              Take Quiz
            </Link>
          </div>
        </div>

        <WordList words={category.words} />

        <ConfirmModal
          isOpen={showConfirm}
          onConfirm={handleConfirm}
          onCancel={() => setShowConfirm(false)}
          title="Exit Quiz?"
          message="Are you sure you want to exit the quiz? Your progress will be lost."
        />
      </div>
    </div>
  ) : (
    <NotFoundPage />
  );
};

export default CategoryPage;
