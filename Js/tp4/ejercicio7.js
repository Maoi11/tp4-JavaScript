// 7- Nos piden realizar una agenda telefónica de contactos.

// Un contacto está definido por un nombre y un teléfono. Se considera que un contacto es igual a otro cuando sus nombres son iguales.

// Una agenda de contactos está formada por un conjunto de contactos. Se podrá crear de dos formas, indicando nosotros el tamaño o con un tamaño por defecto (10).

// Los métodos de la agenda serán los siguientes:

// aniadirContacto(Contacto): Añade un contacto a la agenda, sino la agenda no puede almacenar más contactos indicar por pantalla.
// existeContacto(Contacto): indica si el contacto pasado existe o no.
// listarContactos(): Lista toda la agenda
// buscarContacto(nombre): busca un contacto por su nombre y muestra su teléfono.
// eliminarContacto(Contacto c): elimina el contacto de la agenda, indica si se ha eliminado o no por pantalla
// agendaLlena(): indica si la agenda está llena.
// huecosLibres(): indica cuántos contactos más podemos ingresar.

// Crea un menú con opciones que serán seleccionadas por el usuario usando un prompt, las salidas de las operaciones seleccionadas por el usuario se pueden mostrar en pantalla y  por consola.

// ----------------- OBJETO CONTACTO --------------------
class Contacto {
  #nombre;
  #telefono;
  constructor(nombre, telefono) {
    this.#nombre = nombre;
    this.#telefono = telefono;
  }
  get nombre() {
    return this.#nombre;
  }
  set nombre(nuevoNombre) {
    this.#nombre = nuevoNombre;
  }
  get telefono() {
    return this.#telefono;
  }
  set telefono(nuevoTelefono) {
    this.#telefono = nuevoTelefono;
  }
}

// ----------------- OBJETO AGENDA --------------------
class Agenda {
  #tamanio;
  #contactos;
  constructor(tamanio = 10) {
    this.#contactos = [];
    this.#tamanio = tamanio;
  }

  // -----SETTERS Y GETTERS
  get tamanio() {
    return this.#tamanio;
  }
  set tamanio(nuevoTamanio) {
    this.#tamanio = nuevoTamanio;
  }

  get contactos() {
    return this.#contactos;
  }
  set contactos(nuevoContacto) {
    this.#contactos.push(nuevoContacto);
  }

  // -----MÉTODOS

  //AniadirContacto(Contacto): Añade un contacto a la agenda, si la agenda no puede almacenar más contactos indicar por pantalla.
  aniadirContacto(contacto) {
    if (this.existeContacto(contacto)) {
      console.log("");
    } else {
      if (this.agendaLlena() == false) {
        this.contactos.push(contacto);
        document.write(
          `<p>El contacto ${contacto.nombre} ha sido añadido a la agenda.</p>`
        );
      } else {
        alert("<p>La agenda está llena. No se puede añadir otro contacto.</p>");
      }
    }
  }

  // existeContacto(Contacto): indica si el contacto pasado existe o no.
  existeContacto(contacto) {
    let existeContacto = this.contactos.find(
      (contactoBuscado) => contactoBuscado.nombre === contacto.nombre
    );
    console.log(existeContacto);

    if (existeContacto === true) {
      document.write(
        `<p>Sí existe el contacto '${contacto.nombre}' en la agenda.</p>`
      );
      return true;
    } else {
      document.write(
        `<p>No existe el contacto '${contacto.nombre}' en la agenda.</p>`
      );
      return false;
    }
  }

  // agendaLlena(): indica si la agenda está llena.
  agendaLlena() {
    if (this.contactos.lenght === this.tamanio) {
      document.write("Agenda llena");
      return true;
    } else {
      document.write("La agenda tiene espacio vacío.");
      return false;
    }
  }

  // listarContactos(): Lista toda la agenda
  listarContactos() {
    for (let i = 0; i < this.contactos.length; i++) {
      document.write(
        `<p>Contacto: ${this.contactos[i].nombre} - Telefono: ${this.contactos[i].telefono}.</p>`
      );
    }
  }

  // buscarContacto(nombre): busca un contacto por su nombre y muestra su teléfono.
  buscarContacto(contacto) {
    if (this.existeContacto) {
      return document.write(
        `El número de teléfono del contacto '${contacto.nombre}' es '${contacto.telefono}'`
      );
    } else {
      return document.write(`El contacto no existe en al agenda.`);
    }
  }

  // eliminarContacto(Contacto c): elimina el contacto de la agenda, indica si se ha eliminado o no por pantalla

  // huecosLibres(): indica cuántos contactos más podemos ingresar.
  huecosLibres() {
    let espacioLibre = this.tamanio - this.contactos.length;
    if (espacioLibre > 0) {
      document.write(`El espacio disponible es ${espacioLibre}`);
    } else {
      document.write(`No hay espacio disponible`);
    }
  }
}

const agendaNueva = new Agenda(10);
console.log(agendaNueva);

do {
  let opcion = prompt(`Seleccione una opción:
1. Añadir un contacto.
2. Verificar si un contacto existe.
3. Listar contactos.
4. Buscar contacto.
5. Eliminar un contacto.
6. Verificar si la agenda está llena.
7. Consultar espacio libre en la agenda.
8. Cambiar tamaño de la agenda. `);

  switch (opcion) {
    case "1":
      console.log(`1. Añadir un contacto.`);
      let nombre = prompt("Ingrese el nombre del contacto");
      let telefono = prompt("Ingrese el número del contacto.");
      let contactoNuevo = new Contacto(nombre, telefono);
      agendaNueva.aniadirContacto(contactoNuevo);
      break;

    case "2":
      console.log(`2. Verificar si un contacto existe.`);
      let nombreAVerificar = prompt("Ingrese el nombre del contacto.");
      agendaNueva.existeContacto(nombreAVerificar);
      break;

    case "3":
      console.log(`3. Listar contactos.
        `);
      agendaNueva.listarContactos();
      break;

    case "4":
      console.log(`4. Buscar contacto.
        `);
      let nombreBuscado = prompt(
        "Ingrese el nombre del contacto que desea buscar."
      );
      agendaNueva.buscarContacto(nombreBuscado);
      break;

    case "5":
      console.log(`5. Eliminar un contacto.
        `);

      break;

    case "6":
      console.log(`6. Verificar si la agenda está llena.
        `);
      agendaNueva.agendaLlena();
      break;

    case "7":
      console.log(`7. Consultar espacio libre en la agenda.
        `);
      agendaNueva.huecosLibres();
      break;

    case "8":
      console.log(`8. Cambiar tamaño de la agenda.`);
      let nuevoTamanio = parseInt(
        prompt(
          "Ingrese la cantidad de contactos que desea que tenga su agenda."
        )
      );
      agendaNueva.tamanio = nuevoTamanio;
      document.write(`El nuevo tamaño de la agenda es ${this.tamanio}`);
      break;

    default:
      alert("Usted no seleccionó una opción válida.");
      break;
  }
} while (confirm("¿Desea realizar otra acción con su agenda?"));
