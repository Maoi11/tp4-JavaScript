// 5- Crea una clase llamada Persona que siga las siguientes condiciones:
// Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
// Los métodos que se debe poder utilizar  son:
// mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.
// Para realizar este método tener en cuenta la siguiente tabla de generaciones:

// esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
// mostrarDatos: devuelve toda la información del objeto.
// generaDNI(): genera un número aleatorio de 8 cifras.

class Persona {
  #nombre;
  #edad;
  #dni;
  #sexo;
  #peso;
  #altura;
  #nacimiento;
  #generacion;
  #cualidad;
  constructor(nombre, edad, dni, sexo, peso, altura, nacimiento) {
    this.#nombre = nombre;
    this.#edad = edad;
    this.#dni = dni;
    this.#altura = altura;
    this.#sexo = sexo;
    this.#peso = peso;
    this.#nacimiento = nacimiento;
  }
  // getters y setters
  get nombre() {
    return this.#nombre;
  }
  set nombre(nuevoNombre) {
    if (nuevoNombre.lenght > 0) {
      this.#nombre = nuevoNombre;
    }
  }

  get edad() {
    return this.#edad;
  }
  set edad(nuevaEdad) {
    if (nuevaEdad > 0) {
      this.#edad = nuevaEdad;
    }
  }

  get dni() {
    return this.#dni;
  }
  set dni(nuevoDni) {
    if (nuevoDni > 0 && nuevoDni <= 99999999) {
      this.#dni = nuevoDni;
    }
  }

  get sexo() {
    return this.#sexo;
  }
  set sexo(nuevoSexo) {
    if (
      nuevoSexo === "F" ||
      nuevoSexo === "M" ||
      nuevoSexo === "f" ||
      nuevoSexo === "m"
    ) {
      this.#sexo = nuevoSexo;
    }
  }

  get peso() {
    return this.#peso;
  }
  set peso(nuevoPeso) {
    if (nuevoPeso > 0) {
      this.#peso = nuevoPeso;
    }
  }
  get nacimiento() {
    return this.#nacimiento;
  }
  set nacimiento(nuevoNacimiento) {
    if (nuevoNacimiento > 0 && nuevoNacimiento <= 2023) {
      this.#nacimiento = Nacimiento;
    }
  }

  get generacion() {
    return this.#generacion;
  }
  set generacion(nuevaGeneracion) {
    this.#generacion = nuevaGeneracion;
  }

  get cualidad() {
    return this.#cualidad;
  }

  set cualidad(nuevaCualidad) {
    this.#cualidad = nuevaCualidad;
  }

  // MÉTODOS
  mostrarGeneracion() {
    let anioNac = this.nacimiento;
    if (anioNac >= 1930 && anioNac <= 1948) {
      this.generacion = "Silent Generation";
      this.cualidad = "austeridad";
      document.write(
        `<p>${this.nombre} es de la generación '${this.generacion}', y su cualidad principal es la ${this.cualidad}.</p>`
      );
    } else if (anioNac >= 1949 && anioNac <= 1968) {
      this.generacion = "Baby Boom";
      this.cualidad = "ambición";
      document.write(
        `<p>${this.nombre} es de la generación '${this.generacion}', y su cualidad principal es la ${this.cualidad}.</p>`
      );
    } else if (anioNac >= 1969 && anioNac <= 1980) {
      this.generacion = "Generación X";
      this.cualidad = "obsesión por el éxito";
      document.write(
        `<p>${this.nombre} es de la generación '${this.generacion}', y su cualidad principal es la ${this.cualidad}.</p>`
      );
    }
else if (anioNac >= 1981 && anioNac <= 1993) {
    this.generacion = "Generación Y (Millennial)";
    this.cualidad = "frustración";
    document.write(
      `<p>${this.nombre} es de la generación '${this.generacion}', y su cualidad principal es la ${this.cualidad}.</p>`
    );
  }
  else if (anioNac >= 1994 && anioNac <= 2010) {
    this.generacion = "Generación Z";
    this.cualidad = "irreverencia";
    document.write(
      `<p>${this.nombre} es de la generación '${this.generacion}', y su cualidad principal es la ${this.cualidad}.</p>`
    );
  }
  }
}


const marisa = new Persona ('Marisa Garat', '28', 38183736, 'F', 78, 1.70, 1993);
const sofia = new Persona ('Sofia Garat', '20', '44186713', 'F', 50, 1.65, 2002);
const madre = new Persona ('Marisa Tettamanzi', '66', 17858723, 'F', 73, 1.64, 1965);
console.log(marisa);
marisa.mostrarGeneracion();
console.log(sofia);
sofia.mostrarGeneracion(); 
console.log(madre);
madre.mostrarGeneracion();