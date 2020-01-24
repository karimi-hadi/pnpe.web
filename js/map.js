function init() {
    var mymap = L.map('mapFrame').setView([36.66695, 48.50645],17);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(mymap);

    L.marker([36.66690, 48.50638]).addTo(mymap).bindPopup('پیشگام نقشه‌پرداز اشراق').openPupup();
}
