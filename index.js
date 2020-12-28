

function findUserByUsername(arr , key){

     return arr.find(function(user){

        return user.key === key ;

    })

}

function removeuser(usernameArr,username){

  let toBeDeleted  = usernameArr.findIndex(function(user){

        return user.username === username;

    })

    if(toBeDeleted === -1) return;
    
    return usernameArr.splice(toBeDeleted,1)[0];

}