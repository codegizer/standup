import {GROUP}  from '../constants'

export default function setGroup(state,action){
  console.log(action.type);
  if(action.type === GROUP){
    return {...state,...action};
  }else{
    return {...state,groupName:undefined}
  }
}