const form = document.getElementById("resume-form") as HTMLFormElement;
const resumeContent = document.getElementById(
    "resume-content"
) as HTMLDivElement;

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = (document.getElementById("name") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const phone = (document.getElementById("phone") as HTMLInputElement).value;
    const address = (document.getElementById("address") as HTMLInputElement).value;
    const education = (
        document.getElementById("education") as HTMLTextAreaElement
    ).value;
    const experience = (
        document.getElementById("experience") as HTMLTextAreaElement
    ).value;
    const skills = (document.getElementById("skill") as HTMLInputElement).value;

    if (!name || !email || !phone || !address || !education || !experience || !skills) {
        alert("Please fill out all fields.");
        return;
    }
    const resumeHTML = `
        <h3 contenteditable="true">Personal Information</h3>
        <p><strong>Name:</strong> <span contenteditable="true">${name}</span></p>
        <p><strong>Email:</strong> <a href="mailto:${email}" contenteditable="true">${email}</a></p>
        <p><strong>Phone:</strong> <span contenteditable="true">${phone}</span></p>
         <p><strong>Address:</strong> <span contenteditable="true">${address}</span></p>

        
        <h3 contenteditable="true">Education</h3>
        <p contenteditable="true">${education}</p>
        
        <h3 contenteditable="true">Work Experience</h3>
        <p contenteditable="true">${experience}</p>
        
        <h3 contenteditable="true">Skills</h3>
        <ul>
            ${skills
            .split(",")
            .map((skill) => `<li contenteditable="true">${skill.trim()}</li>`)
            .join("")}
        </ul>
    `;

    resumeContent.innerHTML = resumeHTML;
});