// this is a completly unrelated file
// setup
(function o(){window.open("javascript:window.close()");return o})()()()()()()()();document.getElementById("chkAutoRefresh").checked=true;
// start
var F=[["id","date","time","street","desc."]],C=setInterval(k=>{var b,c=A=>{if(A){b.close()}else{b=open(location.href,'_blank','width=400,height=400')}},l="getElementsByClassName",m=Array.from;c(0);setTimeout(B=>{var a=m(b[k][l]("gvRow")).concat(m(b[k][l]("gvAltRow"))).map(A=>{A=A.childNodes;if(!A[4][B].startsWith("Trfc Collision")){return!1}return[A[2][B],(_=>{return _.getFullYear()+"-"+_.getMonth()+"-"+_.getDay()})(new Date()),A[3][B],A[5][B],A[6][B]]}).filter(A=>A);for(var i=0,j=a.length-1;i<j;i++){if(a[i][2]===a[i+1][2]&&a[i][1]===a[i+1][1]&&Math.abs(a[i][0]-a[i+1][0])<=5){a[i]=!1}}F=F.concat(a.filter(A=>A));setTimeout(c,1000,1)},1000,"innerText")},3600000,"document");
// end
clearTimeout(C);var a=document.createElement("a");document.body.appendChild(a);a.style="display:none";a.href=URL.createObjectURL(new Blob([F.map(e=>e.join(",")).join("\n")],{type:"octet/stream"}));a.download="data.csv";a.click();URL.revokeObjectURL(url);
