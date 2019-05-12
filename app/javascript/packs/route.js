var url = window.location.pathname
var splitted = url.split("/")
var icon = splitted[splitted.length -1]
var selector =document.querySelector(`.${icon}`)
selector.classList.add('sidebar-active');
