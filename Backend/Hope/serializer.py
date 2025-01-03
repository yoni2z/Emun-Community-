from rest_framework import serializers
from .models import (
    PhotoGallery,
    Blog, Cause,
    Client,
)

class PhotoGallerySerializer(serializers.ModelSerializer):
    class Meta:
        model = PhotoGallery
        fields = ['photo']

class BlogSerializer(serializers.ModelSerializer):
    class Meta:
        model = Blog
        fields = ['title', 'description', 'image', 'date', 'creator', 'created_at']

class CauseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cause
        fields = ['title', 'description', 'image', 'date', 'creator', 'created_at']

class ClientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Client
        fields = ['name', 'logo']