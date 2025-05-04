import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../application/store/store";
import { fetchTopics } from "../../application/store/topicsSlice";
import SearchBar from "../components/SearchBar";
import VocabularyCard from "../components/VocabularyCard";
import { Header } from "../layout/Header";

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

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />

      <div className="flex justify-center mt-12 mx-4">
        <SearchBar value={searchQuery} onChange={setSearchQuery} />
      </div>

      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {status === "loading" && <div>Loading...</div>}
          {status === "failed" && <div>{error}</div>}
          {status === "succeeded" &&
            topics.map((topic) => (
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
