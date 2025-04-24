function validateStringNotEmpty(value) {
    if (value.trim().length === 0) {
      throw new Error('Invalid input - must not be empty.');
    }
  }
  
 


  