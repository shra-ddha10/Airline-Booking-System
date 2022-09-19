<?php
session_start();
include_once 'dbconnect.php';

if(!isset($_SESSION['user']))
{
	echo 0;
}
else
    {echo $_SESSION['user'];}

if (isset($_SESSION['LAST_ACTIVITY']) && (time() - $_SESSION['LAST_ACTIVITY'] > 600)) {
        // last request was more than 30 minutes ago
    session_unset();     // unset $_SESSION variable for the run-time 
    session_destroy();   // destroy session data in storage
}
$_SESSION['LAST_ACTIVITY'] = time(); // update last activity time stamp

?>