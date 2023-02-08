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

tArea4?.appendChild(table)
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

//Area 6
type Company = {
    name: string,           // Ex: "MSFT"
    abbreviation: string,   // Ex: Microsoft
    url: string             // Ex: https://microsoft.com
  }

const myCompanies: Array<Company> = [{name: "Beck's Kennels", abbreviation: "BKen", url: "http://www.beckskennels.com/dog_sled.html"},{name: "United Nuclear", abbreviation: "UN", url: "https://unitednuclear.com/"},{name: "AirZoo", abbreviation: "AZ", url: "https://www.airzoo.org/"}]

const area6 = document.getElementById("area6-list")
const listSpan = document.createElement("span")
listSpan.id = 'area6'
const list = document.createElement("ol")
area6?.appendChild(listSpan)
listSpan.appendChild(list)

for(let i of myCompanies){
    const entry = document.createElement("li")
    const url = document.createElement("a")
    url.href = i.url
    url.appendChild(document.createTextNode(i.abbreviation))
    entry.appendChild(url)
    list.appendChild(entry)
}

type SocialMedia = {
    icon: string;   // this can be a name of a local image or a URL to a remote image
    url: string;    // URL of the said social media company
    name: string;
  }

const myIcons: Array<SocialMedia> = [{icon: "amazon.png", url: "https://www.amazon.com/", name: "Amazon"}, {icon: "github.png", url: "https://github.com/", name: "Github"}, {icon: "google.png", url: "https://www.google.com/", name: "Google"}, {icon: "reddit.png", url: "https://www.reddit.com/", name: "Reddit"}, {icon: "youtube.png", url: "https://www.youtube.com/", name: "Youtube"}]

const area8 = document.getElementById("area8-icons")
const iconSpan = document.createElement("span")
iconSpan.id = 'area8'
area8?.appendChild(iconSpan)
for(let i of myIcons){
    const entry = document.createElement("a")
    entry.href = i.url
    const img = document.createElement("img")
    img.src = i.icon
    img.height = 75
    img.alt = i.name
    entry.appendChild(img)
    iconSpan.appendChild(entry)
}