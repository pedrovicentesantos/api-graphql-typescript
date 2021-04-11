import { Field, InputType } from 'type-graphql';

@InputType()
class CreateCategoryInput {
  @Field()
  description: String;

  @Field()
  name: String;
}

export default CreateCategoryInput;
