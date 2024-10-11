

export const saveToLocalStorage = (key, value) => {
    try {
 
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error("Bir hata oluştu, veriyi kaydedemedik:", error);
    }
  };
  

  export const getFromLocalStorage = (key) => {
    try {
      const value = localStorage.getItem(key);
      return value ? JSON.parse(value) : null;
    } catch (error) {
      console.error("Veriyi alırken bir hata oluştu:", error);
      return null;
    }
  };
  