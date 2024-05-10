        function exibirMaiorData() {
            let data1 = new Date(document.getElementById("data1").value);
            let data2 = new Date(document.getElementById("data2").value);

            // Ajusta as datas para considerar o fuso horário local
            data1.setTime(data1.getTime() + data1.getTimezoneOffset() * 60 * 1000);
            data2.setTime(data2.getTime() + data2.getTimezoneOffset() * 60 * 1000);

            let resultado = maiorData(data1, data2);
    let dia = resultado.getDate();
    let mes = resultado.getMonth() + 1; // Meses são indexados de 0 a 11
    let ano = resultado.getFullYear();
    document.getElementById("resultado").innerText = "Maior data: " + dia + "/" + mes + "/" + ano;
        }

        function exibirIntervalo() {
            let data1 = new Date(document.getElementById("data1").value);
            let data2 = new Date(document.getElementById("data2").value);

            // Ajusta as datas para considerar o fuso horário local
            data1.setTime(data1.getTime() + data1.getTimezoneOffset() * 60 * 1000);
            data2.setTime(data2.getTime() + data2.getTimezoneOffset() * 60 * 1000);

            let resultado = calcularIntervalo(data1, data2);
            document.getElementById("resultado").innerText = "Intervalo entre as datas: " + resultado;
        }

        function exibirDataAtual() {
            let resultado = dataAtual();
            document.getElementById("resultado").innerText = "Data atual: " + resultado;
        }

        function maiorData(date1, date2) {
            return date1 > date2 ? date1 : date2;
        }

        function calcularIntervalo(date1, date2) {
            if (date1 > date2) {
                let temp = date1;
                date1 = date2;
                date2 = temp;
            }

            let diffMs = date2 - date1;
            let diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
            return diffDays + " dias";
        }

        function dataAtual() {
            let now = new Date();
            let dia = now.getDate();
            let mes = now.getMonth() + 1; // Meses são indexados de 0 a 11
            let ano = now.getFullYear();
            let hora = now.getHours();
            let minuto = now.getMinutes();
            let dataFormatada = `${hora}:${minuto} - ${dia}/${mes}/${ano}`;
            return dataFormatada;
        }
