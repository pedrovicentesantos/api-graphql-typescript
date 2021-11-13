import {
  Arg,
  Mutation,
  Query,
  Resolver,
} from 'type-graphql';
import TvShow from './TvShow';
import TvShowResponse from './TvShowResponse';
import TvShowSchema from '../../models/TvShowSchema';
import CreateTvShowInput from './CreateTvShowInput';
import UpdateTvShowInput from './UpdateTvShowInput';

@Resolver(TvShow)
class TvShowResolver {
  @Query(() => [TvShowResponse])
  async tvShows() {
    const tvShows = await TvShowSchema.find().populate('category');
    return tvShows;
  }

  @Query(() => TvShowResponse)
  async getTvShow(@Arg('id') id: String) {
    const tvShow = await TvShowSchema.findById(id).populate('category');
    if (tvShow) return tvShow;
    throw new Error('TV Show not found');
  }

  @Query(() => [TvShowResponse])
  async getTopTvShows(@Arg('count') count: Number) {
    if (count <= 0) throw new Error('Count should be a positive number');
    const tvShows = await TvShowSchema
      .find()
      .where('rating').ne(null)
      .sort('-rating')
      .limit(count)
      .populate('category');
    return tvShows;
  }

  @Mutation(() => TvShowResponse)
  async createTvShow(@Arg('tvShowInput') tvShowInput: CreateTvShowInput) {
    let tvShow = await TvShowSchema.create(tvShowInput);
    tvShow = await tvShow.populate('category').execPopulate();
    return tvShow;
  }

  @Mutation(() => TvShowResponse)
  async deleteTvShow(@Arg('id') id:String) {
    const tvShow = await TvShowSchema
      .findByIdAndDelete(id)
      .populate('category');
    if (tvShow) return tvShow;
    throw new Error('TV Show not found');
  }

  @Mutation(() => TvShowResponse)
  async updateTvShow(@Arg('tvShowInput') tvShowInput: UpdateTvShowInput, @Arg('id') id: String) {
    const current = await TvShowSchema.findById(id);
    if (!current) throw new Error('TV Show not found');
    const update = Object.assign(current, tvShowInput);
    const tvShow = await TvShowSchema
      .findByIdAndUpdate(id, update, { new: true })
      .populate('category');
    return tvShow;
  }

  @Mutation(() => TvShowResponse)
  async favoriteTvShow(@Arg('favorite') favorite: Boolean, @Arg('id') id: String) {
    const current = await TvShowSchema.findById(id);
    if (!current) throw new Error('TV Show not found');
    const update = Object.assign(current, { favorite: favorite });
    const tvShow = await TvShowSchema
      .findByIdAndUpdate(id, update, { new: true })
      .populate('category');
    return tvShow;
  }
}

export default TvShowResolver;
