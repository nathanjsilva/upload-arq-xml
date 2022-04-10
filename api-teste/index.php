<?php

    @header('Content-Type: text/html; charset=utf-8');

    $xml = simplexml_load_file($_FILES['xml']['tmp_name']);

    foreach($xml as $value)
    {
        print_r($value);
    }
?>