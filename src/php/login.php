 <?php
 	header ("Access-Control-Allow-Origin: * ");
 	$sentence = $_GET['sentence'];
 	$account = mysql_connect('qdm114574480.my3w.com','qdm114574480','MYGXDGQjx1225');
 	mysql_select_db('qdm114574480_db',$account);
 	mysql_query("set character set 'utf8'");
 	mysql_query("set names 'utf8'");
 	$sql = "SELECT * FROM Love WHERE sentence='$sentence' ";
 	$result = mysql_query($sql);
 	if ($row = mysql_fetch_array($result,MYSQL_ASSOC)){
		echo '{"res_code":0,  "res_msg":"就是你哦！","res_body":{}}';
 	} else {
 		echo '{"res_code":-1, "res_msg":"话不对哦！", "res_body":{}}';
 	}

 	mysql_close();
 ?>