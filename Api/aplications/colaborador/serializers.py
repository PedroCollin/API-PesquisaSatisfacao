from rest_framework import serializers

from .models import colaborador

class ColaboradorSerializer(serializers.ModelSerializer):
    class Meta:
        model = colaborador
        fields = (
            "nome",
            "nif",
            "nivelAcesso",
            "senha"
        )