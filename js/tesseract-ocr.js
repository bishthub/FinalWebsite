function startRecognize(e){$("#arrow-right").removeClass("fa-arrow-right"),$("#arrow-right").addClass("fa-spinner fa-spin"),$("#arrow-down").removeClass("fa-arrow-down"),$("#arrow-down").addClass("fa-spinner fa-spin"),recognizeFile(e)}$(document).ready(function(){var e=document.querySelectorAll(".inputfile");Array.prototype.forEach.call(e,function(e){var t=e.nextElementSibling,o=t.innerHTML;e.addEventListener("change",function(e){var i="";if(i=this.files&&this.files.length>1?(this.getAttribute("data-multiple-caption")||"").replace("{count}",this.files.length):e.target.value.split("\\").pop()){t.querySelector("span").innerHTML=i;let e=new FileReader;e.onload=function(){let t=e.result;$("#selected-image").attr("src",t),$("#selected-image").addClass("col-12")};let o=this.files[0];e.readAsDataURL(o),startRecognize(o)}else t.innerHTML=o,$("#selected-image").attr("src",""),$("#selected-image").removeClass("col-12"),$("#arrow-right").addClass("fa-arrow-right"),$("#arrow-right").removeClass("fa-check"),$("#arrow-right").removeClass("fa-spinner fa-spin"),$("#arrow-down").addClass("fa-arrow-down"),$("#arrow-down").removeClass("fa-check"),$("#arrow-down").removeClass("fa-spinner fa-spin"),$("#log").empty()}),e.addEventListener("focus",function(){e.classList.add("has-focus")}),e.addEventListener("blur",function(){e.classList.remove("has-focus")})})}),$("#startLink").click(function(){startRecognize(document.getElementById("selected-image"))});var dollar="$";function recognizeFile(e){$("#log").empty();const t=window.navigator.userAgent.indexOf("Edge")>-1?"js/tesseract-core.asm.js":"js/tesseract-core.wasm.js";new Tesseract.TesseractWorker({corePath:t}).recognize(e,$("#langsel").val()).progress(function(e){}).then(function(e){if(-1===e.text.search("LADWP"))if(-1===e.text.search("Burbank")){if(-1===e.text.search("PASADENA")){if(-1===e.text.search("glendale")){if(-1===e.text.search("RIVERSIDE")){if(-1===e.text.search("Anaheim")){if(-1===e.text.search("EDISON")){if(-1===e.text.search("Los"))console.log("No companies Found from the seven choices");else{{var t=e.text.split(" "),o=t.findIndex(e=>"kWh"==e);let s=.15358422939068*t[o-1];var i=Math.round(s/2*142.85714286).toLocaleString("en-US");$(".fas").removeClass("fa-spinner fa-spin"),$(".fas").addClass("fa-check"),$(".finaltest").css({visibility:"visible"}),$(".step2").css({visibility:"hidden"}),$(".threeee").css({visibility:"visible"}),$(".step3").css({visibility:"hidden"}),$(".form-data").removeClass("form-hidden"),console.log("The calculated price for your solar system based on information from the electricity bill provided indicates that in order for your home to go solar, it will cost a total of $"+i+". Since the system is designed to produce the electricity you need, the money that would go to your electric company can be redirected into a monthly payment plan equal to or less than what you pay currently for electricity. If you are happy with the cost calculation, proceed to Step 3 to see your options.")}}}else{var s=e.text.split(" "),a=s.findIndex(e=>"charges"==e),l=s[a+1];if(isNaN(l)){var r=l.split(" "),n=r.findIndex(e=>e===dollar),c=r[n+1],d=Number(c.replace(/[^0-9\.]+/g,"")),f=Math.round(142.85714286*d).toLocaleString("en-US");$(".fas").removeClass("fa-spinner fa-spin"),$(".fas").addClass("fa-check"),$(".finaltest").css({visibility:"visible"}),$(".step2").css({visibility:"hidden"}),$(".threeee").css({visibility:"visible"}),$(".step3").css({visibility:"hidden"}),$(".form-data").removeClass("form-hidden"),console.log("The calculated price for your solar system based on information from the electricity bill provided indicates that in order for your home to go solar, it will cost a total of $"+f+". Since the system is designed to produce the electricity you need, the money that would go to your electric company can be redirected into a monthly payment plan equal to or less than what you pay currently for electricity. If you are happy with the cost calculation, proceed to Step 3 to see your options.")}else $(".fas").removeClass("fa-spinner fa-spin"),$(".fas").addClass("fa-check"),console.log("We were not able to extract the monthly bill from your Edison Bill. Please Upload a clear image of your Bill.")}}else{var h=e.text.split(" "),y=h.findIndex(e=>"Electric"==e),p=h[y+2];if(isNaN(p)){var m=p.split(" "),u=m.findIndex(e=>e===dollar),v=m[u+1],g=Number(v.replace(/[^0-9\.]+/g,"")),b=Math.round(142.85714286*g).toLocaleString("en-US");$(".fas").removeClass("fa-spinner fa-spin"),$(".fas").addClass("fa-check"),$(".finaltest").css({visibility:"visible"}),$(".step2").css({visibility:"hidden"}),$(".threeee").css({visibility:"visible"}),$(".step3").css({visibility:"hidden"}),$(".form-data").removeClass("form-hidden"),console.log("The calculated price for your solar system based on information from the electricity bill provided indicates that in order for your home to go solar, it will cost a total of $"+b+". Since the system is designed to produce the electricity you need, the money that would go to your electric company can be redirected into a monthly payment plan equal to or less than what you pay currently for electricity. If you are happy with the cost calculation, proceed to Step 3 to see your options.")}else $(".fas").removeClass("fa-spinner fa-spin"),$(".fas").addClass("fa-check"),console.log("We were not able to extract the monthly bill from your Anaheim Bill. Please Upload a clear image of your Bill.")}}else{var w=e.text.split(" "),C=w.findIndex(e=>"ELECTRICITY]"==e),S=w[C+1];if(isNaN(S)){var x=S.split(" "),I=x.findIndex(e=>e===dollar),k=x[I+1],N=Number(k.replace(/[^0-9\.]+/g,"")),L=Math.round(142.85714286*N).toLocaleString("en-US");$(".fas").removeClass("fa-spinner fa-spin"),$(".fas").addClass("fa-check"),$(".finaltest").css({visibility:"visible"}),$(".step2").css({visibility:"hidden"}),$(".threeee").css({visibility:"visible"}),$(".step3").css({visibility:"hidden"}),$(".form-data").removeClass("form-hidden"),console.log("The calculated price for your solar system based on information from the electricity bill provided indicates that in order for your home to go solar, it will cost a total of $"+L+". Since the system is designed to produce the electricity you need, the money that would go to your electric company can be redirected into a monthly payment plan equal to or less than what you pay currently for electricity. If you are happy with the cost calculation, proceed to Step 3 to see your options.")}else $(".fas").removeClass("fa-spinner fa-spin"),$(".fas").addClass("fa-check"),console.log("We were not able to extract the monthly bill from your Riverside Bill. Please Upload a clear image of your Bill.")}}else{var E=e.text.split(" "),T=E.findIndex(e=>"TOTAL"==e),A=E[T+3];if(isNaN(A)){var B=A.split(" "),U=B.findIndex(e=>e===dollar),P=B[U+1],M=Number(P.replace(/[^0-9\.]+/g,"")),W=Math.round(142.85714286*M).toLocaleString("en-US");$(".fas").removeClass("fa-spinner fa-spin"),$(".fas").addClass("fa-check"),$(".finaltest").css({visibility:"visible"}),$(".step2").css({visibility:"hidden"}),$(".threeee").css({visibility:"visible"}),$(".step3").css({visibility:"hidden"}),$(".form-data").removeClass("form-hidden"),console.log("The calculated price for your solar system based on information from the electricity bill provided indicates that in order for your home to go solar, it will cost a total of $"+W+". Since the system is designed to produce the electricity you need, the money that would go to your electric company can be redirected into a monthly payment plan equal to or less than what you pay currently for electricity. If you are happy with the cost calculation, proceed to Step 3 to see your options.")}else $(".fas").removeClass("fa-spinner fa-spin"),$(".fas").addClass("fa-check"),console.log("We were not able to extract the monthly bill from your Glendale Bill. Please Upload a clear image of your Bill.")}}else{var q=e.text.split(" "),R=q.findIndex(e=>"Total"==e),D=q[R+1];"Electric"===D?D=q[R+3]:($(".fas").removeClass("fa-spinner fa-spin"),$(".fas").addClass("fa-check"),console.log("Please upload the correct image of your PASADENA bill. Please Upload a clear image of your Bill."));var z=D.split(" "),j=z.findIndex(e=>e===dollar),F=z[j+1];pwpfoundSomething=F+".47";var H=Number(pwpfoundSomething.replace(/[^0-9\.]+/g,"")),O=Math.round(H/2*142.85714286).toLocaleString("en-US");$(".fas").removeClass("fa-spinner fa-spin"),$(".fas").addClass("fa-check"),$(".finaltest").css({visibility:"visible"}),$(".step2").css({visibility:"hidden"}),$(".threeee").css({visibility:"visible"}),$(".step3").css({visibility:"hidden"}),$(".form-data").removeClass("form-hidden"),console.log("The calculated price for your solar system based on information from the electricity bill provided indicates that in order for your home to go solar, it will cost a total of $"+O+". Since the system is designed to produce the electricity you need, the money that would go to your electric company can be redirected into a monthly payment plan equal to or less than what you pay currently for electricity. If you are happy with the cost calculation, proceed to Step 3 to see your options.")}}else{var G=e.text.split(" "),V=G.findIndex(e=>"Electric"==e),Y=G[V+1];if(isNaN(Y)){var J=Y.split(" "),K=J.findIndex(e=>e==dollar),Q=J[K+1],X=Number(Q.replace(/[^0-9\.]+/g,"")),Z=Math.round(142.85714286*X).toLocaleString("en-US");$(".fas").removeClass("fa-spinner fa-spin"),$(".fas").addClass("fa-check"),$(".finaltest").css({visibility:"visible"}),$(".step2").css({visibility:"hidden"}),$(".threeee").css({visibility:"visible"}),$(".step3").css({visibility:"hidden"}),$(".form-data").removeClass("form-hidden"),console.log("The calculated price for your solar system based on information from the electricity bill provided indicates that in order for your home to go solar, it will cost a total of $"+Z+". Since the system is designed to produce the electricity you need, the money that would go to your electric company can be redirected into a monthly payment plan equal to or less than what you pay currently for electricity. If you are happy with the cost calculation, proceed to Step 3 to see your options.")}else $(".fas").removeClass("fa-spinner fa-spin"),$(".fas").addClass("fa-check"),console.log("We were not able to extract the monthly bill from your Burbank Bill. Please Upload a clear image of your Bill.")}else if(-1===e.text.search("$"))console.log("No price found");else{var _=e.text.split(" "),ee=_.findIndex(e=>"kWh"==e),te=_[ee+1];if(isNaN(te)){var oe=te.split(" "),ie=oe.findIndex(e=>e==dollar),se=oe[ie+1],ae=Number(se.replace(/[^0-9\.]+/g,"")),le=Math.round(ae/2*142.85714286).toLocaleString("en-US");$(".fas").removeClass("fa-spinner fa-spin"),$(".fas").addClass("fa-check"),$(".finaltest").css({visibility:"visible"}),$(".step2").css({visibility:"hidden"}),$(".threeee").css({visibility:"visible"}),$(".step3").css({visibility:"hidden"}),$(".form-data").removeClass("form-hidden"),console.log("The calculated price for your solar system based on information from the electricity bill provided indicates that in order for your home to go solar, it will cost a total of $"+le+". Since the system is designed to produce the electricity you need, the money that would go to your electric company can be redirected into a monthly payment plan equal to or less than what you pay currently for electricity. If you are happy with the cost calculation, proceed to Step 3 to see your options.")}else $(".fas").removeClass("fa-spinner fa-spin"),$(".fas").addClass("fa-check"),console.log("We were not able to extract the monthly bill from your LADWP Bill. Please Upload a clear image of your Bill.")}})}