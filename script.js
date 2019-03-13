function reverse(s) {
    return s.split("").reverse().join("");
}

function convertToBinary(x) {
    var res = "";
    while (x > 0) {
        if (x % 2 == 0)
            res += "0";
        else
            res += "1";
        x = parseInt(x / 2);
    }
    while (res.length < 8) res += "0";
    res = reverse(res);
    return res;
}

function convert() {
    var inputString = document.getElementById('inputString').value;
    var base64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    var bin = "";
    var converted = "";

    for (let i = 0; i < inputString.length; ++i) {
        bin += convertToBinary(inputString.charCodeAt(i));
    }

    for (let i = 0; i < bin.length; i += 6) {
        var cur = bin.substring(i, i + 6);
        var suf = "";
        while (cur.length < 6) {
            cur += "00";
            suf += "=";
        }
        var idx = parseInt(cur, 2);
        converted += base64[idx];
        converted += suf;
    }
    var outputString = document.getElementById('result');
    outputString.innerHTML = converted;
}