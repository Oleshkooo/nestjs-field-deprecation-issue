import { InputType, Int, Field, Directive } from '@nestjs/graphql';

@InputType()
export class CreateExampleInput {
  @Directive('@deprecated(reason: "This field is deprecated")')
  @Field(() => Int, {
    description: 'Example field (placeholder)',
    deprecationReason: 'This field is deprecated',
  })
  exampleField: number;
}
