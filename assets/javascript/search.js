const markers = [];

//! MARKERS
markers.push({
  name: "Oreta Building",
  coordinates: [14.25559, 121.40774],
});

markers.push({
  name: "Gate 1",
  coordinates: [14.25545, 121.40073],
});

markers.push({
  name: "Gate 2",
  coordinates: [14.25626, 121.40779],
});

markers.push({
  name: "Athlete's Village",
  coordinates: [14.25499, 121.40753],
});

markers.push({
  name: "Jose Rizal Monument",
  coordinates: [14.25568, 121.4058],
});

markers.push({
  name: "LU 01",
  coordinates: [14.25672, 121.4053],
});

markers.push({
  name: "LU 02",
  coordinates: [14.25666, 121.40532],
});

markers.push({
  name: "LU 03",
  coordinates: [14.2566, 121.40534],
});

markers.push({
  name: "LU 04",
  coordinates: [14.25645, 121.4054],
});

markers.push({
  name: "LU 05",
  coordinates: [14.25636, 121.40545],
});

markers.push({
  name: "LU 06",
  coordinates: [14.25627, 121.40549],
});

markers.push({
  name: "CHS Laboratory",
  coordinates: [14.25616, 121.40554],
});

markers.push({
  name: "LU 08",
  coordinates: [14.25602, 121.40574],
});

markers.push({
  name: "SHS Faculty Room",
  coordinates: [14.25615, 121.40567],
});

markers.push({
  name: "LU 09",
  coordinates: [14.25615, 121.40567],
});

markers.push({
  name: "LU 10",
  coordinates: [14.25627, 121.40562],
});

markers.push({
  name: "Records Management Office",
  coordinates: [14.25638, 121.40557],
});

markers.push({
  name: "LU 11",
  coordinates: [14.25638, 121.40557],
});

markers.push({
  name: "LU 12",
  coordinates: [14.25643, 121.40555],
});

markers.push({
  name: "Registrar's Office",
  coordinates: [14.25653, 121.4055],
});

markers.push({
  name: "LU 13",
  coordinates: [14.25653, 121.4055],
});

markers.push({
  name: "LU 14",
  coordinates: [14.25653, 121.4055],
});

markers.push({
  name: "LU 15",
  coordinates: [14.25665, 121.40545],
});

markers.push({
  name: "University Clinic",
  coordinates: [14.25671, 121.40543],
});

markers.push({
  name: "LU 16",
  coordinates: [14.25671, 121.40543],
});

markers.push({
  name: "Research Center",
  coordinates: [14.25679, 121.4054],
});
markers.push({
  name: "LU 17",
  coordinates: [14.25679, 121.4054],
});

markers.push({
  name: "HRMO",
  coordinates: [14.25685, 121.40537],
});

markers.push({
  name: "LU 18",
  coordinates: [14.25685, 121.40537],
});

markers.push({
  name: "Cashier's Office",
  coordinates: [14.25694, 121.40532],
});

markers.push({
  name: "LU 19",
  coordinates: [14.25694, 121.40532],
});

markers.push({
  name: "Admin Office",
  coordinates: [14.257, 121.40529],
});

markers.push({
  name: "LU 20",
  coordinates: [14.257, 121.40529],
});


let maxZoomReached = false;

function searchMarkers(query) {
  let selectedMarker = null;

  markers.forEach((marker) => {
    if (marker.name.toLowerCase().includes(query.toLowerCase())) {
      selectedMarker = marker;
      const maxZoomLevel = 20;
      map.setView(marker.coordinates, maxZoomLevel, { animate: true, duration: 5 });
      maxZoomReached = true;
      simulateMarkerClick(selectedMarker);
    }
  });

  if (!selectedMarker) {
    alert("No matching marker found for the search query.");
  }
}

function simulateMarkerClick(marker) {
  map.eachLayer((layer) => {
    if (layer instanceof L.Marker && layer.getLatLng().equals(marker.coordinates)) {
      layer.openPopup();
      layer.on('popupopen', () => {
     
        const offset = [0, window.innerHeight / 4]; 
        map.setView(marker.coordinates, 20, { animate: true, duration: 1, offset: offset });
      });
    }
  });
}

document.getElementById('srchbtn').addEventListener('click', function () {
  const searchQuery = document.getElementById('output').value.trim();

  if (searchQuery !== "") {
    searchMarkers(searchQuery);
  } else {
    alert("Please enter a search query.");
  }

  function searchMarkers(query) {
    let selectedMarker = null;
  
    const formattedQuery = query.toLowerCase().replace(/[^a-z0-9]/g, '');
  
    markers.forEach((marker) => {
      const formattedMarkerName = marker.name.toLowerCase().replace(/[^a-z0-9]/g, '');
  
      if (formattedMarkerName.includes(formattedQuery)) {
        selectedMarker = marker;
        const maxZoomLevel = 20;
        map.setView(marker.coordinates, maxZoomLevel, { animate: true, duration: 5 });
        maxZoomReached = true;
        simulateMarkerClick(selectedMarker);
      }
    });
  
    if (!selectedMarker) {
      alert("No matching marker found for the search query.");
    }
  }
  
});