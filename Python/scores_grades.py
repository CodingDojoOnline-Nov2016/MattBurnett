# Create a program that prompts the user ten times for a test score between 60 and 100. Each time a score is generated, your program should display what the grade is for a particular score. Here is the grade table:
# Score: 60 - 69; Grade - D
# Score: 70 - 79; Grade - C
# Score: 80 - 89; Grade - B
# Score: 90 - 100; Grade - A

#def score_grade():
#    while count <=10:
#        print "Please enter score."

count=0
def scores_grades():
    print "Scores and Grades:"
    while count <=10:
        score=raw_input()
        if score < 60:
            print "Go hit the books!"
        elif score < 70:
            print "Your grade is D."
        elif score < 80:
            print "Your grade is C."
        elif score < 90:
            print "Your grade is B."
        elif score <= 100:
            print "Your grade is A."
            count+=1
    else:
        print "End of program. Bye!"

scores_grades()
