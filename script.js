var map = L.map('map', {
    center: [14.25654,121.40538],
    zoom: 19,
    maxZoom: 20,
    minZoom: 17.4,
    doubleClickZoom: false,
    maxBounds: [
        [14.2588,121.4118],  // Northeast
        [14.2512,121.4000], // Southwest
    ],
});

var osmLayer = L.tileLayer("https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png", {
    maxZoom: 20,
    minZoom: 16.5,
    attribution: "&copy; OpenStreetMap contributors"
}).addTo(map);

L.control.locate({
    position: 'topright',
    icon: 'fa fa-location-arrow',
    drawCircle: false,
    drawMarker: true,
    showPopup: true
}).addTo(map);
map.zoomControl.setPosition('topright');

//! FUNCTION TO CREATE CUSTOM MARKERS:

function CustomMarker(map, latlng, iconUrl, popupSrc, iconSize, label) {

    var customMarkerIcon = L.icon({
        iconUrl: iconUrl,
        iconSize: iconSize
    });
    var customMarker = L.marker(latlng, { icon: customMarkerIcon }).addTo(map);
    
    var iframe = document.createElement('iframe');
        iframe.src = popupSrc;
        iframe.style.width = 'auto';
        iframe.style.height = '25rem';
        iframe.frameBorder = 0;
    
    var popupContent = L.popup({
        offset: [0, 1],
        maxWidth: "400px" 
    }).setContent(iframe);
    
    customMarker.bindPopup(popupContent);

    var labelIcon = L.divIcon({
        className: 'custom-marker-label',
        iconAnchor:[20, -15], 
        html: label 
    });

    L.marker(latlng, { icon: labelIcon }).addTo(map);
}
//!

//* SHS ROOMS

function SHSMarker(map, latlng, popupSrc, label) {

    var customMarkerIcon = L.icon({
        iconUrl: 'src/shs.png',
        iconSize: [15,15],
    });
    var customMarker = L.marker(latlng, { icon: customMarkerIcon }).addTo(map);
    
    var iframe = document.createElement('iframe');
        iframe.src = popupSrc;
        iframe.style.width = 'auto';
        iframe.style.height = '20rem';
        iframe.frameBorder = 0;

    var popupContent = L.popup({
        offset: [0, 1],
        maxWidth: "400px" 
    }).setContent(iframe);
    
    customMarker.bindPopup(popupContent);

    var labelIcon = L.divIcon({
        className: 'custom-marker-label',
        iconAnchor:[10, -10], 
        html: label 
    });

    L.marker(latlng, { icon: labelIcon }).addTo(map);
}

//*

//TODO ADMIN OFFICE

function office(map, iconUrl, latlng, popupSrc, label){

        var customMarkerIcon = L.icon({
            iconUrl: iconUrl,
            iconSize: [18,18],
        });
        var customMarker = L.marker(latlng, {icon: customMarkerIcon}).addTo(map);
        
        var iframe = document.createElement('iframe');
            iframe.src = popupSrc;
            iframe.style.width = 'auto';
            iframe.style.height = '20rem';
            iframe.frameBorder = 0;
        
        var popupContent = L.popup({
            offset: [0, 1],
            maxWidth: "400px" 
        }).setContent(iframe);
        
        customMarker.bindPopup(popupContent);
    
        var labelIcon = L.divIcon({
            className: 'Admin-custom-marker-label',
            iconAnchor:[30, -10], 
            html: label
        });
    
        L.marker(latlng, { icon: labelIcon }).addTo(map);
    }
//TODO

CustomMarker(
    map,
    [14.25559, 121.40774], // Oreta Building
    'src/oreta.png',
    'assets/html/oreta.html',
    [30, 30],
    'Oreta Building'
);

CustomMarker(
    map,
    [14.25545, 121.40073], // Gate 1
    'src/entrance.png',
    'assets/html/footer.html',
    [40, 20],
    "Gate 1"
);

CustomMarker(
    map,
    [14.25626, 121.40779], // Gate 2
    'src/exit.png',
    'assets/html/footer.html',
    [40, 20],
    "Gate 2"
);

CustomMarker(
    map,
    [14.25499, 121.40753], // Athlete's Village
    'src/AV.png',
    'assets/html/footer.html',
    [30, 30],
    "Athlete's Village"
);

CustomMarker(
    map,
    [14.25568, 121.4058], // Jose Rizal Monument
    'src/RizalMon.png',
    'assets/html/footer.html',
    [30, 30],
    "Jose Rizal Monument"
    
);

CustomMarker(
    map,
    [14.25426,121.40904], // New Building
    'src/NB.png',
    'assets/html/footer.html',
    [30, 30],
    "New Building"
    
);

//! SHS ROOMS
SHSMarker(
    map,
    [14.25672,121.4053], //LU 01
    'assets/html/footer.html',
    "LU 01"
)
SHSMarker(
    map,
    [14.25666, 121.40532], //LU 02
    'assets/html/footer.html',
    "LU 02"
)
SHSMarker(
    map,
    [14.2566, 121.40534], //LU 03
    'assets/html/footer.html',
    "LU 03"
)
SHSMarker(
    map,
    [14.25645, 121.4054], //LU 04
    'assets/html/footer.html',
    "LU 04"
)

SHSMarker(
    map,
    [14.25636, 121.40545], //LU 05
    'assets/html/footer.html',
    "LU 05"
)

SHSMarker(
    map,
    [14.25627, 121.40549], //LU 06
    'assets/html/footer.html',
    "LU 06"
)

SHSMarker(
    map,
    [14.25602, 121.40574], //LU 08
    'assets/html/footer.html',
    "LU 08"
)

SHSMarker(
    map,
    [14.25628, 121.40561], //LU 10
    'assets/html/footer.html',
    "LU 10"
)

SHSMarker(
    map,
    [14.25643, 121.40555], //LU 12
    'assets/html/footer.html',
    "LU 12"
)

SHSMarker(
    map,
    [14.25665, 121.40545], //LU 15
    'assets/html/footer.html',
    "LU 15"
)

//ADMIN BLDG OFFICES

office(
    map,
    'src/clinic.png',
    [14.25671, 121.40543], //Clinic
    'assets/html/footer.html',
    "<i>University Clinic</i>"
)

office(
    map,
    'src/chs.png',
    [14.25616, 121.40554], //CHS
    'assets/html/footer.html',
    "<i>CHS Laboratory</i>"
)

office(
    map,
    'src/faculty.png',
    [14.25615, 121.40567], //SHS Faculty
    'assets/html/footer.html',
    "<i>SHS Faculty Room</i>"
)

office(
    map,
    'src/lu11.png',
    [14.256367, 121.40557], //Records Office
    'assets/html/footer.html',
    "<i>Records Office</i>"
)

office(
    map,
    'src/registrar.png',
    [14.256545,121.40551], //Registrar
    'assets/html/footer.html',
    "<i>Registrar's Office</i>"
)

office(
    map,
    'src/research-center.png',
    [14.25680, 121.4054], //Research Center
    'assets/html/footer.html',
    "<i>Research Center</i>"
)

office(
    map,
    'src/hrmo2.png',
    [14.25685, 121.40537], //HRMO
    'assets/html/footer.html',
    "<i>HRMO</i>"
)

office(
    map,
    'src/cashier.png',
    [14.25694, 121.40532], //Cashier
    'assets/html/footer.html',
    "<i>Cashier's Office</i>"
)

office(
    map,
    'src/adminof.png',
    [14.257, 121.40529], //Admin Office
    'assets/html/footer.html',
    "<i>Admin Office</i>"
)
