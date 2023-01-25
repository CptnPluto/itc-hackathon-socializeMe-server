exports.up = function (knex) {
  return knex.schema.createTable("user_events", (table) => {
    table.integer("userId").notNull();
    table.integer("id").notNull();
    table.string("city").notNull();
  });
};

exports.down = function (knex) {};
