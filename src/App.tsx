import { BrowserRouter, Route, Routes } from "react-router-dom";
import CategoryPage from "./presentation/pages/CategoryPage";
import HomePage from "./presentation/pages/HomePage";
import NotFoundPage from "./presentation/pages/NotFoundPage";
import QuizPage from "./presentation/pages/QuizPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/category/:id" element={<CategoryPage />} />
        <Route path="/category/:id/quiz" element={<QuizPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
