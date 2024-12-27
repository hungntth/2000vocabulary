import React, { useState, useEffect } from "react";
import { Check } from "lucide-react";
import { Vocabulary } from "../../types/vocabulary";
import ScoreModal from "../ScoreModal";
import AudioButton from "../AudioButton";
import { shuffleArray } from "../../utils/quiz";

interface VocabularyQuizProps {
  words: Vocabulary[];
  onFinish: () => void;
}

const VocabularyQuiz: React.FC<VocabularyQuizProps> = ({ words, onFinish }) => {
  const [shuffledWords, setShuffledWords] = useState<Vocabulary[]>([]);
  const [answers, setAnswers] = useState<{ [key: string]: string }>({});
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    setShuffledWords(shuffleArray(words));
  }, [words]);

  const handleInputChange = (meaning: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [meaning]: value }));
  };

  const calculateScore = () => {
    let correct = 0;
    shuffledWords.forEach((word) => {
      if (
        answers[word.meaning]?.toLowerCase().trim() === word.word.toLowerCase()
      ) {
        correct++;
      }
    });
    return Math.round((correct / shuffledWords.length) * 100);
  };

  const handleSubmit = () => {
    const finalScore = calculateScore();
    setScore(finalScore);
    setShowScore(true);
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-white rounded-xl shadow-sm p-6 space-y-6">
        {shuffledWords.map((word, index) => (
          <div key={index} className="space-y-2">
            <div className="flex items-center gap-3">
              <p className="text-lg font-medium text-gray-700 flex-1">
                {index + 1}. {word.meaning}
              </p>
              <AudioButton audioUrl={word.audioUrl} />
            </div>
            <input
              type="text"
              value={answers[word.meaning] || ""}
              onChange={(e) => handleInputChange(word.meaning, e.target.value)}
              placeholder="Type the word here..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
            />
          </div>
        ))}

        <button
          onClick={handleSubmit}
          className="mt-6 w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
        >
          <Check className="w-5 h-5" />
          Check Answers
        </button>
      </div>

      <ScoreModal
        isOpen={showScore}
        score={score}
        onClose={() => {
          setShowScore(false);
          onFinish();
        }}
      />
    </div>
  );
};

export default VocabularyQuiz;
