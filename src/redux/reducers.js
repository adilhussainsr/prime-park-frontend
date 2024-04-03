import {combineReducers} from 'redux';

const loginDetails = (state=[],action)=>{

  switch(action.type)
  {
    case 'save_profile':
      return action.data;
    default:
    	return state;  
  }
};


const friendList = (state=[],action)=>{

  switch(action.type)
  {
    case 'save_friendlist':
      return action.data;
    default:
    	return state;  
  }
};

const requestList = (state=[],action)=>{

  switch(action.type)
  {
    case 'save_requestlist':
      return action.data;
    default:
    	return state;  
  }
};

const chat = (state={socket:null,user:null,windows:null,connected_users:[],conversations:[],msg_fetched:[],show_window:false},action)=>{

  switch(action.type)
  {
    case 'save_socket':
      return {...state,socket:action.data.socket}
    case 'toggle_window':
      return {...state,show_window:action.show_window}
    // case 'save_window':
    //   state.windows = action.data.windows;
      // return state;
    case 'save_user':
        return {...state,user:action.user}
    case 'connected_users':
        return {...state,connected_users:action.connected_users}
    case 'save_conversations':
        return {...state,conversations:[...state.conversations,action.conversation]}  
    case 'save_old_conversations':
        return {...state,conversations:[...state.conversations,...action.conversations]}
    case 'save_msg_fetched':
        return {...state,msg_fetched:[...state.msg_fetched,action.user_id]}                     
    default:
      return state;  
  }
}

const post = (state={feeds:[]},action)=>{

  switch(action.type)
  {
    case 'save_feeds':
      return {...state,feeds:action.data};
    default:
      return state;  
  }
};

const reducer = combineReducers({
  friendList,
  requestList,
  chat,
  loginDetails,
  post
})

export default reducer;