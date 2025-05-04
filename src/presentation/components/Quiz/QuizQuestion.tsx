import { CheckCircle2, XCircle } from "lucide-react";
import AudioButton from "../AudioButton";

interface QuizQuestionProps {
  question: {
    id: number;
    word: string;
    meaning: string;
    example: string;
    audioUrl: string;
  };
  number: number;
  answer: string;
  onChange: (answer: string) => void;
  isSubmitted: boolean;
}

export function QuizQuestion({
  question,
  number,
  answer,
  onChange,
  isSubmitted,
}: QuizQuestionProps) {
  const isCorrect =
    isSubmitted && answer.toLowerCase() === question.word.toLowerCase();
  const isWrong = isSubmitted && !isCorrect;

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 transform transition-all duration-200 hover:shadow-xl">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-semibold">
          {number}
        </div>
        <div className="flex-grow">
          <div className="flex items-center gap-3">
            <p className="text-lg font-medium text-gray-700 flex-1">
              {question.meaning}
            </p>
            <AudioButton audioUrl={question.audioUrl} />
          </div>
          <p className="text-gray-600 italic mb-4 text-sm md:text-base">
            {question.example}
          </p>

          <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
            <input
              type="text"
              value={answer}
              onChange={(e) => onChange(e.target.value)}
              disabled={isSubmitted}
              placeholder="Type the English word"
              className={`
                w-full md:w-auto flex-grow px-4 py-2 border-2 rounded-lg focus:outline-none focus:ring-2 transition-colors
                ${isCorrect ? "border-green-500 bg-green-50" : ""}
                ${isWrong ? "border-red-500 bg-red-50" : ""}
                ${!isSubmitted ? "border-gray-300 focus:ring-blue-500" : ""}
              `}
            />

            {isSubmitted && (
              <div className="flex items-center gap-2">
                {isCorrect ? (
                  <div className="flex items-center text-green-600">
                    <CheckCircle2 className="w-5 h-5 mr-1" />
                    <span className="font-medium">Correct!</span>
                  </div>
                ) : (
                  <div className="flex items-center text-red-600">
                    <XCircle className="w-5 h-5 mr-1" />
                    <span className="font-medium">Answer: {question.word}</span>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
