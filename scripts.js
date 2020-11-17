$('#first').click(() => {
    console.log('Yeah, you clicked me');
});

$('#second').click(() => {
    $('#first').text('Change');
});

$('#third').click(() => {
    $('button').css('background', 'yellow');
});