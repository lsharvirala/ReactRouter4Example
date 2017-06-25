/**
 * Created by Mittapalli on 6/23/2017.
 */
export default function( state = null,action){
    console.log('in reducer i am here '+action.type)
    switch(action.type){
        case 'USER_LOGIN':
            return action.payload;
            break;
        default:
               break;

    }
    return state;
}