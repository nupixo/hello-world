<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en">
<head>
<title>CHASE</title>
<link type="text/css" rel="stylesheet" href="styles/reset.css" />
<link type="text/css" rel="stylesheet" href="styles/chase.css" />
<script type="text/javascript" src="scripts/jquery-1.4.2.min.js"></script>
<script type="text/javascript" src="scripts/jquery-ui-1.8.6.custom.min.js"></script>
<script type="text/javascript" src="scripts/jquery.isonscreen.min.js"></script>
<script type="text/javascript" src="scripts/chase.js"></script>
</head>
<body>
<h1>Chase</h1>
<ul id="container">
<?php for($x = 0; $x < 25; $x++) : ?>
	<li></li>
<?php endfor; ?>
</ul>
<div id="counter">Click to chase balls...</div>
<div id="message">You Lost A Ball!</div>
</body>
</html>