import VocabularyCard from "../components/VocabularyCard";
import { categories } from "../data/vocabularyData";
import { Header } from "../layout/Header";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />

      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
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
