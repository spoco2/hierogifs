import Tenor from "./Tenor.js";

class Page {
  static createGifElement = (index) => {
    var listItem = document.createElement("li");
    listItem.style = "display: inline";

    var theGif = document.createElement("img");

    theGif.style = "width:220px;height:164px;";
    theGif.id = "translation" + index;
    listItem.appendChild(theGif);

    document.getElementById("translationArea").appendChild(listItem);
  }

  static setGifUrl = (index, url) => {
    var theGif = document.getElementById("translation" + index);
    theGif.src = url;
  }

  static tenorCallback = (responsetext, index) => {
    const responseObjects = JSON.parse(responsetext);
    const results = responseObjects["results"];

    const gifUrl = results[0]["media"][0]["nanogif"]["url"];
    Page.setGifUrl(index, gifUrl);
    return;
  }

  static doSearch = () => {
    Page.clearTranslations();
    var textToTranslate = document.getElementById("searchTxt").value;
    var searchTermsArray = textToTranslate.split(" ");
    for (var i = 0; i < searchTermsArray.length; i++) {
      Page.createGifElement(i);
      Tenor.doSearch(searchTermsArray[i], Page.tenorCallback, i);
    }
  }

  static clearTranslations = () => {
    var translationHolder = document.getElementById("translationArea");
    while (translationHolder.firstChild) {
      translationHolder.removeChild(translationHolder.firstChild);
    }
  }

}

export default Page;