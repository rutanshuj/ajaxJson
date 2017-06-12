var xmlHttp = createXmlHttpRequestObject();

function createXmlHttpRequestObject() {
    var xmlHttp;

    if(window.ActiveXObject){
        try{
            xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
        }catch(e){
            xmlHttp = false;
        }
    }else{
        try{
            xmlHttp = new XMLHttpRequest();
        }catch(e){
            xmlHttp = false;
        }
    }

    if(!xmlHttp){
        alert("can't create that object bro!");
    }
    else
        return xmlHttp;
}

function process(){

    if(xmlHttp.readyState == 0 || xmlHttp.readyState==4){
        food = encodeURIComponent(document.getElementById("userInput").value);
        xmlHttp.open("GET","foodstore.php?food="+food,true);
        xmlHttp.onreadystatechange = handleServerResponse;
        xmlHttp.send(null);
    }else{
        setTimeout('process()', 1000);
    }
}

function handleServerResponse(){
    if(xmlHttp.readyState==4){  //State=4 when object is done communicating
        if(xmlHttp.status==200){ //status=4 means communication session was fine
            xmlResponse = xmlHttp.responseXML;
            xmlDocumentElement = xmlResponse.documentElement; //xmlDocumentElement will be core element of the xml file
            message = xmlDocumentElement.firstChild.data;
            document.getElementById("underInput").innerHTML = '<span style="color:blue">' + message + '</span>';
            setTimeout('process()', 1000);
        }else{
            alert('Something went wrong!');
        }
    }
}