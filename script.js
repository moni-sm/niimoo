var btc = document.getElementById("bitcoin");
var eth = document.getElementById("ethereum");
var doge = document.getElementById("dogecoin");

var settings = {
    "async": true,
    "scrossDomain": true,
    "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin%2Ccardano%2Cripple&vs_currencies=usd",
    "method": "GET",
    "headers": {}
}
$.ajax(settings).done(function(responce){
    btc.innerHTML = responce.bitcoin.usd;
    eth.innerHTML = responce.ethereum.usd;
    doge.innerHTML = responce.dogecoin.usd;
    
});