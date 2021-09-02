// Dates and times are in ISO 8601 extended format: https://dencode.com/en/date/iso8601
// • ISO 8601 explanation 1: https://css-tricks.com/everything-you-need-to-know-about-date-in-javascript/
// • ISO 8601 explanation 2: https://thenextweb.com/news/how-to-manipulate-date-and-time-in-javascript


// Unformatted example:         'June 1, 2021, 11:00 am, EDT'    
// ISO 8601 extended format:    '2021-06-01T11:00:00-04:00'
// ISO 8601 with week number:   '2021-W22-2T11:00:00-04:00'      


// Basic Breakdown of ISO 8601 extended format:
// • YYYY-MM-DDTHH:mm:ss.sssZ
// • YYYY: year
// • MM: month                  (1 to 12)
// • DD: date                   (1 to 31)
// • HH: hour in 24-hour format (0 to 23)
// • mm: minutes                (0 to 59)
// • ss: seconds                (00 to 59)
// • sss: milliseconds          (0 to 999)
// • T is used to separate the date and time in the string
// • If Z is present, the time is assumed to be in UTC. Otherwise, it assumes the local time.
// • However, if T and Z are not present, the string’s created date may give different results in different browsers. 
// • In the above case, to always have the same timezone for the date, add +HH:mm or -HH:mm to the end.

// • If W is present, 'W(#)' is the week number. The number before 'T' means Day (#) of that week, starting on Monday and ending on Sunday. June 1, 2021 falls on a Tuesday, which is Day 2 of that week.


// This site was used to convert date and time into ISO 8601 extended format: https://dencode.com/en/date/iso8601
// For every event, millisecond value is omitted (the dencode.com site never included them).
// If an event has no time/TBD, the default start is 12:00 am and the default end is 11:59 pm.
// Most, but not all, events are in Eastern Time, so time zone is always indicated for each event.
// Time Zone City Search: https://www.timeanddate.com/time/zone/


// 'Category' and 'Image' attributes are completely optional, and we may not need ISO 8601 format.
// • Current category types: 'art', 'rally', 'aapi businesses', 'food', 'safety', 'lgbtq', 'festival', 'virtual', 'awards' 
// • Images are in 1:1 square aspect ratio, 800 x 800 pixels.


// See comments for unformatted dates and times.

export default [
// Event id 1: Starts April 10 2021, Ends October 31 2021 (Sunday)
// Sunday to Friday Hours: 10:00 am to 6:00 pm. Saturdays: 10:00 am to 9:00 pm.
// EST/EDT (Eastern Daylight Time, currently 4 hours behind UTC time (5 hours when daylight savings ends).
// With Week Number: 
// startDate: '2021-W14-6T10:00:00-04:00',
// endDate: '2021-W43-7T18:00:00-04:00', 
    {
        id: '1',
        title: 'Kusama: Cosmic Nature',
        description: 'Contemporary Japanese artist Yayoi Kusama is one of the most popular artists in the world, drawing millions to experience her immersive installations.\n Exclusively at the New York Botanical Garden, Kusama reveals her lifelong fascination with the natural world, beginning with her childhood spent in the greenhouses and fields of her family’s seed nursery. Her artistic concepts of obliteration, infinity, and eternity are inspired by her intimate engagement with the colors, patterns, and life cycles of plants and flowers.',
        location: 'New York Botanical Garden\n 2900 Southern Boulevard\n Bronx, NY 10458-5126',
        category: 'art',
        startDate: '2021-04-10T10:00:00-04:00',
        endDate: '2021-10-31T18:00:00-04:00',
        url: 'https://www.nybg.org/event/kusama/',
        image: 'https://res.cloudinary.com/dn1e07eul/image/upload/v1622421100/SAL%20Events/event01_h2htjj.png'
    },

// Event id 2: June 20 2021: 12:00 pm to 3:00 pm.
// With Week Number: 
// startDate: '2021-W24-7T12:00:00-04:00',
// endDate: '2021-W24-7T15:00:00-04:00',
    {
        id: '2',
        title: 'Voting is Justice AAPI Rally',
        description: 'Join us June 20th in Manhattan for our Voting is Justice Rally - advocating for the safety of our communities by calling for power through voting. At each of these rallies, we will unveil a permanent mural in each neighborhood to commemorate the victims of the hate crimes which have viciously targeted the most vulnerable in our communities including elders and women.',
        location: 'Division Plaza\n 1-3 Eldridge St\n New York, NY 10002',
        category: 'rally',
        startDate: '2021-06-20T12:00:00-04:00',
        endDate: '2021-06-20T15:00:00-04:00',
        url: 'https://www.eventbrite.com/e/voting-is-justice-aapi-rally-tickets-155651743555',
        image: 'https://res.cloudinary.com/dn1e07eul/image/upload/v1622421107/SAL%20Events/event02_sibtz3.png'
    },

// Event id 3: 
// Starts June 5 2021 at 11:00 am. 
// Ends June 6 2021 at 6:00 pm.
// With Week Number: 
// startDate: '2021-W22-6T11:00:00-04:00,
// endDate: '2021-W22-7T18:00:00-04:00',
    {
        id: '3',
        title: 'Asian Creatives & Entrepreneurs (ACE) Pop-Up Event',
        description: 'Asian Creatives & Entrepreneurs (ACE) is a collective that strives to connect independent creatives and consumers with an emphasis on supporting emerging AAPI creatives and small businesses.\n ACE Pop Up Event is a project inspired by an idea to bring the artistic efforts of local and national AAPI creative and entrepreneurial communities together under one roof.',
        location: '27 Greene Street\n New York, NY 10013',
        category: ['aapi businesses', 'art'],
        startDate: '2021-06-05T11:00:00-04:00',
        endDate: '2021-06-06T18:00:00-04:00',
        url: 'https://www.eventbrite.com/e/asian-creatives-entrepreneurs-ace-pop-up-event-tickets-153871368405',
        image: 'https://res.cloudinary.com/dn1e07eul/image/upload/v1622421113/SAL%20Events/event03_lhset2.png'
    },

// Event id 4: June 5 2021: 3:00 pm to 10:00 pm. 
// PST/PDT (Currently Pacific Daylight Time, 3 hours behind NYC).
// startDate: '2021-W22-6T15:00:00-07:00',
// endDate: '2021-W22-6T22:00:00-07:00',
    {
        id: '4',
        title: 'An AAPI Social Art Exhibition',
        description: 'Lips Uncurled, Eyes Forward (LUEF) is a grassroots social art exhibition that focuses on presenting Asian American Pacific Islander (AAPI) narratives across multiple platforms to tackle asian stereotypes, stigmas, and agency. This year features the intergenerational stories of AAPI women artists, poets, community and mental wellness leaders.',
        location: 'Art Object\n 592 North 5th Street\n San Jose, CA 95112',
        category: 'art',
        startDate: '2021-06-05T15:00:00-07:00',
        endDate: '2021-06-05T22:00:00-07:00',
        url: 'https://www.eventbrite.com/e/lips-uncurled-eyes-forward-an-aapi-social-art-exhibition-tickets-154795624881',
        image: 'https://res.cloudinary.com/dn1e07eul/image/upload/v1622421120/SAL%20Events/event04_tpkawe.png'
    },

// Event id 5: June 11 2021: 8:00 pm to 11:00 pm.
// startDate: '2021-W23-5T20:00:00-04:00',
// endDate: '2021-W23-5T23:00:00-04:00',
    {
        id: '5',
        title: 'Chinatown Nights',
        description: 'Think!Chinatown (T!C) is kicking off a new summer series of art and food at the iconic gateway of the Manhattan Bridge. This new open-air cultural festival will debut an art installation lightbox showcasing Chinatown-focused programming alongside local street food vendors.  “Chinatown Nights” is presented in partnership with Neighborhoods Now and Asian Americans for Equality (AAFE).',
        location: 'Forsyth Plaza\n 28 Forsyth Street\n New York, NY 10002',
        category: ['art', 'food'],
        startDate: '2021-06-11T20:00:00-04:00',
        endDate: '2021-06-11T23:00:00-04:00',
        url: 'https://www.eventbrite.com/e/chinatown-nights-tickets-153588652795?aff=ebdssbdestsearch',
        image: 'https://res.cloudinary.com/dn1e07eul/image/upload/v1622421127/SAL%20Events/event05_j7qnvw.png'
    },

// Event id 6: 
// Starts May 20 2021 at 6:00 pm. 
// Ends June 3 2021 at 6:00 pm.
// With Week Number: 
// startDate: '2021-W20-4T18:00:00-04:00',
// endDate: '2021-W22-4T18:00:00-04:00',
    {
        id: '6',
        title: 'The Push Exhibition',
        description: 'Featuring 12 artists from America, Canada, China, Japan and more, The Push curated artists from different cultural and professional backgrounds with aims to embrace the lives and stories of AAPI groups with diverse perspectives and restore respect through understanding.',
        location: '507 West 27th Street\n New York, NY 10001',
        category: 'art',
        startDate: '2021-05-20T18:00:00-04:00',
        endDate: '2021-06-03T18:00:00-04:00',
        url: 'https://www.eventbrite.com/e/the-push-exhibition-tickets-154767514803?aff=ebdssbdestsearch',
        image: 'https://res.cloudinary.com/dn1e07eul/image/upload/v1622421133/SAL%20Events/event06_z2goab.png'
    },

// Event id 7: June 12 2021: 1:00 pm to 3:00 pm.
// With Week Number: 
// startDate: '2021-W23-6T13:00:00-04:00',
// endDate: '2021-W23-6T15:00:00-04:00',
    {
        id: '7',
        title: 'Nourishing Our Roots: Healing for Our Future',
        description: 'Join us as we unveil In The Future our Asian Community is Safe, a mural in the heart of Chinatown by Jess X. Snow, imagining a future where we transcend white supremacy and anti-Asian violence made possible by The W.O.W. Project and Smithsonian APA Center. Through performances by NY-based poets, musicians, and healers, we will ground the mural’s intention of creating a healing space for the AAPI community locally as we prepare to build the mural’s digital space through augmented reality.',
        location: 'Mott St. and Mosco St.\n 11 Mosco St.\n New York, NY 10013',
        category: 'art',
        startDate: '2021-06-12T13:00:00-04:00',
        endDate: '2021-06-12T15:00:00-04:00',
        url: 'https://www.eventbrite.com/e/nourishing-our-roots-healing-for-our-future-tickets-157093794769?aff=ebdssbdestsearch',
        image: 'https://res.cloudinary.com/dn1e07eul/image/upload/v1622596070/SAL%20Events/event07_lwbbfr.png'
    },

// Event id 8: June 20 2021: 1:00 pm to 3:00 pm.
// With Week Number: 
// startDate: '2021-W24-7T13:00:00-04:00',
// endDate: '2021-W24-7T15:00:00-04:00',
    {
        id: '8',
        title: 'Nourishing Our Roots: Seeding Our Rituals',
        description: 'Artist and activist, Tomie Arai, unveils her collaboration with The W.O.W. Project as part of our Met Museum Civic Practice Partnership Residency. Tomie has created ritual ceramic vessels adorned with imagery of a parade of Asian women, queer, and trans people depicting a world where we are celebrated. Nourishing Our Roots: Seeding Rituals, will activate these vessels and invite the Chinatown community and greater public to create our own parade, celebrating the women, queer, and trans-led space The W.O.W. Project has cultivated and nourished in its 5 years.',
        location: 'Wing On Wo & Co.\n 26 Mott St\n New York, NY 10013',
        category: 'art',
        startDate: '2021-06-20T13:00:00-04:00',
        endDate: '2021-06-20T15:00:00-04:00',
        url: 'https://www.eventbrite.com/e/nourishing-our-roots-seeding-our-rituals-tickets-157094268185?aff=ebdssbdestsearch',
        image: 'https://res.cloudinary.com/dn1e07eul/image/upload/v1622596269/SAL%20Events/event08_ibdgzr.png'
    },

// Event id 9: June 5 2021: 6:00 pm to 9:30 pm. 
// CST/CDT (Currently Central Daylight Time, 1 hour behind NYC).
// With Week Number: 
// startDate: '2021-W22-6T18:00:00-05:00',
// endDate: '2021-W22-6T21:30:00-05:00',
    {
        id: '9',
        title: 'AAPI Amplified',
        description: 'Join Houston First Corporation on June 5th as we amplify the voices of the Asian American Pacific Islander community. HFC will celebrate and support Houston’s vibrant AAPI communities with an evening of traditional and contemporary musical and dance performances, an Asian-inspired fashion show and an outdoor market featuring local AAPI-owned businesses, artisans and chefs. The event is free and open to the public.\n The night will close with a one-of-a-kind fashion show featuring Houston-based lines: Danny Nguyen Couture, Kimono Zulu, Mysterious by NPN and Poshak Fashion & Style.',
        location: 'George R. Brown Convention Center\n 1001 Avenida De Las Americas\n Houston, TX 77010',
        category: ['art', 'aapi businesses'],
        startDate: '2021-06-05T18:00:00-05:00',
        endDate: '2021-06-05T21:30:00-05:00',
        url: 'https://www.visithoustontexas.com/event/aapi-amplified/85746/',
        image: 'https://res.cloudinary.com/dn1e07eul/image/upload/v1622421149/SAL%20Events/event09_gp7xny.png'
    },

// Event id 10: June 5 2021: 2:00 pm to 3:30 pm.
// PST/PDT (Currently Pacific Daylight Time, 3 hours behind NYC).
// With Week Number: 
// startDate: '2021-W22-6T14:00:00-07:00',
// endDate: '2021-W22-6T15:30:00-07:00',
    {
        id: '10',
        title: 'Self Defense Seminar in support of the AAPI community',
        description: 'We want to present this seminar in support of the Asian American and Pacific Islander Communities (AAPI).\n During this 90-minute interactive training, you’ll learn how to protect yourself in a safe, supportive and empowered environment.',
        location: 'Guardian Gym\n 3109 Adeline Street\n Oakland, CA 94608',
        category: 'safety',
        startDate: '2021-06-05T14:00:00-07:00',
        endDate: '2021-06-05T15:30:00-07:00',
        url: 'https://www.eventbrite.com/e/self-defense-seminar-in-support-of-the-aapi-community-tickets-156013846615',
        image: 'https://res.cloudinary.com/dn1e07eul/image/upload/v1622421155/SAL%20Events/event10_jvvbge.png'
    },

// Event id 11: June 11 2021: 11:00 am to 11:00 pm. 
// Grand Rapids, MI has same time zone as NYC (EDT: Easter Daylight Time).
// With Week Number: 
// startDate: '2021-W23-5T11:00:00-04:00',
// endDate: '2021-W23-6T23:00:00-04:00',
    {
        id: '11',
        title: 'Grand Rapids Asian-Pacific Festival',
        description: 'This family-friendly event is a celebration of all things Asian-Pacific and will feature Asian-Pacific food, drinks, and performances. Free to attend. Everyone is welcome!',
        location: 'Calder Plaza\n 300 Monroe Ave NW\n Grand Rapids, MI 49503',
        category: 'festival',
        startDate: '2021-06-11T11:00:00-04:00',
        endDate: '2021-06-12T23:00:00-04:00',
        url: 'https://grasianfestival.com/',
        image: 'https://res.cloudinary.com/dn1e07eul/image/upload/v1622596911/SAL%20Events/event11_moaquh.png'
    },

// Event id 12: June 18 2021: 10:00 pm to 11:30 pm.
// With Week Number: 
// startDate: '2021-W24-5T22:00:00-04:00',
// endDate: '2021-W24-5T23:30:00-04:00',
    {
        id: '12',
        title: 'Lotus Lounge',
        description: 'Started as a concept in the same building when the building was “12th Air Command”, this show is solely for the purpose of creating space for AAPI drag queens to turn it out for a sickening drag show that represents inclusivity and awareness. Occurs every third Friday.',
        location: 'Tabu Lounge & Sports Bar\n 254 South 12th Street\n Philadelphia, PA 19107',
        category: 'lgbtq',
        startDate: '2021-06-18T22:00:00-04:00',
        endDate: '2021-06-18T23:30:00-04:00',
        url: 'https://www.eventbrite.com/e/lotus-lounge-tickets-153405563169?aff=ebdssbdestsearch',
        image: 'https://res.cloudinary.com/dn1e07eul/image/upload/v1622421166/SAL%20Events/event12_ojesqk.png'
    },

// Event id 13: June 25 2021: 7:00 pm to 8:30 pm.
// With Week Number: 
// startDate: '2021-W25-5T19:00:00-04:00',
// endDate: '2021-W25-5T20:30:00-04:00',
    {
        id: '13',
        title: 'AN ASIAN AMERICAN FILM THING',
        description: 'AN ASIAN AMERICAN FILM THING is a celebration of Asian- American filmmakers by screening their shorts (films! Not pants!) There will be an array of narrative fiction, docs, animation, music videos, sketches, and experimental films. You will also get to hear what the filmmakers have to say about their work. AND, there will be a musical treat at the end! PARTYYYYY!!!! We want to focus on shorts that show Asian- Americans in power, in a light that Hollywood usually never portrays us in. This night will explore Identity and the power of visual storytelling. Hosted by Angel Yau and Kate Moran Musical Guest: Dylan Adler.',
        location: 'Caveat\n 21 A Clinton Street\n New York, NY 10002',
        category: 'art',
        startDate: '2021-06-25T19:00:00-04:00',
        endDate: '2021-06-25T20:30:00-04:00',
        url: 'https://www.eventbrite.com/e/asian-american-film-thing-tickets-154295478931?aff=ebdssbdestsearch',
        image: 'https://res.cloudinary.com/dn1e07eul/image/upload/v1622421170/SAL%20Events/event13_d1a2wu.png'
    },

// Event id 14: June 13 2021: 2:00 pm to 5:00 pm.
// With Week Number: 
// startDate: '2021-W23-7T14:00:00-04:00',
// endDate: '2021-W23-7T17:00:00-04:00',
    {
        id: '14',
        title: 'Dragon Boat Festival',
        description: 'Come join us as we celebrate Asian American culture. Featuring live performances, song, dance, calligraphy shows, and more!',
        location: 'Kelly Park Playground\n East 15th Street\n Brooklyn, NY 11229',
        category: 'festival',
        startDate: '2021-06-13T14:00:00-04:00',
        endDate: '2021-06-13T17:00:00-04:00',
        url: 'https://www.eventbrite.com/e/dbf-tickets-156801029099?aff=ebdssbdestsearch',
        image: 'https://res.cloudinary.com/dn1e07eul/image/upload/v1622421249/SAL%20Events/event14_xsgaqu.png'
    },

// Event id 15: August 7 to August 8, 2021: Times TBD.
// With Week Number: 
// startDate: '2021-W31-6T00:00:00-04:00',
// endDate: '2021-W31-7T23:59:00-04:00',
    {
        id: '15',
        title: 'Hong Kong Dragon Boat Festival',
        description: 'HKDBF-NY, an international, multi-cultural celebration and sporting event, the largest multicultural Festival in New York and the largest festival of its kind in the U.S. HKDBF-NY keeps up the age old tradition of Dragon Boat Racing in colorful, custom made teak boats, which are virtual works of art gliding on water. Custom made by a small coterie of craftsmen in Hong Kong, weighing one ton each, colorfully painted with a Dragon head at the front and Dragon tail at the rear, the boats are piloted by up to 20 crewmen, including 18 paddlers, a drummer and steers person.',
        location: 'Flushing Meadows Corona Park\n Between Grand Central Pkwy and Van Wyck Expy, NY 11354',
        category: 'festival',
        startDate: '2021-08-07T00:00:00-04:00',
        endDate: '2021-08-08T23:59:00-04:00',
        url: 'https://www.hkdbf-ny.org/',
        image: 'https://res.cloudinary.com/dn1e07eul/image/upload/v1622421313/SAL%20Events/event15_wouhkl.png'
    },

// Event id 16: August 11 to August 22, 2021. Times TBD.
// With Week Number: 
// startDate: '2021-W32-3T00:00:00-04:00',
// endDate: '2021-W33-7T23:59:00-04:00',
    {
        id: '16',
        title: 'Asian American International Film Festival',
        description: 'This year’s festival will be from August 11-22, in the form of a hybrid festival: virtual with in-person events in NYC with safety protocols in-mind.',
        location: 'Hybrid virtual and in-person event in Manhattan, NY',
        category: ['art', 'virtual'],
        startDate: '2021-08-11T00:00:00-04:00',
        endDate: '2021-08-22T23:59:00-04:00',
        url: 'https://filmfreeway.com/aaiff44',
        image: 'https://res.cloudinary.com/dn1e07eul/image/upload/v1622421384/SAL%20Events/event16_ffg3xd.png'
    },

// Event id 17: October 28 2021: 8:00 pm to 9:30 pm.
// With Week Number: 
// startDate: '2021-W43-4T20:00:00-04:00',
// endDate: '2021-W43-4T21:30:00-04:00',
    {
        id: '17',
        title: '2021 Asia Game Changer Awards',
        description: 'The Asia Society will honor path-breaking Asian Americans who are making a transformative impact on society, for its 2021 Asia Game Changer Awards.\n This year’s event is being planned as a virtual event with guests and participants joining from around the world, with the possibility of an in-person gathering at Cipriani Wall Street depending on safety guidelines and considerations closer to the event. ​',
        location: 'Virtual event in New York, NY',
        category: ['virtual', 'awards'],
        startDate: '2021-10-28T20:00:00-04:00',
        endDate: '2021-10-28T21:30:00-04:00',
        url: 'https://asiasociety.org/new-york/events/2021-asia-game-changer-awards',
        image: 'https://res.cloudinary.com/dn1e07eul/image/upload/v1622421390/SAL%20Events/event17_u2gynk.png'
    },

// Event id 18: June 11 2021: 7:30 pm to 9:00 pm.
// With Week Number: 
// startDate: '2021-W23-5T19:30:00-04:00',
// endDate: '2021-W23-5T21:00:00-04:00',
    {
        id: '18',
        title: '2021 CrossCurrent Contemporary Dance Virtual Festival',
        description: 'A celebration of the vibrant and diverse Asian American contemporary dance in the New York metropolitan area. Produced by Nai-Ni Chen and presented by Flushing Town Hall, the virtual festival, in its 7 th season, brings together some of the best and the most creative contemporary dance choreographers in the New York Asian American Community, showcasing new works followed by artist discussion with Nai-Ni Chen.',
        location: 'Virtual event streaming live from Flushing Town Hall, Queens, NY',
        category: ['art', 'virtual'],
        startDate: '2021-06-11T19:30:00-04:00',
        endDate: '2021-06-11T21:00:00-04:00',
        url: 'https://flushingtownhall.org/2021-crosscurrent',
        image: 'https://res.cloudinary.com/dn1e07eul/image/upload/v1622421397/SAL%20Events/event18_fc3pq9.png'
    },

// Event id 19: June 23 2021: 12:00 to 1:00 pm.
// With Week Number: 
// startDate: '2021-W25-3T12:00:00-04:00',
// endDate: '2021-W25-3T13:00:00-04:00',
    {
        id: '19',
        title: 'BRILLIANT BOBA: AMPLIFYING ASIAN VOICES',
        description: 'How can the arts help heal? This discussion, led by Brilliant Boba, a team composed of storytellers, artists, and educators in New Haven, will provide attendees with creative resources that build intercultural empathy and social emotional skills.\n This event will be streamed live on Facebook Live, YouTube, Twitch, and our Virtual Stage.\n This event will be ASL interpreted. Captions will be available on Facebook Live.',
        location: 'Virtual Event streaming live on Facebook Live, YouTube, and Twitch',
        category: ['virtual', 'art'],
        startDate: '2021-06-23T12:00:00-04:00',
        endDate: '2021-06-23T13:00:00-04:00',
        url: 'https://www.artidea.org/event/2021/4465?fbclid=IwAR3-gRgEttJfpJrJJJpADIhFxD20OkCjo2LLGyngcO5QgS9DE0mI4M0AP7Y',
        image: 'https://res.cloudinary.com/dn1e07eul/image/upload/v1622421403/SAL%20Events/event19_shb1dq.png'
    },

// Event id 20: June 12 2021: 11:00 am to 4:00 pm.
// PST/PDT (Currently Pacific Daylight Time, 3 hours behind NYC).
// With Week Number: 
// startDate: '2021-W23-6T11:00:00-07:00',
// endDate: '2021-W23-6T16:00:00-07:00',
    {
        id: '20',
        title: 'AAPI Heritage Day',
        description: 'An public cultural event highlighting Asian American and Pacific Islander (AAPI) history, culture, and the arts, held on CenterPlace’s west lawn plaza. The event features AAPI vendors and artists, along with invited local community leaders to raise awareness and showcase AAPI community members and cultures. AAPI Heritage Day also includes an art show, a variety of cultural performances, 50+ vendors, activities for all ages and food by Island Style Food Truck.',
        location: 'CenterPlace Regional Event Center\n 2426 N. Discovery Place Dr.\n Spokane Valley, WA 99214',
        category: ['art', 'food'],
        startDate: '2021-06-12T11:00:00-07:00',
        endDate: '2021-06-12T16:00:00-07:00',
        url: 'https://www.inlander.com/spokane/aapi-heritage-day/Event?oid=21726696',
        image: 'https://res.cloudinary.com/dn1e07eul/image/upload/v1622507488/SAL%20Events/event20_tmane6.png'
    }
]


// TEMPLATE for new event listings
//     {
//         id: '',
//         title: '',
//         description: '',
//         location: '',
//         category: '',
//         startDate: '',
//         endDate: '',
//         url: '',
//         image: ''
//     }