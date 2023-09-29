const el = function(e){return document.getElementById(e)};

async function encryptIt(){
    console.log('fuck')
    inStr = el("inStr").value;
    inPas = el("inPas").value;
    rsEnc = CryptoJS.AES.encrypt(inStr, inPas);
    el("rsEnc").value = rsEnc;
    countIt('rsEnc', 'cnEnc');
};

async function decryptIt(){
    inEnc = el("inEnc").value;
    unPas = el("unPas").value
    tmEnc = CryptoJS.AES.decrypt(inEnc, unPas);
    rsStr = await tmEnc.toString(CryptoJS.enc.Utf8)
    el("rsStr").innerHTML = rsStr;
    countIt('rsStr', 'dnStr');
};

async function countIt(src, tgt){
    cnt = el(src).value;
    str = (cnt.length).toString().padStart(3,'0')
    el(tgt).innerHTML = str;
};