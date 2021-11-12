import { Field, ObjectType } from 'type-graphql';
import Category from '../category/Category';

@ObjectType()
class TvShowResponse {
  @Field()
  name: String;

  @Field()
  description: String;

  @Field()
  _id: String;

  @Field()
  category: Category

  @Field({ nullable: true })
  rating?: Number
}

export default TvShowResponse;
