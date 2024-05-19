from django.shortcuts import render, redirect
from django.core.mail import send_mail
from django.conf import settings
from django.http import HttpResponse
from django.template.loader import render_to_string
from django.utils.html import strip_tags

def index(request):
    return render(request, 'index.html')

def contact(request):
    return render(request, 'contact.html')

def blog(request):
    return render(request,'blog-single.html')

def blogs(request):
    return render(request,'blogs.html')

def diet(request):
    return render(request,'diet.html')

def workout(request):
    return render(request,'workout.html')

def recipies(request):
    return render(request,'recipies.html')

def subscribe_newsletter(request):
    if request.method == 'POST':
        email = request.POST.get('email')
        if email:
            # Send an email
            subject = 'Thank you for subscribing to our newsletter'
            html_message = render_to_string('newsletter_email.html', {'email': email})
            plain_message = strip_tags(html_message)
            from_email = settings.DEFAULT_FROM_EMAIL
            to = email

            send_mail(subject, plain_message, from_email, [to], html_message=html_message)

            return HttpResponse('Thank you for subscribing!')
        else:
            return HttpResponse('Invalid email address')
    return redirect('home')