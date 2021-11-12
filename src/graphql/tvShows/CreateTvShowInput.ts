import { Field, InputType } from 'type-graphql';

@InputType()
class CreateTvShowInput {
  @Field()
  description: String;

  @Field()
  name: String;

  @Field()
  category: String;

  @Field({ nullable: true })
  rating?: Number;
}

export default CreateTvShowInput;
