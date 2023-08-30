import supertest from "supertest";
import app from "../src/express-commerce/app.js";
import { getItems } from "../src/express-commerce/models.js";
import knex from "knex";
import knexfile from "../knexfile.js"; 

describe('GET /', () => {
  process.env.NODE_ENV = 'test';
  const config = knexfile[process.env.NODE_ENV];
  const db = knex(config);
  
  beforeAll(async () => {
    await db.migrate.forceFreeMigrationsLock(config)
      .then(() => db.migrate.rollback(config))
      .then(() => db.migrate.latest())
      .then(() => db.seed.run());
  });

  afterAll(async () => {
    await db.migrate.rollback(config);
  });

  it('should success url', async () => {
    const response = await supertest(app)
      .get('/');
    expect(response.status).toBe(200);
    expect(response.type).toEqual('text/html');
  });

  it('should success get items', async () => {
    const items = await getItems();
    expect(items[0].title).toBe('SpaceX Dragon');
    expect(items.length).toBe(3);
  });
});