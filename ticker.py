# While using public transport we could see simple displays with a ticker. It often provides information about next stations and expected arrival time.

# Let's implement a function which will return a chunk of text to be displayed on a display of fixed width. The function should take text to display, width of the display and tick as a step of the ticker. The function will be called many times with tick parameter constantly incrementing.

# At very beginning the display is empty. At first step only one character should be displayed in the most right position and so on. When the message is displayed, it should be dissapear char by char to left position and return to blank state of the display. After that cycle should start again.

# For example

# ticker('Hello world!', 10, 4)   -> '      Hell'

# We could expect that our function will be called from simple script like this one

# def demo(text, width):
#     for tick in range(100):
#         someDisplayFunction(ticker(text, width, tick));


def ticker(text, width, tick):

    sum = width + len(text)

    if(tick > sum):
        tick = tick % sum

    arrayToStringify = []
    spaceEmpty = width-tick
    spaceWrite = width-spaceEmpty

    i = 0
    while i < spaceEmpty:
        arrayToStringify.append(' ')
        i += 1

    j = 0
    if(tick < width):
        while j < spaceWrite:
            if(j < len(text)):
                arrayToStringify.append(text[j])
            j += 1
    else:
        j = tick-width
        while j < tick:
            if(j < len(text)):
                arrayToStringify.append(text[j])
            j += 1

    if(len(arrayToStringify) < width):
        k = 0
        spaceEmpty = width-len(arrayToStringify)
        while k < spaceEmpty:
            arrayToStringify.append(' ')
            k += 1

    return ''.join(arrayToStringify)
