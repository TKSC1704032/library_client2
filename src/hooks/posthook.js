export default async function postHook(url = '', data = {}) {
    try{
        const response = await fetch(url, {
            method: 'POST',
            credentials: 'include',
            headers: {
              'Content-Type': 'application/json',
            },
              withCredentials: true,
            body: JSON.stringify(data) 
          });
          return response.json(); // parses JSON response into native JavaScript objects
    }
    catch(error){
      console.log(error)
      return error; 
       ;
    }
    
  }