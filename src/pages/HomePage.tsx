import React from 'react';
import VocabularyCard from '../components/VocabularyCard';
import { categories } from '../data/vocabularyData';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-4 text-gray-900">
          English Vocabulary Builder
        </h1>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Expand your English vocabulary with our curated word lists
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <VocabularyCard
              key={category.id}
              id={category.id}
              title={category.title}
              description={category.description}
              imageUrl={category.imageUrl}
              wordCount={category.wordCount}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;