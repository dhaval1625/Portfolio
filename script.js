
// * Navbar link hover effect:

$('.nav-link').hover(e => {
    const hoverLink = e.target.closest('.nav-link');
    const hoverList = hoverLink.querySelector('span');
    $(hoverList).clearQueue().finish();
    $(hoverList).hide('fast');
    $(hoverList).append(hoverLink.dataset.description);
    $(hoverList).fadeIn(400);
}, (e) => {
    const hoverLink = e.target.closest('.nav-link');
    $(hoverLink).find('span').empty();
});

// * Navbar link active class toggle on click and section reveal:

$('.nav-link').click(e => {
    const hoverLink = e.target.closest('.nav-link');
    if($('.nav-link').hasClass('active-link')) $('.nav-link').removeClass('active-link');
    
    $(hoverLink).addClass('active-link');
    const sectionToReveal = $(hoverLink).attr('href').slice(1);
    console.log(sectionToReveal);

    $('.active-section').removeClass('active-section');
    $(`#${sectionToReveal}`).addClass('active-section');
})

// * Form submission:

$('.contact-form').submit( async (e) => {
    e.preventDefault();
    const userName = $('#username').val();
    const email = $('#email').val();
    const message = $('#message').val();

    await fetch('https://portfolio-d9c93-default-rtdb.asia-southeast1.firebasedatabase.app/contact.json', {
        method: 'POST',
        body: JSON.stringify({
            username: userName,
            email: email,
            message: message
        })
    });

    $('#username').val('');
    $('#email').val('');
    $('#message').val('');

    $('.contact-form').append('<p>Sent successfully!</p>');

    setTimeout(() => $('.contact-form p').remove(),5000)

});


// * Mobile navbar functionality

$('.navbar-toggler').click(() => {
    $('.navbar-collapse').toggleClass('collapse');
})