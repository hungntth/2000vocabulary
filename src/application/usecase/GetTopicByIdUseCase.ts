import { Topic } from "../../domain/entities/topic.entity";
import { TopicRepository } from "../../domain/repositories/TopicRepository";

export interface GetTopicByIdUseCase {
  execute(id: string): Promise<Topic>;
}

export class GetTopicByIdUseCaseImpl implements GetTopicByIdUseCase {
  constructor(private topicRepository: TopicRepository) {}

  async execute(id: string): Promise<Topic> {
    return this.topicRepository.getTopicById(id);
  }
}
