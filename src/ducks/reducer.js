const initialState = {
    name: '',
    address: '',
    city: '',
    St: '',
    zipcode: '',
    img: '',
    mortgage: 0,
    rent: 0

}

const UPDATE_HOUSE = "UPDATE_HOUSE";
const UPDATE_IMG = "UPDATE_IMG";




function reducer(state = initialState, action) {
    console.log('Reducer Got hit with this ->', action);

    switch( action.type) {

        case UPDATE_HOUSE:
        console.log(action.payload)
        const { name, address, city, St, zipcode} = action.payload
        return Object.assign( {}, state, { name: name, address: address, city: city, St: St, zipcode: zipcode } );

        case UPDATE_IMG:
        console.log(action.payload)
        return Object.assign( {}, state, { img: action.payload } );

      
        default: return state;
    }
};




export function updateHouse( name, address, city, St, zipcode ) {
    console.log('----------BANG!!!!----------', "Function got hit");
    return {
      type: UPDATE_HOUSE,
      payload: {
          name: name,
          address: address,
          city: city,
          St: St,
          zipcode: zipcode
      }
         
  }
}
export function updateImg( img ) {
    return {
      type: UPDATE_IMG,
      payload: img
    }
}

// export function updateImg(img) {

//     return {
//         type: UPDATE_IMG,
//         payload: img
//     }
// }


  
 
export default reducer; 







 
//   export function updateCity( city ) {
//     return {
//       type: UPDATE_CITY,
//       payload: city
//     };
//   }
 
//   export function updateState( St ) {
//     return {
//       type: UPDATE_STATE,
//       payload: ST
//     };
//   }
 
//   export function updateZipcode( zipcode ) {
//     return {
//       type: UPDATE_ZIPCODE,
//       payload: zipcode
//     };
//   }