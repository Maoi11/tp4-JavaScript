// 4- Escribe una clase Producto para crear objetos. Estos objetos, deben presentar las propiedades código, nombre y precio, además del método imprime datos, el cual escribe por pantalla los valores de sus propiedades.
// Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
// Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados.

class Producto {
  #codigo;
  #nombre;
  #precio;
  constructor(codigo, nombre, precio) {
    this.#codigo = codigo;
    this.#nombre = nombre;
    this.#precio = precio;
  }
  get codigo() {
    return this.#codigo;
  }

  set codigo(nuevoCodigo) {
    this.#codigo = nuevoCodigo;
  }

  get nombre() {
    return this.#nombre;
  }

  set codigo(nuevoNombre) {
    this.#nombre = nuevoNombre;
  }
  get precio() {
    return this.#precio;
  }

  set precio(nuevoPrecio) {
    this.#precio = nuevoPrecio;
  }

  imprimeDatos() {
    document.write(`<h2>Datos del ${this.nombre}</h2>
    <ul>
    <li>Código de producto: ${this.codigo}.</li>
    <li>Nombre de producto: ${this.nombre}.</li>
    <li>Precio de producto: ${this.precio}.</li></ul>`)
  }
}

const producto1 = new Producto (321, 'Teclado Mecánico', '$16500');
const producto2 = new Producto (12, 'Mouse Óptico', '$8600');
const producto3 = new Producto (128, 'Pad XL', '$9350');

producto1.imprimeDatos();
producto2.imprimeDatos();
producto3.imprimeDatos();
