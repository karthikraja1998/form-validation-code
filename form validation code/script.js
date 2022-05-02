var userprofile = [
    {
        "id" : 7,
        "email": "michael.lawson@reqres.in",
        "first_name": "Michael",
        "last_name": "Lawson",
        "age": 27,
        "position": "Webdeveloper"
    },
    {
        "id" : 8,
        "email":"lindsay.ferguson@reqres.in",
        "first_name": "Lindsay",
        "last_name": "Ferguson",
        "age": 28,
        "position":"UI Developer",
    },
    {
        "id" : 9,
        "email" : "tobias.funke@reqres.in",
        "first_name": "Tobias",
        "last_name":"Funke",
        "age": 29,
        "position":"Graphic Designer",
    },
    {
        "id" : 10,
        "email" :"byron.fields@reqres.in",
        "first_name" : "Byron",
        "last_name" : "Fields",
        "age": 24,
        "position":"Android Developer",
    }

];

function validationFun(str1, str2){
    
    if(str1 == ""  || str2 == "" ){
        alert("please enter the username and password to proceed" );
        return false;
    }else{
        document.location.href="userlist.html";
    }
}

function alertDetails(str){
    for(var i = 0; i< userprofile.length; i++){
        if(str === (userprofile[i].first_name + " " + userprofile[i].last_name)){
            var accountName = "USER NAME: "+ userprofile[i].first_name + " " + userprofile[i].last_name;
            var idNum = "ID: " + userprofile[i].id;
            var emailId = "EMAIL ID: " + userprofile[i].email;
            var age = "AGE: " + userprofile[i].age;
            var position = "POSITION: " + userprofile[i].position;


            alert(accountName + ",\n" + idNum + ",\n"  + emailId + ",\n" + age + ",\n" + position); 

        }
        

    }
    

}
