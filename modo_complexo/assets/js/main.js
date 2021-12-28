(function() {

    function getDayWeek(dayWeek) {
        let dayWeekText;

        switch (dayWeek) {
            case 0:
                dayWeekText = 'Domingo';
                return dayWeekText;
            case 1:
                dayWeekText = 'Segunda-feira';
                return dayWeekText;
            case 2:
                dayWeekText = 'Terça-feira';
                return dayWeekText;
            case 3:
                dayWeekText = 'Quarta-feira';
                return dayWeekText;
            case 4:
                dayWeekText = 'Quinta-feira';
                return dayWeekText;
            case 5:
                dayWeekText = 'Sexta-feira';
                return dayWeekText;
            case 4:
                dayWeekText = 'Sábado';
                return dayWeekText;
            default:
                return 'Dia inválido.';
        }
    }

    function getMonthText(month) {
        let monthFormat;

        switch (month) {
            case 0:
                monthFormat = 'Janeiro';
                return monthFormat;
            case 1:
                monthFormat = 'Fevereiro';
                return monthFormat;
            case 2:
                monthFormat = 'Março';
                return monthFormat;
            case 3:
                monthFormat = 'Abril';
                return monthFormat;
            case 4:
                monthFormat = 'Maio';
                return monthFormat;
            case 5:
                monthFormat = 'Junho';
                return monthFormat;
            case 6:
                monthFormat = 'Julho';
                return monthFormat;
            case 7:
                monthFormat = 'Agosto';
                return monthFormat;
            case 8:
                monthFormat = 'Setembro';
                return monthFormat;
            case 9:
                monthFormat = 'Outubro';
                return monthFormat;
            case 10:
                monthFormat = 'Novembro';
                return monthFormat;
            case 11:
                monthFormat = 'Dezembro';
                return monthFormat;
            default:
                return 'Mês inválido.';
        }
    }


    function setZero(number) {
        return number >= 10 ? number : `0${number}`;
    }

    function createDate(dateNotFormat) {
        const day = setZero(dateNotFormat.getDate());
        const year = setZero(dateNotFormat.getFullYear());
        const hours = setZero(dateNotFormat.getHours());
        const minutes = setZero(dateNotFormat.getMinutes());
        const seconds = setZero(dateNotFormat.getSeconds());

        return (
            `${getDayWeek(dateNotFormat.getDay())}, ${day} de ` + 
            `${getMonthText(dateNotFormat.getMonth())} ` +
            `de ${year} ${hours}:${minutes}:${seconds}`
            );
    }

    function setResultado(dateFormat) {
        const documentDate = document.querySelector('#date');
        documentDate.innerHTML = '';
        documentDate.innerHTML += dateFormat;
    }

    const dateNotFormat = new Date();
    const dateFormat = createDate(dateNotFormat)
    setResultado(dateFormat);

})();
