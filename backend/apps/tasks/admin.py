from django.contrib import admin

from .models import TaskList, TaskItem


class TaskListAdmin(admin.ModelAdmin):
    model = TaskList
    readonly_fields = (
        'uuid',
    )


class TaskItemAdmin(admin.ModelAdmin):
    model = TaskItem
    readonly_fields = (
        'uuid',
    )


admin.site.register(TaskList, TaskListAdmin)
admin.site.register(TaskItem, TaskItemAdmin)
