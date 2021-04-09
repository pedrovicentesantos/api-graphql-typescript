import { Field, InputType } from 'type-graphql';

@InputType()
class CategoryInput {
  @Field()
  description: String;

  @Field()
  name: String;
}

export default CategoryInput;
