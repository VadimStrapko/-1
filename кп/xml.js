var xmlDoc;
if (typeof window.DOMParser != "undefined") {
    xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "xml.xml", false);
    if (xmlhttp.overrideMimeType) {
        xmlhttp.overrideMimeType('text/xml');
    }
    xmlhttp.send();
    xmlDoc = xmlhttp.responseXML;
    }
else {
    xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
    xmlDoc.async = "false";
    xmlDoc.load("xml.xml");
}

// Получение списка элементов из XML документа
const products0 = xmlDoc.getElementsByTagName("disigner");
var str = "";

for (let i = 0; i < products0.length; i++) {
  const disig = products0[i];
  const imgSrc = disig.getElementsByTagName("img")[0].getAttribute("src");
  const imgAlt = disig.getElementsByTagName("img")[0].getAttribute("alt");
  const name = disig.getElementsByTagName("name")[0].textContent;
  const price = disig.getElementsByTagName("price")[0].textContent;
  const size = disig.getElementsByTagName("size")[0].textContent;
  const cost = disig.getElementsByTagName("cost")[0].textContent;
  str += "<div class=\"designer\"><img src=\"" + imgSrc + "\" alt=\"" + imgAlt + "\"><h2>"+
  name+"</h2><h3>"+price+"</h3><p>"+size+"</p><p>"+cost+
  "</p></div>";
}
  document.getElementById("designer-container").innerHTML += str;

//<div class="designer">
//      <img src="designer1.jpg" alt="Дизайнер 1">
//      <h2>Антонов Кирилл</h2>
//      <h3>Дизайнер интерьера</h3>
//      <p>Дизайнер интерьера работает с общей концепцией интерьера: планировкой, конструкцией здания, расстановкой мебели, макетированием. </p>
//      <p>Цена работы: $1000</p>
//    </div>