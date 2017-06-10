from __future__ import unicode_literals

from django.db import models
from datetime import datetime

import re

NAME_REGEX = re.compile(r^[a-A])
EMAIL_REGEX = r'^[a-zA-Z0-9.+_-]+@[a-z.]
# Create your models here

class UserManager(models.Manager):
        #validations
        def validate_new_user(self,data):
            print data
            errors = []
            first_name = data['first_name']
            last_name = data['last_name']
            email = data['email']
            password = data['password']
            confirm_pw = data['confirm_password']
