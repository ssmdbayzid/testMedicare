const doctorData =[
    {
      "name": "Dr. Sarah Johnson",
      "email": "sarahjohnson@example.com",
      "password": "$2b$10$S2ak4QVnDKkcVvK5eQqrgOCGZgy8aCBsE0XCXRU42C0wj1XEDRma6",
      "photo": "https://i.ibb.co/5vBd3SN/doctor-img01.png",
      "phone": "0123456789",
      "bio": "I specialize in cardiology and have been practicing for 15 years.",
      "gender": "female",
      "specialization": "cardiologist",
      "ticketPrice": 1500,
      "about": "I am dedicated to providing the best cardiac care to my patients.",
     " isApproved": "pending",
      "qualification": [
        {
          "startDate": "2005-09-15",
          "endDate": "2010-06-30",
          "degree": "MD",
          "university": "Harvard Medical School",
          "id": 1
        }
      ],
      "experience": [
        {
          "startDate": "2010-08-01",
          "endDate": "2015-12-31",
          "position": "Cardiologist",
          "hospital": "HeartCare Clinic",
          "id": 1
        }
      ],
      "timeSlots": [
        {
          "day": "monday",
          "startingTime": "09:00",
          "endingTime": "13:00",
          "id": 1
        },
      ]
    },
    {
      "name": "Dr. Emily Rodriguez",
      "email": "emilyrodriguez@example.com",
      "password": "$2b$10$S2ak4QVnDKkcVvK5eQqrgOCGZgy8aCBsE0XCXRU42C0wj1XEDRma6",
      "photo": "https://i.ibb.co/RPg15P2/doctor-img02.png",
      "phone": "9876543210",
      "bio": "I am an experienced pediatrician focusing on child health and wellness.",
      "gender": "female",
      "specialization": "pediatrician",
      "ticketPrice": 1200,
      "about": "My goal is to provide comprehensive care for children and their families.",
     " isApproved": "pending",
      "qualification": [
        {
          "startDate": "2007-03-20",
          "endDate": "2012-05-10",
          "degree": "MD",
          "university": "Stanford University School of Medicine",
          "id": 1
        }
      ],
      "experience": [
        {
          "startDate": "2012-07-01",
          "endDate": "2019-11-30",
          "position": "Pediatrician",
          "hospital": "ChildFirst Hospital",
          "id": 1
        }
      ],
      "timeSlots": [
        {
          "day": "tuesday",
          "startingTime": "10:00",
          "endingTime": "14:00",
          "id": 1
        },
      ]
    },
    {
      "name": "Dr. Alexander Lee",
      "email": "alexanderlee@example.com",
      "password": "$2b$10$S2ak4QVnDKkcVvK5eQqrgOCGZgy8aCBsE0XCXRU42C0wj1XEDRma6",
      "photo": "https://i.ibb.co/MVxPqCD/doctor-img03.png",
      "phone": "5551234567",
      "bio": "I specialize in orthopedic surgery and aim to improve patients' mobility.",
      "gender": "male",
      "specialization": "orthopedic surgeon",
      "ticketPrice": 2000,
      "about": "I focus on providing personalized care for orthopedic conditions.",
     " isApproved": "pending",
      "qualification": [
        {
          "startDate": "2004-06-10",
          "endDate": "2009-08-20",
          "degree": "MD",
          "university": "Johns Hopkins School of Medicine",
          "id": 1
        }
      ],
      "experience": [
        {
          "startDate": "2009-10-01",
          "endDate": "2017-12-15",
          "position": "Orthopedic Surgeon",
          "hospital": "BoneCare Hospital",
          "id": 1
        }
      ],
      "timeSlots": [
        {
          "day": "wednesday",
          "startingTime": "08:00",
          "endingTime": "12:00",
          "id": 1
        },
      ]
    },
    {
      "name": "Dr. Maria Garcia",
      "email": "mariagarcia@example.com",
      "password": "$2b$10$S2ak4QVnDKkcVvK5eQqrgOCGZgy8aCBsE0XCXRU42C0wj1XEDRma6",
      "photo": "https://i.ibb.co/RPg15P2/doctor-img02.png",
      "phone": "7779876543",
      "bio": "I am a psychiatrist dedicated to mental health and well-being.",
      "gender": "female",
      "specialization": "psychiatrist",
      "ticketPrice": 1800,
      "about": "I provide compassionate care for individuals dealing with mental health issues.",
     " isApproved": "pending",
      "qualification": [
        {
          "startDate": "2006-01-15",
          "endDate": "2011-05-30",
          "degree": "MD",
          "university": "Yale School of Medicine",
          "id": 1
        }
      ],
      "experience": [
        {
          "startDate": "2011-07-01",
          "endDate": "2020-09-30",
          "position": "Psychiatrist",
          "hospital": "MindWell Clinic",
          "id": 1
        }
      ],
      "timeSlots": [
        {
          "day": "monday",
          "startingTime": "10:00",
          "endingTime": "14:00",
          "id": 1
        },
      ]
    },
    {
      "name": "Dr. William Chen",
      "email": "williamchen@example.com",
      "password": "$2b$10$S2ak4QVnDKkcVvK5eQqrgOCGZgy8aCBsE0XCXRU42C0wj1XEDRma6",
      "photo": "https://i.ibb.co/5vBd3SN/doctor-img01.png",
      "phone": "3334567890",
      "bio": "I specialize in oncology and am dedicated to cancer treatment and research.",
      "gender": "male",
      "specialization": "oncologist",
      "ticketPrice": 2500,
      "about": "My aim is to provide the best possible care for cancer patients.",
     " isApproved": "pending",
      "qualification": [
        {
          "startDate": "2008-08-05",
          "endDate": "2013-11-18",
          "degree": "MD",
          "university": "MD Anderson Cancer Center",
          "id": 1
        }
      ],
      "experience": [
        {
          "startDate": "2014-01-01",
          "endDate": "2022-03-25",
          "position": "Oncologist",
          "hospital": "Hope Cancer Institute",
          "id": 1
        }
      ],
      "timeSlots": [
        {
          "day": "tuesday",
          "startingTime": "08:00",
          "endingTime": "12:00",
          "id": 1
        }        
    ] ,
}]