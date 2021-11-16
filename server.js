const express = require("express");
const cors = require("cors");
const db = require("./models");

const app = express();

app.use(cors()); // разрешаем доступ к любому клиенту

// парсим запросы типа содержимого - application/json 
app.use(express.json());

// парсим запросы типа содержимого - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Сервер подключен к базе данных!");
  })
  .catch(err => {
    console.log("Невозможно подключиться к базе данных!", err);
    process.exit();
  });

// простой маршрут
app.get("/", (req, res) => {
  res.json({ message: "Работает сервер приложения." });
});

require("./routes/tutorial.routes")(app);

// устанавливаем порт, прослушиваем запросы 
const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}.`);
});
