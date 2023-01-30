

const homePage = document.querySelector("#linkHome");
const aboutPage = document.querySelector("#linkAbout");
const contactPage = document.querySelector("#linkContact");
const resourcesPage = document.querySelector("#linkResources");
const homeSection = document.querySelector(".home");
const aboutSection = document.querySelector(".about-me");
const resourcesSection = document.querySelector(".resources");
const contactSection = document.querySelector(".contact");

homePage.addEventListener('click' , () => {
    aboutSection.classList.add('hidden');
    resourcesSection.classList.add('hidden');
    contactSection.classList.add('hidden');
    homeSection.classList.remove('hidden');

    aboutPage.classList.remove('active');
    resourcesPage.classList.remove('active');
    contactPage.classList.remove('active');
    homePage.classList.add('active');
   

} )

aboutPage.addEventListener('click' , () => {
    homeSection.classList.add('hidden');
    resourcesSection.classList.add('hidden');
    contactSection.classList.add('hidden');
    aboutSection.classList.remove('hidden');

    aboutPage.classList.add('active');
    resourcesPage.classList.remove('active');
    contactPage.classList.remove('active');
    homePage.classList.remove('active');

} )

resourcesPage.addEventListener('click' , () => {
    aboutSection.classList.add('hidden');
    homeSection.classList.add('hidden');
    contactSection.classList.add('hidden');
    resourcesSection.classList.remove('hidden');

    aboutPage.classList.remove('active');
    resourcesPage.classList.add('active');
    contactPage.classList.remove('active');
    homePage.classList.remove('active');

} )

contactPage.addEventListener('click' , () => {
    aboutSection.classList.add('hidden');
    resourcesSection.classList.add('hidden');
    homeSection.classList.add('hidden');
    contactSection.classList.remove('hidden');

    aboutPage.classList.remove('active');
    resourcesPage.classList.remove('active');
    contactPage.classList.add('active');
    homePage.classList.remove('active');

} )
    

