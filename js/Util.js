class Util {
    static httpGetAsync = (theUrl, callback, index) => {
        console.log("Callback = ", callback);
        const xmlHttp = new XMLHttpRequest();

        xmlHttp.onreadystatechange = function () {
            if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
                callback(xmlHttp.responseText, index);
            }
        }

        xmlHttp.open("GET", theUrl, true);

        xmlHttp.send(null);

        return;
    }
}

export default Util;