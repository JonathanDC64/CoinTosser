$(function(){
	$("#toss").on("click",function(){
		var coin = Math.floor(Math.random() * 2) == 0 ? "heads" : "tails";
		$("#coin").html("<img src='img/" + coin+ ".jpg'/>");
	}); 
});