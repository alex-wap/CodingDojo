# -*- coding: utf-8 -*-
# Generated by Django 1.10.5 on 2017-02-02 00:13
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('course', '0003_auto_20170202_0013'),
    ]

    operations = [
        migrations.AlterField(
            model_name='course',
            name='text',
            field=models.CharField(blank=True, default='', max_length=50),
        ),
    ]
