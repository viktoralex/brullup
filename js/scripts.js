var $form = $('form#rsvp-form'),
    url = 'https://script.google.com/macros/s/AKfycbxiI-U2QqCe6rBEVdsHnGU7nVHLxg8_F4OrQcS1oFsXJk7Okl4/exec'

$form.on('submit', function(e) {
  e.preventDefault();

  var data = {
    nafn: $form.find('input[name=nafn]').val(),
    maki: $form.find('input[name=maki]').val(),
    oskir: $form.find('input[name=oskir]').val(),
    netfang: $form.find('input[name=netfang]').val(),
  };
  console.log(JSON.stringify(data));

  var jqxhr = $.ajax({
    url: url,
    method: "get",
    data: $form.serialize(),
  }).success(
    // do something
  );
})