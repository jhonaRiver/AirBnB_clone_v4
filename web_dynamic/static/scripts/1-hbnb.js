$(document).ready(function () {
  let list_amenities = [];
  $('input[type=checkbox]').change (function () {
    let amenity_name = $(this).attr('data-name');
      if ($(this).is(':checked')) {
	list_amenities.push(amenity_name);
      } else {
	list_amenities = list_amenities.filter(amen => amen !== amenity_name);
      }
    $('.amenities h4').text(list_amenities.join(', '));
  });
});
