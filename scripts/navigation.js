/* Commented out because this method is not supported by all browsers
            
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
            
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
}); */
    
//Cache selector
var $root = $('html, body');
    
$('a[href^="#"]').click(function() {
    var href = $.attr(this, 'href');
        
    $root.animate({
        scrollTop: $(href).offset().top
    }, 500, function() {
        window.location.hash = href;
    });
        
    return false;
});

//top bar
window.onload = function() {
    var a = document.getElementById("ham-id");
    a.onclick = function() {
        var nav = document.getElementById("nav-id");
        var wrapper = a.nextElementSibling;
        if (nav.className === "navbar") {
            nav.className += " nav-sm";
            wrapper.style.maxHeight = wrapper.scrollHeight + "px";
        } else {
            nav.className = "navbar";
            wrapper.style.maxHeight = 0;
        }
        return false;
    }
    
}

$(document).click(function(event) { 
    if(!$(event.target).closest('#nav-id').length) {
        var nav = document.getElementById("nav-id");
        if(nav.clasName !== "navbar") {
            nav.className = "navbar";
            document.getElementById("ham-id").nextElementSibling.style.maxHeight = 0;
        }
    }        
});
//cliick to collapse