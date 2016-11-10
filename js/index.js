var c = false
$(function(){
	
	$("#toss").on("click",function(){
		var coin = Math.floor(Math.random() * 2) == 0 ? "heads" : "tails";
		if(c == true)
			coin = "heads";
		
		$("#coin").html("<img src='img/" + coin+ ".jpg'/>");
	}); 
	$("body").keypress(function(event){
		if(event.which==97){
			c = !c;
 	 	}
	})
});