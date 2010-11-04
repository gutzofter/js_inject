<?php
/**
 * Created by JetBrains PhpStorm.
 * User: jgutierrez
 * Date: 11/4/10
 * Time: 11:31 AM
 * To change this template use File | Settings | File Templates.
 */

$jsonData = json_encode(
    array(
        'success' => true,
        'html' => 'This text is injected from remote server'
    )
);

$callbackStart = $_GET['jsoncallback'] . "(";
$callbackEnd = ")";

echo $callbackStart . $jsonData . $callbackEnd;
