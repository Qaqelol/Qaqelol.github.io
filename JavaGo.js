var usedNums = new Array(76);
var Himom = Array();
var Event = [
	"Raw cod",
	"Raw salmon ",
	"Tropical Fish ",
	"PufferFish ",
	"Bow ",
	"Enchanted Book ",
	"Enchanted Fishing rod",
	"Fishing rod",
	"Name Tag",
	"Nautilus Shell",
	"Saddle",
	"Lily Pad",
	"Bamboo",
	"Bowl",
	"Leather",
	"Leather Boots",
	"Rotten Flesh",
	"Stick",
	"String",
	"Water Bottle",
	"Bone",
	"Ink Sac",
	"TripWire Hook",
	"Monsters attack Frost",
	"Repair & Name item",
	"Night Fishing",
	"Fishing rod break",
	"Seeing another player",
	"placing a Lily Pad",
	"New subscriber",
	"2 different bits donator",
	"Frost shaming his fishing viewers",
	"15 viewers",
	"Frost overHydrating (hydrate! x 5)",
	"Donation $",
	"streaming with friends",
	"Music not playing",
	"Frost getting up",
	"Family showing up in cam",
	"Burp",
	"Sneeze",
	"Putting off/on glass",
	"Viewer says I will lurk",
	"Failed !command",
	"New Clip",
]
var Backup = Event.slice(0)

function newCard() {
	//Starting loop through each square card
	for(var i=0; i < 24; i++) {
		setSquare(i);
	}
}


function setSquare(thisSquare) {
	var currSquare = "square"+thisSquare;
	var newNum;
	
	newNum=getNewNum();
	var inBox = Event[newNum];
	Event.splice(newNum,1)
	Himom.push((Backup.indexOf(inBox)))
	
	document.getElementById(currSquare).innerHTML = inBox;
}


function getNewNum() {
	return Math.floor(Math.random()*(Event.length))
}

function setcolor(pixel){
	var myColor = pixel.style.backgroundImage;
	if (myColor=='url("BingoFrost.png")'){
		pixel.style.color="white";
		pixel.style.backgroundImage="url('BingoFrostNo.png')"}
		else{pixel.style.backgroundImage="url('BingoFrost.png')";
		pixel.style.color="black";}
}

function test(){
	var d = new Date();
	var n = d.getHours();
	Himom.push(n)
	document.getElementById("LaKey").innerText=Himom.toString()
	WatDoDo()
}

function WatDoDo(){
	var r = document.createRange();
	var w=document.getElementById("LaKey"); 
	
    r.selectNodeContents(w);  
    var sel=window.getSelection(); 
    sel.removeAllRanges(); 
    sel.addRange(r); 
}