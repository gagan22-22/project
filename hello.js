

function vote(age){
    if (age>=18) {
        document.write("you are eligibe for vote")
    } 
    else {
        document.write("you are not eligibe for vote")        
    };
}

let age =prompt("enter your age");
vote(age)
