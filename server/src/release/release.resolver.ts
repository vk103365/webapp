import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { ReleaseResolverBase } from "./base/release.resolver.base";
import { Release } from "./base/Release";
import { ReleaseService } from "./release.service";

@graphql.Resolver(() => Release)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class ReleaseResolver extends ReleaseResolverBase {
  constructor(
    protected readonly service: ReleaseService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
