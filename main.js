const promises = new Promise((resolve, reject) => {
  setTimeout(() => {
    let saludo = "hola a todos";
    saludo = false;

    if (saludo) {
      resolve(saludo);
    } else {
      reject("No hay saludo");
    }
  }, 1000);
});

// promises.then((res) => console.log(res)).catch((err) => console.log(err));

console.log(promises.catch((e) => console.log(e)));
