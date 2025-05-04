import { createContext, ReactNode, useContext } from "react";
import { GetTopicsUseCaseImpl } from "../../application/usecase/GetTopicsUseCase";
import { GetTopicByIdUseCaseImpl } from "../../application/usecase/GetTopicByIdUseCase";
import { ApiTopicRepository } from "../../infrastructure/ApiTopicRepository";
import { Header } from "../layout/Header";

// Define the context type
interface TopicContextType {
  getTopicsUseCase: GetTopicsUseCaseImpl;
  getTopicByIdUseCase: GetTopicByIdUseCaseImpl;
}

// Create the context
const TopicContext = createContext<TopicContextType | null>(null);

// Provider component
export function TopicProvider({ children }: { children: ReactNode }) {
  const topicRepository = new ApiTopicRepository();
  const getTopicsUseCase = new GetTopicsUseCaseImpl(topicRepository);
  const getTopicByIdUseCase = new GetTopicByIdUseCaseImpl(topicRepository);

  return (
    <TopicContext.Provider value={{ getTopicsUseCase, getTopicByIdUseCase }}>
      {children}
    </TopicContext.Provider>
  );
}

// Custom hook to use the TopicContext
export function useTopicContext() {
  const context = useContext(TopicContext);
  if (!context) {
    throw new Error("useTopicContext must be used within a TopicProvider");
  }
  return context;
}
