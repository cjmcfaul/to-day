from django.db import models
from django.utils.text import slugify

from apps.main.utils.base_model import BaseModel
from apps.main.utils.generate_unique_slug import generate_unique_slug


class TaskList(BaseModel):
    name = models.CharField(max_length=100)
    owner = models.ForeignKey(
        'users.User',
        on_delete=models.CASCADE,
    )
    slug = models.SlugField(
        max_length=300,
        unique=True,
        blank=True,
    )

    def __str__(self):
        return self.name

    def save(self, *args, **kwargs):
        if self.slug:  # edit
            if slugify(self.name) != self.slug:
                self.slug = generate_unique_slug(TaskList, self.name)
        else:  # create
            self.slug = generate_unique_slug(TaskList, self.name)
        super(TaskList, self).save(*args, **kwargs)


class TaskItem(BaseModel):
    name = models.CharField(max_length=100)
    task_list = models.ForeignKey(
        'tasks.TaskList',
        on_delete=models.CASCADE,
        related_name='tasks'
    )
    completed = models.DateTimeField(
        null=True,
        blank=True,
    )

    def __str__(self):
        return self.name
