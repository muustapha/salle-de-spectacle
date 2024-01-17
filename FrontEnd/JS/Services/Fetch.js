//***********************Fetch All data**************************//
export const fetchAllData = async () => {
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
export const fetchDataByNameCityStyle = async (nom, ville, style) => {
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
export const fetchDataById = async (id) => {
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
