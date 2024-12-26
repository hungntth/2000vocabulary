import React from 'react';
import { X } from 'lucide-react';

interface Word {
  word: string;
  meaning: string;
  example: string;
}

interface VocabularyModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  words: Word[];
}

const VocabularyModal: React.FC<VocabularyModalProps> = ({
  isOpen,
  onClose,
  title,
  words,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg w-full max-w-4xl max-h-[80vh] overflow-hidden">
        <div className="p-6 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <X size={24} />
          </button>
        </div>
        
        <div className="p-6 overflow-y-auto max-h-[calc(80vh-120px)]">
          <div className="space-y-6">
            {words.map((word, index) => (
              <div key={index} className="border-b border-gray-100 last:border-0 pb-4 last:pb-0">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{word.word}</h3>
                <p className="text-gray-600 mb-2">
                  <span className="font-medium">Meaning:</span> {word.meaning}
                </p>
                <p className="text-gray-600 italic">
                  <span className="font-medium">Example:</span> {word.example}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default VocabularyModal;