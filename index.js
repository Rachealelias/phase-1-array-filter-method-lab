// Code your solution here
function findMatching(drivers, name){
    const result = drivers.filter(driver =>
         driver.toLowerCase() === name.toLowerCase());
    //console.log(result);
    return result;

}

function fuzzyMatch(drivers, initials){
   // console.log(drivers);
      return drivers.filter(driver =>
         driver.toLowerCase().indexOf(initials.toLowerCase()) === 0);
}

function matchName(drivers, name){
    const ans = drivers.filter(driver => driver.name === name);
   // console.log(ans);
   return ans;
}


