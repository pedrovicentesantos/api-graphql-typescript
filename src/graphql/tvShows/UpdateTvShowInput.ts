import { Field, InputType } from 'type-graphql';

@InputType()
class UpdateTvShowInput {
  @Field({ nullable: true })
  description?: String;

  @Field({ nullable: true })
  name?: String;

  @Field({ nullable: true })
  category?: String;

  @Field({ nullable: true })
  rating?: Number;

  @Field({ defaultValue: false })
  favorite?: Boolean;
}

export default UpdateTvShowInput;
