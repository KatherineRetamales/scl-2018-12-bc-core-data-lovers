const data = Object.values(window.LOL.data);
const dataLol = (data) => {
  let dataLol = [];
  for (let i = 0; i < data.length; i++) {dataLol.push(data[i]);}
  return dataLol;
}
const filterData = (data,condition) => {
  const filter = data.filter(function(el){return el.tags[0] === condition || el.tags[1] === condition;});
  return filter;
}
const sortData = (data,sortOrder) => {
  if (sortOrder === 'Asc'){
    return data.sort();
  }else{
    return data.reverse();
  }
}
const computeStats = (data) => {
  /*la función compute o calcular, nos permitirá hacer cálculos estadísticos básicos para ser
  mostrados de acuerdo a la data proporcionada. */
}
const dataSearch = (data,condition) => {
  let search=data.filter(function(el){return el.name.toUpperCase().indexOf(condition.toUpperCase())>= 0;});
  return search;
}
const dataInfo = (data) => {
  let info = [];
  for (let i = 0; i < data.length; i++) {
    info.push(data[i].info);
  }
  return info;
}

window.data= data;
window.dataLol = dataLol;
window.filterData = filterData
window.dataSearch = dataSearch;
window.sortData = sortData;
window.dataInfo = dataInfo;
