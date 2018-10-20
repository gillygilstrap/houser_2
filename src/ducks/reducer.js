const initialState = {
    name: '',
    address: '',
    city: '',
    St: '',
    zipcode: '',
    img: '',
    mortgage: null,
    rent: null

}

const UPDATE_HOUSE = "UPDATE_HOUSE";




function reducer(state = initialState, action) {
    console.log('Reducer Got hit with this ->', action);

    switch( action.type) {

        case UPDATE_HOUSE:
        const { name, address, city, St, zipcode} = action.payload
        return Object.assign( {}, state, { name: name, address: address, city: city, St: St, zipcode: zipcode } );

      
        default: return state;
    }
};




export function updateHouse( name, address, city, St, zipcode ) {
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


  
 
export default reducer; 






// export function updateAddress( address ) {
//     return {
//       type: UPDATE_ADDRESS,
//       payload: address
//     };
//   }
 
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