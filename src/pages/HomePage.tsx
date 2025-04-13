import { useEffect, useMemo, useState } from "react";
import VocabularyCard from "../components/VocabularyCard";
import { categories } from "../data/vocabularyData";
import { Header } from "../layout/Header";
import SearchBar from "../components/SearchBar";
import { removeDiacritics } from "../utils/filter";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { fetchTopics } from "../store/topicsSlice";
import { Spline } from "lucide-react";

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

  // const filteredCategories = useMemo(() => {
  //   if (!searchQuery.trim()) return topics;

  //   const query = searchQuery.toLowerCase().trim();
  //   return topics.filter(
  //     (topic) =>
  //       topic.name.toLowerCase().includes(query) ||
  //       removeDiacritics(topic.description.toLowerCase()).includes(
  //         removeDiacritics(query)
  //       )
  //   );
  // }, [searchQuery]);
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />

      <div className="flex justify-center mt-12 mx-4">
        <SearchBar value={searchQuery} onChange={setSearchQuery} />
      </div>

      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {status === "loading" && (
            <div className="loading-container">
              {/* <Spline size="large" /> */}
              loading...
            </div>
          )}
          {status === "failed" && <div className="error-message">{error}</div>}
          {status === "succeeded" && (
            <>
              {topics.map((category) => (
                <VocabularyCard
                  key={category.id}
                  id={category.id}
                  title={category.name}
                  description={category.description}
                  imageUrl={category.image}
                  wordCount={category.numContents}
                />
              ))}
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export default HomePage;
