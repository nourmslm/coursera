x="heloo word!";
var m="in glo";
console.log("m="+m);
var a=function() {
	var m="in a";
	console.log("am="+m);
	b();
}
function b() {
    console.log("am="+m);
}
a();