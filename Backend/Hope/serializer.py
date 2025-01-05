from rest_framework import serializers
from .models import (
    Gallery,
    Blog, Cause,
    Client,
    Volunteer,
    BankAccount
)

class GallerySerializer(serializers.ModelSerializer):
    class Meta:
        model = Gallery
        fields = ['id', 'description', 'image']

class BlogSerializer(serializers.ModelSerializer):
    class Meta:
        model = Blog
        fields = ['id', 'title', 'description', 'image', 'date', 'category', 'creator', 'created_at']

class CauseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cause
        fields = ['id', 'title', 'description', 'image', 'date', 'creator', 'created_at']

class ClientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Client
        fields = ['id', 'name', 'logo']

class VolunteerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Volunteer
        fields = ['id', 'name', 'role', 'profile_image', 'email', 'phone_number', 'facebook_url', 'twitter_url', 'instagram_url']

class BankAccountSerializer(serializers.ModelSerializer):
    class Meta:
        model = BankAccount
        fields = ['id', 'bank_name', 'account_number', 'created_at']