import { Field, InputType } from 'type-graphql';

@InputType()
class UpdateCategoryInput {
  @Field({ nullable: true })
  description?: String;

  @Field({ nullable: true })
  name?: String;
}

export default UpdateCategoryInput;
