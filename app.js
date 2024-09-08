var form = document.getElementById("resume-form");
var resumeContent = document.getElementById("resume-content");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var address = document.getElementById("address").value;
    var education = document.getElementById("education").value;
    var experience = document.getElementById("experience").value;
    var skills = document.getElementById("skill").value;
    if (!name || !email || !phone || !address || !education || !experience || !skills) {
        alert("Please fill out all fields.");
        return;
    }
    var resumeHTML = "\n        <h3 contenteditable=\"true\">Personal Information</h3>\n        <p><strong>Name:</strong> <span contenteditable=\"true\">".concat(name, "</span></p>\n        <p><strong>Email:</strong> <a href=\"mailto:").concat(email, "\" contenteditable=\"true\">").concat(email, "</a></p>\n        <p><strong>Phone:</strong> <span contenteditable=\"true\">").concat(phone, "</span></p>\n         <p><strong>Address:</strong> <span contenteditable=\"true\">").concat(address, "</span></p>\n\n        \n        <h3 contenteditable=\"true\">Education</h3>\n        <p contenteditable=\"true\">").concat(education, "</p>\n        \n        <h3 contenteditable=\"true\">Work Experience</h3>\n        <p contenteditable=\"true\">").concat(experience, "</p>\n        \n        <h3 contenteditable=\"true\">Skills</h3>\n        <ul>\n            ").concat(skills
        .split(",")
        .map(function (skill) { return "<li contenteditable=\"true\">".concat(skill.trim(), "</li>"); })
        .join(""), "\n        </ul>\n    ");
    resumeContent.innerHTML = resumeHTML;
});
