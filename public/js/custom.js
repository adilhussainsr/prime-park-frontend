// User Dropdown
$(document).ready(function(){
	$(".dhu-wrap").click(function(){
		$(this).closest(".dh-user-dropdown").toggleClass("active");
	})
});

// Hide User Dropdown Outside Click
$(document).on("click", function(e) {
    if ($(e.target).is(".dhu-wrap, .dhu-wrap *") === false) {
      $(".dhu-wrap").closest(".dh-user-dropdown").removeClass("active");
    }
  });	
  
// Receipt Dropdown
$(document).ready(function(){
	$(".select-field").click(function(){
		$(this).closest(".custom-select").toggleClass("active");
	})
});

// Hide Receipt Dropdown Outside Click
$(document).on("click", function(e) {
    if ($(e.target).is(".select-field, .select-field *") === false) {
      $(".select-field").closest(".custom-select").removeClass("active");
    }
  });  