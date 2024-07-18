function countAllPaarl(registrationNumbers) {

    const registrationsArray = registrationNumbers.split(',');
  
  
    let count = 0;
  
    
    for (let i = 0; i < registrationsArray.length; i++) {
     
      if (registrationsArray[i].trim().startsWith('CJ')) {
       
        count++;
      }
    }
  
   
       return count;
  }
  
  
  
 
  