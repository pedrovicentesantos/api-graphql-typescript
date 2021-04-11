import {
  Arg,
  Mutation,
  Query,
  Resolver,
} from 'type-graphql';
import Category from './Category';
import CategorySchema from '../../models/CategorySchema';
import CreateCategoryInput from './CreateCategoryInput';
import UpdateCategoryInput from './UpdateCategoryInput';

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
  async createCategory(@Arg('categoryInput') categoryInput: CreateCategoryInput) {
    const category = await CategorySchema.create(categoryInput);
    return category;
  }

  @Mutation(() => Category)
  async deleteCategory(@Arg('id') id:String) {
    const category = await CategorySchema.findByIdAndDelete(id);
    if (category) return category;
    throw new Error('Category not found');
  }

  @Mutation(() => Category)
  async updateCategory(@Arg('categoryInput') categoryInput: UpdateCategoryInput, @Arg('id') id: String) {
    const current = await CategorySchema.findById(id);
    if (!current) throw new Error('Category not found');
    const update = Object.assign(current, categoryInput);
    const category = await CategorySchema.findByIdAndUpdate(id, update, { new: true });
    return category;
  }
}

export default CategoryResolver;
