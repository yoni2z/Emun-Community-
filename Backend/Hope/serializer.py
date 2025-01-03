from rest_framework import serializers
from .models import (
    PhotoGallery,
    Blog, Cause,
    Client,
)

class PhotoGallerySerializer(serializers.ModelSerializer):
    class Meta:
        model = PhotoGallery
        fields = ['id', 'photo']

class BlogSerializer(serializers.ModelSerializer):
    class Meta:
        model = Blog
        fields = ['id', 'title', 'description', 'image', 'date', 'creator', 'created_at']

class CauseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cause
        fields = ['id', 'title', 'description', 'image', 'date', 'creator', 'created_at']

class ClientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Client
        fields = ['id', 'name', 'logo']