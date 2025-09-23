function exibirDetalhes(time) {
    const detalhes = {
        lakers: {
            info: "O Los Angeles Lakers é um dos times mais bem-sucedidos da NBA, com 17 títulos da liga e grandes lendas como Magic Johnson, Kobe Bryant e LeBron James.",
        },
        celtics: {
            info: "Os Boston Celtics são um dos times mais tradicionais, com 17 títulos e uma rica história, sendo casa de ícones como Bill Russell, Larry Bird e Paul Pierce.",
        },
        warriors: {
            info: "Os Golden State Warriors dominaram a NBA nos últimos anos, especialmente com a chegada de Stephen Curry, Klay Thompson e Draymond Green, conquistando 7 títulos.",
        }
    };

    document.getElementById(time).innerHTML = `<p>${detalhes[time].info}</p>`;
}
