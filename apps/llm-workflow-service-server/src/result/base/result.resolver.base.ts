/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Result } from "./Result";
import { ResultCountArgs } from "./ResultCountArgs";
import { ResultFindManyArgs } from "./ResultFindManyArgs";
import { ResultFindUniqueArgs } from "./ResultFindUniqueArgs";
import { DeleteResultArgs } from "./DeleteResultArgs";
import { ResultService } from "../result.service";
@graphql.Resolver(() => Result)
export class ResultResolverBase {
  constructor(protected readonly service: ResultService) {}

  async _resultsMeta(
    @graphql.Args() args: ResultCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Result])
  async results(@graphql.Args() args: ResultFindManyArgs): Promise<Result[]> {
    return this.service.results(args);
  }

  @graphql.Query(() => Result, { nullable: true })
  async result(
    @graphql.Args() args: ResultFindUniqueArgs
  ): Promise<Result | null> {
    const result = await this.service.result(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Result)
  async deleteResult(
    @graphql.Args() args: DeleteResultArgs
  ): Promise<Result | null> {
    try {
      return await this.service.deleteResult(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
