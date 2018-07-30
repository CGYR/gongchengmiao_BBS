# Generated by Django 2.0.7 on 2018-07-30 06:13

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('section', '0001_initial'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.AddField(
            model_name='sectionadministrator',
            name='forum_administrator_fk',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='sectionadministrator',
            name='forum_fk',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='section.SectionForum'),
        ),
    ]
