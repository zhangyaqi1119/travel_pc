window.onload=function(){
	var navs=document.querySelectorAll("#hot_nav li")
	var divs=document.querySelectorAll("#content .content1")
	//console.log(navs,divs)
	for (let i=0;i<navs.length;i++) {
		navs[i].onclick=function(){
			//divs[i].style.display="block"
			for (var j=0;j<navs.length;j++) {
				navs[j].style.background=""
				navs[j].style.color=""
				divs[j].style.display="none"
			}
			this.style.background="#62A8EA"
			this.style.color="white"
			divs[i].style.display="block"
		}
	}
	
	//console.log($("body").innerHeight())
	var $bodyH=$("body").innerHeight();
	
		$(document).mousemove(function(e){
	  if($bodyH-e.pageY<1000){
			$(".scrollTop").show()
		}else{
			$(".scrollTop").hide()
		}
	});
	
	$(function(){
		$(".scrollTop").click(function(){
			$("body,html").animate({
				scrollTop:0
			},1000)
		})
	})

}
