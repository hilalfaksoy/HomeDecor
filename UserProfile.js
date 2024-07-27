$(document).ready(function() {
    // Function to toggle read-only state
    function toggleReadOnly(readonly) {
        $('.form-control').prop('readonly', readonly);
    }

    // Function to check if all fields are filled
    function allFieldsFilled() {
        let filled = true;
        $('.form-control').each(function() {
            if ($(this).val().trim() === '') {
                filled = false;
                $(this).addClass('is-invalid'); // Add class for visual feedback
            } else {
                $(this).removeClass('is-invalid'); // Remove class if field is filled
            }
        });
        return filled;
    }

    // Initial setup: Make all fields read-only
    toggleReadOnly(true);

    // Handle Edit button click
    $('.btn-edit').click(function() {
        toggleReadOnly(false); // Make fields editable
        $(this).hide(); // Hide Edit button
    });

    // Handle Save button click
    $('.profile-button').click(function() {
        if (allFieldsFilled()) {
            // Simulate a save operation
            // Add actual save logic here, e.g., AJAX request

            // Show success message
            alert('Your information has been successfully updated.');

            // Make fields read-only again
            toggleReadOnly(true);

            // Show Edit button again
            $('.btn-edit').show();
        } else {
            // Show error message if fields are not filled
            alert('Please fill in all fields.');
        }
    });

    // Restrict input to digits only for phone number field
    $('input[type="tel"]').on('input', function() {
        // Remove non-numeric characters
        $(this).val($(this).val().replace(/[^0-9]/g, ''));
    });
});
