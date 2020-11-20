<!-- Implement the function unique_in_order which takes as argument a sequence 
and returns a list of items without any elements with the same value next 
to each other and preserving the original order of elements. -->

<?php

function uniqueInOrder($valueToOrder)
{

    $listToSend = array();

    if (is_string($valueToOrder)) {
        $valueToOrder = str_split($valueToOrder);
    }

    for ($i = 0; $i < sizeof($valueToOrder); $i++) {
        $prev = $i - 1;
        if ($valueToOrder[$prev] != $valueToOrder[$i]) {
            array_push($listToSend, $valueToOrder[$i]);
        }
    }

    return $listToSend;
}
