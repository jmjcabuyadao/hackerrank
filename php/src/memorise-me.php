<?php
/**
 * The first line of input will contain N, an integer, which is the total number of numbers shown to your team.
 * The second line of input contains N space separated integers.
 * The third line of input contains an integer Q , denoting the total number of integers.
 * The Next Q lines will contain an integer denoting an integer, B.
 * GOAL: Print the number of occurrences of that number B in those N numbers on a new line.
 */
function memoriseMe($a, $b) {
    $inputArray = array_count_values($a);
    foreach ($b as $check) {
        if (in_array($check, array_keys($inputArray))) {
            echo $inputArray[$check] . "\n";
        } else {
            echo "NOT PRESENT" . "\n";
        }
    }
}

$fptr = fopen("php://stdout", "w");

$stdin = fopen("php://stdin", "r");

fscanf($stdin, "%d\n", $flashCardsCount);

fscanf($stdin, "%[^\n]", $flashCardsArray);

fscanf($stdin, "%d\n", $checkCount);

$checkNumbersArray = [];
for ($i = 0; $i < $checkCount; $i++) {
    fscanf($stdin, "%d\n", $thisNumber);
    $checkNumbersArray[] = $thisNumber;
}

$flashArray = array_map('intval', preg_split('/ /', $flashCardsArray, -1, PREG_SPLIT_NO_EMPTY));

$res = memoriseMe($flashArray, $checkNumbersArray);

fwrite($fptr, implode(" ", $res) . "\n");

fclose($stdin);
fclose($fptr);
