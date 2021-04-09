import { Field, ObjectType } from 'type-graphql';

@ObjectType()
class Video {
  @Field()
  name: String;

  @Field()
  description: String;

  @Field()
  _id: String;

  @Field()
  category: String
}

export default Video;
