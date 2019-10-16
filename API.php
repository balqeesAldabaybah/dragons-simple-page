<?php
include 'db_connection.php';

function fetchALL(){
    $conn = openConn();
    $result = mysqli_query($conn ,
     "SELECT dragonsinfo.name,dragonsinfo.food,dragonsinfo.color,locations.name as location FROM dragonsinfo inner JOIN locations on locations.id = dragonsinfo.location ");
    
    
    $arr_out = array();
    
	while($r = mysqli_fetch_assoc($result)) {
		$arr_out[] = $r;
	}
    
    closeConn($conn);
	echo json_encode($arr_out);
}

fetchALL();
?>