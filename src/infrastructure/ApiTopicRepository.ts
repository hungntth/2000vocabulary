import axios from "axios";
import { TopicResponse } from "../domain/ports/payload/response/topic.response-payload";
import { TopicRepository } from "../domain/repositories/TopicRepository";
import { Topic } from "../domain/entities/topic.entity";

// const API_URL = "http://localhost:3000"; // Replace with your actual API URL
const API_URL = ""; // Replace with your actual API URL

export class ApiTopicRepository implements TopicRepository {
  async getTopics(): Promise<Topic[]> {
    try {
      const response = await axios.get<TopicResponse>(
        `${API_URL}/api/v1/topic`
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
      const response = await axios.get(
        `${API_URL}/api/v1/topic/${id}`
      );
      if (response.status < 200 || response.status >= 300) {
        throw new Error("Topic not found");
      }
      return response.data.data; // Assuming `data` contains the topic object
    } catch (error) {
      throw new Error(error instanceof Error ? error.message : "Network error");
    }
  }
}
