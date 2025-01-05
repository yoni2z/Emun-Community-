from django.contrib import admin

from .models import (
    Gallery,
    Blog, Cause,
    Client,
    Volunteer,
    BankAccount
)

# Register your models here.

admin.site.register(Gallery)
admin.site.register(Blog)
admin.site.register(Cause)
admin.site.register(Client)
admin.site.register(BankAccount)
@admin.register(Volunteer)
class VolunteerAdmin(admin.ModelAdmin):
    list_display = ("name", "role", "email", "phone_number", "facebook_url", "twitter_url", "instagram_url")
    search_fields = ("name", "role", "email", "phone_number", "facebook_username", "twitter_username", "instagram_username")
