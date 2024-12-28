import React, { useState } from "react";
import { BookOpen, Lightbulb } from "lucide-react";
import AudioButton from "../AudioButton";
import ScrollButtons from "../ScrollButtons";

interface Word {
  word: string;
  phonetic: string;
  audioUrl: string;
  meaning: string;
  example: string;
}

interface WordListProps {
  words: Word[];
}

const WordList: React.FC<WordListProps> = ({ words }) => {
  const [expandedWord, setExpandedWord] = useState<string | null>(null);

  const toggleExpand = (word: string) => {
    setExpandedWord(expandedWord === word ? null : word);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-4">
      <ScrollButtons />
      {words.map((word, index) => (
        <div
          key={index}
          onClick={() => toggleExpand(word.word)}
          className={`bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer 
            ${expandedWord === word.word ? "ring-2 ring-blue-500" : ""}`}
        >
          <div className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3 flex-1">
                <h3 className="text-2xl font-bold text-gray-800">
                  {word.word}
                </h3>
                <span className="text-gray-500 italic text-sm md:text-base">
                  {word.phonetic}
                </span>
                <AudioButton audioUrl={word.audioUrl} />
              </div>
            </div>

            <div
              className={`mt-4 space-y-3 overflow-hidden transition-all duration-300
              ${
                expandedWord === word.word
                  ? "max-h-96 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="flex items-start gap-3 text-gray-700">
                <BookOpen className="w-5 h-5 mt-1 flex-shrink-0 text-blue-500" />
                <div>
                  <span className="font-medium block text-gray-900">
                    Meaning:
                  </span>
                  <p>{word.meaning}</p>
                </div>
              </div>

              <div className="flex items-start gap-3 text-gray-600">
                <Lightbulb className="w-5 h-5 mt-1 flex-shrink-0 text-yellow-500" />
                <div>
                  <span className="font-medium block text-gray-900">
                    Example:
                  </span>
                  <p className="italic">{word.example}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WordList;