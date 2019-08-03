<?php

// Complete the printArray function below.
function printArray($a) {
    return $a;
}

$fptr = fopen(getenv("OUTPUT_PATH"), "w");

$stdin = fopen("php://stdin", "r");

fscanf($stdin, "%d\n", $arr_count);

fscanf($stdin, "%[^\n]", $arr_temp);

$arr = array_map('intval', preg_split('/ /', $arr_temp, -1, PREG_SPLIT_NO_EMPTY));

$res = printArray($arr);

fwrite($fptr, implode(" ", $res) . "\n");

fclose($stdin);
fclose($fptr);
