// 1- Crea un objeto llamado auto que tenga algunas características como el color, marca, modelo y si está encendido o apagado. Crea los métodos necesarios para permitir encender y apagar el auto.

// Output:

// objeto.encender();  auto encendido
// objeto.apadar(); El auto se apagó

let auto = {
    color: 'Rojo',
    marca: 'Toyota',
    modelo: 'Etios',
    encendido: false,

    encender() {
        this.encendido = true;
        document.write(`<br>El auto está encendido.`)
    },

    apagar() {
        this.encendido = false;
        document.write(`<br>El auto está apagado.`)
    },

}

document.write(`<ul>
<li>Color: ${auto.color}</li>
<li>Marca: ${auto.marca}</li>
<li>Modelo: ${auto.modelo}</li>
<li>Encendido: ${auto.encendido}</li>`);

auto.encender();
auto.apagar();





