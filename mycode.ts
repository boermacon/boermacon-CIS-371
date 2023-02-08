console.log("Hello World")


//Area 4 code modification
type Course = {
    courseNumber: string;
    courseName: string;
    semesterTaken: string
  }

const myCourses: Array<Course> = [{courseNumber: "162", courseName: "Computer Science 1", semesterTaken: "Fall 2019"},
{courseNumber: "452", courseName: "Operating Systems", semesterTaken: "Fall 2022"},
{courseNumber: "467", courseName: "Capstone Project", semesterTaken: "Winter 2023"},
{courseNumber: "371", courseName: "Web App Development", semesterTaken: "Winter 2023"}]

const tArea4 = document.getElementById("area4-table")
const table = document.createElement("table")
const row = document.createElement("tr")
const head1 = document.createElement("th")
const head2 = document.createElement("th")
const head3 = document.createElement("th")

tArea4.appendChild(table)
head1.appendChild(document.createTextNode("Course Number"))
head2.appendChild(document.createTextNode("Course Name"))
head3.appendChild(document.createTextNode("Semester Taken"))
row.appendChild(head1)
row.appendChild(head2)
row.appendChild(head3)
table.appendChild(row)

for(let i of myCourses){
    const forRow = document.createElement("tr")
    const entry1 = document.createElement("td")
    const entry3 = document.createElement("td")
    const entry2 = document.createElement("td")
    entry1.appendChild(document.createTextNode(i.courseNumber))
    entry2.appendChild(document.createTextNode(i.courseName))
    entry3.appendChild(document.createTextNode(i.semesterTaken))
    forRow.appendChild(entry1)
    forRow.appendChild(entry2)
    forRow.appendChild(entry3)
    table.appendChild(forRow)
}