// adding the 

$("#add_user").submit(function (event) {
	// body...
	alert("Os dados foram inseridos com sucessos")
})



// Updating the users 

$("#update_casa").submit(function(event){
    event.preventDefault();

    var unindexed_array = $(this).serializeArray();
    var data = {}


    $.map(unindexed_array, function(n, i){
        data[n['name']] = n['value']
    })


    var request = {
    //    "url" : `https://omeular.herokuapp.com/api/casas/${data.id}`,
    "url" : `http://localhost:3000/api/casas/${data.id}`,
        "method" : "PUT",
        "data" : data
    }

    $.ajax(request).done(function(response){
        alert("A casa foi atualizada com sucesso .");
    })

        console.log(data.morada);

})




  if(window.location.pathname == "/"){
    $ondelete = $("div.column.is-6 div.card header.card-header button.card-header-icon  a");
   
    $ondelete.click(function(){

      var id = $(this).attr("data-id")

      var request = {
  //      "url" : `https://omeular.herokuapp.com/api/casas/${id}`,
   "url" : `http://localhost:3000/api/casas/${id}`,
        "method" : "DELETE"
    }

    if(confirm (" Tens a certeza que queres apagar ?")){
        
     $.ajax(request).done(function(response){
        alert("A casa foi apagada com sucesso .");
        location.reload();
    })

    }

  })

}


//Modal function 


document.addEventListener('DOMContentLoaded', () => {
  // Functions to open and close a modal
  function openModal($el) {
    $el.classList.add('is-active');
  }

  function closeModal($el) {
    $el.classList.remove('is-active');
  }

  function closeAllModals() {
    (document.querySelectorAll('.modal') || []).forEach(($modal) => {
      closeModal($modal);
    });
  }

  // Add a click event on buttons to open a specific modal
  (document.querySelectorAll('.js-modal-trigger') || []).forEach(($trigger) => {
    const modal = $trigger.dataset.target;
    const $target = document.getElementById(modal);

    $trigger.addEventListener('click', () => {
      openModal($target);
    });
  });

  // Add a click event on various child elements to close the parent modal
  (document.querySelectorAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button') || []).forEach(($close) => {
    const $target = $close.closest('.modal');

    $close.addEventListener('click', () => {
      closeModal($target);
    });
  });

  // Add a keyboard event to close all modals
  document.addEventListener('keydown', (event) => {
    const e = event || window.event;

    if (e.keyCode === 27) { // Escape key
      closeAllModals();
    }
  });
});



// slide show
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}