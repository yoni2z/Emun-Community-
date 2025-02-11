from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from rest_framework.routers import DefaultRouter

from .views import (
    GalleryViewSet,
    BlogViewSet,
    CauseViewSet,
    ClientViewSet,
    VolunteerViewSet,
    BankAccountViewSet,
    ProgramViewSet, ProjectViewSet,
    ResourceViewSet, ResourceDetailViewSet,
    BoardMemberViewSet
)

router = DefaultRouter()
router.register(r'gallery', GalleryViewSet, basename="photo-gallery")
router.register(r'blogs', BlogViewSet, basename="blogs")
router.register(r'causes', CauseViewSet, basename="causes")
router.register(r'clients', ClientViewSet, basename="sponsors")
router.register(r'volunteers', VolunteerViewSet, basename="volunteers")
router.register(r'bank-accounts', BankAccountViewSet, basename="bank-accounts")
router.register(r'programs', ProgramViewSet, basename="programs")
router.register(r'projects', ProjectViewSet, basename="projects")
router.register(r'resources', ResourceViewSet, basename="resources")
router.register(r'resource-details', ResourceDetailViewSet, basename="resource-details")
router.register(r'board-members', BoardMemberViewSet, basename="board-members")

urlpatterns = [
    path('api/', include(router.urls))
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
