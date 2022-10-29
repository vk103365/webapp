import { Module } from "@nestjs/common";
import { ReleaseModuleBase } from "./base/release.module.base";
import { ReleaseService } from "./release.service";
import { ReleaseController } from "./release.controller";
import { ReleaseResolver } from "./release.resolver";

@Module({
  imports: [ReleaseModuleBase],
  controllers: [ReleaseController],
  providers: [ReleaseService, ReleaseResolver],
  exports: [ReleaseService],
})
export class ReleaseModule {}
