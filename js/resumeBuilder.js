var bio = {
	"name": "Gitika Bafna",
	"role": "Engineer",
	"contacts": {
		"mobile": "305-123-4567",
		"email": "gitika@udacity.com",
		"github": "gitikabafna",
		"twitter": "@Gitika",
		"location": "Miramar",
	},
	"welcomeMessage": "Welcome to My Page!!",
	"skills": ["HTML", "CSS", "JavaScript", "AUTOCAD"],
	"biopic": ["images/profile.png"]
};


var work = {
	"jobs": [
		{
			"employer": "AT&T",
			"title": "Area Manager",
			"location": "Delray Beach, FL",
			"dates": "July 2017 - Present",
			"description": "Work as manager for South Palm Area and manages 18 Engineers."

		},
		{
			"employer": "AT&T",
			"title": "Engineer",
			"location": "Miami, FL",
			"dates": "1997-2017",
			"description": "Engineer Specialist, providing AT&T with all outside plant engineering design."
		},

	]
};


var education = {
	"schools": [
		{
      "name": "Strayer University",
      "location": "Miami, FL",
      "degree": "MBA",
      "majors": ["Business Administration"],
      "dates": 2014,
      "url": "http://www.strayer.edu"
    },
    {
      "name": "Florida International University",
      "location": "Miami, FL",
      "degree": "BS",
      "majors": ["Electrical Engineering"],
      "dates": 1997,
      "url": "https://www.fiu.edu"
    }
	],
	"onlineCourses": [
		{
			"title": "Introduction to progamming",
			"school": "Udacity",
			"dates": 2017,
			"url": "https://www.udacity.com/course/intro-to-programming-nanodegree--nd000"
		}
	]
};



var projects = {
	"projects": [
		{
			"title": "Webpage Design",
			"dates": "2017",
			"description": "Created a HTML webpage design for my class",
			"images": ["images/webpage.jpg"],
		},
	]
};

bio.display = function() {


    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);

    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    $("#header").append(formattedPic);

    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

    var contactArray = [];
    contactArray.push(formattedMobile, formattedEmail, formattedTwitter, formattedGithub, formattedLocation);

    contactLength = contactArray.length
    for (var i = 0; i < contactLength; i++) {
        $("#topContacts").append(contactArray[i]);
    }

    for (var i = 0; i < contactLength; i++) {
        $("#footerContacts").append(contactArray[i]);
    }

    var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedWelcomeMsg);

if(bio.skills.length > 0 ) {
    $('#header').append(HTMLskillsStart);
    for(var i = 0; i < bio.skills.length; i++) {
            var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
            $("#skills").append(formattedSkills);
				}
		}
};


work.display = function() {

	if(work.jobs.length > 0) {

		$("#workExperience").append(HTMLworkStart);

		for(var i = 0; i < work.jobs.length; i++) {

			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
			var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
			var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
			var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
			var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);

			var formattedEmployerWorkTitle = formattedEmployer + formattedWorkTitle;

			$(".work-entry:last").append(formattedEmployerWorkTitle);
			$(".work-entry:last").append(formattedWorkLocation);
			$(".work-entry:last").append(formattedDates);
			$(".work-entry:last").append(formattedWorkDescription);
		}
	}
};


projects.display = function() {
	if(projects.projects.length > 0) {
		for(var i = 0; i < projects.projects.length; i++) {

			$("#projects").append(HTMLprojectStart);

			var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title).replace("#", projects.projects[i].url);
			var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
			var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);

			$(".project-entry:last").append(formattedProjectTitle);
			$(".project-entry:last").append(formattedProjectDates);
			$(".project-entry:last").append(formattedProjectDescription);


				for(var j = 0; j < projects.projects[i].images.length; j++) {
				var formattedprojectImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[j]);
				$(".project-entry:last").append(formattedprojectImage);
			}
		}
	}
};

projects.display();

education.display = function() {
	if(education.schools.length > 0 || education.onlineCourses.length > 0) {
		for(var i = 0; i < education.schools.length; i++) {
			$("#education").append(HTMLschoolStart);

			var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name).replace("#", education.schools[i].url);
			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
			var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
			var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
			var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors);
			var formattedschoolURL = HTMLschoolURL.replace("%data%", education.schools[i].url);


			$(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
			$(".education-entry:last").append(formattedSchoolDates);
			$(".education-entry:last").append(formattedSchoolLocation);
			$(".education-entry:last").append(formattedSchoolMajor);
			$(".education-entry:last").append(formattedschoolURL);

		}


		if(education.onlineCourses.length > 0) {
			$("#education").append(HTMLonlineClasses);

			for(var i = 0; i < education.onlineCourses.length; i++) {
				$("#education").append(HTMLschoolStart);

				var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title).replace("#", education.onlineCourses[i].url);
				var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
				var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
				var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url).replace("#", education.onlineCourses[i].url);

				$(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
				$(".education-entry:last").append(formattedOnlineDates);
				$(".education-entry:last").append(formattedOnlineURL);
			}
		}
	}
};

education.display();

$("#mapDiv").append(googleMap);

bio.display();
work.display();
