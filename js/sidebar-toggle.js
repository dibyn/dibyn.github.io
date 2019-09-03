$("#menu-toggle").on('click', function (e) {
    'use strict';
    e.preventDefault();
    //console.log("Button is Clicked");
    $('#main-nav').toggleClass('show');
    $('.icon-bar').toggleClass('icon-front');
    //$('.in-relation').toggleClass('relation');
    
    //$('#main').toggleClass('move-front');
});
$("#sidebar-toggle").on('click', function (e) {
    'use strict';
    e.preventDefault();
    //console.log("Button is Clicked");
    
    $('.side-nav').toggleClass('slide');
    $('#main').toggleClass('move-back');
    $('.single-logo').toggleClass('single');
    $('.in-relation').toggleClass('relation');
    $('.lineChartExample').toggleClass('lineChart');
    $('td').toggleClass('mailBox');
    $('.icon-bar').toggleClass('icon-front');
    $('.footer').toggleClass('footer-left');
    $('.logo-container').toggleClass('min-30');
    $('#main-nav').toggleClass('min-30'); 
});     

$('#exampleModal1').on('show.bs.modal', function (event) {
    'use strict';
    var button = $(event.relatedTarget); // Button that triggered the modal
    var recipient = button.data('whatever'); // Extract info from data-* attributes
    // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
    // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
    var modal = $(this);
    modal.find('.modal-title').text('New message to ' + recipient);
    modal.find('.modal-body input').val(recipient);
});


    var $curParent, Content;
    $(document).delegate(".todo-title","click", function(){
        if($(this).closest("s").length) {
            Content = $(this).parent("s").html();
            $curParent = $(this).closest("s");
            $(Content).insertAfter($curParent);
            $(this).closest("s").remove();
        }
        else {
            $(this).wrapAll("<s />");
        }
    });



//Initialize tooltips

$('.nav-tabs > li a[title]').tooltip();

//Wizard
$('a[data-toggle="tab"]').on('show.bs.tab', function (e) {

    var $target = $(e.target);

    if ($target.hasClass('disabled')) {
        return false;
    }
});

$(".next-step").click(function (e) {
    var $active = $('.wizard .nav-tabs .nav-item .active');
    var $activeli = $active.parent(".nav-item");
    var $activeli2 = $active.parent(".nav-item2");
    
    $($activeli).next().find('a[data-toggle="tab"]').removeClass("disabled");
    $($activeli2).next().find('a[data-toggle="tab"]').removeClass("disabled");
    
    
    $($activeli).next().find('a[data-toggle="tab"]').click();
    
    $($activeli2).next().find('a[data-toggle="tab"]').click();
    
});


$(".prev-step").click(function (e) {

    var $active = $('.wizard .nav-tabs .nav-item .active');
    var $activeli = $active.parent("li");

    $($activeli).prev().find('a[data-toggle="tab"]').removeClass("disabled");
    $($activeli).prev().find('a[data-toggle="tab"]').click();

});


'use strict';
window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
            if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated');
        }, false);
    });
}, false);


$('.carousel').carousel({
    interval: 2000
});

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("mdropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {

        var downs = document.getElementsByClassName("drop-content");
        var i;
        for (i = 0; i < downs.length; i++) {
            var opendown = downs[i];
            if (opendown.classList.contains('show')) {
                opendown.classList.remove('show');
            }
        }
    }
};


var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg');
var img1 = document.getElementById('myImg1');
var img2 = document.getElementById('myImg2');

var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
img1.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
img2.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal.style.display = "none";
}
/*
$('#myList a').on('click', function (e) {
    e.preventDefault();
    $(this).tab('show');
    $('#myList a[href="#ui"]').tab('show'); // Select tab by name
    
})*/

// ===== Scroll to Top ==== 
/*
$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
});
$('#return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 1000);
});
*/

/*$(".spinner-toggle").click(function(){
    $("#mySidenav").toggle();
}); */


function openNav() {
    document.getElementById("mySidenav").style.width = "200px";
    document.getElementById("mySidenav").style.height = "400px";
    document.getElementById("mySidenav").style.top = "150px";
    
    //document.getElementById("mySidenav").style.width = "0";
}


function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}


function changeBackground(newColor) { // definition of function
    document.bgColor = newColor;
    
    
}

