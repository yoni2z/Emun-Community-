from django.contrib import admin

from .models import (
    Gallery,
    Blog, Cause,
    Client,
    Volunteer,
    BankAccount,
    Program, Project,
    Resource, ResourceDetail,
    BoardMember
)

# Register your models here.

admin.site.register(Gallery)
admin.site.register(Blog)
admin.site.register(Cause)
admin.site.register(Client)
admin.site.register(BankAccount)
admin.site.register(Program)
admin.site.register(Project)
admin.site.register(Resource)
admin.site.register(ResourceDetail)
admin.site.register(BoardMember)
@admin.register(Volunteer)
class VolunteerAdmin(admin.ModelAdmin):
    list_display = ("name", "role", "email", "phone_number")
    search_fields = ("name", "role", "email", "phone_number")
