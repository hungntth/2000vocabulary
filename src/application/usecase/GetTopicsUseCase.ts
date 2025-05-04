import { Topic } from "../../domain/entities/topic.entity";
import { TopicRepository } from "../../domain/repositories/TopicRepository";

export interface GetTopicsUseCase {
  execute(): Promise<Topic[]>;
}

export class GetTopicsUseCaseImpl implements GetTopicsUseCase {
  constructor(private topicRepository: TopicRepository) {}

  async execute(): Promise<Topic[]> {
    return this.topicRepository.getTopics();
  }
}
