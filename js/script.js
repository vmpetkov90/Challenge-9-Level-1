/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
// This example displays a marker at the center of Australia.
// When the user clicks the marker, an info window opens.
function initMap() {
  const property1 = { lat: 40.709030, lng: -74.007163 };
  const property2 = { lat: 40.704030, lng: -74.007163 };
  const property3 = { lat: 40.719030, lng: -74.000163 };
  const property4 = { lat: 40.729300, lng: -74.007163 };
  const property5 = { lat: 40.720300, lng: -74.037163 };
  const property6 = { lat: 40.709030, lng: -73.960003 };

  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    center: property1,
    mapTypeControl: false,
  });

  
  const property1Content = `
    <div>
      <h1 class="text-lg font-medium">Echocliff Manor</h1>
      <img class="w-50" src="img/property-1.jpg" alt="Modern two-story house with large glass windows, cantilevered design, and outdoor seating by a water feature">
    </div>`;

  const infowindow1 = new google.maps.InfoWindow({
    content: property1Content,
    ariaLabel: "property1",
  });

  const marker1 = new google.maps.Marker({
    position: property1,
    map,
    title: "property1",
  });

  marker1.addListener("click", () => {
    infowindow1.open({
      anchor: marker1,
      map,
    });
    infowindow2.close();
    infowindow3.close();
    infowindow4.close();
    infowindow5.close();
    infowindow6.close();
  });


  const property2Content = `
    <div>
      <h1 class="text-lg font-medium">Villa Rosenthal</h1>
      <img class="w-50" src="img/property-2.jpg" alt="Modern two-story house with large glass windows, cantilevered design, and outdoor seating by a water feature">
    </div>`;

  const infowindow2 = new google.maps.InfoWindow({
    content: property2Content,
    ariaLabel: "property2",

  });

  const marker2 = new google.maps.Marker({
    position: property2,
    map,
    title: "property2",
  });

  marker2.addListener("click", () => {
    infowindow2.open({
      anchor: marker2,
      map,
    });
    infowindow1.close();
    infowindow3.close();
    infowindow4.close();
    infowindow5.close();
    infowindow6.close();
  });

  const property3Content = `
    <div>
      <h1 class="text-lg font-medium">Glassline Villa</h1>
      <img class="w-50" src="img/property-3.jpg" alt="Modern two-story house with large glass windows, cantilevered design, and outdoor seating by a water feature">
    </div>`;

  const infowindow3 = new google.maps.InfoWindow({
    content: property3Content,
    ariaLabel: "property3",

  });

  const marker3 = new google.maps.Marker({
    position: property3,
    map,
    title: "property3",
  });

  marker3.addListener("click", () => {
    infowindow3.open({
      anchor: marker3,
      map,
    });
    infowindow2.close();
    infowindow1.close();
    infowindow4.close();
    infowindow5.close();
    infowindow6.close();
  });


  const property4Content = `
    <div>
      <h1 class="text-lg font-medium">The Whiteform Residence</h1>
      <img class="w-50" src="img/property-4.jpg" alt="Modern two-story house with large glass windows, cantilevered design, and outdoor seating by a water feature">
    </div>`;

  const infowindow4 = new google.maps.InfoWindow({
    content: property4Content,
    ariaLabel: "property4",

  });

  const marker4 = new google.maps.Marker({
    position: property4,
    map,
    title: "property4",
  });

  marker4.addListener("click", () => {
    infowindow4.open({
      anchor: marker4,
      map,
    });
    infowindow2.close();
    infowindow3.close();
    infowindow1.close();
    infowindow5.close();
    infowindow6.close();
  });


  const property5Content = `
    <div>
      <h1 class="text-lg font-medium">Stonebeam House</h1>
      <img class="w-50" src="img/property-5.jpg" alt="Modern two-story house with large glass windows, cantilevered design, and outdoor seating by a water feature">
    </div>`;

  const infowindow5 = new google.maps.InfoWindow({
    content: property5Content,
    ariaLabel: "property5",

  });

  const marker5 = new google.maps.Marker({
    position: property5,
    map,
    title: "property5",
  });

  marker5.addListener("click", () => {
    infowindow5.open({
      anchor: marker5,
      map,
    });
    infowindow2.close();
    infowindow3.close();
    infowindow4.close();
    infowindow1.close();
    infowindow6.close();
  });


  const property6Content = `
    <div>
      <h1 class="text-lg font-medium">Florence Grove</h1>
      <img class="w-50" src="img/property-6.jpg" alt="Modern two-story house with large glass windows, cantilevered design, and outdoor seating by a water feature">
    </div>`;

  const infowindow6 = new google.maps.InfoWindow({
    content: property6Content,
    ariaLabel: "property6",
  });

  const marker6 = new google.maps.Marker({
    position: property6,
    map,
    title: "property6",
  });

  marker6.addListener("click", () => {
    infowindow6.open({
      anchor: marker6,
      map,
    });
    infowindow2.close();
    infowindow3.close();
    infowindow4.close();
    infowindow5.close();
    infowindow1.close();
  });


}
window.initMap = initMap;


function showMobileNav() {
  document.getElementById('mobile-nav').classList.toggle("w-full");
  document.getElementById('nav-container').classList.toggle("ml-0");
}
