from django.contrib.auth.models import User
from django.db import models

class Importancia(models.Model):

    nivel = models.CharField(max_length=2, default="")

    def __str__(self):
        return '%s' % self.nivel