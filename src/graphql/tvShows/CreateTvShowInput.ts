import { Field, InputType } from 'type-graphql';

@InputType()
class CreateTvShowInput {
  @Field()
  description: String;

  @Field()
  name: String;

  @Field()
  category: String;

  @Field()
  rating: Number;
}

export default CreateTvShowInput;
