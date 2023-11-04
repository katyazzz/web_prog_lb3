function showInfo(make, price) {
    var infoDiv = document.getElementById('info');
    infoDiv.innerHTML = 'Марка: ' + make + '<br> Стоимость: ' + price;
}

function hideInfo() {
    var infoDiv = document.getElementById('info');
    infoDiv.innerHTML = '';
}
