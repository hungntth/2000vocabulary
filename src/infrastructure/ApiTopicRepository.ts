import axios from "axios";
import { TopicResponse } from "../domain/ports/payload/response/topic.response-payload";
import { TopicRepository } from "../domain/repositories/TopicRepository";
import { Topic } from "../domain/entities/topic.entity";

const API_URL = "https://api.example.com"; // Replace with your actual API URL

export class ApiTopicRepository implements TopicRepository {
  async getTopics(): Promise<Topic[]> {
    try {
      const response = await axios.get<TopicResponse>(
        "http://localhost:3000/api/v1/topic"
      );

      if (response.status < 200 || response.status >= 300) {
        throw new Error("Failed to fetch topics");
      }
      return response.data.data;
    } catch (error) {
      throw new Error(error instanceof Error ? error.message : "Network error");
    }
  }

  async getTopicById(id: string): Promise<Topic> {
    try {
      const response = await fetch(`${API_URL}/topics/${id}`);
      if (!response.ok) {
        throw new Error("Topic not found");
      }
      return response.json();
    } catch (error) {
      throw new Error(error instanceof Error ? error.message : "Network error");
    }
  }
}
