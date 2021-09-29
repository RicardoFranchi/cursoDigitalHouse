function adicionarHttp(url) {
    return 'http://'+url;
}

function processar(sites,operacao){

    let sitesRetornar = [];

    for (i=0;i<sites.length;i++) {
        sitesRetornar[i] = operacao(sites[i]);
    }

    return sitesRetornar;
}

console.log(processar(['www.xvideos.com','www.youjizz.com','www.uol.com'],adicionarHttp));
