function Reading(pages, readForHour, days){
    let totalTime = pages / readForHour;
    let requiresHours = totalTime / days;
    console.log(requiresHours);
}
Reading(212,20,2);