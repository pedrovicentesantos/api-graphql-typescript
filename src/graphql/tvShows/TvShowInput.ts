import { Field, InputType } from 'type-graphql';

@InputType()
class TvShowInput {
  @Field()
  description: String;

  @Field()
  name: String;

  @Field()
  category: String;
}

export default TvShowInput;
