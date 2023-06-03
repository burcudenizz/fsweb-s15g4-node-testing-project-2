/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema
  .createTable("Gorevler",t=>{
    t.increments("GorevId") //1den başlayıp tek tek id atar.
    t.string("Adi").notNullable() // nutNullable boş geçilmemesi gerekenler için kullanılır.
    t.string("Aciklama")
  })
  .createTable("Tasklar",t=>{
    t.increments("TaskId")
    t.string("Adi").notNullable()
    t.string("Aciklama")
    t.timestamp("EklemeTarihi").defaultTo(knex.fn.now())
    t.integer("GorevId")
        .references("GorevId")  // eşleştirmeyi gösterir.
        .inTable("Gorevler")
        .onDelete("CASCADE") // RESTRICT
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("Tasklar")
    .dropTableIfExists("Gorevler")
};



