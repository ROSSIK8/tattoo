# Generated by Django 5.0.6 on 2024-05-24 03:43

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0007_alter_service_options'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='service',
            options={'ordering': ['queue_number'], 'verbose_name_plural': 'Услуги и цены'},
        ),
    ]