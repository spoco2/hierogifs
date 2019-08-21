import Util from "./Util.js";
class Tenor {
    static doSearch = (searchTerm, callback, index) => {
        console.log("do Search: ", callback);
        const apikey = "7I2N97POBC9E";
        const lmt = 1;

        // using default locale of en_US
        const searchUrl =
            "https://api.tenor.com/v1/random?tag=" +
            searchTerm +
            "&key=" +
            apikey +
            "&limit=" +
            lmt;

        Util.httpGetAsync(searchUrl, callback, index);

        return;
    }
}

export default Tenor;