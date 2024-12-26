import React from 'react';
import { Trophy, X } from 'lucide-react';

interface ScoreModalProps {
  isOpen: boolean;
  score: number;
  onClose: () => void;
}

const ScoreModal: React.FC<ScoreModalProps> = ({ isOpen, score, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl shadow-lg max-w-md w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="text-center">
          <div className="mb-4 inline-flex items-center justify-center w-16 h-16 bg-yellow-100 rounded-full">
            <Trophy className="w-8 h-8 text-yellow-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Your Score</h2>
          <p className="text-4xl font-bold text-blue-600 mb-4">{score}%</p>
          <p className="text-gray-600 mb-6">
            {score >= 80 ? 'Excellent work!' : 
             score >= 60 ? 'Good job!' : 
             'Keep practicing!'}
          </p>
          <button
            onClick={onClose}
            className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};

export default ScoreModal;