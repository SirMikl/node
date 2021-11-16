module.exports = app => {
    const tutorials = require("../controllers/tutorial.controller.js");
  
    var router = require("express").Router();
  
    // Создать новую запись
    router.post("/", tutorials.create);
  
    // Вывести все записи
    router.get("/", tutorials.findAll);
  
    // Вывести все опубликованные записи
    router.get("/published", tutorials.findAllPublished);
  
    // Вывести одну запись с уникальным id
    router.get("/:id", tutorials.findOne);
  
    // Обновить запись с уникальным id
    router.put("/:id", tutorials.update);
  
    // Удалить запись с уникальным id
    router.delete("/:id", tutorials.delete);
  
    // Удалить все записи
    router.delete("/", tutorials.deleteAll);
  
    app.use('/api/tutorials', router);
  };