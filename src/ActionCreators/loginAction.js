/**
 * Created by Mittapalli on 6/23/2017.
 */


export const loginUser = (user)=>{
    if(user.userName === 'admin' && user.password === "password"){
        alert('username true');

        return{
            type: 'USER_LOGIN',
            payload:user
        }
    }
    else{
        alert('Invalid UserName')
        return{
            type:'USER_ERROR',
            payload:"Invalid Login"
        }
    }


}
