import { PenTool } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { AppDispatch, RootState } from "../../application/store/store";
import { fetchTopicById } from "../../application/store/topicsSlice";
import { removeDiacritics } from "../../application/utils/filter";
import WordList from "../components/Category/WordList";
import ConfirmModal from "../components/ConfirmModal";
import SearchBar from "../components/SearchBar";
import { Header } from "../layout/Header";
import LoadingPage from "./LoadingPage";
import NotFoundPage from "./NotFoundPage";

const CategoryPage = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch<AppDispatch>();
  const { selectedTopic, status, error } = useSelector(
    (state: RootState) => state.topics
  );
  useEffect(() => {
    dispatch(fetchTopicById(id || ""));
  }, [dispatch, id]);
  const [showConfirm, setShowConfirm] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredWords = useMemo(() => {
    if (!searchQuery.trim()) return selectedTopic?.vocabularies || [];

    const query = searchQuery.toLowerCase().trim();
    return selectedTopic?.vocabularies.filter(
      (category) =>
        category.word.toLowerCase().includes(query) ||
        removeDiacritics(category.meaning.toLowerCase()).includes(
          removeDiacritics(query)
        )
    );
  }, [searchQuery, selectedTopic]);

  const handleConfirm = () => {
    setShowConfirm(false);
  };
  if (status === "loading") return <LoadingPage />;
  if (status === "failed") return <div>{error}</div>;

  return selectedTopic ? (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header
        title={selectedTopic?.name}
        subtitle={selectedTopic?.description}
        showBack
        backUrl="/"
      />

      <div className="container mx-auto px-4 py-8">
        <div className="mb-12 text-center">
          <div className="mt-4 space-x-4">
            <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
              {selectedTopic.numContents} words in this category
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

        <div className="flex justify-center mb-8 mx-4">
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
        </div>

        <WordList words={filteredWords || []} />

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
