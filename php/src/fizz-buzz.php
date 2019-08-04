<?php
/*
// Sample code to perform I/O:

fscanf(STDIN, "%s\n", $name);           // Reading input from STDIN
echo "Hi, ".$name.".\n";                // Writing output to STDOUT

// Warning: Printing unwanted or ill-formatted data to output will cause the test cases to fail
*/

// Write your code here

function fizzBuzz($endNumbersArray) {
    $result = [];
    
    foreach ($endNumbersArray as $end) {
        for ($i = 1; $i <= $end; $i++) {
            $fizzBuzz = "";
            $checkFizz = $i%3;
        	$checkBuzz = $i%5;
        	
        	if($checkFizz == 0)
        		$fizzBuzz .= "Fizz";
        	if($checkBuzz == 0)
        		$fizzBuzz .= "Buzz";
        	
        	
        	if ($fizzBuzz == "") $result[] = $i;
        	else $result[] = $fizzBuzz;
        }   
    }

    return $result;
}

$fptr = fopen("php://stdout", "w");

$stdin = fopen("php://stdin", "r");

fscanf($stdin, "%d\n", $testCasesCount);

if ($testCasesCount < 1 || $testCasesCount > 10) {
    return;    
}

fscanf($stdin, "%[^\n]", $endNumbersArray);
$endNumbersArray = array_map('intval', preg_split('/ /', $endNumbersArray, -1, PREG_SPLIT_NO_EMPTY));

$res = fizzBuzz($endNumbersArray);

fwrite($fptr, implode(" ", $res) . "\n");

fclose($stdin);
fclose($fptr);

?>
