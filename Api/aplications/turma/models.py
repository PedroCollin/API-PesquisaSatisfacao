from django.db import models

from ..empresa.models import Empresa

class Turma(models.Model):
    # id=models.IntegerField(primary_key=True, auto_created=True, default=0)
    nome = models.CharField(max_length=50)
    id_empresa = models.ForeignKey(Empresa, related_name="fk_empresa", on_delete=models.CASCADE)
      
    def __str__(self):
        return '%s' % self.nome