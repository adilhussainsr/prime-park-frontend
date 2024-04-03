import $ from 'jquery';

export default function custom () {
 
   $(".dhu-wrap").on('click', function() {
    $(this).closest(".dh-user-dropdown").toggleClass("active");
})
}