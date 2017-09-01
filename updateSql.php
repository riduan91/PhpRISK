<!DOCTYPE html>
<html>
<body>

<?php
	$conn = new mysqli('localhost', 'dbuser', 'dbuser789', 'risk');
	// Check connection
	if ($conn->connect_error) {
		die("Connection failed: " . $conn->connect_error);
	} 
	
	foreach($_GET as $key => $value){
		$sql = "UPDATE risk SET value='" . $value . "' WHERE param='" . $key . "'";
		$conn->query($sql) ;
		/*
		if ($conn->query($sql) === TRUE) {
		echo "New record created successfully";
		} else {
			echo "Error: " . $sql . "<br>" . $conn->error;
		}
		*/
	}

	$sql="SELECT * FROM risk";
	
	$result = mysqli_query($conn, $sql);

	while ($row = mysqli_fetch_array($result)) {
		printf("<input type='text' id='r_%s' value='%s'>", $row['param'], $row['value']);
	}
	
	$conn->close();
?>

</body>
</html>