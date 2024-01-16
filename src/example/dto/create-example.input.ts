import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateExampleInput {
  @Field(() => Int, {
    description: 'Example field (placeholder)',
    deprecationReason: 'This field is deprecated',
  })
  exampleField: number;
}
