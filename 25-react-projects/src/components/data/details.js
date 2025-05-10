const end = "10 May 2025";
const time = 18;
export const doneProject = 10;
// Values to Update;
const start = "15 January 2025";
const startDate = new Date(start);
const endDate = new Date(end);
let months =
    endDate.getMonth() -
    startDate.getMonth() +
    12 * (endDate.getFullYear() - startDate.getFullYear());
let tempDate = new Date(startDate);
tempDate.setMonth(tempDate.getMonth() + months);
if (tempDate > endDate) {
    months--;
    tempDate.setMonth(tempDate.getMonth() - 1);
}
const days = Math.floor((endDate - tempDate) / (1000 * 60 * 60 * 24));
const total = `${months} Month${months !== 1 ? "s" : ""} ${days} Day${
    days !== 1 ? "s" : ""
}`;

export const data = [
    {
        title: "Started",
        value: start
    }, {
        title: "Last Updated",
        value: end
    }, {
        title: doneProject >= 25 ? "Completed in" : "Ongoing",
        value: `${total}`
    }, {
        title: "Allocated Time",
        value: `${time} Hours`
    }, {
        title: "Progress",
        value: `${doneProject} / 25 Projects`
    }, {
        title: "Status",
        value: doneProject >= 25 ? "Completed!" : "Running . . ."
    }, {
        title: "Source",
        value: "Free Code Camp",
        link: "https://youtu.be/5ZdHfJVAY-s",
        linkTitle: "Youtube Video"
    }
];