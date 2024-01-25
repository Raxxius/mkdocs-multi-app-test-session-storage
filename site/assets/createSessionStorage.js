const createSessionStorage = () => {
    const delay = Math.floor(Math.random() * 2000) + 2000;
    const colours = ["pink", "blue", "green", "yellow"];
  
    sessionStorage.clear();

    setTimeout(() => {
      sessionStorage.setItem('coloursTable', JSON.stringify(colours));
      sessionStorage.setItem('currentColour', colours[0]);
      console.log(sessionStorage);
  
      // Trigger the storage event manually after changes
      window.dispatchEvent(new Event('storage'));
    }, delay);
  
    console.log(sessionStorage);
  };
  
  createSessionStorage();