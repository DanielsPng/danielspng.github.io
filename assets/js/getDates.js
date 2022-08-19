function getDates(dateString) {
    const today = new Date();
    const ageToCount = new Date(dateString);
    var age = today.getFullYear() - ageToCount.getFullYear();
    var m = today.getMonth() - ageToCount.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < ageToCount.getDate())) {
      age--;
    }
    return age;
}
  
document.getElementById("age").innerHTML = getDates("2004/05/17");
document.getElementById("start-with-design").innerHTML = getDates("2018");