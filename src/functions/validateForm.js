

export default function validateForm({email, username, password, confirmPassword}){
    return new Promise((resolve,reject)=>{
       if(password !== confirmPassword){
        reject("Password and Confirm Password Should be the same");
       }
       if(username.length <=3){
        reject("Username must be at least 3 characters");
       }
       if(password.length <=5){
        reject("Password must be at least 5 characters");
       }
       if(!email.includes('@')){
        reject("Please enter a valid email");
       }
       

    })
}