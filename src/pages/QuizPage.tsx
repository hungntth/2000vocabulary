import { useState } from "react";
import { useParams } from "react-router-dom";
import { QuizQuestion } from "../components/Quiz/QuizQuestion";
import { QuizResults } from "../components/Quiz/QuizResults";
import { getCategoryById } from "../data/vocabularyData";
import { Header } from "../layout/Header";
import { shuffleArray } from "../utils/quiz";

function QuizPage() {
  const { id } = useParams<{ id: string }>();
  const category = id ? getCategoryById(id) : undefined;

  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const questions = shuffleArray(category?.words || []).map((item, index) => ({
    id: index,
    word: item.word,
    meaning: item.meaning,
    audioUrl: item.audioUrl,
    example: item.example
      .replace(item.word.toLowerCase(), "_____")
      .replace(item.word, "_____"),
  }));

  const handleAnswerChange = (questionId: number, answer: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: answer }));
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleRetry = () => {
    setAnswers({});
    setIsSubmitted(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const calculateScore = () => {
    return questions?.reduce((score, question) => {
      const isCorrect =
        answers[question.id]?.toLowerCase() === question.word.toLowerCase();
      return score + (isCorrect ? 1 : 0);
    }, 0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white pb-12">
      <Header
        title={`${category?.title} Quiz`}
        subtitle={`Test your knowledge of ${category?.title.toLowerCase()} vocabulary`}
        showBack
        backUrl={`/category/${id}`}
        hasModal={true}
      />

      <div className="max-w-4xl mx-auto px-4 py-8">
        {isSubmitted && (
          <QuizResults
            score={calculateScore()}
            total={questions?.length || 0}
            onRetry={handleRetry}
          />
        )}

        <div className="mt-8 space-y-6">
          {questions?.map((question, index) => (
            <QuizQuestion
              key={question.id}
              number={index + 1}
              question={question}
              answer={answers[question.id] || ""}
              onChange={(answer) => handleAnswerChange(question.id, answer)}
              isSubmitted={isSubmitted}
            />
          ))}
        </div>

        {!isSubmitted && (
          <div className="mt-8 flex justify-center">
            <button
              onClick={handleSubmit}
              className="px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition-colors transform hover:scale-105 duration-200 shadow-lg"
            >
              Submit Answers
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default QuizPage;
