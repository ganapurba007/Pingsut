function getPilihanKomputer(){
	const komp = Math.random();
	if(komp < 0.34) return 'gajah';
	if(komp >= 0.34 && komp < 0.68) return 'orang';
	return 'semut';
}

function getHasil(komp, player){
	if(player == komp) return 'SERI';
	if(player =='gajah')return (komp == 'orang') ? 'MENANG' : 'KALAH';
	if(player == 'orang')return (komp == 'gajah') ? 'KALAH' : 'MENANG';
	if(player == 'semut')return (komp == 'gajah') ? 'MENANG' : 'KALAH';
}


function putar(){
	const imgKomputer = document.querySelector('.img-komputer');
	const gambar = ['gajah', 'orang', 'semut'];
	let i = 0
	const waktuMulai = new Date().getTime()
	setInterval(function(){
		if(new Date().getTime() - waktuMulai > 1000){
			clearInterval;
			return;
		}
		imgKomputer.setAttribute('src', 'img/' + gambar[i++] + '.png');
		if(i == gambar.length) i = 0;
	}, 100)
}

const pilihan = document.querySelectorAll('li img');
pilihan.forEach(function(pil){
	pil.addEventListener('click', function(){
		const pilihanKomputer = getPilihanKomputer();
		const pilihanPlayer = pil.className;
		const hasil = getHasil(pilihanKomputer,pilihanPlayer);

		putar();

		setTimeout(function(){
			const imgKomputer = document.querySelector('.img-komputer');
			imgKomputer.setAttribute('src', 'img/' + pilihanKomputer + '.png');

			const info = document.querySelector('.info');
			info.innerHTML = hasil;
		},1000)
	});
});

