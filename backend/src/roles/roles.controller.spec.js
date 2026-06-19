import 'reflect-metadata';
import { Test } from '@nestjs/testing';
import { RolesController } from './roles.controller';
import { RolesService } from './roles.service';

describe('RolesController', () => {
  let controller;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [RolesController],
      providers: [RolesService],
    }).compile();

    controller = moduleRef.get(RolesController);
  });

  describe('getUserRoles', () => {
    it('returns an array of 7 user roles', () => {
      const result = controller.getUserRoles();
      expect(Array.isArray(result)).toBe(true);
      expect(result).toHaveLength(7);
    });

    it('returns rows with the expected shape', () => {
      const [first] = controller.getUserRoles();
      expect(first).toEqual(
        expect.objectContaining({
          id: expect.any(String),
          name: expect.any(String),
          type: expect.any(String),
          dateCreated: expect.any(String),
          status: expect.any(String),
          users: expect.any(Array),
        }),
      );
    });

    it('generates the correct number of distinct users per role', () => {
      const superadmin = controller
        .getUserRoles()
        .find((role) => role.id === 'superadmin');
      expect(superadmin.users).toHaveLength(6);

      const ids = superadmin.users.map((u) => u.id);
      expect(new Set(ids).size).toBe(superadmin.users.length);

      superadmin.users.forEach((user) => {
        expect(user).toEqual(
          expect.objectContaining({
            id: expect.any(String),
            name: expect.any(String),
            avatarUrl: `https://i.pravatar.cc/80?u=${user.id}`,
          }),
        );
      });
    });

    it('contains exactly one INACTIVE role', () => {
      const inactive = controller
        .getUserRoles()
        .filter((role) => role.status === 'INACTIVE');
      expect(inactive).toHaveLength(1);
      expect(inactive[0].id).toBe('deputy-sales-personnel');
    });
  });

  describe('getActiveRoles', () => {
    it('returns an array of 3 active roles', () => {
      const result = controller.getActiveRoles();
      expect(Array.isArray(result)).toBe(true);
      expect(result).toHaveLength(3);
    });

    it('marks the superadmin active role as selected and default', () => {
      const superadmin = controller
        .getActiveRoles()
        .find((role) => role.id === 'superadmin');
      expect(superadmin).toEqual(
        expect.objectContaining({
          id: 'superadmin',
          name: 'Superadmin',
          lastActive: '06/2023',
          isDefault: true,
          selected: true,
        }),
      );
    });

    it('returns rows with the expected shape', () => {
      const [first] = controller.getActiveRoles();
      expect(first).toEqual(
        expect.objectContaining({
          id: expect.any(String),
          name: expect.any(String),
          lastActive: expect.any(String),
          isDefault: expect.any(Boolean),
          selected: expect.any(Boolean),
        }),
      );
    });
  });
});
