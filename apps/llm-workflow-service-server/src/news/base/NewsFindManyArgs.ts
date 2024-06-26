/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { NewsWhereInput } from "./NewsWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { NewsOrderByInput } from "./NewsOrderByInput";

@ArgsType()
class NewsFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => NewsWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => NewsWhereInput, { nullable: true })
  @Type(() => NewsWhereInput)
  where?: NewsWhereInput;

  @ApiProperty({
    required: false,
    type: [NewsOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [NewsOrderByInput], { nullable: true })
  @Type(() => NewsOrderByInput)
  orderBy?: Array<NewsOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { NewsFindManyArgs as NewsFindManyArgs };
