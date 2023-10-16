const cBotones = document.getElementsByClassName('cuadro');
const tJugadores = document.getElementsByClassName('containerPlayer');
const cuadro = document.getElementsByClassName('cuadro');
const btnReiniciar = document.getElementById('resetButton');
const alerts = document.getElementById('container');
const ganador = document.getElementsByClassName('ganador');
const perdedor = document.getElementsByClassName('perdedor');
const turnos = document.querySelector('.containerPlayer h3');

// 0 = vacio, 1 = X, 2 = O
selectedPositions = [
	[0, 0, 0],
	[0, 0, 0],
	[0, 0, 0],
];

function verificarGanador() {
	const combinacionesGanadoras = [
		[[0, 0], [0, 1], [0, 2]],
        [[1, 0], [1, 1], [1, 2]],
        [[2, 0], [2, 1], [2, 2]],
        [[0, 0], [1, 0], [2, 0]],
        [[0, 1], [1, 1], [2, 1]],
        [[0, 2], [1, 2], [2, 2]],
        [[0, 0], [1, 1], [2, 2]],
        [[0, 2], [1, 1], [2, 0]]
      ];

	for (let i = 0; i < combinacionesGanadoras.length; i++) {
		const combinacion = combinacionesGanadoras[i];
		const [a, b] = combinacion[0];
		const [c, d] = combinacion[1];
		const [e, f] = combinacion[2];

		if (
			selectedPositions[a][b] == selectedPositions[c][d] &&
			selectedPositions[c][d] == selectedPositions[e][f] &&
			selectedPositions[a][b] != 0
		) {
			return selectedPositions[a][b] == 1 ? 'X' : 'O';
		}
	}
	return null;
}

for (let i = 0; i < cBotones.length; i++) {
    cBotones[i].addEventListener('click', () => {
        const h3Element = tJugadores[0].querySelector('h3');
        if (cBotones[i].textContent == '' && turno === 'Turno de: X') {
            cBotones[i].textContent = 'X';
            selectedPositions[Math.floor(i / 3)][i % 3] = 1;
            turno = 'Turno de: O'; // Cambiamos el turno a 'O'
            cBotones[i].disabled = true;
        } else if (cBotones[i].textContent == '' && turno == 'Turno de: O') {
            cBotones[i].textContent = 'O';
            selectedPositions[Math.floor(i / 3)][i % 3] = 2;
            turno = 'Turno de: X'; 
            cBotones[i].disabled = true;
        }

        h3Element.textContent = turno;
        const ganador = verificarGanador();
        if (ganador) {
            for (let i = 0; i < cBotones.length; i++) {
                cBotones[i].disabled = true;
            }
            container.style.display = 'block';
        }
    });
}

function turns() {
	if (document.getElementById('checkbox2').checked) {
		turno = 'Turno de: X';
	} else if (document.getElementById('checkbox1').checked) {
		turno = 'Turno de: O';
	}
	turnos.textContent = turno;
}	


function reload() {
    location.reload();
} 

function ocultarTarjetaDeGanador() {
	container.style.display = 'none';
}

function ocultarTarjetaDePresentacion() {
	containerPresentacion.style.display = 'none';
		
}

function verificadorDeCheckBox(checkbox) {
  let checkboxes = document.getElementsByName(checkbox.name);
  checkboxes.forEach(function (item) {
    if (item !== checkbox) {
      item.checked = false;
    }
  });
}