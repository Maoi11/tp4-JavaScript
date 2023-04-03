// 8- Crea una clase llamada "Persona" que tenga las propiedades "nombre", "edad" y "profesión", y los métodos "saludar" y "despedirse". Luego, crea dos objetos de la clase "Persona" con diferentes valores para sus propiedades y llama a sus métodos "saludar" y "despedirse".

class Persona {
  #nombre;
  #edad;
  #profesion;
  constructor(nombre, edad, profesion) {
    this.#edad = edad;
    this.#nombre = nombre;
    this.#profesion = profesion;
  }
  get nombre() {
    return this.#nombre;
  }
  set nombre(nuevoNombre) {
    this.#nombre = nuevoNombre;
  }
  get edad() {
    return this.#edad;
  }
  set edad(nuevaEdad) {
    this.#edad = nuevaEdad;
  }
  get profesion() {
    return this.#profesion;
  }
  set profesion(nuevaProfesion) {
    this.#profesion = nuevaProfesion;
  }

  saludar() {
    document.write(`<p>¡Hola, ${this.nombre}!</p>`);
  }

  despedirse() {
    document.write(`<p>¡Chau, ${this.nombre}!</p>`);
  }
}

const persona1 = new Persona ('Carlos', 45, 'Maestro');
const persona2 = new Persona ('Maria', 12, 'estudiante');
console.log(persona1);
console.log(persona2);

persona1.saludar();
persona2.saludar();
persona1.despedirse();
persona2.despedirse();

