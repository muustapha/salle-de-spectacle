//***********************Fetch All data**************************//
export const serviceGetAllSalle = async () => {
  let allData;
  await fetch("https://localhost:44371/api/Salles/GetAllResearched")
    .then((res) => res.json())
    .then((data) => {
      return (allData = data);
    })
    .catch((err) => console.log("Pas de GetAllSalle", err));
  return allData;
};
//**************************************************************//
//**************Fetch data by Name/City/Style*******************//
export const serviceGetAllSalleByNomVilleStyle = async (nom, ville, style) => {
  let searchData;
  await fetch(
    `https://localhost:44371/api/Salles/GetAllResearched?nomRecherche=${nom}&villeRecherchee=${ville}&styleRecherche=${style}`
  )
    .then((res) => res.json())
    .then((data) => {
      return (searchData = data);
    })
    .catch((err) => console.log("petit problème" + err));
  return searchData;
};
//**************************************************************//
//*********************Fetch data by Id*************************//
export const serviceGetSalleById = async (id) => {
  let dataID;
  await fetch(`https://localhost:44371/api/Salles/id?id=${id}`)
    .then((res) => res.json())
    .then((data) => {
      return (dataID = data);
    })
    .catch((err) => console.log("Pas de GetAllSalle", err));
  return dataID;
};
//**************************************************************//
//*********************Fetch PUT Salle**************************//
export const serviceUpdateSalle = async (id, newData) => {
  await fetch(`https://localhost:44371/api/Salles/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newData),
  })
    .then((res) => res)
    .catch((err) => console.log("Pas de GetAllSalle", err));
};
//**************************************************************//
