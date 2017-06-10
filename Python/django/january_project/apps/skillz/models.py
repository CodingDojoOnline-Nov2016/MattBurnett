from __future__ import unicode_literals

from django.db import models
from datetime import datetime

import re

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
            birth_date = data['birth_date']

            if len(birth_date) > 0:
                try:
                    formatted_birth_date= datetime.striptime(data['birth_date'], '%Y=%m-%d')
                except:
                    errors.append("Your birth date could not be converted!")
                print type(birth_date), birth_date

            if len(first_name)<2:
                errors.append("First name must be at least two characters!")

            if len(last_name)<2:
                errors.append("Last name must be at least two characters!")    
