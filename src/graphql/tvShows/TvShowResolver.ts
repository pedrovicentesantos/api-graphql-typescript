import {
  Arg,
  Mutation,
  Query,
  Resolver,
} from 'type-graphql';
import TvShow from './TvShow';
import TvShowSchema from '../../models/TvShowSchema';
import TvShowInput from './TvShowInput';

@Resolver(TvShow)
class TvShowResolver {
  @Query(() => [TvShow])
  async tvShows() {
    const tvShows = await TvShowSchema.find();
    return tvShows;
  }

  @Mutation(() => TvShow)
  async createTvShow(@Arg('tvShowInput') tvShowInput: TvShowInput) {
    const tvShow = await TvShowSchema.create(tvShowInput);
    return tvShow;
  }
}

export default TvShowResolver;
