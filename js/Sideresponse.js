if (window.matchMedia("(min-width: 1000px)")) {     
  //Add your javascript for large screens here
  document.write('<input type="checkbox" class="sidebar-checkbox" id="sidebar-checkbox" checked>');
}
else {
  //Add your javascript for small screens here
  document.write('<input type="checkbox" class="sidebar-checkbox" id="sidebar-checkbox" >');

}