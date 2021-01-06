
class BasicValidation{




    ValidationRegister(user,pass,passv){
        
            
        

        if(pass !== passv){
            return {error:true,msg:"Password and Password Verification Not Equal"}
        }

        else if(pass.length < 5){
            return {error:true,msg:"Your password must have 6 characters"}
        }


        else if(user.length < 4){
            return {error:true,msg:"Your Username must have 5 characters"}
        }


        return {error:false}; 
        
    }


    validationLogin(user,pass){

       if(user.length < 5){
           return {error:true,msg:"Your Username must have 6 characters"}
       }
       else if(pass.length < 5){
        return {error:true,msg:"Your Password must have 6 characters"}
       }


       return {error:false}

        
    }


    validationTodoCreator(desc,title){
        if(desc.length < 6){
            return {error:true,msg:"Your Description must have 6 characters"}
        }
        else if(title.length < 5){
            return {error:true,msg:"Your Title must have 5 characters"}
        }

        return {error:false}

    }


}


export default BasicValidation;