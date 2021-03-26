function montaLink() {

    let tel = document.getElementById('num').value;
    const regex = /[() \- \s +]/gm;
    tel = tel.replace(regex,'');
    let msg = document.getElementById('msg').value;
    let link = "https://api.whatsapp.com/send?phone=" + tel + "&text=" + msg;

    document.getElementById('linkGerado').value = link;
    console.log(link);

}

function copy() {
    document.getElementById('linkGerado').select();
    document.execCommand('copy');
}
