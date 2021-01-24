function getVal(){
const Value = document.getElementById("Itemvalue").value;
var List = document.createElement("li");
var text = document.createTextNode(Value);
var Li = document.getElementById("list");
var Btn = document.createElement("button");//button is created
var BtnText = document.createTextNode("x");//text for buton created
Btn.appendChild(BtnText);//text added to button
List.appendChild(text);//text added in <li> tag
Li.appendChild(List);//List will be shown in html list
Li.appendChild(Btn);//Button will be created after list text
Btn.setAttribute("id","del");//setting attribute
Btn.onclick = ()=>{
	Btn.remove();
	
	text.remove();
}
}


