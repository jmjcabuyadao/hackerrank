<?php
/**
 * First line contains a number N and Q as input.
* Next line contains N space separated 0 or 1.
* Next Q lines contain description of each query.
* Output only for query type 0 L R whether the number in range L to R is ODD or EVEN.
 */

function binaryQueries($binChars, $binaryString, $queries) {
    $resultString = '';
    foreach ($queries as $query) {
        $flipDigit = substr($query, 0, 1) == '1'; 
        $binaryArray = explode(' ', $binaryString);
        $queryArray = explode(' ', $query);
        switch ($flipDigit) {
            case true:
                $binaryString = flipDigit($binaryArray, $queryArray);
                break;
            case false:
                $resultString .= oddOrEven($binaryArray, $queryArray) . "\n";
                break;
        }
    }
    return $resultString;
}

/** 
*   @param array $binary
*   @param array $query
*   @return string $oddOrEven
*/
function oddOrEven($binary, $query) {
    $binaryString = '';
    for ($i = $query[1]-1; $i <= $query[2]-1; $i++) {
        $binaryString .= strval($binary[$i]);
    }
    
    return bindec($binaryString) % 2 ? "EVEN" : "ODD";
}

/** 
*   @param array $binary
*   @param array $query
*   @return string $flippedString
*/
function flipDigit($binary, $query) {
    $binaryString = '';
    $flipDigit = $binary[$query[1]] == '1' ? '0' : '1';
    $binary[$query[1]] = $flipDigit;
    
    foreach ($binary as $binaryDigit) {
        $binaryString += $binaryDigit;
    }
    
    return $binaryString;
}

$stdin = fopen("php://stdin", "r");
$stdout = fopen("php://stdout", "w");

fscanf($stdin, "%[^\n]", $lineOne);
$nq = explode(' ', $lineOne);
$n = intval($nq[0]);
$q = intval($nq[1]);
fscanf($stdin, "%[^\n]", $lineTwo);

for ($i = 1; $i <= $q; $i++) {
    fscanf($stdin, "%[^\n]", $query);
    $queries[] = $query;
}

$oddOrEven = binaryQueries($n, $lineTwo, $queries);

fwrite($stdout, $oddOrEven);

fclose($stdin);
fclose($stdout);
?>