# Test 3

En este caso, tenemos un código usando el objeto `Promise` (Promesa). Las *promises* 
(promesas) nos permiten manejar situaciones asíncronas en nuestras ejecuciones, 
pero tenemos un pequeño problema… No es una solución totalmente cross-browser. 
Sabemos que no funciona en Internet Explorer así que nos gustaría saber cómo 
modificarías nuestro código (`test.js`) para que funcione correctamente.

SOLUCIÓN:

Para solucionarlo habría que usar alguna librería de terceros que permita manejar las operaciones asíncronas, como Bluebird, o usar Promise Polifill. Habría además que pasae a ES5 el código. Un ejemplo sería algo así:

```
  <script src="https://cdn.jsdelivr.net/npm/promise-polyfill@8/dist/polyfill.min.js"></script> 

  'use strict';

    var promise = new Promise(function (resolve, reject) {

      setTimeout(function () {
        resolve("result");
      }, 1000);
    });

    promise.then(function (result) {
      alert("Fulfilled: " + result);
    }, function (error) {
      alert("Rejected: " + error);
    });

```
