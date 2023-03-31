// 2-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
// Una propiedad titular con el valor "Alex".
// Una propiedad saldo, teniendo como valor inicial 0.
// Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
// Un método extraer() que permita retirar la cantidad pasada como parámetro.
// Un método informar() que retorne la información del estado de la cuenta. 

// Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta.

class Cuenta {
    constructor(titular) {
        this.titular = titular;
        this.saldo = 0;
    }

    ingresar(dinero) {
        if (!isNaN(dinero)) {
            this.saldo += dinero;
            document.write(`<br>Usted ingresó $${dinero} a su cuenta.`);
        }
    }

    extraer(monto) {
        if (!isNaN(monto)) {
            this.saldo -= monto;
            document.write(`<br>Usted extrajo $${monto} de su cuenta.`);
        } 
    }

    informar() {
        document.write(`<br>Usted tiene disponibles $${this.saldo} en su cuenta.`);
    }


}

let cuenta = new Cuenta('Alex');
cuenta.ingresar(3500);
cuenta.extraer(500);
cuenta.informar();


