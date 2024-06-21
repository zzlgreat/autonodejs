import * as graphql from "@nestjs/graphql";
import { UserInteractionResolverBase } from "./base/userInteraction.resolver.base";
import { UserInteraction } from "./base/UserInteraction";
import { UserInteractionService } from "./userInteraction.service";

@graphql.Resolver(() => UserInteraction)
export class UserInteractionResolver extends UserInteractionResolverBase {
  constructor(protected readonly service: UserInteractionService) {
    super(service);
  }
}
