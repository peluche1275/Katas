<!-- Complete the method/function so that it converts dash/underscore delimited words into camel casing. 
The first word within the output should be capitalized only if the original word was capitalized 
(known as Upper Camel Case, also often referred to as Pascal case). -->

<?php

function toCamelCase($stringToConvert)
{

    $arrayConteningString = array();

    for ($i = 0; $i < strlen($stringToConvert); $i++) {

        $prev = $i - 1;

        if ($stringToConvert[$i] == "_" || $stringToConvert[$i] == "-") {
        } elseif ($stringToConvert[$prev] == "_" || $stringToConvert[$prev] == "-") {

            $arrayConteningString[$i] = strtoupper($stringToConvert[$i]);
        } else {

            $arrayConteningString[$i] = $stringToConvert[$i];
        }
    }

    return implode("", $arrayConteningString);
}
