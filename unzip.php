<?php
	$zip = new ZipArchive;
	$res = $zip->open('wp.zip');
	if ($res === TRUE) {
	   $zip->extractTo('wp/');
	   $zip->close();
	   echo 'ok';
	} else {
	   echo 'failed';
}
?> 
