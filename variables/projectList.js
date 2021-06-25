import pokemon from "../public/project/pokemon.jpg";
import cyberwhale from "../public/project/cyberwhale.jpg";
import task from "../public/project/task.jpg";
import backup from "../public/project/backup.jpg";
import asani from "../public/project/asani.jpg";
import mobile from "../public/project/mobile.jpg";
import barbar from "../public/project/barbar.jpg";
import desktop from "../public/project/desktop.jpg";
import unity from "../public/project/unity.jpg";

export const projectList = [
    {
        title: "Pokemon",
        content: "Website Frontend (ReactJS)",
        link: "https://my-pokemon-application.netlify.app/",
        tags:["React", "Webpack","Emotion","GraphQL"],
        image: pokemon,
        background: "linear-gradient(to bottom, #f5f5f5, white)"
    },
    {
        title: "CyberWhale - Official Website",
        content: "Website Frontend (ReactJS)",
        link: "http://cyberwhale.co.id/",
        tags:["React", "Bootstrap","Scroll Magic","GSAP"],
        image: cyberwhale,
        background: "white"
    },
    {
        title: "CyberWhale - Task Monitoring",
        content: "Website Frontend (Laravel)",
        link: "#",
        tags:["React", "Bootstrap"],
        image: task,
        background: "linear-gradient(to bottom, #e3f2fd, #f8fafc)"
    },
    {
        title: "Student Backup - University Tools",
        content: "WSL C# Desktop Application",
        link: "#",
        tags:["C#", "WSL"],
        image: backup,
        background: "white"
    },
    {
        title: "Asani - Landing Page",
        content: "Frontend Landing Page (HTML,CSS and Javascript)",
        link: "https://www.asani.co.id/",
        tags:["HTML", "CSS", "Bootstrap", "Javascript", "Jquery"],
        image: asani,
        background: "white"
    },
    {
        title: "Mobile - Test Progressive Assistant",
        content: "Java Android and Firebase",
        link: "https://play.google.com/store/apps/details?id=edu.bluejack18_2.lostandfound&hl=en",
        tags:["Android", "Java", "Firebase"],
        image: mobile,
        background: "white"
    },
    {
        title: "Website - Test Progressive Assistant",
        content: "Website Full Stack (ReactJS & Laravel)",
        link: "#",
        tags:["Laravel", "Database", "Redis", "React", "Express", "Socket"],
        image: barbar,
        background: "white"
    },
    {
        title: "POS System - Test Progressive Assistant",
        content: "Desktop Application C#",
        link: "#",
        tags:["C#", "Database","SQL"],
        image: desktop,
        background: "white"
    },
    {
        title: "FPS Game - Test Progressive Assistant",
        content: "Unity Game Development",
        link: "#",
        tags:["Unity","C#"],
        image: unity,
        background: "linear-gradient(to bottom, #acd8f1 ,#a9c2d8)"
    }
]