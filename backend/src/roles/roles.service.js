import { Injectable } from '@nestjs/common';
import { ROLES_MOCK } from './roles.mock';

@Injectable()
export class RolesService {
  getUserRoles() {
    return ROLES_MOCK.userRoles;
  }

  getActiveRoles() {
    return ROLES_MOCK.activeRoles;
  }
}
