#!/bin/bash
until cd /code/backend
do
    echo "Waiting for celery"
done
celery -A today worker -l INFO -B