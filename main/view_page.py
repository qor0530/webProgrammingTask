from django.shortcuts import render

# Create your views here.


def club_status(request):
    return render(request,'club_status.html')

def club_inquiry(request):
    return render(request,'club_inquiry.html')

def club_apply(request):
    return render(request,'club_apply.html')