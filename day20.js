// const instaUser={

// }

// instaUser.Username="_theastha"
// instaUser.email='astha'


// console.log(instaUser);

let fbUser = {
  fbName: 'astha bhardwaj',
  email: 'astha@example.com'
};

let InstaUser = {
  InstaName: 'Mukul bhardwaj',
  email_insta: 'mukul@example.com'
};

let WAUser = {
  WAName: 'ravita bhardwaj',
  email_wa: 'ravita@example.com'
};

let final = Object.assign( {},fbUser,InstaUser,WAUser)

console.log(final);



// let final= {...fbUser,...InstaUser,...WAUser}



