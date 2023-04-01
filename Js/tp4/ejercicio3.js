// 3-Escribe una clase que permita crear distintos objetos “rectángulos”, con las propiedades de alto y ancho, mas los métodos necesarios para modificar y mostrar sus propiedades, calcular el perímetro y el área

class rectangulo {
    constructor(nombre, alto, ancho) {
        this._nombre = nombre;
        this._alto = alto;
        this._ancho = ancho;
    }

    get nombre() {
        return this._nombre;
    }

    set nombre(nuevoNombre) {
        this._nombre = nuevoNombre;
        }
    
    get alto() {
        return this._alto;
    }

    set alto(nuevoAlto) {
        if (!isNaN(nuevoAlto)) {
            this._alto = nuevoAlto;
        }
    }

    get ancho() {
        return this._alto;
    }

    set ancho(nuevoAncho) {
        if (!isNaN(nuevoAncho)) {
            this._ancho = nuevoAncho
        }
    }

    perimetro() {
        let perimetro = ((2* this._alto) + (2* this._ancho));
        return document.write(`<br>El perímetro del rectángulo "${this.nombre}" es ${perimetro}.`);
    }

   area() {
        let area = (this._alto * this._ancho);
       return document.write(`<br>El área del rectángulo "${this.nombre}" es ${area}.`);
    }
}

const rectangulo1 = new rectangulo ('rectangulo1', 4, 2);

rectangulo1.area();
rectangulo1.perimetro();
rectangulo1.ancho = 23;
rectangulo1.area();
