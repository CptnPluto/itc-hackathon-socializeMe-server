exports.up = function (knex) {
    return knex.schema
        .createTable("NYC", (table) => {
            table.increments("id").primary();
            table.string("name");
            table.string("description");
            table.string("genre");
            table.string("category");
            table.string("venue");
            table.string("address");
            table.string("date");
            table.string("time");
            table.string("url");
            table.string("artist");
            table.string("price");
        })
        .createTable("TLV", (table) => {
            table.increments("id").primary();
            table.string("name");
            table.string("description");
            table.string("genre");
            table.string("category");
            table.string("venue");
            table.string("address");
            table.string("date");
            table.string("time");
            table.string("url");
            table.string("artist");
            table.string("price");
        });
};

exports.down = function (knex) {
    return knex.schema.dropTable("NYC").dropTable("TLV");
};
