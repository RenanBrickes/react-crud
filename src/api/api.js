
//URL API
const urlAPI = 'https://localhost:44367';

export const Read = async () => {
   const fetchRead = await fetch(`${urlAPI}/details/all`);
   const [usuarios] = await Promise.all([fetchRead]);
   const usuarioJson = await usuarios.json();
   return { ...usuarioJson };
}

export const Create = async (dados) => {
   var myHeaders = new Headers();
   myHeaders.append("Accept", "application/json");
   myHeaders.append("Content-Type", "application/json");

   var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify(dados),
   };   
   const fetchPost = await fetch(`${urlAPI}/create`, requestOptions);
   const reponseJson = await fetchPost.json();
   return reponseJson;
}
