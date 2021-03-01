from rest_framework import viewsets
from apps.tasks.models import TaskList, TaskItem
from apps.tasks.serializers import TaskListSerializer, TaskItemSerializer


class TaskListViewSet(viewsets.ModelViewSet):

    serializer_class = TaskListSerializer
    queryset = TaskList.objects.all()
    lookup_field = 'uuid'

    def perform_create(self, serializer):
        serializer.save(
            owner=self.request.user,
        )

    def get_queryset(self):
        return self.queryset.filter(owner=self.request.user)


class TaskItemViewSet(viewsets.ModelViewSet):

    serializer_class = TaskItemSerializer
    queryset = TaskItem.objects.all()
    lookup_field = 'uuid'

    def perform_create(self, serializer):
        serializer.save()

    def get_queryset(self):
        task_list_uuid = self.kwargs.get('task_list_uuid')
        return self.queryset.filter(task_list__uuid=task_list_uuid)
