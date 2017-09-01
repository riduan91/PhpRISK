<!DOCTYPE html>
<html>
<head>
<script type="text/javascript" src="live.js"></script>
</head>
<body>

<?php

$con = mysqli_connect('localhost','dbuser','dbuser789','risk');

if (!$con) {
    die('Could not connect: ' . mysqli_error($con));
} 

$sql="SELECT * FROM risk";

$result = mysqli_query($con, $sql);

while ($row = mysqli_fetch_array($result)) {
    printf("<input type='text' id='r_%s' value='%s' >", $row['param'], $row['value']);
}

//mysql_free_result($result);

mysqli_close($con);
?>

</body>
</html>