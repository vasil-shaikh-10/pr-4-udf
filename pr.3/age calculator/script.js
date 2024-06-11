
function ageCal() {
    let person_age = document.getElementById("DOB").value;
    let dob = new Date(person_age);

    if(person_age==null || person_age=='') {
      document.getElementById("message").innerHTML = "**Choose a date please!";   
    } 
    else {
    
    let month = Date.now() - dob;
    
    let age_dt = new Date(month); 
      
    let year = age_dt.getUTCFullYear();
    
    let age = (year - 1970);
    
    return document.getElementById("result").innerHTML =  
        "YOUR AGE IS: " + age + " YEARS. ";
    }
}
