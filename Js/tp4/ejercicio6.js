// 6- Crear una clase Libro que contenga al menos las siguientes propiedades:
// ISBN
// Título
// Autor
// Número de páginas

// Crear sus respectivos métodos get y set correspondientes para cada propiedad. Crear el método mostrarLibro() para mostrar la información relativa al libro con el siguiente formato:

// “El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”

// Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
// Por último, indicar cuál de los 2 objetos “libros” tiene más páginas.


class Libro {
    #isbn;
    #titulo;
    #autor;
    #numPag;
    constructor (isbn, titulo, autor, numPag){
        this.#isbn = isbn;
        this.#titulo = titulo; 
        this.#autor = autor;
        this.#numPag = numPag;
    }

    get isbn () {
        return this.#isbn;
    }
    set isbn(newIsbn) {
        this.#isbn = newIsbn;
    }

    get titulo () {
        return this.#titulo;
    }
    set titulo(newTitulo) {
        this.#titulo = newTitulo;
    }

    get autor () {
        return this.#autor;
    }
    set autor(newAutor) {
        this.#autor = newAutor;
    }

    get numPag () {
        return this.#numPag;
    }
    set numPag(newNumPag) {
        this.#numPag = newNumPag;
    }

    mostrarLibro() {
        document.write(`<p>El libro "${this.titulo}", con ISBN: ${this.isbn}, creado por el autor: ${this.autor}; tiene ${this.numPag} páginas.</p>`);
    }


}



const libro1 = new Libro (9789871138135, 'El amor en los tiempos del cólera', 'Gabriel Garcia Marquez', 442 );
const libro2 = new Libro (9789563164732, 'Crimen y castigo', 'Fedor Dovstoieski', 608 );
const libro3 = new Libro (9789505470662, 'El Señor de Los Anillos: El retorno del rey.', 'J.R.R. Tolkien',416 );


function libroMasLargo () {
   
    if (libro1.numPag > libro2.numPag && libro1.numPag > libro3.numPag) {
        document.write(`El libro ${libro1.titulo} tiene mayor cantidad de páginas.`);
    } else if (libro2.numPag > libro1.numPag && libro2.numPag > libro3.numPag) {
        document.write(`El libro ${libro2.titulo} tiene mayor cantidad de páginas.`);
    } else if (libro3.numPag > libro1.numPag && libro3.numPag > libro3.numPag) {
        document.write(`El libro ${libro3.titulo} tiene mayor cantidad de páginas.`);
}
}



libro1.mostrarLibro();
libro2.mostrarLibro();
libro3.mostrarLibro();

libroMasLargo();
