FROM python:3

WORKDIR /code
ADD ./backend/requirements.txt /code/backend/


RUN pip3 install --upgrade pip
RUN pip3 install -r backend/requirements.txt

ADD ./backend /code/backend
ADD ./docker /code/docker

RUN ["chmod", "+x", "docker/backend/wsgi-entrypoint.sh"]
RUN ["chmod", "+x", "docker/backend/celery-entrypoint.sh"]
CMD gunicorn today.wsgi --bind 0.0.0.0:8000 --workers 4 --threads 4
