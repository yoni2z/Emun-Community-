from django.shortcuts import render
from rest_framework import viewsets

from .models import (
    PhotoGallery,
    Blog, Cause,
    Client,
)

from .serializer import (
    PhotoGallerySerializer,
    BlogSerializer,
    CauseSerializer,
    ClientSerializer,
)

# Create your views here.

class PhotoGalleryViewSet(viewsets.ModelViewSet):
    queryset = PhotoGallery.objects.all()
    serializer_class = PhotoGallerySerializer

class BlogViewSet(viewsets.ModelViewSet):
    queryset = Blog.objects.all().order_by("-created_at")
    serializer_class = BlogSerializer

class CauseViewSet(viewsets.ModelViewSet):
    queryset = Cause.objects.all()
    serializer_class = CauseSerializer

class ClientViewSet(viewsets.ModelViewSet):
    queryset = Client.objects.all()
    serializer_class = ClientSerializer