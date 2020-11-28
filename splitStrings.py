# Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore('_').

# Examples:

# solution('abc')  # should return ['ab', 'c_']
# solution('abcdef')  # should return ['ab', 'cd', 'ef']


def solution(string):
    listToDeliver = []
    i = 0

    if(len(string) % 2 != 0):
        string = string + "_"

    while i < len(string):
        j = i + 2
        listToDeliver.append(string[i:j])
        i += 2
    return listToDeliver
