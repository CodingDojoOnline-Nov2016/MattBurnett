def oddEven(start, end):
	for num in range(start, end + 1, 1):
		string = "Number is " + str(num) + ". This is "
		if(num % 2 == 0):
			string += "an even number."
		else:
			string += "an odd number."
		print string

oddEven(1, 2000)
