# You're going to create a program that simulates tossing a coin 5,000 times. Your program should display how many times the head/tail appears.

import random

def coin_toss(tosses):
    print "Fishing in my pockets for 5000 coins.."
    heads=0
    tails=0
    for num in range (tosses):
        result= int(round(random.random()))
        if (result is 1):
            current ='heads!'
            heads+=1
        else:
            current ='tails!'
            tails+=1
        print "Attempt #" +str(num +1) + ":Tossing a coin... It's a " + str(result) + "...You have " + str(heads) + " heads so far and " + str(tails) + " tails so far!... And a lot of pocket space!"
    print "That's a lot of counting.. I'm exhausted!"

coin_toss(5000)
