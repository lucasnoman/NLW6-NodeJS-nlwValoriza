import { getCustomRepository } from 'typeorm';
import { TagsRepository } from '../repositories/TagsRepository';

export class ListTagsService {
  async execute() {
    const tagsRepositories = getCustomRepository(TagsRepository);

    const tags = await tagsRepositories.find();

    return tags;
  }
}
