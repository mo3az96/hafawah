function initMap() {
  var lat = 24.486534191471197;
  var lng = 39.647775888087146;
  const myLatlng = { lat: lat, lng: lng };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 17,
    center: myLatlng,
    draggable: false
  });

  var content = `<div class="map-branch">
<div class="branch-img">
<img src="images/map.jpg" class="img-fluid" />
</div>
<div class="branch-info">
<h3 class="branch-title">
طريق الملك عبدالله (الدائري الثاني) ، المدينة المنورة 42319 ، المملكة
العربية السعودية
</h3>
<div class="branch-tools">
<a href="#!" class="branch-directions">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="9.471"
    height="9.471"
    viewBox="0 0 9.471 9.471"
  >
    <path
      id="Path_29552"
      data-name="Path 29552"
      d="M11.34,6.4,7.077,2.136a.472.472,0,0,0-.668,0L2.146,6.4a.472.472,0,0,0,0,.668L6.409,11.33a.472.472,0,0,0,.668,0L11.34,7.067a.472.472,0,0,0,0-.668ZM7.688,7.919V6.735H5.793v.947a.474.474,0,1,1-.947,0V6.262a.475.475,0,0,1,.474-.474H7.688V4.6L9.18,6.1a.235.235,0,0,1,0,.336Z"
      transform="translate(-2.007 -1.997)"
    />
  </svg>

  استكشف الوجهة
</a>
<a href="tel:+966562585458" class="branch-phone">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="8.206"
    height="8.206"
    viewBox="0 0 8.206 8.206"
  >
    <path
      id="Path_1135"
      data-name="Path 1135"
      d="M10.428,8.606l-1.16-.132a.909.909,0,0,0-.749.26l-.84.84a6.872,6.872,0,0,1-3.01-3.01l.845-.845a.909.909,0,0,0,.26-.749L5.641,3.819a.914.914,0,0,0-.909-.809h-.79a.907.907,0,0,0-.914.946,7.762,7.762,0,0,0,7.258,7.258.907.907,0,0,0,.946-.914V9.51A.905.905,0,0,0,10.428,8.606Z"
      transform="translate(-3.026 -3.01)"
    />
  </svg>
</a>
</div>
</div>
</div>`;

  const infowindow = new google.maps.InfoWindow({
    content: content,
  });

  const marker = new google.maps.Marker({
    position: myLatlng,
    map,
    icon: "",
  });
  infowindow.open({
    anchor: marker,
    map,
    shouldFocus: false,
  });
  marker.addListener("click", () => {
    infowindow.open(map, marker);
  });
}
