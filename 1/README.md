# Test 1

Para responder a este test encontrarás un archivo llamado `test.js` en esta 
misma carpeta donde hay un pequeño fragmento de código que deberás analizar 
y responder a las siguientes cuestiones. 

1. En el fragmento de código de nuestro archivo (`test.js`) podemos encontrar
 hasta 3 variables. ¿Podrías decirnos cuál sería el valor de todas ellas al 
 finalizar la ejecución del script?
2. Modifica el código para que las variables `rgb` y `wb` mantengan sus valores 
iniciales y `colors` tenga los valores de ambas al finalizar la ejecución del 
script.
3. Además, tenemos un bug localizado en dispositivos con Internet Explorer… 
El código de nuestro script no funciona y necesitamos que se ejecute también 
en este navegador. ¿Sabrías identificar cuál es el problema? ¿Qué solución nos
 propones?

**PS**: No es estrictamente necesario tener Internet Explorer para poder identificar y/o resolver el bug. 

SOLUCIÓN:

1.- La variable rgb y colors quedan con el mismo valor. La variable wb se mantiene con su valor inicial:

    ```
      rgb = {
        red: "#FF0000",
        green: "#00FF00",
        blue: "#0000FF",
        white: "#FFFFFF",
        black: "#000000"
      }
      wb = {
        red: "#FF0000",
        green: "#00FF00",
        blue: "#0000FF"
      }
      colors = {
        red: "#FF0000",
        green: "#00FF00",
        blue: "#0000FF",
        white: "#FFFFFF",
        black: "#000000"
      }

    ```

2.- Para mantener el valor de rgb basta con asignar un objeto vacío al  objeto de destino

    ```
        var rgb = {
            red: "#FF0000",
            green: "#00FF00",
            blue: "#0000FF"
        };

        var wb = {
            white: "#FFFFFF",
            black: "#000000"
        };

        var colors = Object.assign({}, wb, rgb);

    ```

  3.- El código no funciona en IE porque no soporta el método assign
    Posibles soluciones:
    A) Usar alguno de los polyfills que existen para el método assign o usar alguna herramienta para transpilar el código como babel

    B) Modificar el código para no usar la función  assign, por ejemplo:

        ```
          var keys = Object.keys(rgb)
          var currentKey;
          var colors ={};
          for (let i = 0; i<keys.length; i++) {
            currentKey = keys[i]
            colors[currentKey] = rgb[currentKey];
          };

          keys = Object.keys(wb)
          for (let i = 0; i<keys2.length; i++) {
            currentKey = keys2[i]
            colors[currentKey] = wb[currentKey];
          };
        ```
