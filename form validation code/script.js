var userprofile = [
    {
        id : 7,
        email: "michael.lawson@reqres.in",
        first_name: "Michael",
        last_name: "Lawson",
        age: 27,
        position: "Webdeveloper"
    },
    {
        id : 8,
        email:"lindsay.ferguson@reqres.in",
        first_name: "Lindsay",
        last_name: "Ferguson",
        age: 28,
        position:"UI Developer",
    },
    {
        id : 9,
        email : "tobias.funke@reqres.in",
        first_name: "Tobias",
        last_name:"Funke",
        age: 29,
        position:"Graphic Designer",
    },
    {
        id : 10,
        email :"byron.fields@reqres.in",
        first_name : "Byron",
        last_name : "Fields",
        age: 24,
        position:"Android Developer",
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
function registerFun(){
    document.location.href = "newuser.html";
}

function createUser(){
    
    let id = (document.getElementById("id").value)  ;
    let email = (document.getElementById("email").value)  ;
    let first_name = (document.getElementById("firstname").value)  ;
    let last_name = (document.getElementById("lastname").value)  ;
    let age = (document.getElementById("age").value)  ;
    let position = (document.getElementById("position").value)  ;

    userprofile.push({id, email, first_name, last_name, age, position} );

    let objLength = userprofile.length;
    let accountName = "USER NAME: "+ userprofile[objLength-1].first_name + " " + userprofile[objLength-1].last_name;
    let idNum = "ID: " + userprofile[objLength-1].id;
    let emailId = "EMAIL ID: " + userprofile[objLength-1].email;
    let newAge = "AGE: " + userprofile[objLength-1].age;
    let newPosition = "POSITION: " + userprofile[objLength-1].position;

            alert("new user profile for " + first_name + " " + last_name + " " + "is created");
            alert(accountName + ",\n" + idNum + ",\n"  + emailId + ",\n" + newAge + ",\n" + newPosition); 


    
}