exports.up = knex =>
  knex.schema.createTable('users', table => {
    table.increments();
    table.string('name').notNullable();
    table
      .string('email')
      .notNullable()
      .unique();
    table.string('password').notNullable();
    table.timestamps();
  });

exports.down = knex => knex.schema.dropTableIfExists('users');
