 let dragons ;

async function getDragons(){
    const response =  await fetch("API.php");
    const data =  await response.json();
    return data;
}

getDragons().then((res) =>{
   
   dragons =  new Array(res.length);
   for(let i = 0 ; i< res.length ;i++){
       dragons[i] = {name :res[i].name , food:res[i].food ,  color: res[i].color, location :res[i].location }
   }

   
    let tmp = ' <table id="dragons" border="1"> <th>name</th><th>food</th><th>color</th><th>location</th>';
    for(let i=0; i<dragons.length;i++){
        tmp +=   "<tr> <td> "+dragons[i]["name"]+ "</td> <td> "+dragons[i]["food"]+ "</td> <td> "+dragons[i]["color"]+ "</td> <td> "+dragons[i]["location"]+ "</td> </tr>" ;
    }

    tmp += '</table>'

    document.getElementById("Divdragons").innerHTML = tmp;
});
