from django.http import JsonResponse
from django.core.mail import send_mail

def subscribe_to_newsletter(request):
    if request.method == 'POST' and request.is_ajax():
        email = request.POST.get('email')

        # Send email or save to database
        # Modify this part based on your requirements
        send_mail(
            'Newsletter Subscription',
            f'Thank you for subscribing to our newsletter! You will receive updates at {email}.',
            'annamerlinalfred@gmail.com',  # Replace with your email address
            [email],
            fail_silently=False,
        )

        return JsonResponse({'success': True, 'message': 'Subscription successful!'})
    else:
        return JsonResponse({'success': False, 'message': 'Invalid request'}, status=400)
