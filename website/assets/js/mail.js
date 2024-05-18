$(document).ready(function() {
    $('#newsletter-form').submit(function(e) {
        e.preventDefault();
        var email = $('#newsletter-email').val();
        $.ajax({
            type: 'POST',
            url: '{% url "subscribe_to_newsletter" %}',
            data: {
                'email': email,
                'csrfmiddlewaretoken': '{{ csrf_token }}'
            },
            success: function(response) {
                if (response.success) {
                    alert(response.message);
                    // Optionally, you can show a success message or redirect the user
                } else {
                    alert('Failed to subscribe: ' + response.message);
                }
            },
            error: function(xhr, status, error) {
                alert('An error occurred while subscribing: ' + error);
            }
        });
    });
});
