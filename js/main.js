$(document).ready(function() {
    // Function to toggle dark mode
    function toggleDarkMode() {
        // Toggle dark mode class on body and navbar
        $('body').toggleClass('dark');
        $('.navbar').toggleClass('dark');
        // Save dark mode state in localStorage
        localStorage.setItem('darkModeEnabled', $('body').hasClass('dark'));
    }

    // Check if dark mode is enabled in localStorage
    var darkModeEnabled = localStorage.getItem('darkModeEnabled') === 'true';

    // Apply dark mode if enabled
    if (darkModeEnabled) {
        toggleDarkMode();
        // Check the checkbox if dark mode is enabled
        $('#checkbox').prop('checked', true);
    }

    // Toggle dark mode when checkbox state changes
    $('.checkbox').change(function() {
        toggleDarkMode();
    });

    // Header Scroll
    $(window).scroll(function() {
        var nav = $('.navbar');
        if ($(window).scrollTop() > 100) {
            nav.addClass('header-scrolled');
        } else {
            nav.removeClass('header-scrolled');
        }
    });

    // Navbar hide on click
    $('.nav-link').click(function() {
        $('.navbar-collapse').removeClass('show');
    });

    // Appointment form submission
    $("#appointment-form").submit(function(event) {
        event.preventDefault();

        // Extract values from the form
        var name = $("#name").val();
        var time = $("#time").val();

        // Construct the message for the alert box
        var message = "Appointment booked for " + name + " at " + time;

        // Display the alert box
        alert(message + "\nClick OK to proceed.");

        // Redirect the user to another page after booking
        window.location.href = "index.html"; // Modify the URL as needed
    });
});
