let buttonStart = document.getElementById('btnSorteio');
let containerSorteio = document.getElementById('containerSorteio');
let containerSorteioOrdenado = document.getElementById('containerSorteioOrdenado');
let ballNumber = document.getElementById('spanNum');
let numbers = [];
let buttonBingo = document.getElementById('btnBingo');
let modalBingo = document.getElementById('modalBingo');

function formataSaida(vetor) {
	let texto = '';

	for (let i = 0; i < vetor.length; i++) {
		texto += vetor[i];

		if (i % 4 != 3 && i != vetor.length - 1) {
			texto += ' ';
		}

		if (i % 4 == 3) {
			texto += '<br>';
		}
	}
	return texto;
}

function selectionSort(vetor) {
	// Loop para controlar a posição do vetor
	for (let i = 0; i < vetor.length - 1; i++) {
		let minIndex = i; // Assume o primeiro elemento como o menor

		// Loop para encontrar o menor elemento no vetor não ordenado
		for (let j = i + 1; j < vetor.length; j++) {
			// Se o elemento atual for menor que o menor encontrado até agora
			if (vetor[j] < vetor[minIndex]) {
				// Atualiza o índice do menor elemento encontrado
				minIndex = j;
			}
		}
		// Se o menor elemento encontrado não é o atual, troca os elementos
		if (minIndex != i) {
			let temp = vetor[i]; // Armazena o valor do elemento atual
			vetor[i] = vetor[minIndex]; // Troca o elemento atual pelo menor encontrado
			vetor[minIndex] = temp; // Coloca o menor elemento na posição atual
		}
	}
	return vetor;
}

buttonStart.addEventListener('click', () => {
	if (numbers.length >= 75) {
		alert('Todos os números já foram sorteados!');
		return;
	}

	let randomNumber = Math.floor(Math.random() * 75) + 1;

	while (numbers.includes(randomNumber)) {
		randomNumber = Math.floor(Math.random() * 75) + 1;
	}

	numbers.push(randomNumber);
	ballNumber.innerHTML = randomNumber;
	containerSorteio.innerHTML = formataSaida(numbers);

	let numerosOrdenados = [...numbers];
	selectionSort(numerosOrdenados);
	containerSorteioOrdenado.innerHTML = formataSaida(numerosOrdenados);
});
