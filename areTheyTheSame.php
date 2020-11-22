<!-- Given two arrays a and b write a function comp(a, b)that checks whether the two arrays have the "same" elements, with the same multiplicities. 
"Same" means, here, that the elements in b are the elements in a squared, regardless of the order. -->


<?php

function comp($a1, $a2)
{

  $isTheSame = false;

  if (is_array($a1) && is_array($a2)) { 
    $isTheSame = true;
    if (!empty($a1) && !empty($a2)) {  


      for ($i = 0; $i < sizeof($a1); $i++) {

        $square = sqrt($a2[$i]);

        if (!in_array($square, $a1)) {  
          $isTheSame = false;
        }
      }

      $arrayToCompare = [];
      for ($i = 0; $i < sizeof($a1); $i++) {
        $arrayToCompare[$i] = $a1[$i] * $a1[$i];
      }

      if (array_count_values($arrayToCompare) != array_count_values($a2)) {
        $isTheSame = false;
      }
    }
  }
  return $isTheSame;
}
