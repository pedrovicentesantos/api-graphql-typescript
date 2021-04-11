import {
  Arg,
  Mutation,
  Query,
  Resolver,
} from 'type-graphql';
import Category from './Category';
import CategorySchema from '../../models/CategorySchema';
import CategoryInput from './CategoryInput';

@Resolver(Category)
class CategoryResolver {
  @Query(() => [Category])
  async categories() {
    const categories = await CategorySchema.find();
    return categories;
  }

  @Query(() => Category)
  async getCategory(@Arg('id') id: String) {
    const category = await CategorySchema.findById(id);
    if (category) return category;
    throw new Error('Category not found');
  }

  @Mutation(() => Category)
  async createCategory(@Arg('categoryInput') categoryInput: CategoryInput) {
    const category = await CategorySchema.create(categoryInput);
    return category;
  }

  @Mutation(() => Category)
  async deleteCategory(@Arg('id') id:String) {
    const category = await CategorySchema.findByIdAndDelete(id);
    if (category) return category;
    throw new Error('Category not found');
  }
}

export default CategoryResolver;
