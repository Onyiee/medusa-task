import { Controller, Get, Inject } from '@nestjs/common';
import { RolesService } from './roles.service';

@Controller()
export class RolesController {
  constructor(@Inject(RolesService) rolesService) {
    this.rolesService = rolesService;
  }

  @Get('user-roles')
  getUserRoles() {
    return this.rolesService.getUserRoles();
  }

  @Get('active-roles')
  getActiveRoles() {
    return this.rolesService.getActiveRoles();
  }
}
