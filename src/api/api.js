
//URL API
const urlAPI = 'https://localhost:44367';

export const Read = async () => {
   const fetchRead = await fetch(`${urlAPI}/details/all`);
   const [usuarios] = await Promise.all([fetchRead]);
   const usuarioJson = await usuarios.json();
   return { ...usuarioJson };
}
