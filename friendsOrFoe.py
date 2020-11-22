# Make a program that filters a list of strings and returns a list with only your friends name in it.

# If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

# Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

# friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]

def friend(x):
    friendsArray = []
    for i in x:
        numberOfLetters = 0
        for letter in i:
            numberOfLetters = numberOfLetters + 1
        if numberOfLetters == 4:
            friendsArray.append(i)
    return friendsArray