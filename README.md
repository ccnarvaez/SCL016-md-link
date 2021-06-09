# Markdown Links
## Índice

* [1. Resumen](#1-Resumen)
* [2. Alcance del proyecto](#2-Alcance-del-proyecto)
* [3. ¿Cómo hacer uso del cli?](#2-Cómo-hacer-uso-del-cli)
***

## 1. Resumen
El siguiente proyecto fue desarrollado con el propósito de leer y validar el status de los links contenido en un archivo tipo markdown (extensión '.md').
El objetivo general de esta herramienta es la de prestar apoyo en la revisión del status de los links contenidos dentro de un archivo, y que al estar rotos pueden restar valor al contenido.
La herramienta fue desarrollada usando herramientas de nodejs, tales como: Readline, file system, path, entre otras.
## 2. Alcance del proyecto
Extensión leída
La app sólo podrá ejecutarse en archivos de extensión '.md'.

Tipo de lineas
El proyecto fue desarrollado para leer e identificar líneas tipo markdown, es decir aquellas que responden a la estructura:
                            
        [texto](url)

## 3. ¿Cómo hacer uso del cli?

INSTALAR MODULO
El modulo es instalable a través de la siguiente línea de comando:

        npm i scl016-mdlinks-ccnarvaez

FUNCIÓN EJECUTABLE

La función que hace la lectura del archivo se llama mdLinks, por lo tanto la manera de activar la funcionalidad del programa:

        node mdLinks.js 

INDICAR ARCHIVO DÓNDE SE DESEA EJECUTAR

* No se indica archivo a leer
Si se ejecuta la linea de comando, y no se indica el archivo que se desea leer, la consola devolverá el siguiente mensaje de error:

        'Por favor indica un archivo'.

* No se indica archivo a leer
Si se indica un archivo cuya extensión no sea tipo '.md', se mostrará un mensaje de error en la consola:

        'El archivo debe ser tipo .md'

* Manera correcta de ejecutar el programa
Por consiguiente la manera de iniciar, es indicar un archivo tipo 'md' seguido de la funcion ejecutable:

        node mdLinks.js README.md

ACTIVAR VALIDACIÓN

Para activar la función de validación de links (y obtener el código de respuesta de la solicitud), se debe añadir un tercer parámetro (--validate) al CLI.

    node mdLinks.js README.md --validate
