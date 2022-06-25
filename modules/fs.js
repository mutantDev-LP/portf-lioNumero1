const fs = require("fs");
const path = require("path");

fs.mkdir(path.join(__dirname, "./test"), (error) => {
  if (error) {
    return console.log("Erro: ", error);
  }

  console.log("Pasta criada com sucesso!");
});

// Criar um arquivo
fs.writeFile(
  path.join(__dirname, "/test", "test.txt"),
  "hello node!",
  (error) => {
    if (error) {
      return console.log("Erro: ", error);
    }

    console.log("Arquivo Criado");

    fs.appendFile(
      path.join(__dirname, "/test", "test.txt"),
      " Hello world!",
      (error) => {
        if (error) {
          return console.log("Erro: ", error);
        }

        console.log("Modificado com Sucesso!");
      }
    );

    fs.readFile(
      path.join(__dirname, "./test", "test.txt"),
      "utf8",
      (error, data) => {
        if (error) {
          return console.log("Erro: ", error);
        }

        console.log(data);
      }
    );
  }
);
