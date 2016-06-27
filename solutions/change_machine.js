function changeMe(n){
var m, c=0, a="";
(n.length===2) ? m=n.slice(1)+"P" : m=n;
if (m==="20p") return "10p 10p";
(m==="5P") ? c=500 : (m==="2P") ? c=200 : (m==="1P") ? c=100 : (m==="50p") ? c=50 : c=666.6 ;
if (c===666.6) return m;
  while (c>=20) {
    a+="20p ";
    c-=20;
    }
  while (c>=10) {
    a+="10p ";
    c-=10;
    }
  return a.trim();
}