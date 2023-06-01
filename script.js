var nextDay = 1;
        var currentDate = new Date(); //создаём переменную для текущей даты
        currentDate.setDate(currentDate.getDate() + nextDay); //прибавляем к текущей дате 1 день
        var dd = currentDate.getDate();
        console.log(dd) //получаем текущий день
        var mm = currentDate.getMonth();
        var arr=[
            'січня',
            'лютого',
            'березня',
            'квітня',
            'травня',
            'червня',
            'липня',
            'серпня',
            'вересня',
            'жовтня',
            'листопада',
            'грудня'
        ];
        var dateString = dd + ' ' + arr[mm]; //устанавливаем формат и порядок отображения даты
        // document.querySelector('.hero__date').innerHTML(currentDate); //выводим текст
		$('.hero__date').html(dateString);
		$('.register__date').html(dateString);
		// var timer = '2023,'+currentDate.month()+','+currentDate.date()+','19',0,0';
		// $('.simpleCountdown').data('date',timer);
		// var timer = '2023,'+currentDate.getMonth()+','+currentDate.getDate()+',19,0,0';
 		// $(".simpleCountdown").data('date',timer);
