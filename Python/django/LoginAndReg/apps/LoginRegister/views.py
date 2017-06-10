from django.shortcuts import render, redirect, HttpResponse
from django.contrib import messages
from .models import User

# Create your views here.

def index(request):
    context = {
    'users': User.objects.all()
    }
    return render(request, 'LoginRegister/index.html', context)

def register(request):
    if request.method == 'POST':
        print 'in process method'
        print request.POST
        response = User.objects.validate_new_user(request.POST)

        if response[0] == False:
            for error in response[1]:
                messages.error(request, error)
                print '*'*50
                print error
            return redirect('/')
        else:
            print '8'*50
            print response[1]
            request.session['first_name'] = response[1].first_name
        return redirect('/success')

def success(request):
    user = User.objects.all()
    context = {
    'user': user
    }
    return render(request, 'LoginRegister/success.html', context)

def login(request):
    if request.method == 'POST':
        print 'in login method'
        print request.POST
        response = User.objects.validate_login(request.POST)

        if response[0] == False:
            for error in response[1]:
                messages.error(request, error)
            return redirect('/')
        else:
            return redirect('/success.html')

    return redirect('/')
