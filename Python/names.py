#Given the following list:
#
#students = [
#     {'first_name':  'Michael', 'last_name' : 'Jordan'},
#     {'first_name' : 'John', 'last_name' : 'Rosales'},
#     {'first_name' : 'Mark', 'last_name' : 'Guillen'},
#     {'first_name' : 'KB', 'last_name' : 'Tonel'}
#]
#
#Create a program that outputs:
#
#Michael Jordan
#John Rosales
#Mark Guillen
#KB Tonel
#
#
#
#
students = [
     {'first_name':  'Michael', 'last_name' : 'Jordan'},
     {'first_name' : 'John', 'last_name' : 'Rosales'},
     {'first_name' : 'Mark', 'last_name' : 'Guillen'},
     {'first_name' : 'KB', 'last_name' : 'Tonel'}
]

def full_name():
        for student in students:
            print student['first_name'], student['last_name']
print full_name()



#PART II(Optional)
#--- WORK IN PROGRESS ---

#users = {
 #'Students': [
#     {'first_name':  'Michael', 'last_name' : 'Jordan'},
#     {'first_name' : 'John', 'last_name' : 'Rosales'},
#     {'first_name' : 'Mark', 'last_name' : 'Guillen'},
#     {'first_name' : 'KB', 'last_name' : 'Tonel'}
 # ],
 #'Instructors': [
#     {'first_name' : 'Michael', 'last_name' : 'Choi'},
#     {'first_name' : 'Martin', 'last_name' : 'Puryear'}
 # ]
 #}

#for key, data in users.items():
#    print data
#    for value in data:
#        print value["first_name"], value["last_name"], "- ", len() """
