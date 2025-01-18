const end = "18 January 2025";
const time = 6;
const doneProject = 3;
// Values to Update;
const start = "15 January 2025";
const startDate = new Date(start);
const endDate = new Date(end);
const total = Math.floor((endDate - startDate) / (1000 * 60 * 60 * 24));
const data = [
    {
        title: "Started",
        value: start
    }, {
        title: "Last Updated",
        value: end
    }, {
        title: doneProject >= 25 ? "Completed in" : "Ongoing",
        value: `${total} Days`
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

export default data;