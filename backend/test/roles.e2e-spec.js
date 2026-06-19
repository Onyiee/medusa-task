import 'reflect-metadata';
import { Test } from '@nestjs/testing';
import request from 'supertest';
import { AppModule } from '../src/app.module';

describe('Roles API (e2e)', () => {
  let app;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleRef.createNestApplication();
    app.setGlobalPrefix('api');
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  describe('GET /api/user-roles', () => {
    it('returns 200 with an array of 7 user roles', async () => {
      const res = await request(app.getHttpServer()).get('/api/user-roles');
      expect(res.status).toBe(200);
      expect(Array.isArray(res.body)).toBe(true);
      expect(res.body).toHaveLength(7);

      const [first] = res.body;
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
  });

  describe('GET /api/active-roles', () => {
    it('returns 200 with an array of 3 active roles', async () => {
      const res = await request(app.getHttpServer()).get('/api/active-roles');
      expect(res.status).toBe(200);
      expect(Array.isArray(res.body)).toBe(true);
      expect(res.body).toHaveLength(3);

      const superadmin = res.body.find((role) => role.id === 'superadmin');
      expect(superadmin.selected).toBe(true);
      expect(superadmin.isDefault).toBe(true);
    });
  });
});
