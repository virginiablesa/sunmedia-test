# Test 2

El fragmento de código de nuestro fichero `test.js` nos devuelve un output no 
deseado. Queremos imprimir un valor incremental a cada segundo pero lo que 
nos devuelve el código es el mismo valor en cada iteración. 

1. Sin necesidad de ejecutar el código, ¿sabrías decirnos qué valor imprimiría
 por consola el script? ¿Cuál es el motivo?
2. Sabiendo que el output que buscamos es el que encuentras bajo estas líneas… 
¿Cómo solucionarías el fragmento de código para que el output sea el deseado?

```
    > 0
    > 1
    > 2
    > 3
    > 4
```

SOLUCIÓN:

1.- 
  ```
      > 5
      > 5
      > 5
      > 5
  ```

El problema es que el valor que se pinta en la consola es el último que recibe la variable "i"

2.- Si queremos obtener ese output podría servir el usar otra variable, de tipo contador e ir sumando 1

```
    for (var i = 0; i < 5; i++) {
        var j = 0;
        setTimeout(function () {
            console.log(j++);
        }, 1000)
    }
```
