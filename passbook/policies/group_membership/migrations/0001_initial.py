# Generated by Django 3.0.7 on 2020-07-01 19:01

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ("passbook_policies", "0002_auto_20200528_1647"),
        ("passbook_core", "0003_default_user"),
    ]

    operations = [
        migrations.CreateModel(
            name="GroupMembershipPolicy",
            fields=[
                (
                    "policy_ptr",
                    models.OneToOneField(
                        auto_created=True,
                        on_delete=django.db.models.deletion.CASCADE,
                        parent_link=True,
                        primary_key=True,
                        serialize=False,
                        to="passbook_policies.Policy",
                    ),
                ),
                (
                    "group",
                    models.ForeignKey(
                        blank=True,
                        null=True,
                        on_delete=django.db.models.deletion.SET_NULL,
                        to="passbook_core.Group",
                    ),
                ),
            ],
            options={
                "verbose_name": "Group Membership Policy",
                "verbose_name_plural": "Group Membership Policies",
            },
            bases=("passbook_policies.policy",),
        ),
    ]
