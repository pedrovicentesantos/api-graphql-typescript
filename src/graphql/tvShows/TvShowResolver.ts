import {
  Arg,
  Mutation,
  Query,
  Resolver,
} from 'type-graphql';
import TvShow from './TvShow';
import TvShowSchema from '../../models/TvShowSchema';
import CreateTvShowInput from './CreateTvShowInput';
import UpdateTvShowInput from './UpdateTvShowInput';

@Resolver(TvShow)
class TvShowResolver {
  @Query(() => [TvShow])
  async tvShows() {
    const tvShows = await TvShowSchema.find();
    return tvShows;
  }

  @Query(() => TvShow)
  async getTvShow(@Arg('id') id: String) {
    const tvShow = await TvShowSchema.findById(id);
    if (tvShow) return tvShow;
    throw new Error('TV Show not found');
  }

  @Mutation(() => TvShow)
  async createTvShow(@Arg('tvShowInput') tvShowInput: CreateTvShowInput) {
    const tvShow = await TvShowSchema.create(tvShowInput);
    return tvShow;
  }

  @Mutation(() => TvShow)
  async deleteTvShow(@Arg('id') id:String) {
    const tvShow = await TvShowSchema.findByIdAndDelete(id);
    if (tvShow) return tvShow;
    throw new Error('TV Show not found');
  }

  @Mutation(() => TvShow)
  async updateTvShow(@Arg('tvShowInput') tvShowInput: UpdateTvShowInput, @Arg('id') id: String) {
    const current = await TvShowSchema.findById(id);
    if (!current) throw new Error('TV Show not found');
    const update = Object.assign(current, tvShowInput);
    const tvShow = await TvShowSchema.findByIdAndUpdate(id, update, { new: true });
    return tvShow;
  }
}

export default TvShowResolver;
