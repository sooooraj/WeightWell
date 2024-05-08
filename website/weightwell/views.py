from django.shortcuts import render

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