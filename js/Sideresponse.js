if (window.matchMedia("(max-width: 48em)")) {     
  //Add your javascript for large screens here
  document.write('<input type="checkbox" class="sidebar-checkbox" id="sidebar-checkbox" checked>');
}
else {
  //Add your javascript for small screens here
  document.write('<input type="checkbox" class="sidebar-checkbox" id="sidebar-checkbox>');

}