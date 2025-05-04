import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../application/store/store";
import { fetchTopics } from "../../application/store/topicsSlice";
import SearchBar from "../components/SearchBar";
import VocabularyCard from "../components/VocabularyCard";
import { Header } from "../layout/Header";
import LoadingPage from "./LoadingPage";
import { removeDiacritics } from "../../application/utils/filter";

const HomePage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {
    items: topics,
    status,
    error,
  } = useSelector((state: RootState) => state.topics);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchTopics());
    }
  }, [status, dispatch]);

  const [searchQuery, setSearchQuery] = useState("");

  const filteredCategories = useMemo(() => {
    if (!searchQuery.trim()) return topics || [];

    const query = searchQuery.toLowerCase().trim();
    return topics.filter((topic) => {
      const name = topic.name?.toLowerCase() || ""; // Đảm bảo `name` không bị null
      const description = topic.description
        ? removeDiacritics(topic.description.toLowerCase())
        : ""; // Đảm bảo `description` không bị null

      return (
        name.includes(query) || description.includes(removeDiacritics(query))
      );
    });
  }, [searchQuery, topics]); // Thêm `topics` vào dependency

  if (status === "loading") {
    return <LoadingPage />;
  }

  if (status === "failed") {
    return <div>{error}</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />

      <div className="flex justify-center mt-12 mx-4">
        <SearchBar value={searchQuery} onChange={setSearchQuery} />
      </div>

      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {status === "succeeded" &&
            filteredCategories.map((topic) => (
              <VocabularyCard
                key={topic.id}
                id={topic.id}
                title={topic.name}
                description={topic.description}
                imageUrl={topic.image}
                wordCount={topic.numContents}
              />
            ))}
        </div>
      </main>
    </div>
  );
};

export default HomePage;
