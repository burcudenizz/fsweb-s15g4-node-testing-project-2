/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

const defaultGorevler = [
  { Adi: "Sağlıklı Beslen", Aciklama: "Sağlıklı ol" },
  { Adi: "Yazılım Öğren", Aciklama: "Yazılım konusunda uzman ol" },
];

const defaultTasklar = [
  { Adi: "Spor Yap", Aciklama: "Spora Git", GorevId: 1 },
  { Adi: "Beslenmene Dikkat Et", Aciklama: "Meyve Ye", GorevId: 1 },
  { Adi: "Algoritma öğren", Aciklama: "Farklı sorular çöz", GorevId: 2 },
  {
    Adi: "Yazılım ile ilgili kitaplar oku",
    Aciklama: "Yazılım sayfalarındaki kitapları oku",
    GorevId: 2,
  },
];

exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("Tasklar").truncate(); //önce truncate ile veri tabanını temizler.
  await knex("Gorevler").truncate();

  await knex("Gorevler").insert(defaultGorevler); //oluşturduğumuz datayı oluşturduğumuz tablolara atar.
  await knex("Tasklar").insert(defaultTasklar);
};
