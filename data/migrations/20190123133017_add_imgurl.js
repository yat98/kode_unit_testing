export function up(knex)  {   
  return Promise.all([
    knex.schema.table('items', (t) => {
      t.string('imgurl');
    })
  ]);   
}

export function down(knex, P) { return Promise.all([knex.schema.dropTableIfExists('items')]); }
