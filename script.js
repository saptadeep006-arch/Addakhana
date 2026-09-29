/* =========================
DEFAULT PROFILE
========================= */

const defaultProfile = {

name: "Your Name",

email: "your@email.com",

image: "https://via.placeholder.com/150"

};

/* =========================
LOAD PROFILE
========================= */

function loadProfile() {

const savedProfile =
    localStorage.getItem("userProfile");


if (savedProfile) {

    return JSON.parse(savedProfile);

}


return defaultProfile;

}

/* =========================
DISPLAY PROFILE
========================= */

function displayProfile() {

const profile =
    loadProfile();


document.getElementById(
    "profileName"
).textContent = profile.name;


document.getElementById(
    "profileEmail"
).textContent = profile.email;


document.getElementById(
    "profileImage"
).src = profile.image;

}

/* =========================
OPEN PROFILE
========================= */

function openProfile() {

displayProfile();


document.getElementById(
    "profilePopup"
).style.display = "flex";

}

/* =========================
CLOSE PROFILE
========================= */

function closeProfile() {

document.getElementById(
    "profilePopup"
).style.display = "none";

}

/* =========================
EDIT PROFILE
========================= */

function editProfile() {

const profile =
    loadProfile();


document.getElementById(
    "nameInput"
).value = profile.name;


document.getElementById(
    "emailInput"
).value = profile.email;


document.getElementById(
    "imageInput"
).value = profile.image;


document.getElementById(
    "profilePopup"
).style.display = "none";


document.getElementById(
    "editPopup"
).style.display = "flex";

}

/* =========================
CLOSE EDIT
========================= */

function closeEdit() {

document.getElementById(
    "editPopup"
).style.display = "none";

}

/* =========================
SAVE PROFILE
========================= */

function saveProfile() {

const name =
    document.getElementById(
        "nameInput"
    ).value.trim();


const email =
    document.getElementById(
        "emailInput"
    ).value.trim();


const image =
    document.getElementById(
        "imageInput"
    ).value.trim();


if (name === "") {

    alert("Please enter your name.");

    return;

}


if (email === "") {

    alert("Please enter your email.");

    return;

}


const profile = {

    name: name,

    email: email,

    image:
        image ||
        "https://via.placeholder.com/150"

};


localStorage.setItem(
    "userProfile",
    JSON.stringify(profile)
);


document.getElementById(
    "editPopup"
).style.display = "none";


displayProfile();


document.getElementById(
    "profilePopup"
).style.display = "flex";

}

/* =========================
LOGOUT
========================= */

function logoutProfile() {

localStorage.removeItem(
    "userProfile"
);


document.getElementById(
    "profilePopup"
).style.display = "none";


alert("Profile data has been reset.");

}

/* =========================
CLOSE POPUP
WHEN CLICKING OUTSIDE
========================= */

window.addEventListener(
"click",
function(event) {

    const profilePopup =
        document.getElementById(
            "profilePopup"
        );

    const editPopup =
        document.getElementById(
            "editPopup"
        );


    if (event.target === profilePopup) {

        closeProfile();

    }


    if (event.target === editPopup) {

        closeEdit();

    }

}

);