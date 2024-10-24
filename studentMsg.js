function studentMsg(totalScores, studentScore) {
  let studentGrade = getGrade(studentScore);
  let classAverage = getAverage(totalScores);
  if(studentGrade === "F"){
    return("Class average: "+classAverage+"."+" Your grade: "+studentGrade+". "+"You failed the course.");
  }else{
    return("Class average: "+classAverage+"."+" Your grade: "+studentGrade+". "+"You passed the course.");
  }
}
console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));
