let inputs = document.querySelectorAll("input, textarea");

inputs.forEach(input => {
input.addEventListener("input", updateProfile);
});

function updateProfile(){

let name = document.getElementById("name").value;
let role = document.getElementById("role").value;
let bio = document.getElementById("bio").value;

let linkedin = document.getElementById("linkedin").value;
let github = document.getElementById("github").value;
let instagram = document.getElementById("instagram").value;

document.getElementById("profileName").innerText = name || "Your Name";
document.getElementById("profileRole").innerText = role || "Your Role";
document.getElementById("profileBio").innerText = bio || "Your Bio";

document.getElementById("linkedinLink").href = linkedin;
document.getElementById("githubLink").href = github;
document.getElementById("instagramLink").href = instagram;

}

/* upload image */

document.getElementById("uploadImage").addEventListener("change", function(){

let reader = new FileReader();

reader.onload = function(e){
document.getElementById("profileImage").src = e.target.result;
}

reader.readAsDataURL(this.files[0]);

});


/* download card */

function downloadCard(){

html2canvas(document.getElementById("card")).then(canvas => {

let link = document.createElement("a");

link.download = "profile-card.png";

link.href = canvas.toDataURL();

link.click();

});

}


/* dark mode */

function toggleMode(){

document.body.classList.toggle("dark");

}