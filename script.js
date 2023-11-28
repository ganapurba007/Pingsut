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


const pGajah = document.querySelector('.gajah');
pGajah.addEventListener('click', function(){
	alert('ok');
});