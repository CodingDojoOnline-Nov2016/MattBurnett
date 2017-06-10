from django.shortcuts import render, redirect
from django.contrib import messages

from .models import User, Skill

# Create your views here.

def index(request):
    print request
    context= {
        'users': User.objects.all()
        }
        return render(request, 'skillz/index.html', context)

def process(request):
    print 'in process method'
    print requset.POST

    valid, response = User.onjects.validate_new_user(request.POST)

    if not valid:
            for error in response:
                messages.error(errors)
    else: #we were successful and response is a user objects
        request.seesion['first_name'] = response.first_name
    return redirect('/')
