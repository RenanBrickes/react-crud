
//URL API
const urlAPI = 'https://localhost:44367';
//HEADER
const myHeaders = new Headers();
myHeaders.append("Accept", "application/json");
myHeaders.append("Content-Type", "application/json");

export const Read = async () => {
   const fetchRead = await fetch(`${urlAPI}/details/all`);
   const [usuarios] = await Promise.all([fetchRead]);
   const usuarioJson = await usuarios.json();
   return { ...usuarioJson };
}

export const Create = async (dados) => {

   var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify(dados),
   };
   const fetchPost = await fetch(`${urlAPI}/create`, requestOptions);
   const reponseJson = await fetchPost.json();
   return reponseJson;
}

export const Details = async (id) => {
   const fetchDetails = await fetch(`${urlAPI}/details?id=${id}`);
   const reponseJson = await fetchDetails.json();
   return reponseJson;
}

export const Update = async (dados) => {
   var requestOptions = {
      method: 'PUT',
      headers: myHeaders,
      body: JSON.stringify(dados),
   };
   const fetchUpdate = await fetch(`${urlAPI}/edit`, requestOptions);
   const reponseJson = await fetchUpdate.json();
   return reponseJson;
}

export const Delete = async (id) => {
   var requestOptions = {
      method: 'DELETE',
      headers: myHeaders,
   };
   const fetchDelete = await fetch(`${urlAPI}/delete?id=${id}`, requestOptions);
   const reponseJson = await fetchDelete.json();
   return reponseJson;
}