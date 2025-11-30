const player = {
item: 0,
generators: 0,
gultiplier:1,
// i am not explaing this
upgrade: 0,
gencost: 10,
//gencost means generator cost
ucost: 50,
//ucost means upgrade cost
totalMult: 1,
}
function getItem() {
	player.item++;
}
function addgenerator() {
	if(player.item >= player.gencost) {
		player.item-=player.gencost;
		player.gencost+=player.gencost;
	player.generators++
	player.gultiplier+=0.5
	}
	
}
function addupgrade() {
	if(player.item >= player.ucost) {
		player.item-=player.ucost;
	player.ucost+=player.ucost*2;
	player.upgrade++
	}
	}
function save() {
	var save = player
}
	function testloop() {
		player.totalMult=player.gultiplier * (2 ** player.upgrade);
		player.item+=player.totalMult * player.generators * 0.06;
		document.getElementById("player.item").innerHTML=Math.floor(player.item);
		document.getElementById("player.upgrade").innerHTML=player.upgrade;
		document.getElementById("player.generators").innerHTML=player.generators;
		document.getElementById("player.gencost").innerHTML=player.gencost;
		document.getElementById("player.ucost").innerHTML=player.ucost;
		document.getElementById("player.totalMult").innerHTML=player.totalMult;
	}
	setInterval(testloop,60);
	function saveloop() {
		save()
	}
	setInterval(saveloop,10000);
	