<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en">
<head>
<title>ScotMurray.com - Iterator</title>
<link type="text/css" rel="stylesheet" href="styles/screen.css" media="screen, projection" />
<link type="text/css" rel="stylesheet" href="styles/print.css" media="print" />
<!--[if lt IE 8]>
<link type="text/css" rel="stylesheet" href="styles/ie.css" media="screen, projection">
<![endif]-->
<link type="text/css" rel="stylesheet" href="styles/public.css" media="screen, projection" />
</head>
<body>
<div id="wrapper">
	<?php
		if(isset($_REQUEST['content'])) {
			$output = '';
		
			for($x = 0; $x < $_REQUEST['iterations']; $x++) {
				$find = array('{x}', '{t}');
				$replace = array($_REQUEST['start_value'] + $x, "\t");
				$output .= str_replace($find, $replace, $_REQUEST['content']);
			}
			
			if(!empty($output)) {
				echo('<h1>Output</h1>');
				echo('<pre>' . htmlentities(stripslashes($output)) . '</pre>');
			} else {
				echo('<h1>Error</h1>');
				echo('<pre>No output to display. Check input values and try again.</pre>');
			}
		}
	?>
	<h1>Content Iterator</h1>
	<form action="<?=basename($_SERVER['PHP_SELF'])?>" method="post">
		<dl>
			<dt><label for="start_value">Start Value</label></dt>
			<dd><input type="text" id="start_value" name="start_value" class="text" value="<?=isset($_REQUEST['start_value']) ? $_REQUEST['start_value'] : '1'?>" /></dd>
			
			<dt><label for="iterations">Number of Iterations</label></dt>
			<dd><input type="text" id="iterations" name="iterations" class="text" value="<?=isset($_REQUEST['iterations']) ? $_REQUEST['iterations'] : '1'?>" /></dd>
	
			<dt><label for="content">Content (the string {x} is replaced by the iterator value and {t} is replaced by a tab)</label></dt>
			<dd><textarea id="content" name="content" rows="10" cols="150"><?=isset($_REQUEST['content']) ? stripslashes($_REQUEST['content']) : "{x}\n"?></textarea></dd>
		</dl>
		
		<input type="submit" id="submit" name="submit" value="Iterate Content" />
	</form>
</div>
</body>
</html>