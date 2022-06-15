import { Resolver, Query, Args } from '@nestjs/graphql';
import { SearchService } from './search.service';
import { Search } from './entities/search.entity';
import { SearchInput } from './dto/create-search.input';
import { SearchResult } from './dto/search-result.output';

@Resolver(() => Search)
export class SearchResolver {
  constructor(private readonly searchService: SearchService) {}

  @Query(() => [SearchResult], { name: 'search' })
  findAll(@Args('searchInput') searchInput: SearchInput) {
    return this.searchService.findAll(searchInput);
  }
}
