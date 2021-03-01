from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import TaskListViewSet, TaskItemViewSet

router = DefaultRouter()
router.register("task-lists", TaskListViewSet, basename="task-lists")
router.register("task-items", TaskItemViewSet, basename="task-items")

app_name = 'api'
urlpatterns = [
    path('', include(router.urls)),
    # Djoser URLS
    path('', include('djoser.urls')),
    path('', include('djoser.urls.authtoken')),
]
