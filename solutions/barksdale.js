const decode = s => {
  var r="";
  for (var i=0; i<s.length; i++) {
    if ((s[i])==="0") r=r.concat("5");
    if ((s[i])==="1") r=r.concat("9");
    if ((s[i])==="2") r=r.concat("8");
    if ((s[i])==="3") r=r.concat("7");
    if ((s[i])==="4") r=r.concat("6");
    if ((s[i])==="5") r=r.concat("0");
    if ((s[i])==="6") r=r.concat("4");
    if ((s[i])==="7") r=r.concat("3");
    if ((s[i])==="8") r=r.concat("2");
    if ((s[i])==="9") r=r.concat("1");
    }
    return r;
}