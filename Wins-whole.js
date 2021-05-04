
// • Wins-whole.js Database: ONE export default. 

// • One export default with 5 sub-categories: Art, AAPI Heritage Month, Contributions, Representation, Cultural Centers

// • The "image" attribute is in 4:3 aspect ratio, landscape orientation.

// • The "portrait" attribute is in 4:3 aspect ratio, portrait orientation. 

// • We may not need "portrait" attribute, but images of people are often in portrait orientation.

// • Optional "location" attribute has been added to Cultural Centers category.

// • Updated Chloé Zhao's entry with Oscar win!

// • Some titles (Morro Bay Landing, Wing Luke Museum) have been shortened for more consistent appearance and dimensions in the Wins page.



export default [
    
// ART CATEGORY
    
    "art" = [{
        "id": 1,
        "title": "East Side Stories",
        "url": "https://www.eastsidestories.org",
        "content": "Dedicated to sharing authentic expressions of the Asian American & Pacific Islander experience through film, media, and education.",
        "image": "https://res.cloudinary.com/dn1e07eul/image/upload/v1619145146/SAL%20Wins/win01a_trr79u.png",
        "portrait": "https://res.cloudinary.com/dn1e07eul/image/upload/v1619145173/SAL%20Wins/win01b_abhjvh.png"
    },
    {
        "id": 2,
        "title": "The Peahce Project",
        "url": "https://www.thepeahceproject.com/",
        "content": "The Peahce Project is a digital media platform to share underrepresented stories, art, and writing of Asian voices.",
        "image": "https://res.cloudinary.com/dn1e07eul/image/upload/v1619145180/SAL%20Wins/win02a_zaaqws.png",
        "portrait": "https://res.cloudinary.com/dn1e07eul/image/upload/v1619145186/SAL%20Wins/win02b_u0ya50.png"
    },
    {
        "id": 3,
        "title": "Yayoi Kusama",
        "url": "http://yayoi-kusama.jp/",
        "content": "Self-described as an 'obsessional artist,' Yayoi Kusama is a Japanese contemporary artist who is known for her distinct and extensive use of polka dots and her mirror infinity installations. Infused with autobiographical and psychological content, her conceptual art spans across paintings, installations, performance art, sculptures, poetry, and fashion.",
        "image": "https://res.cloudinary.com/dn1e07eul/image/upload/v1619145191/SAL%20Wins/win03a_sdpmi8.png",
        "portrait": "https://res.cloudinary.com/dn1e07eul/image/upload/v1619145197/SAL%20Wins/win03b_n9s3hx.png"
    },
    {
        "id": 4,
        "title": "Ai Weiwei",
        "url": "https://www.aiweiwei.com/",
        "content": "Ai Weiwei is a Chinese contemporary artist and activist. Openly critical of the Chinese government, he is renowned for making strong aesthetic statements addressing today’s geopolitical world. Ai uses architecture, installations, social media, and documentaries as expressions of new ways for his audiences to examine society and its values.",
        "image": "https://res.cloudinary.com/dn1e07eul/image/upload/v1619145203/SAL%20Wins/win04a_k1oqgb.png",
        "portrait": "https://res.cloudinary.com/dn1e07eul/image/upload/v1619145206/SAL%20Wins/win04b_ryfxjn.png"
    },
    {
        "id": 5,
        "title": "Cai Guo-Qiang",
        "url": "https://caiguoqiang.com/",
        "content": "Known for his stunning pyrotechnic and firework performances, Cai Guo-Qiang was born in Quanzhou City, China, and studied gunpowder techniques in Japan. Currently based in New York City, Guo-Qiang was the director of visual and special effects in the 2008 Beijing Olympic Games and was the subject of the critically acclaimed 2016 Netflix documentary, Sky Ladder: The Art of Cai Guo-Qiang.",
        "image": "https://res.cloudinary.com/dn1e07eul/image/upload/v1619145212/SAL%20Wins/win05a_zqrfmv.png",
        "portrait": "https://res.cloudinary.com/dn1e07eul/image/upload/v1619145217/SAL%20Wins/win05b_j28pfm.png"
    },
    {
        "id": 6,
        "title": "Drue Kataoka",
        "url": "https://www.drue.net/",
        "content": "Drue Kataoka is a Japanese American contemporary artist, technologist, and activist. Kataoka works in a wide variety of media, from the material genres of steel sculpture, painting, installations, to interactive digital and technological platforms such as virtual reality and brain wave EEG. Her artwork Up! was featured in the first zero gravity art exhibit at the International Space Station, and she is a recipient of the Martin Luther King, Jr. Research & Education Institute Award for her extensive community service.",
        "image": "https://res.cloudinary.com/dn1e07eul/image/upload/v1619733977/SAL%20Wins/win26a_vl2ru7.png",
        "portrait": "https://res.cloudinary.com/dn1e07eul/image/upload/v1619733988/SAL%20Wins/win26b_wt1vrw.png"
    }],

// AAPI HERITAGE MONTH CATEGORY
    
    "heritage" = [
    {
        "id": 1,
        "title": "Angel Island, California",
        "url": "https://www.aiisf.org/history",
        "content": "A state park and National Historic Landmark in San Francisco Bay, Angel Island was the West Coast 'Ellis Island.' Between 1910 and 1940, millions of immigrants from Asia first arrived in the United States at the Angel Island Immigration Station.",
        "image": "https://res.cloudinary.com/dn1e07eul/image/upload/v1619145220/SAL%20Wins/win06a_zylrgk.png",
        "portrait": "https://res.cloudinary.com/dn1e07eul/image/upload/v1619145224/SAL%20Wins/win06b_nydllv.png"
    },
    {
        "id": 2,
        "title": "The Internment of Japanese Americans",
        "url": "https://www.history.com/topics/world-war-ii/japanese-american-relocation",
        "content": "Shortly after the bombing of Pearl Harbor by Japanese forces, President Franklin D. Roosevelt signed an executive order to incarcerate Japanese Americans as a means of preventing espionage. From 1942 to 1945, around 120,000 Japanese Americans were relocated and incarcerated at 10 concentration camps in the United States. Internees lived in sub-standard conditions in military-style camps.",
        "image": "https://res.cloudinary.com/dn1e07eul/image/upload/v1619145229/SAL%20Wins/win07a_upmejo.png",
        "portrait": "https://res.cloudinary.com/dn1e07eul/image/upload/v1619145232/SAL%20Wins/win07b_rzxnpy.png"
    },
    {
        "id": 3,
        "title": "The Transcontinental Railroad",
        "url": "https://www.history.com/news/transcontinental-railroad-chinese-immigrants",
        "content": "Largely sidelined by history, 15,000 to 20,000 Chinese workers were instrumental in the construction of the US Transcontinental Railroad in the 1860s. In 1867, 90% of the railroad labor force were Chinese since white workers were reluctant to perform back-breaking manual labor. Abused, underpaid, and forced to do the most dangerous of tasks, these long-overlooked Chinese workers built American infrastructure.",
        "image": "https://res.cloudinary.com/dn1e07eul/image/upload/v1619145238/SAL%20Wins/win08a_mwwlzm.png",
        "portrait": "https://res.cloudinary.com/dn1e07eul/image/upload/v1619145242/SAL%20Wins/win08b_x13ukf.png"
    },
    {
        "id": 4,
        "title": "Landing of the First Filipinos",
        "url": "https://www.aaldef.org/blog/emil-guillermo-filipinos-here-first-at-morro-bay-pedro-de-unamuno/",
        "content": "The first Asians landed in Morro Bay, California, 33 years before the pilgrims arrived in Plymouth, Massachusetts in 1620. On October 18th, 1587, the Spanish sailor Pedro De Unamuno and his crew of Spaniard and Filipino deckhands sailed across the Pacific Ocean and arrived at Morro Bay, located along the central coast of California. The landing party claimed the area for Spain, but after an attack by indigenous Indians and the deaths of two crew members, further exploration was stopped.",
        "image": "https://res.cloudinary.com/dn1e07eul/image/upload/v1619145249/SAL%20Wins/win09a_rdaupe.png",
        "portrait": "https://res.cloudinary.com/dn1e07eul/image/upload/v1619145253/SAL%20Wins/win09b_iw0biu.png"
    },
    {
        "id": 5,
        "title": "Asian American and Pacific Islander Heritage Month",
        "url": "https://asianpacificheritage.gov/",
        "content": "May is designated as Asian American and Pacific Islander Heritage month to recognize and celebrate the tremendous contributions and influence of Asian Americans and Pacific Islanders. Under President Jimmy Carter, the observance began in 1979 as Asian Pacific American Heritage Week. In 1990, President George H.W. Bush expanded the observance to a month. The significance of the month of May is to commemorate the immigration of the first Japanese to the United States on May 7, 1843, and to mark the anniversary of completion of the Transcontinental Railroad on May 10, 1869." ,
        "image": "https://res.cloudinary.com/dn1e07eul/image/upload/v1619145255/SAL%20Wins/win10a_ryg7l8.png",
        "portrait": "https://res.cloudinary.com/dn1e07eul/image/upload/v1619145258/SAL%20Wins/win10b_hes0ju.png"
    },
    {
        "id": 6,
        "title": "Coining of the term 'Asian American'",
        "url": "http://berkeleyplaques.org/e-plaque/asian-american-political-alliance-aapa/",
        "content": "During the Third World Liberation Front student strikes of 1968, University of California Berkeley graduate students Emma Gee and Yuji Ichioka first coined the term 'Asian American' in the naming of their student organization, the Asian American Political Alliance (AAPA). Not only did 'Asian American' combat the racist and colonial connotations of the term 'Oriental,' it increased the visibility and political unification of all activists and citizens of Asian descent." ,
        "image": "https://res.cloudinary.com/dn1e07eul/image/upload/v1619733994/SAL%20Wins/win27a_e4axua.png",
        "portrait": "https://res.cloudinary.com/dn1e07eul/image/upload/v1619733997/SAL%20Wins/win27b_u6eoz8.png"
    }],

// CONTRIBUTIONS CATEGORY
    
    "contributions" = [{
        "id": 1,
        "title": "Yuri Kochiyama",
        "url": "https://blogs.brown.edu/ethn-1890v-s01-fall-2016/historical-figures-and-organizations/yuri-kochiyama/",
        "content": "Yuri Kochiyama was a Japanese American civil rights activist who was politically awakened by her family's internment during World War II. A friend of Malcolm X and dedicated to pan-ethnic social justice and human rights movements, Kochiyama's activism spanned from the 1960s to her death in 2014.",
        "image": "https://res.cloudinary.com/dn1e07eul/image/upload/v1619145264/SAL%20Wins/win11a_stg0j7.png",
        "portrait": "https://res.cloudinary.com/dn1e07eul/image/upload/v1619145269/SAL%20Wins/win11b_bcjtyw.png"
    },
    {
        "id": 2,
        "title": "Maya Lin",
        "url": "https://www.biography.com/news/maya-lin-vietnam-veterans-memorial",
        "content": "Maya Lin is a Chinese-American artist, architect, and designer. At the age of 21, Lin won the national design competition for the Vietnam Veterans Memorial in Washington, D.C. Often drawing inspiration from the architecture of nature, Lin is best known for her historical memorials and environmentally-themed works.",
        "image": "https://res.cloudinary.com/dn1e07eul/image/upload/v1619145272/SAL%20Wins/win12a_igvwtn.png",
        "portrait": "https://res.cloudinary.com/dn1e07eul/image/upload/v1619145277/SAL%20Wins/win12b_frxcok.png"
    },
    {
        "id": 3,
        "title": "Michio Kaku",
        "url": "https://mkaku.org/",
        "content": "Born to second-generation Japanese American parents, Michio Kaku is a theoretical physicist, futurist, and popularizer of science(science communicator). Kaku is currently professor of theoretical physics in the City College of New York and CUNY Graduate Center. Kaku is best known as a co-founder of String Field Theory, and he continues Albert Einstein's search to unite the four fundamental forces of nature into one unified theory.",
        "image": "https://res.cloudinary.com/dn1e07eul/image/upload/v1619145281/SAL%20Wins/win13a_dbupi6.png",
        "portrait": "https://res.cloudinary.com/dn1e07eul/image/upload/v1619145284/SAL%20Wins/win13b_y0dtqy.png"
    },
    {
        "id": 4,
        "title": "David Henry Hwang",
        "url": "http://www.davidhenryhwang.com/",
        "content": "Born to Chinese immigrants, David Henry Hwang is a playwright, screenwriter, librettist, and theatre professor at Columbia University. A Tony Award, OBIE Award, and Grammy Award winner, Hwang's plays include FOB ('Fresh of the Boat'), Chinglish, Yellow Face, Kung Fu, Golden Child, and The Dance of the Railroad. Hwang's best-known play is M. Butterfly, based on the long affair between a French Diplomat and a Chinese opera singer.",
        "image": "https://res.cloudinary.com/dn1e07eul/image/upload/v1619145288/SAL%20Wins/win14a_dne0kk.png",
        "portrait": "https://res.cloudinary.com/dn1e07eul/image/upload/v1619145291/SAL%20Wins/win14b_dn03xb.png"
    },
    {
        "id": 5,
        "title": "Mabel Ping-Hua Lee",
        "url": "https://www.history.com/news/chinese-american-womens-suffrage-mabel-ping-hua-lee",
        "content": "Mabel Ping-Hua Lee was a Chinese advocate for womens' suffrage in the United States. Although the Chinese Exclusion Act of 1882 denied US citizenship to Chinese immigrants until 1943, 16-year-old Lee mobilized the Chinese community to support the women's suffrage movement leading up to the ratification of the 19th Amendment in 1920. Lee was also the first Chinese woman in the United States to earn a PhD in economics, and for over 40 years, Lee was head of the First Chinese Baptist Church in New York's Chinatown.",
        "image": "https://res.cloudinary.com/dn1e07eul/image/upload/v1619145295/SAL%20Wins/win15a_jloc0l.png",
        "portrait": "https://res.cloudinary.com/dn1e07eul/image/upload/v1619145299/SAL%20Wins/win15b_h0xyj1.png"
    },
    {
        "id": 6,
        "title": "Amanda Nguyen",
        "url": "https://www.risenow.us/",
        "content": "Amanda Nguyen is a civil rights activist, social entreprenuer, and CEO and founder of Rise, a nonprofit organization aimed to protect the civil rights of sexual assault and rape survivors. In 2013, Nguyen was raped while studying at Harvard University, and she faced tremendous challenges to preserve her rape kit. Nguyen founded Rise in 2014, and she wrote the Sexual Assault Survivors' Rights Act, a bill which passed in 2016. The legislation overhauls the process of how rape kits are processed in the United States and creates a bill of rights for all sexual assault and rape survivors." ,
        "image": "https://res.cloudinary.com/dn1e07eul/image/upload/v1619734002/SAL%20Wins/win28a_vkkrou.png",
        "portrait": "https://res.cloudinary.com/dn1e07eul/image/upload/v1619734005/SAL%20Wins/win28b_h7bu9y.png"
    }],

// REPRESENTATION CATEGORY
    
    "representation" = [{
        "id": 1,
        "title": "Kamala Harris",
        "url": "https://www.whitehouse.gov/administration/vice-president-harris/",
        "field": "politics",
        "content": "Kamala Devi Harris is the daughter of a Tamil Indian mother and a Jamaican father. Harris has served as a deputy district attorney, Attorney General in the State of California, and US senator. Kamala Harris is now the 49th Vice President of the United States, and she is the first woman, the first Black American, and the first South Asian American to be elected Vice President.",
        "image": "https://res.cloudinary.com/dn1e07eul/image/upload/v1619145306/SAL%20Wins/win16a_ks7q8l.png",
        "portrait": "https://res.cloudinary.com/dn1e07eul/image/upload/v1619145309/SAL%20Wins/win16b_ld1eqj.png"
    },
    {
        "id": 2,
        "title": "Anna May Wong",
        "url": "https://www.womenshistory.org/education-resources/biographies/anna-may-wong",
        "field": "artist", 
        "content": "Anna May Wong was the first Chinese American film star and actress, with a prolific career in silent films, television, and stage. Wong was born in 1905 in the Chinatown area of Los Angeles, and in 1922,she acted in the film The Toll of the Sea, one of the first movies made in Technicolor. Although she was typecast into stereotypical 'Dragon Lady' or demure 'Butterfly' roles, Anna May Wong helped to humanize Chinese Americans to mainstream American audiences during an intense period of discrimination and racism towards Asians.", 
        "image": "https://res.cloudinary.com/dn1e07eul/image/upload/v1619145311/SAL%20Wins/win17a_tu05fo.png",
        "portrait": "https://res.cloudinary.com/dn1e07eul/image/upload/v1619145314/SAL%20Wins/win17b_p6aaxg.png"
    },
    {
        "id": 3,
        "title": "Wataru Misaka",
        "url": "https://theundefeated.com/features/wataru-misaka-broke-pro-basketballs-color-barrier-you-should-know-his-name/",
        "field": "athlete",
        "content": "Wataru 'Wat' Misaka, a 5-foot-7 Japanese American, broke the color barrier for modern professional basketball. In 1947, Misaka was drafted by the New York Knicks, debuting as the first non-white player and first Asian player in the National Basketball Association (then known as the Basketball Association of America). In 1999, Misaka was inducted into the Utah Sports Hall of Fame.",
        "image": "https://res.cloudinary.com/dn1e07eul/image/upload/v1619145318/SAL%20Wins/win18a_b77uth.png",
        "portrait": "https://res.cloudinary.com/dn1e07eul/image/upload/v1619145325/SAL%20Wins/win18b_x5exev.png"
    },
    {
        "id": 4,
        "title": "Bowen Yang",
        "url": "https://www.instagram.com/fayedunaway/?hl=en",
        "field": "artist",
        "content": "Bowen Yang is the first Asian American and Chinese American cast member of Saturday Night Live (SNL). Yang began as a writer for SNL on the 2017-2018 season, and he was promoted to cast member in the 45th season that debuted in 2019. He is openly gay, making him only the third out gay male cast member in the show's history.",
        "image": "https://res.cloudinary.com/dn1e07eul/image/upload/v1619145327/SAL%20Wins/win19a_bznd5j.png",
        "portrait": "https://res.cloudinary.com/dn1e07eul/image/upload/v1619145330/SAL%20Wins/win19b_ol2fhi.png"
    },
    {
        "id": 5,
        "title": "Chloé Zhao",
        "url": "https://tisch.nyu.edu/grad-film/alumni/chloe-zhao",
        "field": "artist",
        "content": "Chloé Zhao is a Chinese American filmmaker, director, writer, and producer. Zhao is known for her critically acclaimed independent films, which include Songs My Brothers Taught Me (2015), The Rider (2017), and Nomadland (2020), which won Best Picture at the 93rd Academy Awards, and for which Zhao won the Oscar for Best Director. Zhao is the first Asian woman, first woman of color, and second woman to win Best Director.",
        "image": "https://res.cloudinary.com/dn1e07eul/image/upload/v1619145334/SAL%20Wins/win20a_l09mhk.png",
        "portrait": "https://res.cloudinary.com/dn1e07eul/image/upload/v1619145339/SAL%20Wins/win20b_faonbe.png"
    },
    {
        "id": 6,
        "title": "Simu Liu",
        "url": "https://www.instagram.com/simuliu/?hl=en",
        "field": "artist",
        "content": "Simu Liu is a Chinese Canadian actor, writer, filmmaker, and stuntman. Liu is set to become the first Asian actor to lead a Marvel Studios film, as the star of Shang-Chi and the Legend of the Ten Rings (2021). Liu previously appeared in the tv series Kim's Convenience, Taken, and Orphan Black. The role of Shang-Chi holds special meaning for Liu, who shared that when he was a struggling actor playing superheroes at childrens' birthday parties, he could only play masked characters to hide his race." ,
        "image": "https://res.cloudinary.com/dn1e07eul/image/upload/v1619734010/SAL%20Wins/win29a_dnqo1h.png",
        "portrait": "https://res.cloudinary.com/dn1e07eul/image/upload/v1619734013/SAL%20Wins/win29b_nbsexl.png"
    }],

// CULTURAL CENTERS CATEGORY. 
    
    "cultural" = [{
        "id": 1,
        "title": "Rubin Museum of Art",
        "url": "https://rubinmuseum.org/",
        "content": "Established in 2004, The Rubin Museum of Art is a dynamic environment that stimulates learning, promotes understanding, and inspires personal connections to the ideas, cultures, and art of Himalayan regions.",
        "image": "https://res.cloudinary.com/dn1e07eul/image/upload/v1619145343/SAL%20Wins/win21a_g3n0v6.png",
        "portrait": "https://res.cloudinary.com/dn1e07eul/image/upload/v1619145348/SAL%20Wins/win21b_n139mc.png",
        "location": "New York City, NY"
    },
    {
        "id": 2,
        "title": "Asia Society and Museum",
        "url": "https://asiasociety.org/",
        "content": "Founded in 1956, the Asia Society is a leading educational organization dedicated to promoting mutual understanding and strengthening partnerships among peoples, leaders, and institutions of Asia and the United States in a global context.",
        "image": "https://res.cloudinary.com/dn1e07eul/image/upload/v1619145354/SAL%20Wins/win22a_a6lbej.png",
        "portrait": "https://res.cloudinary.com/dn1e07eul/image/upload/v1619145358/SAL%20Wins/win22b_vkk7no.png",
        "location": "New York City, Houston, and Hong Kong"
    },
    {
        "id": 3,
        "title": "Japan Society",
        "url": "https://www.japansociety.org/",
        "content": "Japan Society is the leading U.S. organization committed to deepening mutual understanding between the United States and Japan in a global context. Now in its second century, the Society serves audiences across the United States and abroad through innovative programs in arts and culture, public policy, business, language and education. ",
        "image": "https://res.cloudinary.com/dn1e07eul/image/upload/v1619145361/SAL%20Wins/win23a_rowvy7.png",
        "portrait": "https://res.cloudinary.com/dn1e07eul/image/upload/v1619145368/SAL%20Wins/win23b_xrw7fc.png",
        "location": "New York City, NY"
    },
    {
        "id": 4,
        "title": "Asian Art Museum",
        "url": "https://about.asianart.org/",
        "content": "Located in the heart of San Francisco, the museum is home to one of the world’s finest collections of Asian art, boasting more than 18,000 awe-inspiring artworks ranging from ancient jades and ceramics to contemporary video installations. Dynamic special exhibitions, cultural celebrations and public programs for all ages provide rich art experiences that unlock the past and spark questions about the future.",
        "image": "https://res.cloudinary.com/dn1e07eul/image/upload/v1619145383/SAL%20Wins/win24a_ev96sb.png",
        "portrait": "https://res.cloudinary.com/dn1e07eul/image/upload/v1619145385/SAL%20Wins/win24b_jrnzcq.png",
        "location": "San Francisco, CA"
    },
    {
        "id": 5,
        "title": "Wing Luke Museum",
        "url": "https://www.wingluke.org/",
        "content": "As a National Park Service Affiliated Area and the first Smithsonian affiliate in the Pacific Northwest, the Wing Luke Museum of the Asian Pacific American Experience offers an authentic and unique perspective on the American story.",
        "image": "https://res.cloudinary.com/dn1e07eul/image/upload/v1619145394/SAL%20Wins/win25a_db0i66.png",
        "portrait": "https://res.cloudinary.com/dn1e07eul/image/upload/v1619145397/SAL%20Wins/win25b_iugd7w.png",
        "location": "Seattle, WA"
    },
    {
        "id": 6,
        "title": "Seattle Asian Art Museum",
        "url": "https://www.seattleartmuseum.org/visit/asian-art-museum",
        "content": "After a major three-year renovation and a year-long shutdown due to the covid-19 pandemic, the Seattle Asian Art Museum is reopening in the spring of 2021. Located in the grand 1933 Art Deco building in Volunteer Park, the Seattle Asian Art Museum (SAAM) exhibits historic and contemporary artworks.",
        "image": "https://res.cloudinary.com/dn1e07eul/image/upload/v1619734018/SAL%20Wins/win30a_k8poic.png",
        "portrait": "https://res.cloudinary.com/dn1e07eul/image/upload/v1619734023/SAL%20Wins/win30b_w31amd.png",
        "location": "Seattle, WA"
    }]
]

