export function up(knex)  {   
  return Promise.all([
    knex.schema.createTable('items', (t) => {
      t.increments('id').primary();
      t.string('title').notNullable();
      t.string('description').notNullable();
      t.timestamps(false, true);
    })
  ]); 
}

export function down(knex, P) { return Promise.all([knex.schema.dropTableIfExists('items')]); }
