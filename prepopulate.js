const colleges = [
  {
    "name": "Harvard University",
    "url": "https://www.harvard.edu/",
    "location": "3 Oxford St, Cambridge, MA 02138",
    "photo": "https://www.harvard.edu/wp-content/uploads/2021/02/091520_Stock_KS_025-1200x630.jpeg",
    "phoneNumber": "(617) 495-1000",
    "description": "Harvard University is a private Ivy League research university located in Cambridge, Massachusetts. Established in 1636 and named for its first benefactor, clergyman John Harvard, it is the oldest institution of higher education in the United States. The university has a diverse student body, with over 6,700 undergraduate students and over 14,000 postgraduate students from all 50 states and more than 150 countries. Harvard offers undergraduate, graduate, and professional degree programs in a wide range of fields, including law, medicine, business, engineering, and the arts and sciences. It is known for its rigorous academic standards, distinguished faculty, and notable alumni, including eight U.S. presidents and over 150 Nobel laureates."
  },
  {
    "name": "Massachusetts Institute of Technology",
    "url": "https://www.mit.edu/",
    "location": "77 Massachusetts Ave, Cambridge, MA 02139",
    "photo": "https://www.mit.edu/files/images/201807/15656704711_00457bd2c9_b_1.jpg",
    "phoneNumber": "(617) 253-1000",
    "description": "The Massachusetts Institute of Technology (MIT) is a prestigious private research university located in Cambridge, Massachusetts, United States. Established in 1861, MIT has produced many renowned scientists, engineers, and entrepreneurship leaders. The university offers undergraduate, graduate, and post-graduate courses in engineering, computing, physical sciences, economics, social sciences, management, and humanities. MIT is known for its rigorous academics, cutting-edge research, and innovative educational programs. The campus is home to many research centers, labs, and facilities, including the MIT Media Lab, MIT Sloan School of Management, and the MIT Nuclear Reactor Laboratory. MIT has a diverse and global student community and is ranked consistently among the top universities in the world."
  },
  {
    "name": "California Institute of Technology",
    "url": "https://www.caltech.edu/",
    "location": "1200 E California Blvd, Pasadena, CA 91125",
    "photo": "https://s2.research.com/wp-content/uploads/2020/08/24120356/caltech-01WP-1-1200x600.jpg",
    "phoneNumber": "(626) 395-6811",
    "description": "California Institute of Technology (Caltech) is a private research university located in Pasadena, California. It was founded in 1891 and is consistently ranked as one of the top universities in the world. Caltech focuses on science and engineering research and education, with major fields including physics, biology, chemistry, earth sciences, computer science, and engineering. The student body is small, with only about 2,200 undergraduate and graduate students, and the university has a strong emphasis on research, with faculty and students conducting cutting-edge work in a wide range of fields. Caltech is also known for its strong tradition of innovation, with contributions to fields such as space exploration, computing, and robotics."
  },
  {
    "name": "Rensselaer Polytechnic Institute",
    "url": "https://www.rpi.edu/",
    "location": "110 8th St, Troy, NY 12180",
    "photo": "https://www.usnews.com/dims4/USNEWS/d757838/17177859217/resize/800x540%3E/quality/85/?url=https%3A%2F%2Fwww.usnews.com%2Fcmsmedia%2F62%2Fdf%2F97c02641404cbda594288dcae2f3%2Forigstudentconnect-college.jpg",
    "phoneNumber": "(518) 276-6000",
    "description": "Rensselaer Polytechnic Institute, also known as RPI, is a private research university located in Troy, New York. Founded in 1824, RPI has a focus on science, technology, engineering, and mathematics (STEM) education and research. The university offers undergraduate and graduate degree programs in various fields including engineering, science, architecture, management, and social sciences. RPI is known for its strong research programs in areas such as biotechnology, nanotechnology, and game design, and has many notable alumni including inventor David Mix Barrington, astronaut David M. Brown, and entrepreneur Eric Lefkofsky."
  },
  {
    "name": "University of California, Berkeley",
    "url": "https://www.berkeley.edu/",
    "location": "Berkeley, CA",
    "photo": "https://www.tclf.org/sites/default/files/thumbnails/image/CA_Berkeley_UniversityOfCaliforniaAtBerkeley_byCharlieNguyen-Flickr_2008_001_Sig.jpg",
    "phoneNumber": "(510) 642-6000",
    "description": "The University of California, Berkeley is a public research university located in Berkeley, California. It is the oldest of the ten campuses in the University of California system and is widely considered to be one of the best public universities in the world. Berkeley has a diverse student body and offers over 350 undergraduate and graduate degree programs across various fields, including engineering, sciences, humanities, social sciences, and business. The university is known for its research contributions and accomplishments across a wide range of disciplines, including physics, chemistry, biology, computer science, and economics. Berkeley has a rich history of student activism and social justice movements, and its campus is home to many renowned cultural institutions and landmarks."
  },
  {
    "name": "Stanford University",
    "url": "https://www.stanford.edu/",
    "location": "450 Serra Mall, Stanford, CA 94305",
    "photo": "https://imageio.forbes.com/specials-images/imageserve/43f135dd92ff5c5d8c4b626d9c12f560/0x0.jpg?format=jpg&height=345&width=700&fit=bounds",
    "phoneNumber": "(650) 723-2300",
    "description": "Stanford University is a private research university located in Stanford, California. Founded in 1885, Stanford is known for its academic excellence, research achievements, and entrepreneurship. The university is home to seven schools, including the School of Humanities and Sciences, the School of Engineering, and the Graduate School of Business, among others. Stanford has a diverse student population and offers undergraduate, graduate, and professional degree programs. The university also has numerous research opportunities and partnerships with industry leaders, making it a hub for innovation and discovery. Stanford has produced numerous Nobel laureates, entrepreneurs, and leaders in various fields, making it one of the most prestigious universities in the world."
  },
  {
    "name": "University of Arizona",
    "url": "https://www.arizona.edu/",
    "location": "Tucson, AZ",
    "photo": "https://media.beam.usnews.com/eb/826966db86f227d97af8db57db3cc3/20130218-A020_C010_20130218_B00000-2-Enhanced.jpg",
    "phoneNumber": "(520) 621-2211",
    "description": "The University of Arizona is a public research university located in Tucson, Arizona. It was founded in 1885 and is the state's oldest university. The University of Arizona offers undergraduate and graduate programs in a variety of fields, including business, engineering, education, law, medicine, and the arts. The university is well-known for its strong programs in astronomy, agriculture, and environmental studies. It has a diverse student population and is recognized as a Hispanic-Serving Institution. The university's athletic teams are known as the Arizona Wildcats and compete in the Pac-12 conference."
  },
  {
    "name": "University of California, Los Angeles",
    "url": "https://www.ucla.edu/",
    "location": "Los Angeles, CA",
    "photo": "https://apru.org/wp-content/uploads/2021/12/UCLA.jpeg",
    "phoneNumber": "(310) 825-4321",
    "description": "The University of California, Los Angeles (UCLA) is a public research university located in Los Angeles, California. It was founded in 1919 and is part of the University of California system. UCLA has a diverse student body of over 44,000 undergraduate and graduate students from all over the world. The university offers nearly 130 undergraduate majors and over 150 graduate programs in various fields, including the arts, sciences, business, and engineering. UCLA is known for its academic excellence, cutting-edge research, and vibrant campus life. It has produced numerous Nobel laureates, MacArthur Fellows, and other distinguished scholars, innovators, and leaders."
  },
  {
    "name": "Harvey Mudd College",
    "url": "https://www.hmc.edu/",
    "location": "301 Platt Blvd, Claremont, CA 91711",
    "photo": "https://www.hmc.edu/about/wp-content/uploads/sites/2/2022/11/news-campus-evening.jpg",
    "phoneNumber": "(909) 621-8011",
    "description": "Harvey Mudd College is a private liberal arts college located in Claremont, California. It was founded in 1955 and has a focus on science, engineering, mathematics, and computer science education. The college is part of the Claremont Colleges consortium and has a small student body of around 900 undergraduate students. Harvey Mudd is known for its rigorous academic program, competitive admissions process, and high graduation rates. The college attracts students who are interested in pursuing careers in STEM fields and has a strong emphasis on research and innovation."
  },
  {
    "name": "Colorado School of Mines",
    "url": "https://www.mines.edu/",
    "location": "1500 Illinois St, Golden, CO 80401",
    "photo": "https://intervarsity.org/sites/default/files/styles/12_banner_940x349/public/mines2pic.jpg?itok=G8YVOHjw",
    "phoneNumber": "(303) 273-3000",
    "description": "The Colorado School of Mines is a public research university located in Golden, Colorado, with a focus on engineering and applied science. The school offers undergraduate, graduate, and doctoral degree programs in various fields such as physics, computer science, mineral and energy economics, geology, petroleum engineering, and environmental science. The Colorado School of Mines has a strong reputation for producing graduates who are highly sought after by employers in the energy, science, and engineering industries. The student body is relatively small, with around 6,000 students enrolled, and there is a strong emphasis on hands-on, experiential learning."
  },
  {
    "name": "Vanderbilt University",
    "url": "https://www.vanderbilt.edu/",
    "location": "2201 West End Ave, Nashville, TN 37235",
    "photo": "https://www.vanderbilt.edu/wp-content/uploads/sites/3/2023/03/523a1534b15176c399cc4696c77e0f45-1200x1800-c-default.jpg",
    "phoneNumber": "(615) 322-7311",
    "description": "Vanderbilt University is a private research university located in Nashville, Tennessee. It was founded in 1873 with a focus on liberal arts education and has since grown to become a top-tier research institution. Vanderbilt offers undergraduate, graduate, and professional degree programs across its ten schools, including the College of Arts and Science, Blair School of Music, School of Engineering, Law School, and School of Medicine. The university has a diverse student body, with approximately 13,000 students from all fifty states and over 100 countries. Its campus boasts historic architecture, modern facilities, and numerous research centers, including the Vanderbilt Institute for Nanoscale Science and Engineering and the Vanderbilt-Ingram Cancer Center. Vanderbilt is also known for its strong athletic programs, with varsity teams competing in the Southeastern Conference (SEC) at the NCAA Division I level."
  },
  {
    "name": "University of Connecticut",
    "url": "https://uconn.edu/",
    "location": "Storrs, CT 06269",
    "photo": "https://images.shiksha.com/mediadata/images/1533729026phpFQCKnz.jpeg",
    "phoneNumber": "(860) 486-4900",
    "description": "The University of Connecticut (UConn) is a public research university located in Storrs, Connecticut. It was founded in 1881 and offers undergraduate and graduate degrees in a wide range of disciplines, including business, education, engineering, humanities, social sciences, and natural sciences. UConn is known for its strong focus on research and innovation, with active partnerships with industry, government agencies, and non-profits. The university has a highly competitive athletic program, with Division I sports teams known as the Huskies that have won dozens of national championships. With more than 32,000 students and a flagship campus spanning over 4,000 acres, UConn is one of the largest universities in New England and a highly respected institution of higher education."
  },
  {
    "name": "Yeshiva University",
    "url": "https://www.yu.edu/",
    "location": "500 W 185th St, New York, NY 10033",
    "photo": "https://www.usnews.com/dims4/USNEWS/c0f31de/17177859217/resize/800x540%3E/quality/85/?url=https%3A%2F%2Fmedia.beam.usnews.com%2Fe3%2F41c7e02ad279e22acaf436ea2d9630%2Fcollege-photo_12207.jpg",
    "phoneNumber": "(212) 960-5400",
    "description": "Yeshiva University is a private university located in New York City with a large Jewish student population. It offers undergraduate and graduate programs in various disciplines, including liberal arts, sciences, and professional fields such as law, medicine, and business. The university also has several affiliated schools and institutions, such as the Albert Einstein College of Medicine and the Benjamin N. Cardozo School of Law. Yeshiva University is known for its commitment to Jewish tradition and values and its emphasis on combining academic excellence with religious and ethical principles."
  },
  {
    "name": "Fordham University",
    "url": "https://www.fordham.edu/",
    "location": "Bronx, NY 10458",
    "photo": "https://pxl-fordhamedu.terminalfour.net/fit-in/2000x1333/prod01/channel_2/media/home/admin-use-only/university-news/news-banner-for-homepage/background/eddys1.jpg",
    "phoneNumber": "(718) 817-1000",
    "description": "Fordham University is a private Jesuit research university located in New York City. It was founded in 1841 and offers undergraduate, graduate, and professional degree programs in various fields such as law, business, social sciences, humanities, and sciences. The university has three campuses in the New York City area and is known for its rigorous academic programs, commitment to social justice, and strong alumni network."
  },
  {
    "name": "Yale University",
    "url": "https://www.yale.edu/",
    "location": "New Haven, CT 06520",
    "photo": "https://admissions.yale.edu/sites/default/files/styles/flexslider_full/public/2010_05_10_19_03_37_central_campus_1.jpg?itok=1hVNjje6",
    "phoneNumber": "(203) 432-4771",
    "description": "Yale University is a private Ivy League research university located in New Haven, Connecticut. It was founded in 1701 and is one of the oldest universities in the United States. Yale is known for its rigorous academic programs, world-class faculty, and diverse student body. The university offers undergraduate, graduate, and professional degree programs in a variety of fields, including the arts, humanities, sciences, engineering, and business. Yale's campus is home to numerous historic buildings and landmarks, including the iconic Sterling Memorial Library and the Beinecke Rare Book and Manuscript Library. Yale is also known for its robust extracurricular activities, including various clubs, organizations, and athletic teams."
  },
  {
    "name": "Carnegie Mellon University",
    "url": "https://www.cmu.edu/",
    "location": "5000 Forbes Ave, Pittsburgh, PA 15213",
    "photo": "https://www.cmu.edu/assets/images/site/meta-image-cmu.jpg",
    "phoneNumber": "(412) 268-2000",
    "description": "Carnegie Mellon University is a private research university located in Pittsburgh, Pennsylvania. The university offers undergraduate and graduate programs in various fields including engineering, computer science, business, public policy, humanities, and social sciences. The institution is renowned for its excellence in technology and innovation, and is consistently ranked among the top research universities in the United States. The university is home to various research centers and institutes, and has produced Nobel laureates, Turing Award winners, and successful entrepreneurs. It also has a strong commitment to community service, sustainability efforts, and global collaboration."
  },
  {
    "name": "Emory University",
    "url": "https://www.emory.edu/home/index.html",
    "location": "201 Dowman Dr, Atlanta, GA 30322",
    "photo": "https://www.emory.edu/home/_includes/images/sections/explore/history/0111504-12bm-f122-966x544.jpg",
    "phoneNumber": "(404) 727-6123",
    "description": "Emory University is a private research university located in Atlanta, Georgia. Founded in 1836, it has become one of the top universities in the United States, with over 14,000 students and a diverse academic community. Emory offers undergraduate, graduate, and professional programs across nine schools and colleges, including the College of Arts and Sciences, Goizueta Business School, School of Law, and School of Medicine.  Emory is known for its strong medical programs and partnerships with healthcare institutions such as the Centers for Disease Control and Prevention (CDC) and Emory Healthcare. The university is also committed to community engagement and social justice, with programs and initiatives focused on environmental sustainability, civic engagement, and diversity and inclusion."
  },
  {
    "name": "Georgetown University",
    "url": "https://www.georgetown.edu/",
    "location": "3700 O St NW, Washington, DC 20057",
    "photo": "https://www.georgetowndc.com/wp-content/uploads/2019/07/aaht-healyhall1_48654333031_o-1400x800.jpg",
    "phoneNumber": "(202) 687-0100",
    "description": "Georgetown University is a private research university located in Washington, D.C. It was founded in 1789 and is the oldest Catholic university in the United States. The university is known for its strong programs in international relations, business, law, and public policy. The campus features historic buildings, including the Healy Hall and the famed Georgetown University Library, which houses over 3 million volumes. The school has a diverse student population, with over 7,500 undergraduate and graduate students from all 50 states and more than 130 countries. The university offers more than 100 academic programs, ranging from undergraduate majors and minors to doctoral degrees. Georgetown is also known for its commitment to social justice, with initiatives such as the Georgetown Institute for Women, Peace, and Security and the Center for Social Justice."
  },
  {
    "name": "University of Notre Dame",
    "url": "https://www.nd.edu/",
    "location": "Notre Dame, IN 46556",
    "photo": "https://cdn.britannica.com/51/189951-050-81EDCED8/University-of-Notre-Dame-Indiana.jpg",
    "phoneNumber": "(574) 631-5000",
    "description": "The University of Notre Dame is a private Catholic research university located in South Bend, Indiana. It was founded in 1842 by Rev. Edward Sorin and is known for its strong emphasis on undergraduate education, as well as its postgraduate research and professional programs. The university offers degrees in various disciplines, including engineering, business, law, and the arts and sciences, among others. Its campus features several notable landmarks, including the Main Building with its iconic Golden Dome, the Basilica of the Sacred Heart, and the Notre Dame Stadium, which is home to the Fighting Irish football team. Notre Dame is consistently ranked among the top universities in the United States and has a strong alumni network that includes many successful business, political, and academic leaders."
  },
  {
    "name": "University of Colorado Boulder",
    "url": "https://www.colorado.edu/",
    "location": "Boulder, CO 80309",
    "photo": "https://www.usnews.com/dims4/USNEWS/53fab75/17177859217/resize/800x540%3E/quality/85/?url=https%3A%2F%2Fmedia.beam.usnews.com%2Fb7%2F029f7721431e45fe47d6a961289c63%2FCUBouder_Campuslife1.JPG",
    "phoneNumber": "(303) 492-1411",
    "description": "The University of Colorado Boulder is a public research university located in Boulder, Colorado. It was founded in 1876 and is the flagship university of the University of Colorado System. The university offers over 150 academic programs across nine colleges and schools, ranging from engineering and business to humanities and sciences. In addition to its academic offerings, CU Boulder is known for its strong athletic programs, particularly in skiing and football. The campus is located at the foothills of the Rocky Mountains and provides students with a wide range of outdoor recreation opportunities. CU Boulder has a student population of roughly 35,000 and a faculty of over 4,000."
  },
  {
    "name": "University of New Mexico",
    "url": "https://www.unm.edu/",
    "location": "1 University of New Mexico, Albuquerque NM 87131",
    "photo": "https://s3.amazonaws.com/cms.ipressroom.com/175/files/20198/5d76bea32cfac25e55abafe4_UNM+Lobo+with+Scholes/UNM+Lobo+with+Scholes_hero.jpg",
    "phoneNumber": "(505) 277-8900",
    "description": "The University of New Mexico (UNM) is a public research university located in Albuquerque, New Mexico, United States. Established in 1889, UNM is the flagship institution of higher learning in New Mexico and is the largest university in the state. It offers over 200 undergraduate and graduate degree programs across various fields, such as engineering, business, education, law, medicine, nursing, and the arts. UNM is also home to many research centers and institutes, including the Center for Advanced Research Computing and the Institute for Social Research. With an enrollment of about 25,000 students, UNM is known for its vibrant and diverse community and rich cultural heritage."
  },
  {
    "name": "New Mexico Tech",
    "url": "https://www.nmt.edu/",
    "location": "801 Leroy Pl, Socorro, NM 87801",
    "photo": "https://www.nmt.edu/_resources/img/photos/heroimages/NMTGenericHero.png",
    "phoneNumber": "(575) 835-5133",
    "description": "New Mexico Tech is a public research university located in Socorro, New Mexico. It offers undergraduate and graduate degrees in science, engineering, and technology fields, with an emphasis on research and practical experience. The university is known for its strong programs in physics, engineering, and geology, as well as its proximity to federally-funded research facilities such as the National Radio Astronomy Observatory and the National Solar Observatory. The student body is relatively small, with about 2,000 undergraduate and graduate students, but has a diverse population of students from around the world."
  }
];

let token = "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IktRemwyMjF3RDNKdElrLUZvV1AxViJ9.eyJpc3MiOiJodHRwczovL2Rldi15cmpjNXgyaWxhMjA4NG11LnVzLmF1dGgwLmNvbS8iLCJzdWIiOiJnb29nbGUtb2F1dGgyfDEwODI5MDg1NzcwMzE2MDA1ODY2OCIsImF1ZCI6WyJodHRwczovL3RjZmMudXMudG8vY2NfYXBpIiwiaHR0cHM6Ly9kZXYteXJqYzV4MmlsYTIwODRtdS51cy5hdXRoMC5jb20vdXNlcmluZm8iXSwiaWF0IjoxNjgyODEyMDYyLCJleHAiOjE2ODI4OTg0NjIsImF6cCI6ImZHRWZoUXcyM2NmR05IaFpRU3hkN1ByTEJnYmNrZFk2Iiwic2NvcGUiOiJvcGVuaWQgcHJvZmlsZSBlbWFpbCIsInBlcm1pc3Npb25zIjpbImNvbGxlZ2VBZG1pbiIsInN0dWRlbnQiLCJzdXBlckFkbWluIl19.KvYkAZ1GgpvRyH8TV849aOHQcSfW6SNnkqocmSWtHuJfCpveVPsO3R3ZC7uiT6KVKGNUIX0ciVAQvLHf1ZI8hCitJun2bf-_Ry2qtQOoL0YhQJ3Mk9n-lpuQGAxWA9RAhgCrTtpAtSAl75QzmnHrvZsz-UhoWd9VUtFQR7kggPf4Eg-A3sWV6MycpvGiXBbFXciMIVsu_3zEfseqlkDF5tV2ocr7kWZdUGFtNUsbaX88R0zalQVQMwYqyZDd4woW6tLPLyRtdX1ilYpZmDsU6hbAgBCB-4c6dI5tCdtXN-EauUFuU38JUVC45l2-fsyqsa4Pd3bIDdSM9pi7hq0F6Q"

colleges.forEach((c, i) => {
  setTimeout(() =>
  fetch("http://localhost:8080/superAdmin/college", {
    method: "POST",
    body: JSON.stringify({
      name: c.name,
      url: c.url,
      location: {
        address: c.location,
        latitude: 0.0,
        longitude: 0.0
      },

      phoneNumber: c.phoneNumber,
      description: c.description,

      inStateCost: Math.round(Math.random() * 10000) + 5000,
      outStateCost: Math.round(Math.random() * 10000) + 15000,

      id: null,
      collegeAdmins: [],
      degrees: [],
      photos: [c.photo],
      popularity: 0,
      favoritedByStudents: []
    }),
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    }
  }).then(resp => {
    if (!resp.ok) alert("failed on " + c.name);
  }),
  i * 2000);
});

// delete all colleges
fetch("http://localhost:8080/search/colleges?name=", {
  "headers": {
    "Authorization": token,
  },
  "referrer": "http://localhost:3000/",
  "method": "GET",
  "mode": "cors"
}).then(resp => resp.json()).then(colleges => {
  colleges.forEach(c => {
    fetch("http://localhost:8080/superAdmin/college/" + c.id, {
      method: "DELETE",
      headers: {
        "Authorization": token,
      },
    }).then(resp => resp.json()).then(t => console.log(`${c.name} deleted: ${t}`))
  });
});