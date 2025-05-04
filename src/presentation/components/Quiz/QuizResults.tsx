import { RotateCcw, Target, Trophy } from "lucide-react";

interface QuizResultsProps {
  score: number;
  total: number;
  onRetry: () => void;
}

export function QuizResults({ score, total, onRetry }: QuizResultsProps) {
  const percentage = (score / total) * 100;
  const isPassing = percentage >= 70;

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 transform transition-all duration-200">
      <div className="flex flex-col items-center mb-6">
        {isPassing ? (
          <Trophy className="w-16 h-16 text-yellow-500 mb-4" />
        ) : (
          <Target className="w-16 h-16 text-blue-500 mb-4" />
        )}
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Quiz Results</h2>
        <p className="text-xl text-gray-600">
          You got <span className="font-bold text-blue-600">{score}</span> out
          of {total} correct
        </p>
      </div>

      <div className="relative pt-1">
        <div className="flex items-center justify-between mb-2">
          <span className="text-lg font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-100">
            Score
          </span>
          <span
            className={`text-lg font-bold ${
              isPassing ? "text-green-600" : "text-red-600"
            }`}
          >
            {percentage}%
          </span>
        </div>
        <div className="overflow-hidden h-3 mb-4 text-xs flex rounded-full bg-gray-200">
          <div
            style={{ width: `${percentage}%` }}
            className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center transition-all duration-500 ${
              isPassing ? "bg-green-500" : "bg-red-500"
            }`}
          />
        </div>
        <p
          className={`text-center text-lg font-medium ${
            isPassing ? "text-green-600" : "text-blue-600"
          } mb-6`}
        >
          {isPassing
            ? "Great job! Keep it up! 🎉"
            : "Keep practicing! You can do it! 💪"}
        </p>

        <div className="flex justify-center">
          <button
            onClick={onRetry}
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors transform hover:scale-105 duration-200 shadow-md"
          >
            <RotateCcw className="w-5 h-5 mr-2" />
            Try Again
          </button>
        </div>
      </div>
    </div>
  );
}
