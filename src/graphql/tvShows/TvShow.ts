import { Field, ObjectType } from 'type-graphql';

@ObjectType()
class TvShow {
  @Field()
  name: String;

  @Field()
  description: String;

  @Field()
  _id: String;

  @Field()
  category: String

  @Field({ nullable: true })
  rating?: Number
}

export default TvShow;
