var t; 
function set(){
    t=new Date().toLocaleTimeString();
    var a= React.createElement("h1", null, t);
    ReactDOM.render(a, document.getElementById('app')); //render
        console.log("getting current time")
}       
function refresh(){
    setInterval(set,1000);
}
$(document).ready(function(){
    refresh();
})
