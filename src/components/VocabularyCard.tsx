import React from 'react';
import { Link } from 'react-router-dom';

interface VocabularyCardProps {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  wordCount: number;
}

const VocabularyCard: React.FC<VocabularyCardProps> = ({
  id,
  title,
  description,
  imageUrl,
  wordCount,
}) => {
  return (
    <Link 
      to={`/category/${id}`}
      className="block bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105"
    >
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-2 text-gray-800">{title}</h2>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="inline-block bg-emerald-500 text-white px-3 py-1 rounded-full text-sm">
          {wordCount} words
        </div>
      </div>
    </Link>
  );
};

export default VocabularyCard;