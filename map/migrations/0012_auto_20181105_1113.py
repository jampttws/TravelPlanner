# Generated by Django 2.1.1 on 2018-11-05 11:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('map', '0011_auto_20181105_1105'),
    ]

    operations = [
        migrations.AlterField(
            model_name='planner',
            name='times',
            field=models.CharField(default='', max_length=30),
        ),
    ]
