import supertest from "supertest";
import app from "../src/express-commerce/app.js";
import knexfile from "../knexfile.js";
import knex from "knex";

process.env.NODE_ENV = 'test';
const config = knexfile[process.env.NODE_ENV];
const db = knex(config);

describe('GET /api/items', () => {
  beforeAll(async () => {
    await db.migrate.forceFreeMigrationsLock(config)
      .then(() => db.migrate.rollback(config))
      .then(() => db.migrate.latest())
      .then(() => db.seed.run());
  });

  afterAll(async () => {
    await db.migrate.rollback(config);
  });

  it('should return all items', async () => {
    const response = await supertest(app)
      .get('/api/items');
    const { body: { items } } = response;

    expect(response.status).toBe(200);
    expect(response.get('content-type')).toContain('application/json');
    expect(Array.isArray(response.body.items)).toBe(true);
    expect(items.length).toBe(3);
    expect(items[0]).toHaveProperty('title');
    expect(items[0].title).toBe('SpaceX Dragon');
  });
});

describe('POST /api/items', () => {
  beforeAll(async () => {
    await db.migrate.forceFreeMigrationsLock(config)
      .then(() => db.migrate.rollback(config))
      .then(() => db.migrate.latest())
      .then(() => db.seed.run());
  });

  afterAll(async () => {
    await db.migrate.rollback(config);
  });

  it('should create items', async () => {
    const newItem = {
      title: 'Sputnix X34',
      description: 'Oldies but goodies'
    };
    const response = await supertest(app)
      .post('/api/items')
      .send(newItem);
    const { body: { item } } = response;

    expect(response.status).toBe(200);
    expect(item).toHaveProperty('title');
    expect(item).toHaveProperty('description');
    expect(item.title).toBe(newItem.title);
    expect(item.description).toBe(newItem.description);
  });
});