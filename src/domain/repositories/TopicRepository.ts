import { Topic } from "../entities/topic.entity";

export interface TopicRepository {
  getTopics(): Promise<Topic[]>;
  getTopicById(id: string): Promise<Topic>;
}
