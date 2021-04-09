import { Field, InputType } from 'type-graphql';

@InputType()
class VideoInput {
  @Field()
  description: String;

  @Field()
  name: String;

  @Field()
  category: String;
}

export default VideoInput;
