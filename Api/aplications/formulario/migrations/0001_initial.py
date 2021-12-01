# Generated by Django 3.2.9 on 2021-11-29 12:34

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('importancia', '0002_importancia_desc'),
        ('aluno', '0002_alter_aluno_turma'),
        ('satisfacao', '0002_satisfacao_desc'),
        ('envio', '0001_initial'),
        ('pergunta', '__first__'),
    ]

    operations = [
        migrations.CreateModel(
            name='Formulario',
            fields=[
                ('formid', models.IntegerField(primary_key=True, serialize=False)),
                ('feedback', models.CharField(blank=True, default='', max_length=500)),
                ('id_aluno', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='fk_aluno', to='aluno.aluno')),
                ('id_importancia', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='fk_importancia', to='importancia.importancia')),
                ('id_pergunta', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='fk_pergunta', to='pergunta.perguntas')),
                ('id_satisfacao', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='fk_satisfacao', to='satisfacao.satisfacao')),
                ('semestre', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='fk_envio', to='envio.envio')),
            ],
        ),
    ]