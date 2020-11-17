$('#first').click(() => {
    console.log('Yeah, you clicked me');
});

$('#second').click(() => {
    $('#first').text('Change');
});

$('#third').click(() => {
    var color = $('input').val();
    $('button').css('background', `${color}`);
    $('#third').off('click');
});