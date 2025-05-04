import { Topic } from "../../../entities/topic.entity";

export interface TopicResponse {
  statusCode: number;
  message: string;
  data: Topic[];
}
