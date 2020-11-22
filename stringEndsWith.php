
<!-- Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string). -->

<?php

function solution($str, $ending) {
  
  $value = true;
  $difference = strlen($str) - strlen($ending);
  $i=$difference;
  $j=0;
  
  for($i;$i < strlen($str);$i++){
    
    if($str[$i] != $ending[$j]){
      $value = false;
    }
    
    $j++;
    
  }
  
  return $value;
}