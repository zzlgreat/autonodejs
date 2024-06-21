import { Module } from "@nestjs/common";
import { UserInteractionModuleBase } from "./base/userInteraction.module.base";
import { UserInteractionService } from "./userInteraction.service";
import { UserInteractionController } from "./userInteraction.controller";
import { UserInteractionResolver } from "./userInteraction.resolver";

@Module({
  imports: [UserInteractionModuleBase],
  controllers: [UserInteractionController],
  providers: [UserInteractionService, UserInteractionResolver],
  exports: [UserInteractionService],
})
export class UserInteractionModule {}
