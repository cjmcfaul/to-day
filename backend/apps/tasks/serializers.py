from rest_framework import serializers

from .models import TaskList, TaskItem


class TaskItemSerializer(serializers.ModelSerializer):

    task_list = serializers.SlugRelatedField(
        slug_field='uuid',
        queryset=TaskList.objects.all()
    )

    class Meta:
        model = TaskItem
        read_only_fields = (
            'uuid',
            'created',
            'modified',
            'completed',
        )
        fields = (
            'uuid',
            'created',
            'modified',
            'name',
            'task_list',
            'completed',
        )


class TaskListSerializer(serializers.ModelSerializer):
    tasks = TaskItemSerializer(read_only=True, many=True)

    class Meta:
        model = TaskList

        read_only_fields = (
            'uuid',
            'created',
            'modified',
            'slug',
            'owner',
        )
        fields = (
            'uuid',
            'created',
            'modified',
            'name',
            'slug',
            'owner',
            'tasks'
        )
