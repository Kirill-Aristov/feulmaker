
const maxNumberRounding = 100;
function calculation(dataBase) {
  const array = [...dataBase]
  //Влажность переменные
  const massTimesMoisture = [];// Массив данных влажность умноженная на
  ////////////////////////////////////////////////
  //Зольность переменные
  const leftAshContentTop = []; //левое уравнение верхней части дроби
  const leftAshContentBottom = []; //левое уравнение нижней части дроби 
  //////////////////////////////////////////////////////
  //Теплота сгорания переменные
  const leftHeat = []; //первая часть уравнения
  /////////////////////////////////////////////////
  for (let index = 0; index < array.length; index++) {
    if (array[index].rows === "header") {
      array.splice(index, 1)
    }
  }
  for (const element of array) {
    //Расчет общей влажности //////////////////
    massTimesMoisture.push(element.massa * element.humidity);
    /////////////////////////////////////
    //Расчёт общей Зольности //////////////////////
    leftAshContentTop.push(element.massa * element.ash * (maxNumberRounding - element.humidity));
    leftAshContentBottom.push(element.massa * (maxNumberRounding - element.humidity));
    ////////////////////////////////////////////////////////////
    //Удельная теплота сгорания 
    leftHeat.push(element.massa * (1 - element.humidity / maxNumberRounding) * (1 - element.ash / maxNumberRounding) * element.heat);
    ////////////////////////////////////////////////////////
  };
  const reducer = ((accumulator, currentValue) => accumulator + currentValue);
  const humidity = massTimesMoisture.reduce(reducer);
  const ash = (leftAshContentTop.reduce(reducer) / leftAshContentBottom.reduce(reducer)) * (1 - (humidity / maxNumberRounding / maxNumberRounding));
  const heat = (leftHeat.reduce(reducer) - 0.02442 * humidity) / maxNumberRounding;
  return [humidity / 100, ash, heat];
}
export default calculation;