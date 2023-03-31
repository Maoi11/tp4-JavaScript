let usersChoice = 0
let computersChoice = 0
let usersScore = 0
let computersScore = 0


alert('Bienvenido a "Rock, Papers, Scissors, Lizard, Spock", pero sin Lizard y sin Spock. Para comenzar a jugar, presioná aceptar. Deberás ingresar una opción del 1 al 3, donde: 1 es piedra, 2 es papel, y 3 es tijera. Mientras tanto, yo elegiré también una opción. Luego te anunciaré el ganador. ¡Si, es el piedra papel o tijera de toda la vida! En la pantalla podrás ir viendo quien ganó mas veces. ¡Buena suerte!');




do {
    usersChoice = parseInt(prompt(`Adelante, elegí, estoy segura de que perderás...
    1 - Piedra
    2 - Papel
    3 - Tijera`));

    computersChoice = Math.floor(Math.random() * (3 - 1 + 1) + 1);
    console.log(computersChoice);

    if (!isNaN(usersChoice)) {
        switch (usersChoice) {
            case 1:
                if (computersChoice == 1) {
                    alert('Qué aburrido, empatamos. Mi elección es piedra.');
                    usersScore++;
                    computersScore++;
                } else if (computersChoice == 2) {
                    alert('Bazzinga! Yo elegí papel. Punto para mí.');
                    computersScore++;
                } else if (computersChoice == 3) {
                    alert('Yo elegí tijeras, me ganaste a pesar de tu inteligencia inferior.');
                    usersScore++;
                }
                break;

            case 2:
                if (computersChoice == 2) {
                    alert('Parece que pensamos igual, yo también elegí Papel.');
                    usersScore++;
                    computersScore++;
                } else if (computersChoice == 3) {
                    alert('Miserable mortal, rendite de una vez. Yo elegí tijeras, sumaré ese punto para mí.');
                    computersScore++;
                } else if (computersChoice == 1) {
                    alert('Este puño cerrado significa piedra. Tenés suerte de principiante, pero no durará mucho');
                    usersScore++;
                }
                break;


            case 3:
                if (computersChoice == 3) {
                    alert('Un punto para cada uno, tijera empata a tijera.');
                    usersScore++;
                    computersScore++;
                } else if (computersChoice == 1) {
                    alert('Le falta filo a esa tijera, la destruí muy fácil con mi piedra');
                    computersScore++;
                } else if (computersChoice == 2) {
                    alert('Cuando cortes mi papel, que sea formando la V de venganza, porque me la voy a cobrar.');
                    usersScore++;
                }
                break;

            default:
                alert('UPS, Parece que ingresaste un valor equivocado. Debería sumar este punto para mí, pero te doy otra oportunidad.');
                break;
        }


    } else {
        alert('¿Sin entender instrucciones pensás ganarme en un juego? Prestame atención. Tenés que ingresar 1, 2 o 3 para poder elegir tu jugada. Vamos de nuevo.')
    }
} while (confirm('¿Querés jugar de nuevo?'));

document.write(`<h1>Puntajes</h1>
Tu puntaje: ${usersScore}
<br> Mi puntaje: ${computersScore}`);

if (usersScore > computersScore) {
    alert('Felicidades, ganaste. Pero aquí te espero para demostrarte que sólo tuviste suerte.');
} else if (computersScore > usersScore) {
    alert('Jajaja, perdiste, loser.');
} else {
    alert('Empatamos, volvé cuando quieras definir por penales.');
}

