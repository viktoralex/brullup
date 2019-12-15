var $form = $('form#rsvp-form'),
    url = 'https://script.google.com/macros/s/AKfycbxiI-U2QqCe6rBEVdsHnGU7nVHLxg8_F4OrQcS1oFsXJk7Okl4/exec'

$form.on('submit', function(e) {
  e.preventDefault();

  var valid = true;

  if (!$form.find('.nafn input').val()) {
    valid = false;
    $form.find('.nafn').addClass('error');
  }

  if (!$form.find('.netfang input').val()) {
    valid = false;
    $form.find('.netfang').addClass('error');
  }

  if (!valid) {
    return;
  }

  $('#rsvp-form').prop('disabled', true);
  $('#rsvp-form button').prop('disabled', true);

  $('.form-wrapper .please-wait').removeClass('hidden');

  var jqxhr = $.ajax({
    url: url,
    method: "get",
    data: $form.serialize(),
  }).success(function () {
    $('.form-wrapper .please-wait').addClass('hidden');
    $('.form-wrapper .thank-you').removeClass('hidden');
  }).fail(function () {
    $('.form-wrapper .please-wait').addClass('hidden');
    $('.form-wrapper .error').removeClass('hidden');
  });
})