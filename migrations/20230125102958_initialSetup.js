exports.up = function (knex) {
    return knex.schema
        .createTable("NYC", (table) => {
            table.increments("id").primary().unsigned();
            table.string("name");
            table.string("description");
            table.string("venue");
            table.string("date");
            table.string("time");
            table.string("url");
            table.string("artist");
            table.string("price");
            table.string("genre");
        })
        .createTable("TLV", (table) => {
            table.increments("id").primary().unsigned();
            table.string("name");
            table.string("description");
            table.string("venue");
            table.string("date");
            table.string("time");
            table.string("url");
            table.string("artist");
            table.string("price");
            table.string("genre");
        });
};

exports.down = function (knex) {};
