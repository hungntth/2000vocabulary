import { useMemo, useState } from "react";
import VocabularyCard from "../components/VocabularyCard";
import { categories } from "../data/vocabularyData";
import { Header } from "../layout/Header";
import SearchBar from "../components/SearchBar";
import { removeDiacritics } from "../utils/filter";

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCategories = useMemo(() => {
    if (!searchQuery.trim()) return categories;

    const query = searchQuery.toLowerCase().trim();
    return categories.filter(
      (category) =>
        category.title.toLowerCase().includes(query) ||
        removeDiacritics(category.description.toLowerCase()).includes(
          removeDiacritics(query)
        )
    );
  }, [searchQuery]);
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />

      <div className="flex justify-center mt-12 mx-4">
        <SearchBar value={searchQuery} onChange={setSearchQuery} />
      </div>

      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCategories.map((category) => (
            <VocabularyCard
              key={category.id}
              id={category.id}
              title={category.title}
              description={category.description}
              imageUrl={category.imageUrl}
              wordCount={category.words.length}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default HomePage;
