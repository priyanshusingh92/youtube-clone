const GOOGLE_API_KEY = "AIzaSyDhWFwpUxQecoQ3RHT1jjVwgxj7V2O44iA";
export const YOUTUBE_SEARCH_API =
  "https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
export const VIDEOS_LIST_URL =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&key=" +
  GOOGLE_API_KEY;
export const YOUTUBE_SEARCH_BY_KEYWORD_API =
  "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=SEARCH_QUERY&type=video&key=" +
  GOOGLE_API_KEY;
export const COMMENT_DATA = [
  {
    name: "Priyanshu Singh",
    comment: "This is my comment",
    replies: [
      { name: "Priyanshu Singh", comment: "This is my comment", replies: [] },
      { name: "Priyanshu Singh", comment: "This is my comment", replies: [] },
      {
        name: "Priyanshu Singh",
        comment: "This is my comment",
        replies: [
          {
            name: "Priyanshu Singh",
            comment: "This is my comment",
            replies: [
              {
                name: "Priyanshu Singh",
                comment: "This is my comment",
                replies: [],
              },
              {
                name: "Priyanshu Singh",
                comment: "This is my comment",
                replies: [
                  {
                    name: "Priyanshu Singh",
                    comment:
                      "This is my comment. This is my comment This is my comment This is my comment This is my comment This is my comment This is my comment This is my comment This is my comment This is my comment",
                    replies: [],
                  },
                  {
                    name: "Priyanshu Singh",
                    comment: "This is my comment",
                    replies: [],
                  },
                ],
              },
            ],
          },
          {
            name: "Priyanshu Singh",
            comment: "This is my comment",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Priyanshu Singh",
    comment: "This is my comment",
    replies: [
      { name: "Priyanshu Singh", comment: "This is my comment", replies: [] },
    ],
  },
];
export const DEFAULT_VIDEOS ={
  "kind": "youtube#videoListResponse",
  "etag": "St-I4uxAtBic8XAoYzlw9V4aiMI",
  "items": [
    {
      "kind": "youtube#video",
      "etag": "Etdbwhu_gJxa6Gw0b98ZjXp1ysA",
      "id": "vS3_72Gb-bI",
      "snippet": {
        "publishedAt": "2023-04-03T15:39:24Z",
        "channelId": "UCiifkYAs_bq1pt_zbNAzYGg",
        "title": "Blue Beetle – Official Trailer",
        "description": "He’s A Superhero, Whether He Likes It Or Not #BlueBeetle - Only in Theaters August 18\n\nFrom Warner Bros. Pictures comes the feature film “Blue Beetle,” marking the DC Super Hero’s first time on the big screen. The film, directed by Angel Manuel Soto, stars Xolo Maridueña in the title role as well as his alter ego, Jaime Reyes.\nRecent college grad Jaime Reyes returns home full of aspirations for his future, only to find that home is not quite as he left it. As he searches to find his purpose in the world, fate intervenes when Jaime unexpectedly finds himself in possession of an ancient relic of alien biotechnology: the Scarab. When the Scarab suddenly chooses Jaime to be its symbiotic host, he is bestowed with an incredible suit of armor capable of extraordinary and unpredictable powers, forever changing his destiny as he becomes the Super Hero BLUE BEETLE.\n\nStarring alongside Maridueña (“Cobra Kai”) are Adriana Barraza (“Rambo: Last Blood,” “Thor”), Damían Alcázar (“Narcos,” “Narcos: Mexico”), Elpidia Carrillo (“Mayans M.C.,” the “Predator” films), Bruna Marquezine (“Maldivas,” “God Save the King”), Raoul Max Trujillo (the “Sicario” films, “Mayans M.C.”), with Oscar winner Susan Sarandon (“Monarch,” “Dead Man Walking”), and George Lopez (the “Rio and “Smurf” franchises). The film also stars Belissa Escobedo (“American Horror Stories,” “Hocus Pocus 2”) and Harvey Guillén (“What We Do in the Shadows”). Soto (“Charm City Kings,” “The Farm”) directs from a screenplay by Gareth Dunnet-Alcocer (“Miss Bala”), based on characters from DC.\n\nJohn Rickard and Zev Foreman are producing, with Walter Hamada, Galen Vaisman and Garrett Grant serving as executive producers.\n\nThe director’s creative team behind the scenes includes director of photography Pawel Pogorzelski (“Midsommar,” “Hereditary”), production designer John Billington (“Bad Boys for Life”), editor Craig Alpert (“Deadpool 2,” “The Lost City”), Oscar-nominated costume designer Mayes C. Rubeo (“Jojo Rabbit,” the “Thor” films), visual effects supervisor Kelvin McIlwain (“The Suicide Squad,” “Aquaman”) and composer Bobby Krlic (“Midsommar,” the “Snowpiercer” series).\nA Warner Bros. Pictures Presentation, a Safran Company Production, “Blue Beetle” soars into theaters only internationally beginning August 2023 and in North America August 18, 2023. It will be distributed worldwide by Warner Bros. Pictures.",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/vS3_72Gb-bI/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/vS3_72Gb-bI/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/vS3_72Gb-bI/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/vS3_72Gb-bI/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/vS3_72Gb-bI/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "DC",
        "tags": [
          "AUGUST2023",
          "Adriana Barraza",
          "BlueBeetle",
          "Cinema",
          "ComingSoon",
          "DC",
          "DCComics",
          "DamíanAlcázar",
          "Film2023",
          "FilmTrailer",
          "JamieReyes",
          "Movie",
          "OfficialTrailer",
          "SafranCompany",
          "Superheroes",
          "SusanSarandon",
          "Theatre",
          "Trailer",
          "Trailer2023",
          "WB",
          "WarnerBrothers",
          "Warnerbros",
          "XOLOMARIDUENA"
        ],
        "categoryId": "1",
        "liveBroadcastContent": "none",
        "defaultLanguage": "en",
        "localized": {
          "title": "Blue Beetle – Official Trailer",
          "description": "He’s A Superhero, Whether He Likes It Or Not #BlueBeetle - Only in Theaters August 18\n\nFrom Warner Bros. Pictures comes the feature film “Blue Beetle,” marking the DC Super Hero’s first time on the big screen. The film, directed by Angel Manuel Soto, stars Xolo Maridueña in the title role as well as his alter ego, Jaime Reyes.\nRecent college grad Jaime Reyes returns home full of aspirations for his future, only to find that home is not quite as he left it. As he searches to find his purpose in the world, fate intervenes when Jaime unexpectedly finds himself in possession of an ancient relic of alien biotechnology: the Scarab. When the Scarab suddenly chooses Jaime to be its symbiotic host, he is bestowed with an incredible suit of armor capable of extraordinary and unpredictable powers, forever changing his destiny as he becomes the Super Hero BLUE BEETLE.\n\nStarring alongside Maridueña (“Cobra Kai”) are Adriana Barraza (“Rambo: Last Blood,” “Thor”), Damían Alcázar (“Narcos,” “Narcos: Mexico”), Elpidia Carrillo (“Mayans M.C.,” the “Predator” films), Bruna Marquezine (“Maldivas,” “God Save the King”), Raoul Max Trujillo (the “Sicario” films, “Mayans M.C.”), with Oscar winner Susan Sarandon (“Monarch,” “Dead Man Walking”), and George Lopez (the “Rio and “Smurf” franchises). The film also stars Belissa Escobedo (“American Horror Stories,” “Hocus Pocus 2”) and Harvey Guillén (“What We Do in the Shadows”). Soto (“Charm City Kings,” “The Farm”) directs from a screenplay by Gareth Dunnet-Alcocer (“Miss Bala”), based on characters from DC.\n\nJohn Rickard and Zev Foreman are producing, with Walter Hamada, Galen Vaisman and Garrett Grant serving as executive producers.\n\nThe director’s creative team behind the scenes includes director of photography Pawel Pogorzelski (“Midsommar,” “Hereditary”), production designer John Billington (“Bad Boys for Life”), editor Craig Alpert (“Deadpool 2,” “The Lost City”), Oscar-nominated costume designer Mayes C. Rubeo (“Jojo Rabbit,” the “Thor” films), visual effects supervisor Kelvin McIlwain (“The Suicide Squad,” “Aquaman”) and composer Bobby Krlic (“Midsommar,” the “Snowpiercer” series).\nA Warner Bros. Pictures Presentation, a Safran Company Production, “Blue Beetle” soars into theaters only internationally beginning August 2023 and in North America August 18, 2023. It will be distributed worldwide by Warner Bros. Pictures."
        },
        "defaultAudioLanguage": "en-US"
      },
      "contentDetails": {
        "duration": "PT2M51S",
        "dimension": "2d",
        "definition": "hd",
        "caption": "true",
        "licensedContent": false,
        "contentRating": {
          
        },
        "projection": "rectangular"
      },
      "statistics": {
        "viewCount": "5056265",
        "likeCount": "202221",
        "favoriteCount": "0",
        "commentCount": "14326"
      }
    },
    {
      "kind": "youtube#video",
      "etag": "BnyfsBwRfvLVxzmbhOjyYEpnGQQ",
      "id": "Tp_YZNqNBhw",
      "snippet": {
        "publishedAt": "2023-04-03T01:02:26Z",
        "channelId": "UCvC4D8onUfXzvjTOM-dBfEA",
        "title": "Marvel Studios’ Secret Invasion | Official Trailer | Disney+",
        "description": "Who do you trust?\n\nMarvel Studios’ Secret Invasion, an Original series, is streaming June 21 on Disney+.\n\n► Watch Marvel on Disney+: https://bit.ly/2XyBSIW\n► Subscribe to Marvel on YouTube: http://bit.ly/WeO3YJ\n\nFollow Marvel on Twitter: ‪https://twitter.com/marvel\nLike Marvel on Facebook: ‪https://www.facebook.com/marvel\nWatch Marvel on Twitch: https://www.twitch.tv/marvel\n\nReward your Marvel fandom by joining Marvel Insider!\nEarn points, then redeem for awesome rewards.\nTerms and conditions apply. \nLearn more at https://www.marvel.com/insider?Osocial=YT&CID=MarvelInsider\n\nFor even more news, stay tuned to:\nTumblr: ‪http://marvelentertainment.tumblr.com/\nInstagram: https://www.instagram.com/marvel\nPinterest: ‪http://pinterest.com/marvelofficial\nReddit: http://reddit.com/u/marvel-official",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/Tp_YZNqNBhw/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/Tp_YZNqNBhw/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/Tp_YZNqNBhw/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/Tp_YZNqNBhw/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/Tp_YZNqNBhw/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "Marvel Entertainment",
        "tags": [
          "marvel",
          "comics"
        ],
        "categoryId": "24",
        "liveBroadcastContent": "none",
        "localized": {
          "title": "Marvel Studios’ Secret Invasion | Official Trailer | Disney+",
          "description": "Who do you trust?\n\nMarvel Studios’ Secret Invasion, an Original series, is streaming June 21 on Disney+.\n\n► Watch Marvel on Disney+: https://bit.ly/2XyBSIW\n► Subscribe to Marvel on YouTube: http://bit.ly/WeO3YJ\n\nFollow Marvel on Twitter: ‪https://twitter.com/marvel\nLike Marvel on Facebook: ‪https://www.facebook.com/marvel\nWatch Marvel on Twitch: https://www.twitch.tv/marvel\n\nReward your Marvel fandom by joining Marvel Insider!\nEarn points, then redeem for awesome rewards.\nTerms and conditions apply. \nLearn more at https://www.marvel.com/insider?Osocial=YT&CID=MarvelInsider\n\nFor even more news, stay tuned to:\nTumblr: ‪http://marvelentertainment.tumblr.com/\nInstagram: https://www.instagram.com/marvel\nPinterest: ‪http://pinterest.com/marvelofficial\nReddit: http://reddit.com/u/marvel-official"
        },
        "defaultAudioLanguage": "en"
      },
      "contentDetails": {
        "duration": "PT2M1S",
        "dimension": "2d",
        "definition": "hd",
        "caption": "true",
        "licensedContent": true,
        "contentRating": {
          
        },
        "projection": "rectangular"
      },
      "statistics": {
        "viewCount": "11312053",
        "likeCount": "304320",
        "favoriteCount": "0",
        "commentCount": "12531"
      }
    },
    {
      "kind": "youtube#video",
      "etag": "mlZwQkgG1C7FTGyHvWYOQ5BjbwI",
      "id": "1WEAJ-DFkHE",
      "snippet": {
        "publishedAt": "2023-04-01T20:00:04Z",
        "channelId": "UCX6OQ3DkcsbYNE6H8uQQuVA",
        "title": "$1 vs $500,000 Plane Ticket!",
        "description": "Check out ALL of MrBeast’s awesome jobs or discover a new opportunity at https://bit.ly/MrBeast_ZipRecruiter\n\nNew Merch - https://shopmrbeast.com/\n\nSUBSCRIBE OR I TAKE YOUR DOG\n╔═╦╗╔╦╗╔═╦═╦╦╦╦╗╔═╗\n║╚╣║║║╚╣╚╣╔╣╔╣║╚╣═╣ \n╠╗║╚╝║║╠╗║╚╣║║║║║═╣\n╚═╩══╩═╩═╩═╩╝╚╩═╩═╝\n\n----------------------------------------------------------------\nfollow all of these or i will kick you\n• Facebook - https://www.facebook.com/MrBeast6000/\n• Twitter - https://twitter.com/MrBeast\n•  Instagram - https://www.instagram.com/mrbeast\n•  Im Hiring! - https://www.mrbeastjobs.com/\n--------------------------------------------------------------------",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/1WEAJ-DFkHE/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/1WEAJ-DFkHE/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/1WEAJ-DFkHE/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/1WEAJ-DFkHE/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/1WEAJ-DFkHE/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "MrBeast",
        "categoryId": "24",
        "liveBroadcastContent": "none",
        "defaultLanguage": "en",
        "localized": {
          "title": "$1 vs $500,000 Plane Ticket!",
          "description": "Check out ALL of MrBeast’s awesome jobs or discover a new opportunity at https://bit.ly/MrBeast_ZipRecruiter\n\nNew Merch - https://shopmrbeast.com/\n\nSUBSCRIBE OR I TAKE YOUR DOG\n╔═╦╗╔╦╗╔═╦═╦╦╦╦╗╔═╗\n║╚╣║║║╚╣╚╣╔╣╔╣║╚╣═╣ \n╠╗║╚╝║║╠╗║╚╣║║║║║═╣\n╚═╩══╩═╩═╩═╩╝╚╩═╩═╝\n\n----------------------------------------------------------------\nfollow all of these or i will kick you\n• Facebook - https://www.facebook.com/MrBeast6000/\n• Twitter - https://twitter.com/MrBeast\n•  Instagram - https://www.instagram.com/mrbeast\n•  Im Hiring! - https://www.mrbeastjobs.com/\n--------------------------------------------------------------------"
        },
        "defaultAudioLanguage": "en"
      },
      "contentDetails": {
        "duration": "PT12M20S",
        "dimension": "2d",
        "definition": "hd",
        "caption": "true",
        "licensedContent": true,
        "contentRating": {
          
        },
        "projection": "rectangular"
      },
      "statistics": {
        "viewCount": "59688302",
        "likeCount": "3084206",
        "favoriteCount": "0",
        "commentCount": "94482"
      }
    },
    {
      "kind": "youtube#video",
      "etag": "5iuY9yWOdJxJFLf1Z6dhVt2NVsA",
      "id": "l4w6808wJcU",
      "snippet": {
        "publishedAt": "2023-04-02T19:30:08Z",
        "channelId": "UC2C_jShtL725hvbm1arSV9w",
        "title": "DOES YOUR FLAG FAIL?  Grey Grades The State Flags!",
        "description": "- Thank you, Bonnie Bees, for making this video possible: https://www.patreon.com/cgpgrey\n\n- Discuss this video: https://www.reddit.com/r/cgpgrey\n\n## Related Videos:\n\n- More flags!  https://www.youtube.com/watch?v=gaQwC5QbLeQ&list=PLqs5ohhass_SArUYXqErRo4STzlzKLVp7\n\n- FOREVER WEST! https://www.youtube.com/watch?v=xnsDYouELCE\n\n- Why Don't You Love Hawaii? https://www.youtube.com/watch?v=XRYNeGY9NCE\n\n\n## Special Thanks:\n\n## Patreon Executive Producers:\nBobby, Bob Kunz, Andrew Bereza, Rebecca Wortham, Donal Botkin, BN-12, George Lin, Andrea Di Biagio, David Tyler, iulus, Xueqi, Katie Scheper, Richard Jenkins, Oliver Steele, Phil Gardner, Jeromy Johnson, Martin, Steven Grimm, Colin Millions, Andrew, David White, Tim Stumbaugh, Alex Simonides, Jason Lewandowski, سليمان العقل, Nicholas Welna, rictic, Bogdan Toma, Brian Tillman, Chad Bramwell, jill hoffman, Nicolas Dedual, Nancy Flores, Meekay, Anthony Paolilli, Dennis Dimka, Daniel Kwak, William Sasko, Derek Bonner, Mikko, Orbit_Junkie, Nick Muggio, chrysilis, Claire Lomax, Drago175, Eliri Santana DeHendrick, Freddi Hørlyck, John Rogers, Veronica Peshterianu, John Lee, Maxime Zielony",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/l4w6808wJcU/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/l4w6808wJcU/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/l4w6808wJcU/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/l4w6808wJcU/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/l4w6808wJcU/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "CGP Grey",
        "tags": [
          "cgpgrey",
          "education"
        ],
        "categoryId": "27",
        "liveBroadcastContent": "none",
        "defaultLanguage": "en",
        "localized": {
          "title": "DOES YOUR FLAG FAIL?  Grey Grades The State Flags!",
          "description": "- Thank you, Bonnie Bees, for making this video possible: https://www.patreon.com/cgpgrey\n\n- Discuss this video: https://www.reddit.com/r/cgpgrey\n\n## Related Videos:\n\n- More flags!  https://www.youtube.com/watch?v=gaQwC5QbLeQ&list=PLqs5ohhass_SArUYXqErRo4STzlzKLVp7\n\n- FOREVER WEST! https://www.youtube.com/watch?v=xnsDYouELCE\n\n- Why Don't You Love Hawaii? https://www.youtube.com/watch?v=XRYNeGY9NCE\n\n\n## Special Thanks:\n\n## Patreon Executive Producers:\nBobby, Bob Kunz, Andrew Bereza, Rebecca Wortham, Donal Botkin, BN-12, George Lin, Andrea Di Biagio, David Tyler, iulus, Xueqi, Katie Scheper, Richard Jenkins, Oliver Steele, Phil Gardner, Jeromy Johnson, Martin, Steven Grimm, Colin Millions, Andrew, David White, Tim Stumbaugh, Alex Simonides, Jason Lewandowski, سليمان العقل, Nicholas Welna, rictic, Bogdan Toma, Brian Tillman, Chad Bramwell, jill hoffman, Nicolas Dedual, Nancy Flores, Meekay, Anthony Paolilli, Dennis Dimka, Daniel Kwak, William Sasko, Derek Bonner, Mikko, Orbit_Junkie, Nick Muggio, chrysilis, Claire Lomax, Drago175, Eliri Santana DeHendrick, Freddi Hørlyck, John Rogers, Veronica Peshterianu, John Lee, Maxime Zielony"
        },
        "defaultAudioLanguage": "en"
      },
      "contentDetails": {
        "duration": "PT18M53S",
        "dimension": "2d",
        "definition": "hd",
        "caption": "true",
        "licensedContent": true,
        "contentRating": {
          
        },
        "projection": "rectangular"
      },
      "statistics": {
        "viewCount": "1980548",
        "likeCount": "154582",
        "favoriteCount": "0",
        "commentCount": "232"
      }
    },
    {
      "kind": "youtube#video",
      "etag": "WK4SSlADhB9uA8mlPKz1XCwGwPg",
      "id": "4ZX9T0kWb4Y",
      "snippet": {
        "publishedAt": "2023-04-03T15:00:05Z",
        "channelId": "UCBa659QWEk1AI4Tg--mrJ2A",
        "title": "I rode the world's fastest train.",
        "description": "I thought maglev trains were a dead-end technology: but it looks like I was wrong. At JR Central's Yamanashi Maglev Test Track, I rode Japan's new maglev. ■ The maglev: https://scmaglev.jr-central-global.com/ ■ The exhibition centre: https://www.linear-museum.pref.yamanashi.jp/english/index.html\n\nLocal producer: Yasuharu Matsuno at Mind Architect\nCamera and edit: Julian Domanski\n\n(This video has an English dub and limited audio description available. These are experimental and use AI-generated voices, so may not be perfect, and I can't promise they'll stay long-term. On supported devices, change the language option to use them!)\n\nI'm at https://tomscott.com\r\non Twitter at https://twitter.com/tomscott\r\non Facebook at https://facebook.com/tomscott\r\nand on Instagram as tomscottgo",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/4ZX9T0kWb4Y/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/4ZX9T0kWb4Y/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/4ZX9T0kWb4Y/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/4ZX9T0kWb4Y/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/4ZX9T0kWb4Y/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "Tom Scott",
        "tags": [
          "tom scott",
          "tomscott"
        ],
        "categoryId": "27",
        "liveBroadcastContent": "none",
        "defaultLanguage": "en",
        "localized": {
          "title": "I rode the world's fastest train.",
          "description": "I thought maglev trains were a dead-end technology: but it looks like I was wrong. At JR Central's Yamanashi Maglev Test Track, I rode Japan's new maglev. ■ The maglev: https://scmaglev.jr-central-global.com/ ■ The exhibition centre: https://www.linear-museum.pref.yamanashi.jp/english/index.html\n\nLocal producer: Yasuharu Matsuno at Mind Architect\nCamera and edit: Julian Domanski\n\n(This video has an English dub and limited audio description available. These are experimental and use AI-generated voices, so may not be perfect, and I can't promise they'll stay long-term. On supported devices, change the language option to use them!)\n\nI'm at https://tomscott.com\r\non Twitter at https://twitter.com/tomscott\r\non Facebook at https://facebook.com/tomscott\r\nand on Instagram as tomscottgo"
        },
        "defaultAudioLanguage": "en"
      },
      "contentDetails": {
        "duration": "PT9M53S",
        "dimension": "2d",
        "definition": "hd",
        "caption": "true",
        "licensedContent": true,
        "contentRating": {
          
        },
        "projection": "rectangular"
      },
      "statistics": {
        "viewCount": "1617459",
        "likeCount": "114457",
        "favoriteCount": "0",
        "commentCount": "4164"
      }
    },
    {
      "kind": "youtube#video",
      "etag": "DC5IeQiN28ySknwljuYmhL2Fwmg",
      "id": "XIOoqJyx8E4",
      "snippet": {
        "publishedAt": "2023-04-03T09:00:00Z",
        "channelId": "UCMki_UkHb4qSc0qyEcOHHJw",
        "title": "NewJeans (뉴진스) 'Zero' Official MV",
        "description": "Connect with NewJeans\n\nPHONING https://phoning.onelink.me/KG15/n7452q87\nOFFICIAL YOUTUBE https://www.youtube.com/c/NewJeans_official\nOFFICIAL WEBSITE https://newjeans.kr\nOFFICIAL INSTAGRAM https://www.instagram.com/newjeans_official\nOFFICIAL TWITTER https://twitter.com/NewJeans_ADOR\nOFFICIAL TIKTOK https://www.tiktok.com/@newjeans_official\nOFFICAL WEVERSE https://weverse.io/newjeansofficial\nOFFICIAL JAPAN TWITTER https://twitter.com/@NewJeans_jp\nOFFICIAL WEIBO  https://weibo.com/NewJeansADOR\nOFFICIAL BILIBILI https://space.bilibili.com/3493092783032940\n\n#NewJeans #뉴진스\n#NewJeans_Zero #Year_of_NewJeans\n#ADOR #어도어",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/XIOoqJyx8E4/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/XIOoqJyx8E4/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/XIOoqJyx8E4/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/XIOoqJyx8E4/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/XIOoqJyx8E4/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "NewJeans",
        "tags": [
          "NewJeans",
          "뉴진스",
          "민지",
          "하니",
          "다니엘",
          "해린",
          "혜인",
          "뉴진스 민지",
          "뉴진스 하니",
          "뉴진스 다니엘",
          "뉴진스 해린",
          "뉴진스 혜인",
          "MINJI",
          "HANNI",
          "HAERIN",
          "HYEIN",
          "NewJeans MINJI",
          "NewJeans HANNI",
          "NewJeans HAERIN",
          "NewJeans HYEIN",
          "DANIELLE",
          "NewJeans DANIELLE"
        ],
        "categoryId": "10",
        "liveBroadcastContent": "none",
        "localized": {
          "title": "NewJeans (뉴진스) 'Zero' Official MV",
          "description": "Connect with NewJeans\n\nPHONING https://phoning.onelink.me/KG15/n7452q87\nOFFICIAL YOUTUBE https://www.youtube.com/c/NewJeans_official\nOFFICIAL WEBSITE https://newjeans.kr\nOFFICIAL INSTAGRAM https://www.instagram.com/newjeans_official\nOFFICIAL TWITTER https://twitter.com/NewJeans_ADOR\nOFFICIAL TIKTOK https://www.tiktok.com/@newjeans_official\nOFFICAL WEVERSE https://weverse.io/newjeansofficial\nOFFICIAL JAPAN TWITTER https://twitter.com/@NewJeans_jp\nOFFICIAL WEIBO  https://weibo.com/NewJeansADOR\nOFFICIAL BILIBILI https://space.bilibili.com/3493092783032940\n\n#NewJeans #뉴진스\n#NewJeans_Zero #Year_of_NewJeans\n#ADOR #어도어"
        },
        "defaultAudioLanguage": "ko"
      },
      "contentDetails": {
        "duration": "PT3M20S",
        "dimension": "2d",
        "definition": "hd",
        "caption": "true",
        "licensedContent": true,
        "contentRating": {
          
        },
        "projection": "rectangular"
      },
      "statistics": {
        "viewCount": "5246657",
        "likeCount": "469341",
        "favoriteCount": "0",
        "commentCount": "23975"
      }
    },
    {
      "kind": "youtube#video",
      "etag": "KAI1mYIXPbqkhvIGQz42fjWERms",
      "id": "LEYGcsONOx4",
      "snippet": {
        "publishedAt": "2023-04-02T22:04:02Z",
        "channelId": "UCiWLfSweyRNmLpgEHekhoAg",
        "title": "National Championship: LSU Tigers vs. Iowa Hawkeyes | Full Game Highlights",
        "description": "Watch as the LSU Tigers defeat Caitlin Clark and the Iowa Hawkeyes to win the 2023 Women's NCAA Tournament National Championship. LSU was lead by Reese Angel's double-double and the 21 first-half points by Jasmine Carson.\n\n\n✔️Subscribe to ESPN+ http://espnplus.com/youtube\n✔️ Get the ESPN App: http://www.espn.com/espn/apps/espn\n✔️Subscribe to ESPN on YouTube: http://es.pn/SUBSCRIBEtoYOUTUBE\n✔️ Subscribe to NBA on ESPN on YouTube: http://bit.ly/SUBSCRIBEtoNBAonESPN\n✔️ Watch ESPN on YouTube TV: http://es.pn/YouTubeTV",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/LEYGcsONOx4/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/LEYGcsONOx4/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/LEYGcsONOx4/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/LEYGcsONOx4/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/LEYGcsONOx4/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "ESPN",
        "tags": [
          "Iowa Hawkeyes",
          "Iowa Hawkeyes vs. LSU Tigers",
          "LSU Tigers",
          "iowa hawkeyes",
          "womens march madness",
          "caitlin clark",
          "National Championship: LSU Tigers vs. Iowa Hawkeyes | Full Game Highlights",
          "lsu vs iowa highlights",
          "lsu tigers",
          "lsu tigers highlights",
          "angel reese",
          "angel reese highlights",
          "kim mulkey",
          "mulkey",
          "final four",
          "womens final four",
          "caitlin clark iowa",
          "iowa vs lsu",
          "lsu vs iowa full highlights",
          "national championship",
          "womens national championship"
        ],
        "categoryId": "17",
        "liveBroadcastContent": "none",
        "localized": {
          "title": "National Championship: LSU Tigers vs. Iowa Hawkeyes | Full Game Highlights",
          "description": "Watch as the LSU Tigers defeat Caitlin Clark and the Iowa Hawkeyes to win the 2023 Women's NCAA Tournament National Championship. LSU was lead by Reese Angel's double-double and the 21 first-half points by Jasmine Carson.\n\n\n✔️Subscribe to ESPN+ http://espnplus.com/youtube\n✔️ Get the ESPN App: http://www.espn.com/espn/apps/espn\n✔️Subscribe to ESPN on YouTube: http://es.pn/SUBSCRIBEtoYOUTUBE\n✔️ Subscribe to NBA on ESPN on YouTube: http://bit.ly/SUBSCRIBEtoNBAonESPN\n✔️ Watch ESPN on YouTube TV: http://es.pn/YouTubeTV"
        }
      },
      "contentDetails": {
        "duration": "PT12M3S",
        "dimension": "2d",
        "definition": "hd",
        "caption": "false",
        "licensedContent": true,
        "contentRating": {
          
        },
        "projection": "rectangular"
      },
      "statistics": {
        "viewCount": "1083761",
        "likeCount": "11965",
        "favoriteCount": "0",
        "commentCount": "3923"
      }
    },
    {
      "kind": "youtube#video",
      "etag": "onazaORzzCl-m6wcUuVXRJ7hJOw",
      "id": "mO0OuR26IZM",
      "snippet": {
        "publishedAt": "2023-04-03T13:30:00Z",
        "channelId": "UCWOA1ZGywLbqmigxE4Qlvuw",
        "title": "EXTRACTION 2 | Official Teaser Trailer | Netflix",
        "description": "Chris Hemsworth returns as Tyler Rake in EXTRACTION 2 - only on Netflix, June 16.\n\nAfter barely surviving the events of the first movie, Rake is back as the Australian black ops mercenary, tasked with another deadly mission: rescuing the battered family of a ruthless Georgian gangster from the prison where they are being held. Hemsworth reunites with director Sam Hargrave, with Joe and Anthony Russo's AGBO producing and Joe Russo writing. Golshifteh Farahani reprises her role from the first film, with Daniel Bernhardt and Tinatin Dalakishvili also co-starring.\n\nThis is a sequel to the first film that was based on the graphic novel 'Ciudad' by Ande Parks, from a story by Ande Parks, Joe Russo & Anthony Russo, with illustrations by Fernando León González. EXTRACTION 2 is produced by Anthony Russo, Joe Russo, Mike Larocca, Chris Hemsworth, Patrick Newall and Sam Hargrave, with Angela Russo-Otstot, Jake Aust, Benjamin Grayson, Steven Scavelli, Christopher Markus and Stephen McFeely as executive producers.\n\nSUBSCRIBE: http://bit.ly/29qBUt7\n\nAbout Netflix:\nNetflix is one of the world's leading entertainment services with 231 million paid memberships in over 190 countries enjoying TV series, films and games across a wide variety of genres and languages. Members can play, pause and resume watching as much as they want, anytime, anywhere, and can change their plans at any time.\n\nEXTRACTION 2 | Official Teaser Trailer | Netflix\nhttps://www.youtube.com/@Netflix",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/mO0OuR26IZM/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/mO0OuR26IZM/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/mO0OuR26IZM/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/mO0OuR26IZM/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/mO0OuR26IZM/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "Netflix",
        "tags": [
          "Action",
          "Adam Bessa",
          "Anthony Russo",
          "Chris Hemsworth",
          "Extraction",
          "Extraction 2",
          "Film",
          "Golshifteh Farahani",
          "Hero",
          "Joe Russo",
          "Netflix",
          "Sam Hargrave",
          "The Russo Brothers",
          "Tyler Rake",
          "Tyler Rake Lives",
          "blockbuster",
          "summer"
        ],
        "categoryId": "24",
        "liveBroadcastContent": "none",
        "localized": {
          "title": "EXTRACTION 2 | Official Teaser Trailer | Netflix",
          "description": "Chris Hemsworth returns as Tyler Rake in EXTRACTION 2 - only on Netflix, June 16.\n\nAfter barely surviving the events of the first movie, Rake is back as the Australian black ops mercenary, tasked with another deadly mission: rescuing the battered family of a ruthless Georgian gangster from the prison where they are being held. Hemsworth reunites with director Sam Hargrave, with Joe and Anthony Russo's AGBO producing and Joe Russo writing. Golshifteh Farahani reprises her role from the first film, with Daniel Bernhardt and Tinatin Dalakishvili also co-starring.\n\nThis is a sequel to the first film that was based on the graphic novel 'Ciudad' by Ande Parks, from a story by Ande Parks, Joe Russo & Anthony Russo, with illustrations by Fernando León González. EXTRACTION 2 is produced by Anthony Russo, Joe Russo, Mike Larocca, Chris Hemsworth, Patrick Newall and Sam Hargrave, with Angela Russo-Otstot, Jake Aust, Benjamin Grayson, Steven Scavelli, Christopher Markus and Stephen McFeely as executive producers.\n\nSUBSCRIBE: http://bit.ly/29qBUt7\n\nAbout Netflix:\nNetflix is one of the world's leading entertainment services with 231 million paid memberships in over 190 countries enjoying TV series, films and games across a wide variety of genres and languages. Members can play, pause and resume watching as much as they want, anytime, anywhere, and can change their plans at any time.\n\nEXTRACTION 2 | Official Teaser Trailer | Netflix\nhttps://www.youtube.com/@Netflix"
        },
        "defaultAudioLanguage": "en-US"
      },
      "contentDetails": {
        "duration": "PT2M4S",
        "dimension": "2d",
        "definition": "hd",
        "caption": "true",
        "licensedContent": true,
        "contentRating": {
          
        },
        "projection": "rectangular"
      },
      "statistics": {
        "viewCount": "4320000",
        "likeCount": "96306",
        "favoriteCount": "0",
        "commentCount": "4976"
      }
    },
    {
      "kind": "youtube#video",
      "etag": "2DLwtkBr76azSqtk1TTfEnU-hB4",
      "id": "4gaHphhEQOs",
      "snippet": {
        "publishedAt": "2023-04-02T15:58:16Z",
        "channelId": "UCFPoJNd0d4k1H9A6UOlikcg",
        "title": "ALL ACCESS: Gervonta Davis vs. Ryan Garcia | Ep 1 | Full Episode | #davisgarcia",
        "description": "Episode 1 of the Emmy® winning series brings viewers beyond the ring with unprecedented access as undefeated boxing superstars Gervonta “Tank” Davis and “King” Ryan Garcia prepare for a generational clash that could decide the future face of boxing.\n\n#DavisGarcia is Saturday, April 22nd on pay-per-view.\n\n#SHOSports #boxing #davisgarcia #gervontadavis #ryangarcia #showtimeppv #showtime   #fullepisode \n\nDon't miss out on the action! Visit the below links to sign up for reminders!\n\nChampionship Boxing: https://s.sho.com/3oiG6RE\nBellator: https://s.sho.com/3eSmXDb\n\nSubscribe to the SHOWTIME Sports YouTube channel: https://goo.gl/s8CWVT\n\nFollow SHOWTIME Sports:\nFacebook: https://www.facebook.com/ShoSports/\nTwitter: https://twitter.com/SHOsports\nInstagram: https://instagram.com/shosports\nOfficial Site: https://www.sho.com/sports\n\nFollow SHOWTIME Boxing:\nFacebook: https://www.facebook.com/ShoBoxing\nTwitter: https://twitter.com/ShowtimeBoxing\nInstagram: https://instagram.com/showtimeboxing\nSnapchat: https://www.snapchat.com/add/showtimeboxing\nTumblr: http://showtimeboxing.tumblr.com/\n\nFollow SHOWTIME Basketball:\nInstagram: https://www.instagram.com/showtimebasketball\nTwitter: https://twitter.com/shobasketball\n\nFollow ALL THE SMOKE:\nInstagram: https://www.instagram.com/allthesmoke/\nYouTube: https://bit.ly/2OLkr50 \n\nFollow BELOW THE BELT with Brendan Schaub:\nFacebook: https://www.facebook.com/BelowTheBeltSHO\nTwitter: https://twitter.com/btbshowtime\nInstagram: https://www.instagram.com/belowthebelt/\nYouTube: http://s.sho.com/BelowtheBelt\n\nFollow MORNING KOMBAT:\nInstagram: https://www.instagram.com/morningkombat/\nYouTube: https://bit.ly/2lPpvsj\n\nFollow INSIDE THE NFL:\nFacebook: https://www.facebook.com/insidetheNFL\nTwitter: https://twitter.com/insidetheNFL\nInstagram: https://www.instagram.com/insidetheNFL/\n\nFollow 4th and Forever:\nInstagram: https://www.instagram.com/4thandforever/\nYouTube: http://bit.ly/30iZqSZ\n\nFollow SHOWTIME:\nFacebook: https://www.facebook.com/showtime\nTwitter: https://twitter.com/Showtime\nInstagram: https://instagram.com/showtime/\nYoutube: https://www.youtube.com/user/SHOWTIME\nOfficial Site: https://www.sho.com/",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/4gaHphhEQOs/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/4gaHphhEQOs/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/4gaHphhEQOs/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/4gaHphhEQOs/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/4gaHphhEQOs/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "SHOWTIME Sports",
        "tags": [
          "showtime",
          "shosports",
          "sports",
          "Showtime Boxing",
          "Boxing",
          "Shosports",
          "Showtime Boxing PPV",
          "Showtime PPV",
          "Press Conference",
          "boxer",
          "Knockouts",
          "boxing knockouts",
          "KOs",
          "Boxing KOs",
          "Gervonta Davis",
          "Tank Davis",
          "ryan garcia",
          "ryan garcia vs gervonta davis",
          "ryan garcia highlights",
          "tank davis vs ryan garcia",
          "tank davis highlights",
          "gervonta davis vs ryan garcia",
          "gervonta davis highlights",
          "boxing biggest knockouts",
          "Boxing Biggest Fights"
        ],
        "categoryId": "17",
        "liveBroadcastContent": "none",
        "localized": {
          "title": "ALL ACCESS: Gervonta Davis vs. Ryan Garcia | Ep 1 | Full Episode | #davisgarcia",
          "description": "Episode 1 of the Emmy® winning series brings viewers beyond the ring with unprecedented access as undefeated boxing superstars Gervonta “Tank” Davis and “King” Ryan Garcia prepare for a generational clash that could decide the future face of boxing.\n\n#DavisGarcia is Saturday, April 22nd on pay-per-view.\n\n#SHOSports #boxing #davisgarcia #gervontadavis #ryangarcia #showtimeppv #showtime   #fullepisode \n\nDon't miss out on the action! Visit the below links to sign up for reminders!\n\nChampionship Boxing: https://s.sho.com/3oiG6RE\nBellator: https://s.sho.com/3eSmXDb\n\nSubscribe to the SHOWTIME Sports YouTube channel: https://goo.gl/s8CWVT\n\nFollow SHOWTIME Sports:\nFacebook: https://www.facebook.com/ShoSports/\nTwitter: https://twitter.com/SHOsports\nInstagram: https://instagram.com/shosports\nOfficial Site: https://www.sho.com/sports\n\nFollow SHOWTIME Boxing:\nFacebook: https://www.facebook.com/ShoBoxing\nTwitter: https://twitter.com/ShowtimeBoxing\nInstagram: https://instagram.com/showtimeboxing\nSnapchat: https://www.snapchat.com/add/showtimeboxing\nTumblr: http://showtimeboxing.tumblr.com/\n\nFollow SHOWTIME Basketball:\nInstagram: https://www.instagram.com/showtimebasketball\nTwitter: https://twitter.com/shobasketball\n\nFollow ALL THE SMOKE:\nInstagram: https://www.instagram.com/allthesmoke/\nYouTube: https://bit.ly/2OLkr50 \n\nFollow BELOW THE BELT with Brendan Schaub:\nFacebook: https://www.facebook.com/BelowTheBeltSHO\nTwitter: https://twitter.com/btbshowtime\nInstagram: https://www.instagram.com/belowthebelt/\nYouTube: http://s.sho.com/BelowtheBelt\n\nFollow MORNING KOMBAT:\nInstagram: https://www.instagram.com/morningkombat/\nYouTube: https://bit.ly/2lPpvsj\n\nFollow INSIDE THE NFL:\nFacebook: https://www.facebook.com/insidetheNFL\nTwitter: https://twitter.com/insidetheNFL\nInstagram: https://www.instagram.com/insidetheNFL/\n\nFollow 4th and Forever:\nInstagram: https://www.instagram.com/4thandforever/\nYouTube: http://bit.ly/30iZqSZ\n\nFollow SHOWTIME:\nFacebook: https://www.facebook.com/showtime\nTwitter: https://twitter.com/Showtime\nInstagram: https://instagram.com/showtime/\nYoutube: https://www.youtube.com/user/SHOWTIME\nOfficial Site: https://www.sho.com/"
        },
        "defaultAudioLanguage": "en"
      },
      "contentDetails": {
        "duration": "PT28M53S",
        "dimension": "2d",
        "definition": "hd",
        "caption": "true",
        "licensedContent": true,
        "contentRating": {
          
        },
        "projection": "rectangular"
      },
      "statistics": {
        "viewCount": "1635024",
        "likeCount": "35103",
        "favoriteCount": "0",
        "commentCount": "5245"
      }
    },
    {
      "kind": "youtube#video",
      "etag": "W3-FYQjWQhTlg--RKSM8YcVEgYo",
      "id": "_BZIxt07UNU",
      "snippet": {
        "publishedAt": "2023-04-03T01:33:01Z",
        "channelId": "UCTkXRDQl0luXxVQrRQvWS6w",
        "title": "This Minecraft Mod Will Change The World...",
        "description": "This Minecraft Mod Will Change The World... this has never been done before.\n\nThis was one of the most incredible projects I have ever worked on.\n\nTwitter: @Dream\nInstagram: @DreamWasTaken\nSnapchat: @Dream\n\nIn this video, we coded a Minecraft mod that live translates languages through a voice chat above your character in Minecraft. It has fairly good accuracy and can translate most languages around the world. This mod allows you to play Minecraft, make jokes, and have fun with people that can't even speak your language.  \n\nLive voice translation has been being worked on by Google and other companies, and they provide API's for it.  Google glass , apple glasses, and other similar products have been talked about for years with mentions of live-translating interactions in real life. We thought about taking that, and applying it to gaming.\n\nI truly believe that this is the near future for all online games with voice chat, with being able to play and communicate with anyone from anywhere, breaking down the language barrier. I also believe that this is a cool glimpse into the future in real life. If a bunch of kids can do it at home in one of the biggest games in the world, a bunch of engineers and geniuses can make it happen in real life.\n\nIn this video there were plenty of languages, and I was able to laugh and joke with all of them. When testing this mod, I played with friends of mine that spoke different languages, and we were having so much fun playing together and laughing about how crazy it was that we could communicate with each other.\n\nThis has been being worked on for a while and I'm so happy to finally share it with everyone. There are some bugs still, and in this version a couple of the notable bugs were: Minecraft words being incorrectly translated, names being incorrectly translated, and your last word not showing up sometimes.\n\nWhenever this mod's bugs are fixed and it's features are added, I plan on releasing this to the public for free, and with open source so anyone can make any additions they want with ease. Depending on what API is used for transcribing/translations and how many people are being translated, it can be costly, so although the mod will be free from me, using it might require setup on your end.\n\nI am releasing an SMP, the \"United SMP\", which is going to feature creators from all around the world. Equal representation from the languages that are on it, with a mock EU-style committee to make decisions so there is not one owner. This will be launching hopefully later this month, and has 60 creators to start with, 10 of which will be English speaking, 50 of which will be from 5 other languages. Most of these people are people I never would have been able to collaborate with, or make jokes with, or share with my fans, so I am so excited to share our community with the world. There will be more details on my twitter about this, and I will be live streaming the server in the future.\n\nthank you guys for watching and supporting the channel to make stuff like this possible.",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/_BZIxt07UNU/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/_BZIxt07UNU/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/_BZIxt07UNU/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/_BZIxt07UNU/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/_BZIxt07UNU/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "Dream",
        "tags": [
          "minecraft",
          "dream",
          "dream minecraft"
        ],
        "categoryId": "20",
        "liveBroadcastContent": "none",
        "localized": {
          "title": "This Minecraft Mod Will Change The World...",
          "description": "This Minecraft Mod Will Change The World... this has never been done before.\n\nThis was one of the most incredible projects I have ever worked on.\n\nTwitter: @Dream\nInstagram: @DreamWasTaken\nSnapchat: @Dream\n\nIn this video, we coded a Minecraft mod that live translates languages through a voice chat above your character in Minecraft. It has fairly good accuracy and can translate most languages around the world. This mod allows you to play Minecraft, make jokes, and have fun with people that can't even speak your language.  \n\nLive voice translation has been being worked on by Google and other companies, and they provide API's for it.  Google glass , apple glasses, and other similar products have been talked about for years with mentions of live-translating interactions in real life. We thought about taking that, and applying it to gaming.\n\nI truly believe that this is the near future for all online games with voice chat, with being able to play and communicate with anyone from anywhere, breaking down the language barrier. I also believe that this is a cool glimpse into the future in real life. If a bunch of kids can do it at home in one of the biggest games in the world, a bunch of engineers and geniuses can make it happen in real life.\n\nIn this video there were plenty of languages, and I was able to laugh and joke with all of them. When testing this mod, I played with friends of mine that spoke different languages, and we were having so much fun playing together and laughing about how crazy it was that we could communicate with each other.\n\nThis has been being worked on for a while and I'm so happy to finally share it with everyone. There are some bugs still, and in this version a couple of the notable bugs were: Minecraft words being incorrectly translated, names being incorrectly translated, and your last word not showing up sometimes.\n\nWhenever this mod's bugs are fixed and it's features are added, I plan on releasing this to the public for free, and with open source so anyone can make any additions they want with ease. Depending on what API is used for transcribing/translations and how many people are being translated, it can be costly, so although the mod will be free from me, using it might require setup on your end.\n\nI am releasing an SMP, the \"United SMP\", which is going to feature creators from all around the world. Equal representation from the languages that are on it, with a mock EU-style committee to make decisions so there is not one owner. This will be launching hopefully later this month, and has 60 creators to start with, 10 of which will be English speaking, 50 of which will be from 5 other languages. Most of these people are people I never would have been able to collaborate with, or make jokes with, or share with my fans, so I am so excited to share our community with the world. There will be more details on my twitter about this, and I will be live streaming the server in the future.\n\nthank you guys for watching and supporting the channel to make stuff like this possible."
        },
        "defaultAudioLanguage": "en"
      },
      "contentDetails": {
        "duration": "PT25M18S",
        "dimension": "2d",
        "definition": "hd",
        "caption": "false",
        "licensedContent": true,
        "contentRating": {
          
        },
        "projection": "rectangular"
      },
      "statistics": {
        "viewCount": "2816533",
        "likeCount": "234986",
        "favoriteCount": "0",
        "commentCount": "16556"
      }
    },
    {
      "kind": "youtube#video",
      "etag": "ZbxBPcPFtGMrVr4daNgyhE5OMF4",
      "id": "yB7ACD-CoDY",
      "snippet": {
        "publishedAt": "2023-04-03T03:35:24Z",
        "channelId": "UCStBfpQeA4imrUzPJoTXoFA",
        "title": "Lynyrd Skynyrd Tribute Medley of “Simple Man” & “Sweet Home Alabama” | 2023 CMT Music Awards",
        "description": "Cody Johnson, Billy Gibbons, Paul Rodgers, Slash, Chuck Leavell, Warren Hayes, Wynonna Judd, and LeAnn Rimes perform “Simple Man” and “Sweet Home Alabama” as tribute to Gary Rossington and Lynyrd Skynyrd at the 2023 CMT Music Awards. Check out more at https://www.cmt.com/cmt-music-awards\n\n#CMTAwards #LynyrdSkynyrd #GaryRossington #CodyJohnson #BillyGibbons #PaulRodgers #Slash #ChuckLeavell #WarrenHayes #WynonnaJudd #LeannRimes\n\nParamount+ is here! Stream all your favorite shows now on Paramount+. Try it FREE at https://bit.ly/3qyOeOf\n\nSUBSCRIBE now for more CMT: https://bit.ly/2EUv0Nc\n\nFor updates on all things country, follow CMT!\nCMT News & More: http://www.cmt.com\nCMT on FB: https://www.facebook.com/cmt\nCMT on Twitter: https://twitter.com/cmt\nCMT on Instagram: https://www.instagram.com/cmt/",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/yB7ACD-CoDY/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/yB7ACD-CoDY/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/yB7ACD-CoDY/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/yB7ACD-CoDY/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/yB7ACD-CoDY/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "CMT",
        "tags": [
          "Cody Johnson",
          "Billy Gibbons",
          "Paul Rodgers",
          "Slash",
          "Chuck Leavell",
          "Warren Hayes",
          "Wynonna Judd",
          "LeAnn Rimes",
          "Simple Man",
          "Sweet Home Alabama",
          "Gary Rossington",
          "Lynyrd Skynyrd",
          "Lynyrd Skynyrd tribute",
          "Lynyrd Skynyrd songs",
          "Lynyrd Skynyrd music",
          "Sweet Home Alabama Lynyrd Skynyrd",
          "Lynyrd Skynyrd cmt music awards",
          "Lynyrd Skynyrd cmt",
          "2023 cmt music awards Lynyrd Skynyrd",
          "2023 CMT Music Awards"
        ],
        "categoryId": "24",
        "liveBroadcastContent": "none",
        "localized": {
          "title": "Lynyrd Skynyrd Tribute Medley of “Simple Man” & “Sweet Home Alabama” | 2023 CMT Music Awards",
          "description": "Cody Johnson, Billy Gibbons, Paul Rodgers, Slash, Chuck Leavell, Warren Hayes, Wynonna Judd, and LeAnn Rimes perform “Simple Man” and “Sweet Home Alabama” as tribute to Gary Rossington and Lynyrd Skynyrd at the 2023 CMT Music Awards. Check out more at https://www.cmt.com/cmt-music-awards\n\n#CMTAwards #LynyrdSkynyrd #GaryRossington #CodyJohnson #BillyGibbons #PaulRodgers #Slash #ChuckLeavell #WarrenHayes #WynonnaJudd #LeannRimes\n\nParamount+ is here! Stream all your favorite shows now on Paramount+. Try it FREE at https://bit.ly/3qyOeOf\n\nSUBSCRIBE now for more CMT: https://bit.ly/2EUv0Nc\n\nFor updates on all things country, follow CMT!\nCMT News & More: http://www.cmt.com\nCMT on FB: https://www.facebook.com/cmt\nCMT on Twitter: https://twitter.com/cmt\nCMT on Instagram: https://www.instagram.com/cmt/"
        },
        "defaultAudioLanguage": "en"
      },
      "contentDetails": {
        "duration": "PT6M12S",
        "dimension": "2d",
        "definition": "hd",
        "caption": "false",
        "licensedContent": true,
        "regionRestriction": {
          "blocked": [
            "AE",
            "AM",
            "BH",
            "DZ",
            "EG",
            "IQ",
            "IR",
            "JO",
            "KW",
            "LB",
            "LY",
            "MA",
            "OM",
            "PS",
            "QA",
            "SA",
            "SY",
            "TN",
            "YE"
          ]
        },
        "contentRating": {
          
        },
        "projection": "rectangular"
      },
      "statistics": {
        "viewCount": "509808",
        "likeCount": "6124",
        "favoriteCount": "0",
        "commentCount": "888"
      }
    },
    {
      "kind": "youtube#video",
      "etag": "ibjuUJPteh2SLXHR_LRAjS_v90Q",
      "id": "wwE1fZmIkss",
      "snippet": {
        "publishedAt": "2023-04-03T16:00:41Z",
        "channelId": "UCakAg8hC_RFJm4RI3DlD7SA",
        "title": "Don't Tell Your WIFE About This Game!",
        "description": "You can do ANYTHING in this game!\njoin my patreon! https://patreon.com/briandavidgilbert\nstream this song on spotify: https://open.spotify.com/artist/2kHRbJk5oBq8T5fWYLFzpm?si=CMinUJ84SoGVuFMkABAgcQ\nmusic by Jonah Scott: https://www.instagram.com/altogether_band/\nfilmed by Karen Han: https://twitter.com/karenyhan\n\nMERCH: https://store.dftba.com/collections/brian-david-gilbert\nSTREAMS: https://twitch.tv/briandavidgilbert\nSTREAM ARCHIVE: https://www.youtube.com/channel/UCqbwf1q9hkT8E4zPsWYMjwA\nINSTA: https://instagram.com/briamgilbert\nWEBSITE: https://www.briandavidgilbert.com/",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/wwE1fZmIkss/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/wwE1fZmIkss/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/wwE1fZmIkss/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/wwE1fZmIkss/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/wwE1fZmIkss/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "brian david gilbert",
        "tags": [
          "brian",
          "david",
          "gilbert",
          "BDG",
          "funny",
          "humor",
          "music",
          "song",
          "awkward",
          "comedy",
          "songs",
          "singing",
          "brian david gilbert",
          "don't tell your wife about this game",
          "wife",
          "game",
          "mobile",
          "ad",
          "mobile game",
          "gaming",
          "don't tell your wife",
          "about this game",
          "fantasy",
          "pop",
          "dress",
          "beard",
          "sexy",
          "relationship",
          "match three",
          "screen"
        ],
        "categoryId": "23",
        "liveBroadcastContent": "none",
        "localized": {
          "title": "Don't Tell Your WIFE About This Game!",
          "description": "You can do ANYTHING in this game!\njoin my patreon! https://patreon.com/briandavidgilbert\nstream this song on spotify: https://open.spotify.com/artist/2kHRbJk5oBq8T5fWYLFzpm?si=CMinUJ84SoGVuFMkABAgcQ\nmusic by Jonah Scott: https://www.instagram.com/altogether_band/\nfilmed by Karen Han: https://twitter.com/karenyhan\n\nMERCH: https://store.dftba.com/collections/brian-david-gilbert\nSTREAMS: https://twitch.tv/briandavidgilbert\nSTREAM ARCHIVE: https://www.youtube.com/channel/UCqbwf1q9hkT8E4zPsWYMjwA\nINSTA: https://instagram.com/briamgilbert\nWEBSITE: https://www.briandavidgilbert.com/"
        },
        "defaultAudioLanguage": "en"
      },
      "contentDetails": {
        "duration": "PT3M51S",
        "dimension": "2d",
        "definition": "hd",
        "caption": "true",
        "licensedContent": true,
        "contentRating": {
          
        },
        "projection": "rectangular"
      },
      "statistics": {
        "viewCount": "405944",
        "likeCount": "51639",
        "favoriteCount": "0",
        "commentCount": "2570"
      }
    },
    {
      "kind": "youtube#video",
      "etag": "DMBYAIII5eT6TYtff4-_E2AWv-o",
      "id": "KCHT6a53OqY",
      "snippet": {
        "publishedAt": "2023-04-02T15:03:44Z",
        "channelId": "UCo8bcnLyZH8tBIH9V1mLgqQ",
        "title": "Why I Love Webcomics",
        "description": "I'm reconnecting with my first love and making webcomics again! ➤ https://theodd1sout.com/blogs/comics\nReversible Toasty Plush ➤ https://theodd1sout.com/collections/oddballs-merch/products/oddballs-reversible-toasty-plush\nWin a ticket to Vidcon during Merch Maddness ➤ https://theodd1sout.com/pages/merch-madness-2023\n\nWebcomics Mentioned\nExtra Fabolous Comics ➤ https://www.extrafabulouscomics.com/\nKC Green ➤ https://www.webtoons.com/en/challenge/kcomics-by-kc/list?title_no=747471\nSarah Anderson ➤ https://sarahcandersen.com/\nSafely Endangers ➤ https://www.webtoons.com/en/comedy/safely-endangered/list?title_no=352\nAdam Ellis ➤ https://www.instagram.com/adamtots/?hl=en\nThe Oatmeal ➤ https://theoatmeal.com/\nFalse Knees ➤ https://falseknees.com/\nCtrl+Alt+Del Comic ➤ https://cad-comic.com/\n\nSTORYBOARDS \nFunymony ➤ https://www.youtube.com/user/funymony \nAiroah ➤ https://www.youtube.com/channel/UC28dly7fFiPlISI-0AE-fbw \nOwen ➤ https://twitter.com/doggbag \nLu ➤ https://www.instagram.com/horrorhare/ \nFern ➤ https://twitter.com/funkysnailz\nApril “Pinkie” Davis ➤ https://twitter.com/PinkieToons\n\nBACKGROUNDS \nAnnie Loomis ➤ https://twitter.com/annieloomisart \nJessica McGinnis ➤ https://twitter.com/jaykittens \nLaura Walsh ➤ https://twitter.com/aspentri \nAntiDarkHeart ➤ https://twitter.com/AntiDarkHeart \nJasper Luu ➤ https://twitter.com/PortableBunbun \nKatelyn \"Lenny\" ➤ https://twitter.com/sweetpea_arts \n\n2D ANIMATION\nRushlight Invader ➤ https://www.youtube.com/user/RushLightInvader \nAreg Savchenko ➤ https://twitter.com/TheRegyman\nNoah Cheruk ➤ https://twitter.com/RocketSockit\nJulia Schoel ➤ https://twitter.com/papajoolia\nDavid Toons ➤ https://twitter.com/DavidToons_\n\nRIG ANIMATION\nRebecca Kartzmark ➤ https://twitter.com/Kartzmark\nJerb ➤ https://twitter.com/JerbJPG\nEmilee Dummer ➤ https://www.instagram.com/edummerart/ \nKelly Jensen ➤ https://www.instagram.com/kelly_anne_art/\nRiki Kuniyuki ➤ https://www.instagram.com/rikikuniyuki_art/\n\nASSETS \nJulia Klimas ➤ https://twitter.com/Julobster \nJada Kurian ➤ https://jada-kurian.myportfolio.com/ \nLovelesskia ➤ https://twitter.com/lovelesskia\n\nEDITOR \nZade ➤ https://twitter.com/RealZade\n\nTwitter ➤ https://twitter.com/theodd1sout\nInstagram ➤ https://www.instagram.com/theodd1sout/\nSecond Channel ➤ https://www.youtube.com/channel/UC0GLNhtTu7yI8rl6ZZGeezw\nTIkTok ➤ https://www.tiktok.com/@theoddtiktoksout",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/KCHT6a53OqY/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/KCHT6a53OqY/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/KCHT6a53OqY/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/KCHT6a53OqY/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/KCHT6a53OqY/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "TheOdd1sOut",
        "tags": [
          "Cartoon",
          "Animation",
          "Comic",
          "webcomic",
          "funny",
          "art",
          "Loss",
          "meme",
          "meme formats",
          "comic book",
          "newspaper comic",
          "funnies",
          "Garfield",
          "Garfild",
          "Calvin and Hobbes",
          "theoddonesout",
          "theoddisout",
          "theodd1sout comics",
          "James Rallison",
          "This is Fine",
          "Zack",
          "Zachary",
          "Extra Fabulous Comic"
        ],
        "categoryId": "23",
        "liveBroadcastContent": "none",
        "localized": {
          "title": "Why I Love Webcomics",
          "description": "I'm reconnecting with my first love and making webcomics again! ➤ https://theodd1sout.com/blogs/comics\nReversible Toasty Plush ➤ https://theodd1sout.com/collections/oddballs-merch/products/oddballs-reversible-toasty-plush\nWin a ticket to Vidcon during Merch Maddness ➤ https://theodd1sout.com/pages/merch-madness-2023\n\nWebcomics Mentioned\nExtra Fabolous Comics ➤ https://www.extrafabulouscomics.com/\nKC Green ➤ https://www.webtoons.com/en/challenge/kcomics-by-kc/list?title_no=747471\nSarah Anderson ➤ https://sarahcandersen.com/\nSafely Endangers ➤ https://www.webtoons.com/en/comedy/safely-endangered/list?title_no=352\nAdam Ellis ➤ https://www.instagram.com/adamtots/?hl=en\nThe Oatmeal ➤ https://theoatmeal.com/\nFalse Knees ➤ https://falseknees.com/\nCtrl+Alt+Del Comic ➤ https://cad-comic.com/\n\nSTORYBOARDS \nFunymony ➤ https://www.youtube.com/user/funymony \nAiroah ➤ https://www.youtube.com/channel/UC28dly7fFiPlISI-0AE-fbw \nOwen ➤ https://twitter.com/doggbag \nLu ➤ https://www.instagram.com/horrorhare/ \nFern ➤ https://twitter.com/funkysnailz\nApril “Pinkie” Davis ➤ https://twitter.com/PinkieToons\n\nBACKGROUNDS \nAnnie Loomis ➤ https://twitter.com/annieloomisart \nJessica McGinnis ➤ https://twitter.com/jaykittens \nLaura Walsh ➤ https://twitter.com/aspentri \nAntiDarkHeart ➤ https://twitter.com/AntiDarkHeart \nJasper Luu ➤ https://twitter.com/PortableBunbun \nKatelyn \"Lenny\" ➤ https://twitter.com/sweetpea_arts \n\n2D ANIMATION\nRushlight Invader ➤ https://www.youtube.com/user/RushLightInvader \nAreg Savchenko ➤ https://twitter.com/TheRegyman\nNoah Cheruk ➤ https://twitter.com/RocketSockit\nJulia Schoel ➤ https://twitter.com/papajoolia\nDavid Toons ➤ https://twitter.com/DavidToons_\n\nRIG ANIMATION\nRebecca Kartzmark ➤ https://twitter.com/Kartzmark\nJerb ➤ https://twitter.com/JerbJPG\nEmilee Dummer ➤ https://www.instagram.com/edummerart/ \nKelly Jensen ➤ https://www.instagram.com/kelly_anne_art/\nRiki Kuniyuki ➤ https://www.instagram.com/rikikuniyuki_art/\n\nASSETS \nJulia Klimas ➤ https://twitter.com/Julobster \nJada Kurian ➤ https://jada-kurian.myportfolio.com/ \nLovelesskia ➤ https://twitter.com/lovelesskia\n\nEDITOR \nZade ➤ https://twitter.com/RealZade\n\nTwitter ➤ https://twitter.com/theodd1sout\nInstagram ➤ https://www.instagram.com/theodd1sout/\nSecond Channel ➤ https://www.youtube.com/channel/UC0GLNhtTu7yI8rl6ZZGeezw\nTIkTok ➤ https://www.tiktok.com/@theoddtiktoksout"
        },
        "defaultAudioLanguage": "en"
      },
      "contentDetails": {
        "duration": "PT9M3S",
        "dimension": "2d",
        "definition": "hd",
        "caption": "false",
        "licensedContent": true,
        "contentRating": {
          
        },
        "projection": "rectangular"
      },
      "statistics": {
        "viewCount": "1601957",
        "likeCount": "117095",
        "favoriteCount": "0",
        "commentCount": "6654"
      }
    },
    {
      "kind": "youtube#video",
      "etag": "tOoUrxZiHVlpesBo4kJ3q3bPrIY",
      "id": "zrmLaMBJsdg",
      "snippet": {
        "publishedAt": "2023-04-03T14:11:28Z",
        "channelId": "UC-2YHgc363EdcusLIBbgxzg",
        "title": "This Can't Be Good...",
        "description": "For 50% off with HelloFresh PLUS free shipping on your first box, use code JOESCOTT50 at https://bit.ly/3lCe7PY!\nRecently, a team of Chinese geologists announced that Earth's core has \"stopped spinning.\" This led to a flood of headlines predicting doom and gloom galore. But is it as dangerous as the movie The Core suggests? Let's look at it.\n\nSKETCH MADNESS HAS STARTED!\nGo here to vote and win prizes: http://www.thatjoescott.com/madness\n\nWant to support the channel? Here's how:\n\nPatreon: http://www.patreon.com/answerswithjoe\nChannel Memberships: https://www.youtube.com/channel/UC-2YHgc363EdcusLIBbgxzg/join\nT-Shirts & Merch: http://www.answerswithjoe.com/store\n\nCheck out my 2nd channel, Joe Scott TMI:\nhttps://www.youtube.com/channel/UCqi721JsXlf0wq3Z_cNA_Ew\n\nAnd my podcast channel, Conversations With Joe:\nhttps://www.youtube.com/channel/UCJzc7TiJ2nnuyJkUpOZ8RKA\n\nYou can listen to my podcast, Conversations With Joe on Spotify, Apple Podcasts, Google Podcasts, or wherever you get your podcasts.\nSpotify 👉 https://spoti.fi/37iPGzF\nApple Podcasts 👉 https://apple.co/3j94kfq\nGoogle Podcasts 👉 https://bit.ly/3qZCo1V\n\nInterested in getting a Tesla or going solar? Use my referral link and get discounts and perks:\nhttps://ts.la/joe74700\n\nFollow me at all my places!\nInstagram: https://instagram.com/answerswithjoe\nTikTok: https://www.tiktok.com/@answerswithjoe\nFacebook: http://www.facebook.com/answerswithjoe\nTwitter: https://www.twitter.com/answerswithjoe\nOn The Web: http//www.thatjoescott.com\n\nLINKS LINKS LINKS\nhttp://en.cags.ac.cn/News/12202.htm \nhttps://www.imdb.com/title/tt0298814/?ref_=tt_urv\nhttps://acortar.link/XxIVUp \nhttps://www.nature.com/articles/d41586-023-00167-1\nhttps://education.nationalgeographic.org/resource/core\nhttps://www.pmfias.com/earths-magnetic-field-magnetosphere\nhttps://www.usgs.gov/faqs/how-does-earths-core-generate-magnetic-field\nhttps://all-geo.org/highlyallochthonous/2008/03/where-the-earths-magnetic-field-comes-from/\nhttps://news.mit.edu/2020/origins-earth-magnetic-field-mystery-0408\nhttps://theconversation.com/curious-kids-what-would-happen-if-the-earths-core-went-cold-107537\nhttps://www.businessinsider.com/nasa-insight-lander-reveals-structure-mars-core-mantle-crust-2021-7\nhttps://www.esa.int/Applications/Observing_the_Earth/FutureEO/Swarm/Swarm_probes_weakening_of_Earth_s_magnetic_field\nhttps://earthsky.org/earth/magnetic-north-rapid-drift-blobs-flux/\nhttps://theconversation.com/the-length-of-earths-days-has-been-mysteriously-increasing-and-scientists-dont-know-why-188147\nhttps://physics.stackexchange.com/questions/68677/what-is-the-evidence-for-the-super-rotation-of-earths-inner-core\nhttps://climate.nasa.gov/ask-nasa-climate/3104/flip-flop-why-variations-in-earths-magnetic-field-arent-causing-todays-climate-change/\n\n\nTIMESTAMPS\n0:00 - Intro\n1:18 - New Room\n3:23 - A Tale of Two Cores\n5:40 - Layered Composition\n7:41 - Magnetosphere Maintenance\n10:00 - The Rotation Cycle\n13:50 - Sponsor - Hello Fresh\n15:27 - New Website and Tournament Announcement!",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/zrmLaMBJsdg/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/zrmLaMBJsdg/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/zrmLaMBJsdg/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/zrmLaMBJsdg/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/zrmLaMBJsdg/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "Joe Scott",
        "tags": [
          "answers with joe",
          "joe scott"
        ],
        "categoryId": "28",
        "liveBroadcastContent": "none",
        "localized": {
          "title": "This Can't Be Good...",
          "description": "For 50% off with HelloFresh PLUS free shipping on your first box, use code JOESCOTT50 at https://bit.ly/3lCe7PY!\nRecently, a team of Chinese geologists announced that Earth's core has \"stopped spinning.\" This led to a flood of headlines predicting doom and gloom galore. But is it as dangerous as the movie The Core suggests? Let's look at it.\n\nSKETCH MADNESS HAS STARTED!\nGo here to vote and win prizes: http://www.thatjoescott.com/madness\n\nWant to support the channel? Here's how:\n\nPatreon: http://www.patreon.com/answerswithjoe\nChannel Memberships: https://www.youtube.com/channel/UC-2YHgc363EdcusLIBbgxzg/join\nT-Shirts & Merch: http://www.answerswithjoe.com/store\n\nCheck out my 2nd channel, Joe Scott TMI:\nhttps://www.youtube.com/channel/UCqi721JsXlf0wq3Z_cNA_Ew\n\nAnd my podcast channel, Conversations With Joe:\nhttps://www.youtube.com/channel/UCJzc7TiJ2nnuyJkUpOZ8RKA\n\nYou can listen to my podcast, Conversations With Joe on Spotify, Apple Podcasts, Google Podcasts, or wherever you get your podcasts.\nSpotify 👉 https://spoti.fi/37iPGzF\nApple Podcasts 👉 https://apple.co/3j94kfq\nGoogle Podcasts 👉 https://bit.ly/3qZCo1V\n\nInterested in getting a Tesla or going solar? Use my referral link and get discounts and perks:\nhttps://ts.la/joe74700\n\nFollow me at all my places!\nInstagram: https://instagram.com/answerswithjoe\nTikTok: https://www.tiktok.com/@answerswithjoe\nFacebook: http://www.facebook.com/answerswithjoe\nTwitter: https://www.twitter.com/answerswithjoe\nOn The Web: http//www.thatjoescott.com\n\nLINKS LINKS LINKS\nhttp://en.cags.ac.cn/News/12202.htm \nhttps://www.imdb.com/title/tt0298814/?ref_=tt_urv\nhttps://acortar.link/XxIVUp \nhttps://www.nature.com/articles/d41586-023-00167-1\nhttps://education.nationalgeographic.org/resource/core\nhttps://www.pmfias.com/earths-magnetic-field-magnetosphere\nhttps://www.usgs.gov/faqs/how-does-earths-core-generate-magnetic-field\nhttps://all-geo.org/highlyallochthonous/2008/03/where-the-earths-magnetic-field-comes-from/\nhttps://news.mit.edu/2020/origins-earth-magnetic-field-mystery-0408\nhttps://theconversation.com/curious-kids-what-would-happen-if-the-earths-core-went-cold-107537\nhttps://www.businessinsider.com/nasa-insight-lander-reveals-structure-mars-core-mantle-crust-2021-7\nhttps://www.esa.int/Applications/Observing_the_Earth/FutureEO/Swarm/Swarm_probes_weakening_of_Earth_s_magnetic_field\nhttps://earthsky.org/earth/magnetic-north-rapid-drift-blobs-flux/\nhttps://theconversation.com/the-length-of-earths-days-has-been-mysteriously-increasing-and-scientists-dont-know-why-188147\nhttps://physics.stackexchange.com/questions/68677/what-is-the-evidence-for-the-super-rotation-of-earths-inner-core\nhttps://climate.nasa.gov/ask-nasa-climate/3104/flip-flop-why-variations-in-earths-magnetic-field-arent-causing-todays-climate-change/\n\n\nTIMESTAMPS\n0:00 - Intro\n1:18 - New Room\n3:23 - A Tale of Two Cores\n5:40 - Layered Composition\n7:41 - Magnetosphere Maintenance\n10:00 - The Rotation Cycle\n13:50 - Sponsor - Hello Fresh\n15:27 - New Website and Tournament Announcement!"
        },
        "defaultAudioLanguage": "en"
      },
      "contentDetails": {
        "duration": "PT19M46S",
        "dimension": "2d",
        "definition": "hd",
        "caption": "false",
        "licensedContent": true,
        "contentRating": {
          
        },
        "projection": "rectangular"
      },
      "statistics": {
        "viewCount": "334185",
        "likeCount": "23145",
        "favoriteCount": "0",
        "commentCount": "2709"
      }
    },
    {
      "kind": "youtube#video",
      "etag": "hJ0px3wpQnqTx2tBdJBCRPL4fNQ",
      "id": "RPH2APBoVtI",
      "snippet": {
        "publishedAt": "2023-04-01T19:17:11Z",
        "channelId": "UCyps-v4WNjWDnYRKmZ4BUGw",
        "title": "Walking On Water Prank",
        "description": "GO GRAB A BOTTLE OF PIZZAFY!! https://pizzafy.com\n\nFollow me on Instagram!\nINSTAGRAM ▶️ https://urlgeni.us/instagram/jBHg\n\nFOLLOW MY FRIENDS:\nMack: https://www.instagram.com/mack\nTyler: https://www.youtube.com/c/tylerblanchard\nBeans: https://www.instagram.com/samuelj_thomas/?hl=en\n\nOriginal stunt credits to these legends\nRahat: https://www.youtube.com/@UCCsj3Uk-cuVQejdoX-Pc_Lg \nCarrieNYC: https://www.youtube.com/@UCogPqsx02AQ2QF6ooYchnIA \n\nOuttro song ▶️ Axel Thesleff - Bad Karma\nYouTube: https://bit.ly/3k6Uadj\nSpotify: https://spoti.fi/3odq3TN\nInstagram: https://bit.ly/3lsccaz",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/RPH2APBoVtI/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/RPH2APBoVtI/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/RPH2APBoVtI/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/RPH2APBoVtI/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/RPH2APBoVtI/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "Airrack",
        "categoryId": "24",
        "liveBroadcastContent": "none",
        "localized": {
          "title": "Walking On Water Prank",
          "description": "GO GRAB A BOTTLE OF PIZZAFY!! https://pizzafy.com\n\nFollow me on Instagram!\nINSTAGRAM ▶️ https://urlgeni.us/instagram/jBHg\n\nFOLLOW MY FRIENDS:\nMack: https://www.instagram.com/mack\nTyler: https://www.youtube.com/c/tylerblanchard\nBeans: https://www.instagram.com/samuelj_thomas/?hl=en\n\nOriginal stunt credits to these legends\nRahat: https://www.youtube.com/@UCCsj3Uk-cuVQejdoX-Pc_Lg \nCarrieNYC: https://www.youtube.com/@UCogPqsx02AQ2QF6ooYchnIA \n\nOuttro song ▶️ Axel Thesleff - Bad Karma\nYouTube: https://bit.ly/3k6Uadj\nSpotify: https://spoti.fi/3odq3TN\nInstagram: https://bit.ly/3lsccaz"
        },
        "defaultAudioLanguage": "en"
      },
      "contentDetails": {
        "duration": "PT12M33S",
        "dimension": "2d",
        "definition": "hd",
        "caption": "false",
        "licensedContent": true,
        "contentRating": {
          
        },
        "projection": "rectangular"
      },
      "statistics": {
        "viewCount": "6678613",
        "likeCount": "224963",
        "favoriteCount": "0",
        "commentCount": "8687"
      }
    },
    {
      "kind": "youtube#video",
      "etag": "npw1Bg69I8NTQoyrgb-GbvEC0AQ",
      "id": "tIUahhljm44",
      "snippet": {
        "publishedAt": "2023-04-02T15:00:37Z",
        "channelId": "UCto7D1L-MiRoOziCXK9uT5Q",
        "title": "I Was Hired to Professionally Ruin a Restaurant - Chef Life",
        "description": "Download Call of Dragons for free and use my code PlayCoDNow to get some free in-game starters: https://bit.ly/LetsGameitout_CoDLaunch\n\nJOIN MY STREAMS! ► https://www.twitch.tv/letsgameitout\n\nMerch!  ►  http://bit.ly/LetsGameItOutStore\n\nSubscribe if you enjoy! ► http://bit.ly/letsgameitout_show\n\nTwitter ► https://twitter.com/letsgameitout\nTikTok ► https://www.tiktok.com/@letsgameitout\nFacebook ► https://www.facebook.com/letsgameitout\n\nWant more LGIO?!\n\nMore Simulator Mayhem ► https://www.youtube.com/watch?v=UqaNKNgSxYI&list=PLrBjj4brdIRzn3ja4BfqYUForg0p-p5wi\n\nFunny Tycoon Games ► https://www.youtube.com/watch?v=UqaNKNgSxYI&list=PLrBjj4brdIRwf14QPGmfDXCQQrDs860ig\n\nThe Finest One-Offs ► https://www.youtube.com/watch?v=zIOFGCbwJSs&list=PLrBjj4brdIRwKf72d6spk7fSHhwwYuQu1\n\nSome Truly Bizarre Games  ► https://www.youtube.com/watch?v=zIOFGCbwJSs&list=PLrBjj4brdIRyM5mUsHwPN0PH6UVNfeNl2\n\n#LetsGameItOut #Simulation\n\nI Was Hired to Professionally Ruin a Restaurant - Chef Life - Let's Game It Out\n\n----------\n\nCheck it out on Steam ► https://store.steampowered.com/app/1122340/Chef_Life_A_Restaurant_Simulator/\n\nA key was provided by the publisher.\n\nMore about Chef Life: A Restaurant Simulator (from Steam):\n\n\nTake the reins of your dream restaurant\nChoose and customise dozens of kitchen components (cooking surfaces, food processors, ovens, etc.) to build your dream kitchen! Before firing up your burners, organise your team and manage your suppliers to obtain premium ingredients that would impress the most demanding of gourmets.Track your finances and predict how busy you will be so you are not overwhelmed by the dinner rush!\n\n\nA menu built around your own tastes\nAre you more of a bœuf bourguignon or caccio e pepe type of chef? Build your menu around classic dishes from French, Italian and international cuisine! Are you looking to go beyond just basic recipes? Improve them and take them to new gastronomic heights! Adapt your menu to the seasons and your customers' expectations to make a name for yourself.\n\nChop, grill, bake, mix and more!\nYour cooking and management skills will be put to the test during each service. Your team will provide invaluable help for satisfying your demanding customers. Manage the cutting, cooking and all the preparation, right up to plating where you can add your creative touch.\n\nFrom local café to Michelin-starred restaurant\nLearn how to keep your customers loyal and grow your restaurant. Learn new recipes and refine your cooking skills. Do you want to become the neighbourhood's favourite hotspot, or will you pursue fine dining and ultimately earn a prestigious star from the Michelin Guide?",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/tIUahhljm44/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/tIUahhljm44/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/tIUahhljm44/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/tIUahhljm44/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/tIUahhljm44/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "Let's Game It Out",
        "tags": [
          "let's game it out",
          "lets game it out",
          "let game it out",
          "let'sgameitout",
          "letsgameitout",
          "letgameitout",
          "game it out",
          "gameitout",
          "lgio",
          "josh let's game it out",
          "let's game it out josh",
          "lgio josh",
          "josh lgio",
          "let's game it out simulator",
          "josh simulator",
          "funny moments",
          "let's game it out chef",
          "let's game it out cooking",
          "cooking simulator",
          "cooking sim",
          "chef life",
          "chef life game",
          "chef life gameplay",
          "chef life a restaurant simulator",
          "restaurant simulator"
        ],
        "categoryId": "20",
        "liveBroadcastContent": "none",
        "localized": {
          "title": "I Was Hired to Professionally Ruin a Restaurant - Chef Life",
          "description": "Download Call of Dragons for free and use my code PlayCoDNow to get some free in-game starters: https://bit.ly/LetsGameitout_CoDLaunch\n\nJOIN MY STREAMS! ► https://www.twitch.tv/letsgameitout\n\nMerch!  ►  http://bit.ly/LetsGameItOutStore\n\nSubscribe if you enjoy! ► http://bit.ly/letsgameitout_show\n\nTwitter ► https://twitter.com/letsgameitout\nTikTok ► https://www.tiktok.com/@letsgameitout\nFacebook ► https://www.facebook.com/letsgameitout\n\nWant more LGIO?!\n\nMore Simulator Mayhem ► https://www.youtube.com/watch?v=UqaNKNgSxYI&list=PLrBjj4brdIRzn3ja4BfqYUForg0p-p5wi\n\nFunny Tycoon Games ► https://www.youtube.com/watch?v=UqaNKNgSxYI&list=PLrBjj4brdIRwf14QPGmfDXCQQrDs860ig\n\nThe Finest One-Offs ► https://www.youtube.com/watch?v=zIOFGCbwJSs&list=PLrBjj4brdIRwKf72d6spk7fSHhwwYuQu1\n\nSome Truly Bizarre Games  ► https://www.youtube.com/watch?v=zIOFGCbwJSs&list=PLrBjj4brdIRyM5mUsHwPN0PH6UVNfeNl2\n\n#LetsGameItOut #Simulation\n\nI Was Hired to Professionally Ruin a Restaurant - Chef Life - Let's Game It Out\n\n----------\n\nCheck it out on Steam ► https://store.steampowered.com/app/1122340/Chef_Life_A_Restaurant_Simulator/\n\nA key was provided by the publisher.\n\nMore about Chef Life: A Restaurant Simulator (from Steam):\n\n\nTake the reins of your dream restaurant\nChoose and customise dozens of kitchen components (cooking surfaces, food processors, ovens, etc.) to build your dream kitchen! Before firing up your burners, organise your team and manage your suppliers to obtain premium ingredients that would impress the most demanding of gourmets.Track your finances and predict how busy you will be so you are not overwhelmed by the dinner rush!\n\n\nA menu built around your own tastes\nAre you more of a bœuf bourguignon or caccio e pepe type of chef? Build your menu around classic dishes from French, Italian and international cuisine! Are you looking to go beyond just basic recipes? Improve them and take them to new gastronomic heights! Adapt your menu to the seasons and your customers' expectations to make a name for yourself.\n\nChop, grill, bake, mix and more!\nYour cooking and management skills will be put to the test during each service. Your team will provide invaluable help for satisfying your demanding customers. Manage the cutting, cooking and all the preparation, right up to plating where you can add your creative touch.\n\nFrom local café to Michelin-starred restaurant\nLearn how to keep your customers loyal and grow your restaurant. Learn new recipes and refine your cooking skills. Do you want to become the neighbourhood's favourite hotspot, or will you pursue fine dining and ultimately earn a prestigious star from the Michelin Guide?"
        },
        "defaultAudioLanguage": "en"
      },
      "contentDetails": {
        "duration": "PT15M52S",
        "dimension": "2d",
        "definition": "hd",
        "caption": "false",
        "licensedContent": true,
        "contentRating": {
          
        },
        "projection": "rectangular"
      },
      "statistics": {
        "viewCount": "1335443",
        "likeCount": "70319",
        "favoriteCount": "0",
        "commentCount": "2768"
      }
    },
    {
      "kind": "youtube#video",
      "etag": "4Eo2gqtrXGXx417C250oOrOxofw",
      "id": "buKcergt4dA",
      "snippet": {
        "publishedAt": "2023-04-02T14:15:02Z",
        "channelId": "UCAM2fyCjEdROyELretVTiiw",
        "title": "I Bought UNREALISTIC Pinterest Beauty Products",
        "description": "Get Honey for FREE today ▸ https://joinhoney.com/hope  \nHoney finds coupons with one click. Thanks to Honey for sponsoring!\nWATCH THIS NEXT!\nI Bought UNREALISTIC PINTEREST Dresses:\nhttps://www.youtube.com/watch?v=9zwciSGkr5U&list=PLNwTWSLp87CzHnACpIlZ7KXkZDH_61GdN&index=2&t=484s\nI Bought UNREALISTIC PINTEREST Products:\nhttps://www.youtube.com/watch?v=jOe_xY5-DII&list=PLNwTWSLp87CzHnACpIlZ7KXkZDH_61GdN&index=4&t=23s\nAll my other PINTEREST purchase videos :)\nhttps://youtube.com/playlist?list=PLNwTWSLp87CzHnACpIlZ7KXkZDH_61GdN\n\nSHOP my FAVES from THIS VIDEO:\n\nHair Chalk:\nhttps://amzn.to/3zoUBtt\n\nMouse Foundation:\nhttps://amzn.to/3GchGDE\n\nStick on Eyeliner:\nhttps://eyelinersticker.com/\n\nAmazon version if you want to try it!\nhttps://amzn.to/3zsWmG9\n\n4 in 1 Makeup Pen:\nhttps://amzn.to/3zw8G8l\n\nSubscribe to my SECOND channel for REVIEWS, RANTS, and REACTIONS!\nhttps://www.youtube.com/channel/UCnk1idRUmwhdpy_5Il1unfw\n\nTEXT ME a “Hi’ to 1-310-582-5313 so we can stay in touch :)\n(It's free! Available for US and Canada residents- regular text rates may apply)\n\n@HopeScope on INSTAGRAM for Giveaways, workouts and more!\nhttps://www.instagram.com/hopescope\n\n@HopeScope on TIKTOK for some laughs\n\nBUSINESS INQUIRIES ONLY:\ntyler@hopescopepromotions.com",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/buKcergt4dA/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/buKcergt4dA/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/buKcergt4dA/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/buKcergt4dA/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/buKcergt4dA/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "HopeScope",
        "tags": [
          "instagram vs reality",
          "funny",
          "expectation vs reality",
          "online shopping fail",
          "pinterest haul",
          "fail",
          "very extra haul",
          "unrealistic pinterest",
          "viral tiktok",
          "pinterest accessories",
          "viral makeup",
          "beauty",
          "makeup",
          "makeup hack",
          "hair",
          "pinterest hair",
          "hair style",
          "easy hair",
          "DIY hair",
          "tiktok makeup",
          "tiktok beauty"
        ],
        "categoryId": "26",
        "liveBroadcastContent": "none",
        "localized": {
          "title": "I Bought UNREALISTIC Pinterest Beauty Products",
          "description": "Get Honey for FREE today ▸ https://joinhoney.com/hope  \nHoney finds coupons with one click. Thanks to Honey for sponsoring!\nWATCH THIS NEXT!\nI Bought UNREALISTIC PINTEREST Dresses:\nhttps://www.youtube.com/watch?v=9zwciSGkr5U&list=PLNwTWSLp87CzHnACpIlZ7KXkZDH_61GdN&index=2&t=484s\nI Bought UNREALISTIC PINTEREST Products:\nhttps://www.youtube.com/watch?v=jOe_xY5-DII&list=PLNwTWSLp87CzHnACpIlZ7KXkZDH_61GdN&index=4&t=23s\nAll my other PINTEREST purchase videos :)\nhttps://youtube.com/playlist?list=PLNwTWSLp87CzHnACpIlZ7KXkZDH_61GdN\n\nSHOP my FAVES from THIS VIDEO:\n\nHair Chalk:\nhttps://amzn.to/3zoUBtt\n\nMouse Foundation:\nhttps://amzn.to/3GchGDE\n\nStick on Eyeliner:\nhttps://eyelinersticker.com/\n\nAmazon version if you want to try it!\nhttps://amzn.to/3zsWmG9\n\n4 in 1 Makeup Pen:\nhttps://amzn.to/3zw8G8l\n\nSubscribe to my SECOND channel for REVIEWS, RANTS, and REACTIONS!\nhttps://www.youtube.com/channel/UCnk1idRUmwhdpy_5Il1unfw\n\nTEXT ME a “Hi’ to 1-310-582-5313 so we can stay in touch :)\n(It's free! Available for US and Canada residents- regular text rates may apply)\n\n@HopeScope on INSTAGRAM for Giveaways, workouts and more!\nhttps://www.instagram.com/hopescope\n\n@HopeScope on TIKTOK for some laughs\n\nBUSINESS INQUIRIES ONLY:\ntyler@hopescopepromotions.com"
        }
      },
      "contentDetails": {
        "duration": "PT19M53S",
        "dimension": "2d",
        "definition": "hd",
        "caption": "false",
        "licensedContent": true,
        "contentRating": {
          
        },
        "projection": "rectangular"
      },
      "statistics": {
        "viewCount": "1298092",
        "likeCount": "45721",
        "favoriteCount": "0",
        "commentCount": "1726"
      }
    },
    {
      "kind": "youtube#video",
      "etag": "0ETRvqrgUoH9ngynLFqHG3iKRP8",
      "id": "F9xISqd4Yn8",
      "snippet": {
        "publishedAt": "2023-04-02T22:24:38Z",
        "channelId": "UC7_VH_kj0aD9vhuHmFheUYQ",
        "title": "Shelter dog meets the man of her dreams",
        "description": "Shelter dog meets the man of her dreams\n\nCheck out their story: https://www.instagram.com/adventuresofzorra/\n\n#dogs #bekind #animals\n\n---------------------------\n\nYou Love Animal Videos? \nSubscribe To Us Here: https://www.youtube.com/user/geobeats...\n\nWatch Other Popular Videos:\nWild crow visits woman daily to play games - https://youtu.be/l_jGNTXwAAM\nThis man raised an opossum. Now he thinks they are smarter than dogs - https://youtu.be/Wz7GqNCkctU\nEvery sunrise, this bird visits a woman for cuddles - https://youtu.be/1QuQBnv3R_Y\nBlack cat wasn't getting adopted. Then this woman took him home - https://youtu.be/BtTygt98-1w\n\n\nFollow Us On Other Platforms:\nTwitter: https://twitter.com/geobeats\nFacebook: https://www.facebook.com/GeoBeatsAnimals\nInstagram: https://www.instagram.com/geobeatsani...\n\n\nAbout GeoBeats Animals\nGeoBeats is a US-based media company focused on telling inspiring animal stories about animals from around the world. Our goal is to make people fall in love with them and promote compassion and kindness.\n\nOn our channel, we feature exciting animal videos. You can watch funny cat videos, funny dog videos, cat and dog videos, animal stories, rescue animal videos, adopted animal videos and a lot more.",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/F9xISqd4Yn8/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/F9xISqd4Yn8/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/F9xISqd4Yn8/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/F9xISqd4Yn8/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/F9xISqd4Yn8/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "GeoBeats Animals",
        "categoryId": "15",
        "liveBroadcastContent": "none",
        "localized": {
          "title": "Shelter dog meets the man of her dreams",
          "description": "Shelter dog meets the man of her dreams\n\nCheck out their story: https://www.instagram.com/adventuresofzorra/\n\n#dogs #bekind #animals\n\n---------------------------\n\nYou Love Animal Videos? \nSubscribe To Us Here: https://www.youtube.com/user/geobeats...\n\nWatch Other Popular Videos:\nWild crow visits woman daily to play games - https://youtu.be/l_jGNTXwAAM\nThis man raised an opossum. Now he thinks they are smarter than dogs - https://youtu.be/Wz7GqNCkctU\nEvery sunrise, this bird visits a woman for cuddles - https://youtu.be/1QuQBnv3R_Y\nBlack cat wasn't getting adopted. Then this woman took him home - https://youtu.be/BtTygt98-1w\n\n\nFollow Us On Other Platforms:\nTwitter: https://twitter.com/geobeats\nFacebook: https://www.facebook.com/GeoBeatsAnimals\nInstagram: https://www.instagram.com/geobeatsani...\n\n\nAbout GeoBeats Animals\nGeoBeats is a US-based media company focused on telling inspiring animal stories about animals from around the world. Our goal is to make people fall in love with them and promote compassion and kindness.\n\nOn our channel, we feature exciting animal videos. You can watch funny cat videos, funny dog videos, cat and dog videos, animal stories, rescue animal videos, adopted animal videos and a lot more."
        }
      },
      "contentDetails": {
        "duration": "PT4M26S",
        "dimension": "2d",
        "definition": "hd",
        "caption": "false",
        "licensedContent": true,
        "contentRating": {
          
        },
        "projection": "rectangular"
      },
      "statistics": {
        "viewCount": "608640",
        "likeCount": "14010",
        "favoriteCount": "0",
        "commentCount": "696"
      }
    },
    {
      "kind": "youtube#video",
      "etag": "4OTiM862LKSk95VJMr1iUyDP7V0",
      "id": "BHMF-FlkqPw",
      "snippet": {
        "publishedAt": "2023-04-02T17:50:40Z",
        "channelId": "UC2C_jShtL725hvbm1arSV9w",
        "title": "An Experiment With YouTube Comments…",
        "description": "https://www.patreon.com/cgpgrey",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/BHMF-FlkqPw/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/BHMF-FlkqPw/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/BHMF-FlkqPw/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/BHMF-FlkqPw/sddefault.jpg",
            "width": 640,
            "height": 480
          }
        },
        "channelTitle": "CGP Grey",
        "tags": [
          "cgpgrey",
          "education"
        ],
        "categoryId": "27",
        "liveBroadcastContent": "none",
        "defaultLanguage": "en",
        "localized": {
          "title": "An Experiment With YouTube Comments…",
          "description": "https://www.patreon.com/cgpgrey"
        },
        "defaultAudioLanguage": "en"
      },
      "contentDetails": {
        "duration": "PT2M1S",
        "dimension": "2d",
        "definition": "hd",
        "caption": "false",
        "licensedContent": true,
        "contentRating": {
          
        },
        "projection": "rectangular"
      },
      "statistics": {
        "viewCount": "973203",
        "likeCount": "72903",
        "favoriteCount": "0",
        "commentCount": "277"
      }
    },
    {
      "kind": "youtube#video",
      "etag": "WDFDOHmaDl_fDFqxhA5AF0WiUJg",
      "id": "Vck5O1IXSWw",
      "snippet": {
        "publishedAt": "2023-04-03T10:09:20Z",
        "channelId": "UCq8jp0E99ELBvmBxjJ-JLgA",
        "title": "Real Reason Cody Rhodes LOST To Roman Reigns At WWE WrestleMania 39",
        "description": "In Today's Wrestling News:\n\n0:00 Roundup\n00:36 Real Reason Roman Reigns SHOCKED Cody Rhodes At WWE WrestleMania 39\n04:36 Backstage Update On When WWE Decided On Cody Rhodes' WrestleMania 39 Loss\n06:27 WWE WrestleMania 39: Update On Shane McMahon & Finn Balor's Injuries\n08:28 Latest On WWE's Endeavor Takeover - Backstage Reactions & More\n11:11Twitter Questions\n\n#WrestleMania39 #CodyRhodes #RomanReigns\n\nFor more awesome WWE, AEW and other wrestling content check out: https://whatculture.com/wwe\nListen to our daily wrestling PODCASTS: https://whatculture.com/wrestleculture \n\nFollow us!\nFacebook: https://www.facebook.com/whatculturewwe \nTwitter: https://twitter.com/whatculturewwe \nInstagram: https://www.instagram.com/whatculturewrestling",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/Vck5O1IXSWw/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/Vck5O1IXSWw/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/Vck5O1IXSWw/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/Vck5O1IXSWw/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/Vck5O1IXSWw/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "WhatCulture Wrestling",
        "tags": [
          "wwe",
          "wrestling",
          "what culture",
          "whatculture",
          "whatculture wrestling",
          "whatculture wwe"
        ],
        "categoryId": "17",
        "liveBroadcastContent": "none",
        "defaultLanguage": "en",
        "localized": {
          "title": "Real Reason Cody Rhodes LOST To Roman Reigns At WWE WrestleMania 39",
          "description": "In Today's Wrestling News:\n\n0:00 Roundup\n00:36 Real Reason Roman Reigns SHOCKED Cody Rhodes At WWE WrestleMania 39\n04:36 Backstage Update On When WWE Decided On Cody Rhodes' WrestleMania 39 Loss\n06:27 WWE WrestleMania 39: Update On Shane McMahon & Finn Balor's Injuries\n08:28 Latest On WWE's Endeavor Takeover - Backstage Reactions & More\n11:11Twitter Questions\n\n#WrestleMania39 #CodyRhodes #RomanReigns\n\nFor more awesome WWE, AEW and other wrestling content check out: https://whatculture.com/wwe\nListen to our daily wrestling PODCASTS: https://whatculture.com/wrestleculture \n\nFollow us!\nFacebook: https://www.facebook.com/whatculturewwe \nTwitter: https://twitter.com/whatculturewwe \nInstagram: https://www.instagram.com/whatculturewrestling"
        },
        "defaultAudioLanguage": "en"
      },
      "contentDetails": {
        "duration": "PT17M50S",
        "dimension": "2d",
        "definition": "hd",
        "caption": "false",
        "licensedContent": true,
        "contentRating": {
          
        },
        "projection": "rectangular"
      },
      "statistics": {
        "viewCount": "220424",
        "likeCount": "5332",
        "favoriteCount": "0",
        "commentCount": "2615"
      }
    },
    {
      "kind": "youtube#video",
      "etag": "wRLGenLCoCXligZ_If1H_D9Y46c",
      "id": "Ey_vGhau7ho",
      "snippet": {
        "publishedAt": "2023-04-01T13:59:55Z",
        "channelId": "UCRijo3ddMTht_IHyNSNXpNQ",
        "title": "World's Strongest Dude",
        "description": "We got RIPPED for this epic battle! Time to find out which dude is the strongest!!\n► Come see us in YOUR city! - http://dudeperfect.com/tour/\n► Thanks for subscribing! - http://bit.ly/SubDudePerfect\n\nMusic by Club Danger:\n► Click HERE to listen on Spotify - https://spotify.link/VCT3RKHgzyb\n► Click HERE to listen on YouTube - https://youtu.be/uKok3TC_zTc\n\nThank you to FCF FIT for having us out. if you want to learn more about classes and workouts, check them out at ► https://fcffit.com/\n\nNEXT LEVEL STUFF \n-------------------------------------------\n🎒 NEW Merch - http://bit.ly/DPStore\n📱 Text us - (469) 205-7005\n🔔 Hit the bell next to Subscribe so you don't miss a video!\n👨🏻‍💻 Watch our newest vids! - http://bit.ly/NewDPVids\n📕 Read our Book - \"101 Tips, Tricks and Cool Stuff\" - https://bit.ly/NewDPBook\n\nFollow our Instagrams so we can be best friends \n-------------------------------------------\n🏆 http://Instagram.com/DudePerfect\n🧔🏻 http://Instagram.com/TylerNToney\n👱🏻‍♂️ http://Instagram.com/Cody_Jones_\n🙋🏻‍♂️ http://Instagram.com/CobyCotton\n👨‍🦰 http://Instagram.com/GarrettHilbert\n⛹🏻‍♂️ http://Instagram.com/CoryCotton\n-------------------------------------------\nArtist: Club Danger\nMaster Owner: Sam Tinnesz (20%), Riley Friesen (40%), Derek Mount (40%)\n“Living Legend”\nWritten by Samuel Tinnesz, Riley Friesen and Derek Mount\n©2018 Savage Youth Music Publishing (SESAC) admin. Me Gusta Music / Songs for Full Circle Music (ASCAP) admin. by Kobalt / Man Night Music (BMI)\nPerformed by Club Danger\n-------------------------------------------\nBonus points if you're still reading this! \nComment: SWOLE TRAIN!\n\nClick here to learn more about Dude Perfect:\nhttp://bit.ly/AboutDudePerfect\n\nAs always...Go Big and God Bless!\n- Your friends at Dude Perfect\n\nBusiness or Media, please contact us at: \nDude@DudePerfect.com\n\n------------\n\n5 Best Friends and a Panda.\nIf you like Sports + Comedy, come join the Dude Perfect team!\n\nBest known for trick shots, stereotypes, battles, bottle flips, ping pong shots and all-around competitive fun, Dude Perfect prides ourselves in making the absolute best family-friendly entertainment possible! Welcome to the crew! \n\nPound it 👊🏻 Noggin 🙇🏻‍♂️ \n- Dude Perfect",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/Ey_vGhau7ho/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/Ey_vGhau7ho/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/Ey_vGhau7ho/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/Ey_vGhau7ho/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/Ey_vGhau7ho/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "Dude Perfect",
        "tags": [
          "dude perfect",
          "dude perfect stereotypes",
          "dude perfect water bottle flip",
          "bottle flip",
          "water bottle flip",
          "dude perfect bottle flip",
          "dude perfect basketball",
          "dp",
          "dude perfect world record",
          "edition",
          "nerf",
          "trick shots",
          "trick shot",
          "family",
          "ping pong",
          "bowling",
          "clean",
          "family friendly",
          "bubble wrap",
          "soccer",
          "football",
          "spinner",
          "spinners",
          "fidget spinners",
          "dude",
          "strong",
          "strongest",
          "world",
          "world's",
          "worlds",
          "ripped",
          "muscle",
          "suit",
          "suits",
          "chubby",
          "dubby",
          "coby",
          "swole",
          "battle",
          "man",
          "competition",
          "truck",
          "pull",
          "stone",
          "carry"
        ],
        "categoryId": "17",
        "liveBroadcastContent": "none",
        "localized": {
          "title": "World's Strongest Dude",
          "description": "We got RIPPED for this epic battle! Time to find out which dude is the strongest!!\n► Come see us in YOUR city! - http://dudeperfect.com/tour/\n► Thanks for subscribing! - http://bit.ly/SubDudePerfect\n\nMusic by Club Danger:\n► Click HERE to listen on Spotify - https://spotify.link/VCT3RKHgzyb\n► Click HERE to listen on YouTube - https://youtu.be/uKok3TC_zTc\n\nThank you to FCF FIT for having us out. if you want to learn more about classes and workouts, check them out at ► https://fcffit.com/\n\nNEXT LEVEL STUFF \n-------------------------------------------\n🎒 NEW Merch - http://bit.ly/DPStore\n📱 Text us - (469) 205-7005\n🔔 Hit the bell next to Subscribe so you don't miss a video!\n👨🏻‍💻 Watch our newest vids! - http://bit.ly/NewDPVids\n📕 Read our Book - \"101 Tips, Tricks and Cool Stuff\" - https://bit.ly/NewDPBook\n\nFollow our Instagrams so we can be best friends \n-------------------------------------------\n🏆 http://Instagram.com/DudePerfect\n🧔🏻 http://Instagram.com/TylerNToney\n👱🏻‍♂️ http://Instagram.com/Cody_Jones_\n🙋🏻‍♂️ http://Instagram.com/CobyCotton\n👨‍🦰 http://Instagram.com/GarrettHilbert\n⛹🏻‍♂️ http://Instagram.com/CoryCotton\n-------------------------------------------\nArtist: Club Danger\nMaster Owner: Sam Tinnesz (20%), Riley Friesen (40%), Derek Mount (40%)\n“Living Legend”\nWritten by Samuel Tinnesz, Riley Friesen and Derek Mount\n©2018 Savage Youth Music Publishing (SESAC) admin. Me Gusta Music / Songs for Full Circle Music (ASCAP) admin. by Kobalt / Man Night Music (BMI)\nPerformed by Club Danger\n-------------------------------------------\nBonus points if you're still reading this! \nComment: SWOLE TRAIN!\n\nClick here to learn more about Dude Perfect:\nhttp://bit.ly/AboutDudePerfect\n\nAs always...Go Big and God Bless!\n- Your friends at Dude Perfect\n\nBusiness or Media, please contact us at: \nDude@DudePerfect.com\n\n------------\n\n5 Best Friends and a Panda.\nIf you like Sports + Comedy, come join the Dude Perfect team!\n\nBest known for trick shots, stereotypes, battles, bottle flips, ping pong shots and all-around competitive fun, Dude Perfect prides ourselves in making the absolute best family-friendly entertainment possible! Welcome to the crew! \n\nPound it 👊🏻 Noggin 🙇🏻‍♂️ \n- Dude Perfect"
        },
        "defaultAudioLanguage": "en"
      },
      "contentDetails": {
        "duration": "PT13M51S",
        "dimension": "2d",
        "definition": "hd",
        "caption": "false",
        "licensedContent": true,
        "contentRating": {
          
        },
        "projection": "rectangular"
      },
      "statistics": {
        "viewCount": "5981388",
        "likeCount": "193529",
        "favoriteCount": "0",
        "commentCount": "5199"
      }
    },
    {
      "kind": "youtube#video",
      "etag": "uaDJLEMbbRQeRqKqPmLQJDZPmRo",
      "id": "HALG3Ty52mY",
      "snippet": {
        "publishedAt": "2023-04-03T12:00:11Z",
        "channelId": "UCEIi7zFR_wE23jFncVtd6-A",
        "title": "[BE ORIGINAL] Jimin(지민) 'Like Crazy' (4K)",
        "description": "[BE ORIGINAL] Jimin 'Like Crazy' (Teaser)\n[비 오리지널] 지민 'Like Crazy' (티저)\n\n박지민 춤선 천재 만재 언제나 짜릿해💜\n(2:00) 케이팝의 신 안무 표현력 미치셨다\n\n#Jimin #지민 #BEORIGINAL\n\nStream various performance video on #STUDIOCHOOM!\n\n👉SUBSCRIBE👈\nYouTube: https://www.youtube.com/STUDIOCHOOM\nFacebook:  https://www.facebook.com/StudioCHOOM\nInstagram: https://www.instagram.com/studio_choom/\nNaver TV: https://tv.naver.com/cjenm.STUDIOCHOOM",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/HALG3Ty52mY/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/HALG3Ty52mY/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/HALG3Ty52mY/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/HALG3Ty52mY/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/HALG3Ty52mY/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "STUDIO CHOOM [스튜디오 춤]",
        "tags": [
          "M2",
          "엠투",
          "스튜디오 춤",
          "스춤",
          "Studio choom",
          "COVERS",
          "커버스",
          "DANCE THE X",
          "댄스 더 엑스",
          "댄스",
          "DANCE",
          "비 오리지널",
          "BE ORIGINAL",
          "커버",
          "COVER",
          "Artist Of The Month",
          "AOTM",
          "Drop the dance",
          "드롭더댄스",
          "Mix & Max",
          "믹스앤맥스",
          "믹앤맥",
          "bts",
          "bts jimin",
          "jimin",
          "지민 솔로",
          "지민",
          "방탄소년단",
          "방탄",
          "방탄소년단 지민",
          "방탄 지민",
          "jimin solo",
          "like crazy",
          "jimin like crazy",
          "jimin be original",
          "be original jimin",
          "jimin studio choom",
          "studio choom jimin",
          "bts jimin solo"
        ],
        "categoryId": "24",
        "liveBroadcastContent": "none",
        "localized": {
          "title": "[BE ORIGINAL] Jimin(지민) 'Like Crazy' (4K)",
          "description": "[BE ORIGINAL] Jimin 'Like Crazy' (Teaser)\n[비 오리지널] 지민 'Like Crazy' (티저)\n\n박지민 춤선 천재 만재 언제나 짜릿해💜\n(2:00) 케이팝의 신 안무 표현력 미치셨다\n\n#Jimin #지민 #BEORIGINAL\n\nStream various performance video on #STUDIOCHOOM!\n\n👉SUBSCRIBE👈\nYouTube: https://www.youtube.com/STUDIOCHOOM\nFacebook:  https://www.facebook.com/StudioCHOOM\nInstagram: https://www.instagram.com/studio_choom/\nNaver TV: https://tv.naver.com/cjenm.STUDIOCHOOM"
        },
        "defaultAudioLanguage": "ko"
      },
      "contentDetails": {
        "duration": "PT3M23S",
        "dimension": "2d",
        "definition": "hd",
        "caption": "true",
        "licensedContent": true,
        "contentRating": {
          
        },
        "projection": "rectangular"
      },
      "statistics": {
        "viewCount": "1422970",
        "likeCount": "285822",
        "favoriteCount": "0",
        "commentCount": "9518"
      }
    },
    {
      "kind": "youtube#video",
      "etag": "8tUAGT2NR-f6bek2qqBat33rlTw",
      "id": "qFq_L-ANNNQ",
      "snippet": {
        "publishedAt": "2023-04-03T02:28:22Z",
        "channelId": "UCStBfpQeA4imrUzPJoTXoFA",
        "title": "Jelly Roll Performs “NEED A FAVOR” | 2023 CMT Music Awards",
        "description": "Jelly Roll performs “NEED A FAVOR” at the 2023 CMT Music Awards. Check out more at https://www.cmt.com/cmt-music-awards\n\n#CMTAwards #JellyRoll\n\nParamount+ is here! Stream all your favorite shows now on Paramount+. Try it FREE at https://bit.ly/3qyOeOf\n\nSUBSCRIBE now for more CMT: https://bit.ly/2EUv0Nc\n\nFor updates on all things country, follow CMT!\nCMT News & More: http://www.cmt.com\nCMT on FB: https://www.facebook.com/cmt\nCMT on Twitter: https://twitter.com/cmt\nCMT on Instagram: https://www.instagram.com/cmt/",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/qFq_L-ANNNQ/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/qFq_L-ANNNQ/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/qFq_L-ANNNQ/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/qFq_L-ANNNQ/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/qFq_L-ANNNQ/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "CMT",
        "tags": [
          "Jelly Roll",
          "Jelly Roll performance",
          "Jelly Roll live",
          "Jelly Roll cmt awards",
          "Jelly Roll cmt awards 2023",
          "cmt awards 2023",
          "cmt awards",
          "cmt",
          "NEED A FAVOR",
          "NEED A FAVOR live",
          "NEED A FAVOR Jelly Roll",
          "Jelly Roll music",
          "Jelly Roll songs",
          "country music",
          "country music awards",
          "country",
          "live performance",
          "music",
          "Jelly Roll lyrics",
          "new music",
          "Jelly Roll cmt awards performance 2023",
          "country music artist",
          "country music television",
          "jelly roll",
          "American songwriter",
          "Jason DeFord"
        ],
        "categoryId": "24",
        "liveBroadcastContent": "none",
        "localized": {
          "title": "Jelly Roll Performs “NEED A FAVOR” | 2023 CMT Music Awards",
          "description": "Jelly Roll performs “NEED A FAVOR” at the 2023 CMT Music Awards. Check out more at https://www.cmt.com/cmt-music-awards\n\n#CMTAwards #JellyRoll\n\nParamount+ is here! Stream all your favorite shows now on Paramount+. Try it FREE at https://bit.ly/3qyOeOf\n\nSUBSCRIBE now for more CMT: https://bit.ly/2EUv0Nc\n\nFor updates on all things country, follow CMT!\nCMT News & More: http://www.cmt.com\nCMT on FB: https://www.facebook.com/cmt\nCMT on Twitter: https://twitter.com/cmt\nCMT on Instagram: https://www.instagram.com/cmt/"
        },
        "defaultAudioLanguage": "en"
      },
      "contentDetails": {
        "duration": "PT3M55S",
        "dimension": "2d",
        "definition": "hd",
        "caption": "true",
        "licensedContent": true,
        "regionRestriction": {
          "blocked": [
            "AE",
            "AM",
            "BH",
            "DZ",
            "EG",
            "IQ",
            "IR",
            "JO",
            "KW",
            "LB",
            "LY",
            "MA",
            "OM",
            "PS",
            "QA",
            "SA",
            "SY",
            "TN",
            "YE"
          ]
        },
        "contentRating": {
          
        },
        "projection": "rectangular"
      },
      "statistics": {
        "viewCount": "309989",
        "likeCount": "8055",
        "favoriteCount": "0",
        "commentCount": "815"
      }
    },
    {
      "kind": "youtube#video",
      "etag": "BiRaVLQdzs_2fWqfqdxXVq2WpKA",
      "id": "Xyz25fScWQA",
      "snippet": {
        "publishedAt": "2023-04-02T16:07:29Z",
        "channelId": "UCYrBk99J2v8c58BomaNnIBA",
        "title": "Dougie B x Yagi B x Jo Bandz - OA Directed by @GUGU_FILMS",
        "description": "Director - GUGU_FILMS\nProduced by ELIWTF, Hardheaded & Afterlife\n*Follow Dougie B online:\nhttps://www.instagram.com/dougieb.\nhttps://www.tiktok.com/@._dougieb\n#dougieb #OA",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/Xyz25fScWQA/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/Xyz25fScWQA/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/Xyz25fScWQA/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/Xyz25fScWQA/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/Xyz25fScWQA/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "Dougie B",
        "categoryId": "10",
        "liveBroadcastContent": "none",
        "localized": {
          "title": "Dougie B x Yagi B x Jo Bandz - OA Directed by @GUGU_FILMS",
          "description": "Director - GUGU_FILMS\nProduced by ELIWTF, Hardheaded & Afterlife\n*Follow Dougie B online:\nhttps://www.instagram.com/dougieb.\nhttps://www.tiktok.com/@._dougieb\n#dougieb #OA"
        },
        "defaultAudioLanguage": "en-US"
      },
      "contentDetails": {
        "duration": "PT2M37S",
        "dimension": "2d",
        "definition": "hd",
        "caption": "false",
        "licensedContent": false,
        "contentRating": {
          
        },
        "projection": "rectangular"
      },
      "statistics": {
        "viewCount": "289028",
        "likeCount": "22176",
        "favoriteCount": "0",
        "commentCount": "1249"
      }
    },
    {
      "kind": "youtube#video",
      "etag": "Yl_oGxWxHJV-M1TKOLXi1Ys423Q",
      "id": "epgZ2Dbr_Tw",
      "snippet": {
        "publishedAt": "2023-04-03T06:44:37Z",
        "channelId": "UCs-w7E2HZWwXmjt9RTvBB_A",
        "title": "1 year and 25,000 tiles later... | tileman #25",
        "description": "Magic! Monsters! Mastery! Download Call of Dragons now: https://bit.ly/Settled_CoDLaunch\nuse promo code: PlayCoDNow and start your adventure today!\n\nSupport on Patreon - https://www.patreon.com/settled\nTop Supporters: https://docs.google.com/document/d/15msW8IyvfYx0RMMEgT_nu_fNkeG4nNo1lyiOGnvSd2M/edit\n\nTileman was a concept by Sram1337\nhttps://www.youtube.com/user/sram1337\n\n►Twitter: https://twitter.com/SettledRS\n►Twitch: https://www.twitch.tv/Settled\n\nIntro Song: The Thief in Marrakesh - Arc De Soleil\n\n► Play Oldschool Runescape (Free online MMORPG by Jagex) here: http://oldschool.runescape.com/\n\nYes, this is actual Old School Runescape! A Re-boot of a 2007 save file of the game, released in February of 2013. We all started fresh, and the game has been getting weekly updates with a dedicated dev team ever since.\n\nswampletics osrs settled morytania uim\n\nThumbnail work done by 8sat\nBusiness/Thumbnail work contact: @8sat_ on Twitter",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/epgZ2Dbr_Tw/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/epgZ2Dbr_Tw/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/epgZ2Dbr_Tw/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/epgZ2Dbr_Tw/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/epgZ2Dbr_Tw/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "Settled",
        "tags": [
          "Swampletics",
          "Mory",
          "Morytania",
          "Area",
          "Maxing",
          "Max",
          "OSRS",
          "UIM",
          "End",
          "Game",
          "Ultimate",
          "Ironman",
          "Old",
          "School",
          "Runescape",
          "RS3",
          "Settled",
          "Settledrs",
          "Progress",
          "Video",
          "Tricks",
          "Tips",
          "Bossing",
          "Skilling",
          "2007",
          "2007Scape",
          "Dream",
          "Gear",
          "Items",
          "Boss",
          "Episode",
          "Settled UIM",
          "UIM Settled",
          "OSRS Settled",
          "Morytania UIM",
          "Morytania Ironman",
          "Mory Ironman",
          "Maxed UIM",
          "UIM Maxing"
        ],
        "categoryId": "20",
        "liveBroadcastContent": "none",
        "localized": {
          "title": "1 year and 25,000 tiles later... | tileman #25",
          "description": "Magic! Monsters! Mastery! Download Call of Dragons now: https://bit.ly/Settled_CoDLaunch\nuse promo code: PlayCoDNow and start your adventure today!\n\nSupport on Patreon - https://www.patreon.com/settled\nTop Supporters: https://docs.google.com/document/d/15msW8IyvfYx0RMMEgT_nu_fNkeG4nNo1lyiOGnvSd2M/edit\n\nTileman was a concept by Sram1337\nhttps://www.youtube.com/user/sram1337\n\n►Twitter: https://twitter.com/SettledRS\n►Twitch: https://www.twitch.tv/Settled\n\nIntro Song: The Thief in Marrakesh - Arc De Soleil\n\n► Play Oldschool Runescape (Free online MMORPG by Jagex) here: http://oldschool.runescape.com/\n\nYes, this is actual Old School Runescape! A Re-boot of a 2007 save file of the game, released in February of 2013. We all started fresh, and the game has been getting weekly updates with a dedicated dev team ever since.\n\nswampletics osrs settled morytania uim\n\nThumbnail work done by 8sat\nBusiness/Thumbnail work contact: @8sat_ on Twitter"
        },
        "defaultAudioLanguage": "en"
      },
      "contentDetails": {
        "duration": "PT31M18S",
        "dimension": "2d",
        "definition": "hd",
        "caption": "false",
        "licensedContent": true,
        "contentRating": {
          
        },
        "projection": "rectangular"
      },
      "statistics": {
        "viewCount": "427963",
        "likeCount": "22047",
        "favoriteCount": "0",
        "commentCount": "1062"
      }
    },
    {
      "kind": "youtube#video",
      "etag": "DZBYEt0h7Qo3f2BPJmM9-SSGyZ4",
      "id": "5w6ByzfGHhE",
      "snippet": {
        "publishedAt": "2023-04-02T20:11:00Z",
        "channelId": "UCJHAT3Uvv-g3I8H3GhHWV7w",
        "title": "This Tornado Outbreak Will Be Different...",
        "description": "Support The Y'all Squad! https://shopryanhall.com/\n\nIn this video we are talking about yet another widespread severe weather outbreak on the way...\n\nAndy's channel - https://www.youtube.com/@metandyhill\n  \n#weatherchannel #ryanhall #ryanhallyall\n\nOFFICIAL WEATHER MERCH: https://shopryanhall.com/\n\nJoin this channel to get access to exclusive perks:\nhttps://www.youtube.com/channel/UCJHAT3Uvv-g3I8H3GhHWV7w/join\n_____________________________________\nMonday: 0:00\nTuesday: 1:24\nWednesday: 5:18\nY'all Squad Update: 6:55\n_____________________________________\nCheck out the Y'all Squad discord server!\nhttps://discord.gg/ryanhallyall\n\nFollow me on these things:\n\nhttps://www.facebook.com/ryanhallyall\nhttps://twitter.com/ryanhallyall\nhttps://www.instagram.com/ryanhallyall/\nhttps://www.tiktok.com/@ryanhallyall\nhttps://www.twitch.tv/ryanhallyall\n\nOFFICIAL WEBSITE: https://ryanhallyall.com/\n\nBUSINESS INQUIRIES: info@ryanhallyall.com\n\nSend us something in the mail!\nPO Box 2668\nPikeville, KY 41501\n\nPlease refer to your local National Weather Service office to get the most reliable and up to date weather information as possible.",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/5w6ByzfGHhE/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/5w6ByzfGHhE/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/5w6ByzfGHhE/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/5w6ByzfGHhE/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/5w6ByzfGHhE/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "Ryan Hall, Y'all",
        "tags": [
          "weather",
          "weather forecasting",
          "forecasting",
          "forecast",
          "wild weather",
          "extreme weather",
          "intense weather",
          "beautiful weather",
          "weather channel",
          "weather hunter",
          "severe weather",
          "major",
          "intense",
          "extreme",
          "historic",
          "blizzard",
          "snow",
          "heavy snow",
          "major snow storm",
          "snowstorm",
          "snow squall",
          "one foot snow",
          "two feet snow",
          "winter storm",
          "tornado",
          "tornado chasing",
          "tornado chasers",
          "storm chasing",
          "storm chasers",
          "tornadoes",
          "ef5",
          "hurricane",
          "major hurricane",
          "ryan hall"
        ],
        "categoryId": "24",
        "liveBroadcastContent": "none",
        "defaultLanguage": "en-US",
        "localized": {
          "title": "This Tornado Outbreak Will Be Different...",
          "description": "Support The Y'all Squad! https://shopryanhall.com/\n\nIn this video we are talking about yet another widespread severe weather outbreak on the way...\n\nAndy's channel - https://www.youtube.com/@metandyhill\n  \n#weatherchannel #ryanhall #ryanhallyall\n\nOFFICIAL WEATHER MERCH: https://shopryanhall.com/\n\nJoin this channel to get access to exclusive perks:\nhttps://www.youtube.com/channel/UCJHAT3Uvv-g3I8H3GhHWV7w/join\n_____________________________________\nMonday: 0:00\nTuesday: 1:24\nWednesday: 5:18\nY'all Squad Update: 6:55\n_____________________________________\nCheck out the Y'all Squad discord server!\nhttps://discord.gg/ryanhallyall\n\nFollow me on these things:\n\nhttps://www.facebook.com/ryanhallyall\nhttps://twitter.com/ryanhallyall\nhttps://www.instagram.com/ryanhallyall/\nhttps://www.tiktok.com/@ryanhallyall\nhttps://www.twitch.tv/ryanhallyall\n\nOFFICIAL WEBSITE: https://ryanhallyall.com/\n\nBUSINESS INQUIRIES: info@ryanhallyall.com\n\nSend us something in the mail!\nPO Box 2668\nPikeville, KY 41501\n\nPlease refer to your local National Weather Service office to get the most reliable and up to date weather information as possible."
        },
        "defaultAudioLanguage": "en-US"
      },
      "contentDetails": {
        "duration": "PT8M1S",
        "dimension": "2d",
        "definition": "hd",
        "caption": "true",
        "licensedContent": true,
        "contentRating": {
          
        },
        "projection": "rectangular"
      },
      "statistics": {
        "viewCount": "1307757",
        "likeCount": "66174",
        "favoriteCount": "0",
        "commentCount": "3215"
      }
    },
    {
      "kind": "youtube#video",
      "etag": "f-ivFftLCWSfUx9x6Kw9bjj2IN4",
      "id": "Rg5Us4iz714",
      "snippet": {
        "publishedAt": "2023-04-02T18:14:07Z",
        "channelId": "UCVe_RrR9AMeY6Z8ixOv5gtw",
        "title": "BABY NAME CHOICES!!!… Our First Time Nursery Shopping!!",
        "description": "Watch my last vlog!! https://youtu.be/4eN3tg0s5T4\n\nWatch Shane's new podcast! https://youtu.be/0hg0BY19pLs\nFollow Shane! https://www.instagram.com/shanedawson/?hl=en \nWatch Shane's new series!! https://www.youtube.com/watch?v=s3WFAONOFhs&t=2511s \nSubscribe to Morgan! https://www.youtube.com/@morgansvlogs\nFollow my mom! https://www.instagram.com/vickiadams26/?hl=en\n\n*Watch my latest podcast! https://youtu.be/sigPRljK1hA\nSubscribe to Lizze: https://www.youtube.com/c/ElizabethGordon\nFollow Lizze https://www.instagram.com/lizze.gordon/?hl=en \nFollow Chris https://www.instagram.com/chrisbstation/?hl=en\n\nFollow me on social media\nInstagram https://www.instagram.com/rylandadams/\ntwitter https://twitter.com/Ryland_Adams \n\nCheck out my Mom's amazon store! https://www.amazon.com/shop/influencer-e17144ae \n\nHope you have a great day!",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/Rg5Us4iz714/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/Rg5Us4iz714/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/Rg5Us4iz714/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/Rg5Us4iz714/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/Rg5Us4iz714/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "Ryland vlogs",
        "tags": [
          "Ryland Adams",
          "Shane Dawson",
          "Ryland Vlogs",
          "Vlog",
          "Comedy",
          "Home",
          "Baby",
          "Baby Update",
          "Baby Names",
          "Shopping"
        ],
        "categoryId": "22",
        "liveBroadcastContent": "none",
        "localized": {
          "title": "BABY NAME CHOICES!!!… Our First Time Nursery Shopping!!",
          "description": "Watch my last vlog!! https://youtu.be/4eN3tg0s5T4\n\nWatch Shane's new podcast! https://youtu.be/0hg0BY19pLs\nFollow Shane! https://www.instagram.com/shanedawson/?hl=en \nWatch Shane's new series!! https://www.youtube.com/watch?v=s3WFAONOFhs&t=2511s \nSubscribe to Morgan! https://www.youtube.com/@morgansvlogs\nFollow my mom! https://www.instagram.com/vickiadams26/?hl=en\n\n*Watch my latest podcast! https://youtu.be/sigPRljK1hA\nSubscribe to Lizze: https://www.youtube.com/c/ElizabethGordon\nFollow Lizze https://www.instagram.com/lizze.gordon/?hl=en \nFollow Chris https://www.instagram.com/chrisbstation/?hl=en\n\nFollow me on social media\nInstagram https://www.instagram.com/rylandadams/\ntwitter https://twitter.com/Ryland_Adams \n\nCheck out my Mom's amazon store! https://www.amazon.com/shop/influencer-e17144ae \n\nHope you have a great day!"
        }
      },
      "contentDetails": {
        "duration": "PT25M14S",
        "dimension": "2d",
        "definition": "hd",
        "caption": "false",
        "licensedContent": true,
        "contentRating": {
          
        },
        "projection": "rectangular"
      },
      "statistics": {
        "viewCount": "361721",
        "likeCount": "18649",
        "favoriteCount": "0",
        "commentCount": "2327"
      }
    },
    {
      "kind": "youtube#video",
      "etag": "bv4oY2F2W_kfuCQbslPPmIhsfwA",
      "id": "5uT4s_NWBN0",
      "snippet": {
        "publishedAt": "2023-04-02T22:00:02Z",
        "channelId": "UCyXiDU5qjfOPxgOPeFWGwKw",
        "title": "2023 BMW M2 Review // 2 Fat 2 Be Furious",
        "description": "Check out the Piloti shoes we are wearing in this video here! https://piloti.com/discount/THROTTLE15?redirect=/products/shift-asphalt&utm_source=Youtube&utm_medium=Referral&utm_campaign=Throttle%20House%20Youtube%20Description\n\nThe 2023 BMW M2 ($62,200 starting in the US, $76,500 starting in Canada) is now entering its second generation and has received several new updates to mark the occasion. Powered by the mighty S58 engine that’s also found in the M3 and M4, the new M2 makes a tremendous 453 horsepower and 405 lb-ft of torque. It’s also been updated with new interior tech, the new iDrive system, and features…bold exterior styling. Thomas and James are excited to get behind the wheel of the newest M car on the market. Let’s see what they have to say! We hope you enjoy the episode. Subscribe!\n\nEXTRA THROTTLE HOUSE!\nhttps://www.youtube.com/c/ExtraThrottleHouse\n\nThrottle House Merch!\nhttps://www.thethrottlehouse.com/merchandise/ \n\nInstagram! \nhttps://www.instagram.com/thethrottlehouse/\n\nFacebook! \nhttps://www.facebook.com/ThomasHollandProductions/\n\nEditor: Karston Chong\nSound: Harrison Dickson and Karston Chong\nMagical Genius Logistics Planners: James Engelsman and Gregory DeCaire\n\n#BMW #M2",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/5uT4s_NWBN0/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/5uT4s_NWBN0/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/5uT4s_NWBN0/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/5uT4s_NWBN0/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/5uT4s_NWBN0/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "Throttle House",
        "tags": [
          "2023 bmw m2 review",
          "2023 bmw m2 vs m3",
          "m2 vw m3",
          "m2 vs m4",
          "2023 bmw m2 0-60",
          "g87 m2",
          "f87 vs g87 m2",
          "m2 exhaust",
          "m2 acceleration",
          "m2 drag race",
          "bmw drag race",
          "bmw crash",
          "bmw drift",
          "bmw pov drift",
          "m car",
          "bmw vs mercedes",
          "m2 competition",
          "bmw m2 vs supra",
          "bmw m2 vs rs3",
          "m2 vs hellcat",
          "m2 vs m240i",
          "2023 m2 manual",
          "2023 m2 auto",
          "bmw autobahn",
          "bmw top speed",
          "bmw m2 vs mustang gt",
          "bmw m2 straight pipe",
          "s58 engine",
          "2023 bmw m3",
          "2023 bmw m4",
          "2022 bmw m2",
          "2015 m2"
        ],
        "categoryId": "2",
        "liveBroadcastContent": "none",
        "localized": {
          "title": "2023 BMW M2 Review // 2 Fat 2 Be Furious",
          "description": "Check out the Piloti shoes we are wearing in this video here! https://piloti.com/discount/THROTTLE15?redirect=/products/shift-asphalt&utm_source=Youtube&utm_medium=Referral&utm_campaign=Throttle%20House%20Youtube%20Description\n\nThe 2023 BMW M2 ($62,200 starting in the US, $76,500 starting in Canada) is now entering its second generation and has received several new updates to mark the occasion. Powered by the mighty S58 engine that’s also found in the M3 and M4, the new M2 makes a tremendous 453 horsepower and 405 lb-ft of torque. It’s also been updated with new interior tech, the new iDrive system, and features…bold exterior styling. Thomas and James are excited to get behind the wheel of the newest M car on the market. Let’s see what they have to say! We hope you enjoy the episode. Subscribe!\n\nEXTRA THROTTLE HOUSE!\nhttps://www.youtube.com/c/ExtraThrottleHouse\n\nThrottle House Merch!\nhttps://www.thethrottlehouse.com/merchandise/ \n\nInstagram! \nhttps://www.instagram.com/thethrottlehouse/\n\nFacebook! \nhttps://www.facebook.com/ThomasHollandProductions/\n\nEditor: Karston Chong\nSound: Harrison Dickson and Karston Chong\nMagical Genius Logistics Planners: James Engelsman and Gregory DeCaire\n\n#BMW #M2"
        }
      },
      "contentDetails": {
        "duration": "PT26M34S",
        "dimension": "2d",
        "definition": "hd",
        "caption": "false",
        "licensedContent": true,
        "contentRating": {
          
        },
        "projection": "rectangular"
      },
      "statistics": {
        "viewCount": "579217",
        "likeCount": "23944",
        "favoriteCount": "0",
        "commentCount": "2859"
      }
    },
    {
      "kind": "youtube#video",
      "etag": "a_h1zQe176pSEBhic7qnJeWbXjc",
      "id": "x4drR-dBA0A",
      "snippet": {
        "publishedAt": "2023-04-03T00:01:02Z",
        "channelId": "UC8ha6SsRNvDGkwcPTCXkW3g",
        "title": "Our New Pond Build is Finished! (Adding 5,000 Prawns)",
        "description": "Adding 5,000 prawns to our new bait pond!\n\nSubscribe for weekly pond build videos: http://bit.ly/Bama_Bass \n\nDay 1 Pond Build: https://youtu.be/zZ49jSdHKWs\nDay 2 Pond Build: https://youtu.be/eb-WwV3FB1o\nDay 3 Pond Build: https://youtu.be/Ii_C0gu14Wg\nDay 4 Pond Build: https://youtu.be/QmG8dmtany8\nDay 5 Pond Build: https://youtu.be/iL8-RPtT9ck\nDay 6 Pond Build: https://youtu.be/MOGtGnccRGw\nDay 7 Pond Build: https://youtu.be/Ho4AJF3NlJk\nDay 8 Pond Build: https://youtu.be/8yt0heEw_CU\nAdding Structure: https://youtu.be/bF-ObQ-tl5k\nFilling it with Water: https://youtu.be/PXcCzL_rgxo\nHurricane Update: https://youtu.be/iQuiaWysdsI\nNew Pet Ducks: https://youtu.be/iCm7uHmej_Y\nThe Final Chapter: https://youtu.be/hqhBLwQUb-8\nBig Problems: https://youtu.be/jOz8JIn4krw\nFilling it with Water: https://youtu.be/4oxkuPGt3rU\nFilling it with Water Part 2: https://youtu.be/aBjs9iwNe50\nFilling it with Water Part 4: https://youtu.be/tDbG7bi__L4\nFilling it with Water Part 5: https://youtu.be/pPUm6HCF97s\nFilling it with Water Part 6: https://youtu.be/YfdIG7LHYf4\nFilling it with Water Part 7: https://youtu.be/jSUAmIraAtU\nFilling it with Water Part 8: https://youtu.be/SALU9KG0l1U\nHydroseeding: https://youtu.be/ReI_vZcjtQk\nFixing a Leak: https://youtu.be/MeNjGeXtvqc\nAdding Fish: https://youtu.be/sT9TEEgaHCI\nInstalling Aerators: https://youtu.be/f0eVXgMTT8o\nUnderwater Lights: https://youtu.be/JpmeYKqffZE\nSpring Planting: https://youtu.be/5vFBdETEtAc\nNew Fishing Cabin:  https://youtu.be/bv_obw2HeeU \nNew Cabin Tour: https://youtu.be/SL1sMht8MpQ\nStocking Shad: https://youtu.be/mSHYDnR_dRU\nAdding Vegetation: https://youtu.be/eFqPSQbaTPo\nLiming and Fertilizing: https://youtu.be/qobTopYUKsk\nBaby Ducks Hatched: https://youtu.be/v3MkXz2S5Ww\nTagging the Bass: https://youtu.be/1koF4H_AkEc\nAdding the Bass: https://youtu.be/QYf3RcuPW2g\nFirst Time Fishing: https://youtu.be/g_uHluYGPtg\nAdding Solar Power: https://youtu.be/XeL47G3tkm8\nMicro Fishing for a New Pet: https://youtu.be/6aaJrRTa9i4\nMystery Fish: https://youtu.be/tlfKx2drOFg\nAdding Cypress Trees and Structure: https://youtu.be/8QKY4y_Ddbo\nHandfeeding the Bass: https://youtu.be/4IXVXb5FJXM\nAdding 300 Goldfish: https://youtu.be/nCI9cUjB8f0\nGlass Bottom Kayaks: https://youtu.be/pEaLY5voBAE\nBuilding a Duck House: https://youtu.be/BDcOPtnCu9g\nAdding Crawfish: https://youtu.be/nS3BAygCPJA\nAdding Lily Pads and Vegetation: https://youtu.be/nw7g9DxAbE0\nTagging Our Pet Bass: https://youtu.be/yUJaiQAb2m0\nUnderwater Drones: https://youtu.be/PYcXcz92_WI\nRC Duck Decoys: https://youtu.be/ADG50S2Sjzg\nMy Biggest Mistakes: https://youtu.be/3dhZGBuMxkc\nCrystal Clear Water: https://youtu.be/Z6i9GtVpMSs\nBuilding an Eagle Nest: https://youtu.be/Z5vOneSK8po\n1 Year Later: https://youtu.be/VlucyUxDALA\nBait Pond Day 1: https://youtu.be/EntPt4_dd58\nFilling Bait Pond with Water: https://youtu.be/c8WqLaLfTqA\n\nFollow us on social media:\nhttp://facebook.com/bamabassofficial\nhttp://instagram.com/_bamabass_\nhttp://twitter.com/_bamabass_\n\nShop for your fishing tackle at our tackle shop https://bamafrogs.com",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/x4drR-dBA0A/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/x4drR-dBA0A/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/x4drR-dBA0A/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/x4drR-dBA0A/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/x4drR-dBA0A/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "BamaBass",
        "categoryId": "22",
        "liveBroadcastContent": "none",
        "localized": {
          "title": "Our New Pond Build is Finished! (Adding 5,000 Prawns)",
          "description": "Adding 5,000 prawns to our new bait pond!\n\nSubscribe for weekly pond build videos: http://bit.ly/Bama_Bass \n\nDay 1 Pond Build: https://youtu.be/zZ49jSdHKWs\nDay 2 Pond Build: https://youtu.be/eb-WwV3FB1o\nDay 3 Pond Build: https://youtu.be/Ii_C0gu14Wg\nDay 4 Pond Build: https://youtu.be/QmG8dmtany8\nDay 5 Pond Build: https://youtu.be/iL8-RPtT9ck\nDay 6 Pond Build: https://youtu.be/MOGtGnccRGw\nDay 7 Pond Build: https://youtu.be/Ho4AJF3NlJk\nDay 8 Pond Build: https://youtu.be/8yt0heEw_CU\nAdding Structure: https://youtu.be/bF-ObQ-tl5k\nFilling it with Water: https://youtu.be/PXcCzL_rgxo\nHurricane Update: https://youtu.be/iQuiaWysdsI\nNew Pet Ducks: https://youtu.be/iCm7uHmej_Y\nThe Final Chapter: https://youtu.be/hqhBLwQUb-8\nBig Problems: https://youtu.be/jOz8JIn4krw\nFilling it with Water: https://youtu.be/4oxkuPGt3rU\nFilling it with Water Part 2: https://youtu.be/aBjs9iwNe50\nFilling it with Water Part 4: https://youtu.be/tDbG7bi__L4\nFilling it with Water Part 5: https://youtu.be/pPUm6HCF97s\nFilling it with Water Part 6: https://youtu.be/YfdIG7LHYf4\nFilling it with Water Part 7: https://youtu.be/jSUAmIraAtU\nFilling it with Water Part 8: https://youtu.be/SALU9KG0l1U\nHydroseeding: https://youtu.be/ReI_vZcjtQk\nFixing a Leak: https://youtu.be/MeNjGeXtvqc\nAdding Fish: https://youtu.be/sT9TEEgaHCI\nInstalling Aerators: https://youtu.be/f0eVXgMTT8o\nUnderwater Lights: https://youtu.be/JpmeYKqffZE\nSpring Planting: https://youtu.be/5vFBdETEtAc\nNew Fishing Cabin:  https://youtu.be/bv_obw2HeeU \nNew Cabin Tour: https://youtu.be/SL1sMht8MpQ\nStocking Shad: https://youtu.be/mSHYDnR_dRU\nAdding Vegetation: https://youtu.be/eFqPSQbaTPo\nLiming and Fertilizing: https://youtu.be/qobTopYUKsk\nBaby Ducks Hatched: https://youtu.be/v3MkXz2S5Ww\nTagging the Bass: https://youtu.be/1koF4H_AkEc\nAdding the Bass: https://youtu.be/QYf3RcuPW2g\nFirst Time Fishing: https://youtu.be/g_uHluYGPtg\nAdding Solar Power: https://youtu.be/XeL47G3tkm8\nMicro Fishing for a New Pet: https://youtu.be/6aaJrRTa9i4\nMystery Fish: https://youtu.be/tlfKx2drOFg\nAdding Cypress Trees and Structure: https://youtu.be/8QKY4y_Ddbo\nHandfeeding the Bass: https://youtu.be/4IXVXb5FJXM\nAdding 300 Goldfish: https://youtu.be/nCI9cUjB8f0\nGlass Bottom Kayaks: https://youtu.be/pEaLY5voBAE\nBuilding a Duck House: https://youtu.be/BDcOPtnCu9g\nAdding Crawfish: https://youtu.be/nS3BAygCPJA\nAdding Lily Pads and Vegetation: https://youtu.be/nw7g9DxAbE0\nTagging Our Pet Bass: https://youtu.be/yUJaiQAb2m0\nUnderwater Drones: https://youtu.be/PYcXcz92_WI\nRC Duck Decoys: https://youtu.be/ADG50S2Sjzg\nMy Biggest Mistakes: https://youtu.be/3dhZGBuMxkc\nCrystal Clear Water: https://youtu.be/Z6i9GtVpMSs\nBuilding an Eagle Nest: https://youtu.be/Z5vOneSK8po\n1 Year Later: https://youtu.be/VlucyUxDALA\nBait Pond Day 1: https://youtu.be/EntPt4_dd58\nFilling Bait Pond with Water: https://youtu.be/c8WqLaLfTqA\n\nFollow us on social media:\nhttp://facebook.com/bamabassofficial\nhttp://instagram.com/_bamabass_\nhttp://twitter.com/_bamabass_\n\nShop for your fishing tackle at our tackle shop https://bamafrogs.com"
        },
        "defaultAudioLanguage": "en"
      },
      "contentDetails": {
        "duration": "PT21M20S",
        "dimension": "2d",
        "definition": "hd",
        "caption": "false",
        "licensedContent": true,
        "contentRating": {
          
        },
        "projection": "rectangular"
      },
      "statistics": {
        "viewCount": "438535",
        "likeCount": "21274",
        "favoriteCount": "0",
        "commentCount": "2598"
      }
    },
    {
      "kind": "youtube#video",
      "etag": "ZohkYpJFr1reD7d0aVnh1YaG410",
      "id": "5uvA7kss6us",
      "snippet": {
        "publishedAt": "2023-04-02T21:01:15Z",
        "channelId": "UC9mBJdNZxwE-La5vX0Kozvg",
        "title": "help",
        "description": "Kirby Triple Deluxe but finale but Deluxe\n\r\nThank you to Noteblock for editing this video!\n\r\n►JOIN THE FAILBOAT DISCORD:\r\n    https://discord.gg/Failboat\r\n\r\n►FOLLOW THE BOAT:\r\n    https://Twitter.com/Failboat103\r\n\r\n\r\n#kirby \r\n\r\n\r\nDon't forget to like and subscribe!\r\n\r\n:D",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/5uvA7kss6us/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/5uvA7kss6us/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/5uvA7kss6us/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/5uvA7kss6us/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/5uvA7kss6us/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "Failboat",
        "categoryId": "20",
        "liveBroadcastContent": "none",
        "localized": {
          "title": "help",
          "description": "Kirby Triple Deluxe but finale but Deluxe\n\r\nThank you to Noteblock for editing this video!\n\r\n►JOIN THE FAILBOAT DISCORD:\r\n    https://discord.gg/Failboat\r\n\r\n►FOLLOW THE BOAT:\r\n    https://Twitter.com/Failboat103\r\n\r\n\r\n#kirby \r\n\r\n\r\nDon't forget to like and subscribe!\r\n\r\n:D"
        },
        "defaultAudioLanguage": "en"
      },
      "contentDetails": {
        "duration": "PT19M6S",
        "dimension": "2d",
        "definition": "hd",
        "caption": "false",
        "licensedContent": true,
        "contentRating": {
          
        },
        "projection": "rectangular"
      },
      "statistics": {
        "viewCount": "301431",
        "likeCount": "14230",
        "favoriteCount": "0",
        "commentCount": "1052"
      }
    },
    {
      "kind": "youtube#video",
      "etag": "MrsGQRuJetKD3IOAPvwRr9rKPw0",
      "id": "bGsVCQFvX1w",
      "snippet": {
        "publishedAt": "2023-04-02T20:05:03Z",
        "channelId": "UCFqyJFbsV-uEcosvNhg0PaQ",
        "title": "SPIDER-MAN: ACROSS THE SPIDER-VERSE - Teaser | Trailer Out April 4",
        "description": "The next Spider-Man story is coming🕷 \nThe new trailer for Spider-Man: Across The #SpiderVerse arrives April 4. Stay tuned 🕸️\n\nMiles Morales returns for the next chapter of the Oscar®-winning Spider-Verse saga, Spider-Man: Across the Spider-Verse. After reuniting with Gwen Stacy, Brooklyn’s full-time, friendly neighborhood Spider-Man is catapulted across the Multiverse, where he encounters a team of Spider-People charged with protecting its very existence. But when the heroes clash on how to handle a new threat, Miles finds himself pitted against the other Spiders and must redefine what it means to be a hero so he can save the people he loves most.\n \nDirected by:                       \nJoaquim Dos Santos\nKemp Powers\nJustin K. Thompson\n \nScreenplay by:              \nPhil Lord & Christopher Miller and David Callaham\n \nBased on the MARVEL Comic Books\n \nProduced by:                       \nAvi Arad\nAmy Pascal\nPhil Lord\nChristopher Miller\nChristina Steinberg\n \nExecutive Producers:        \nBob Persichetti\nPeter Ramsey\nRodney Rothman\nAditya Sood\nRebecca Karch\nBrian Bendis\n \nCast:                                  \nShameik Moore\nHailee Steinfeld\nJake Johnson\nIssa Rae\nDaniel Kaluuya\nJason Schwartzman\nBrian Tyree Henry\nLuna Lauren Velez\nGreta Lee\nRachel Dratch\nJorma Taccone\nShea Whigham\nand Oscar Isaac                         \n \n#SpiderVerse #SpiderVerseMovie #AcrossTheSpiderVerse #SpiderMan #MilesMorales #SpiderGwen #SonyPictures #SonyPicturesAnimation #OfficialTrailer #Marvel #Movie #Teaser \n\nJoin us on:\r\n\r\nhttps://www.facebook.com/sonypicturesofindia\r\nhttps://www.twitter.com/SonyPicsIndia\r\nhttps://www.instagram.com/sonypicturesin\r\nhttps://plus.google.com/+SonyPicturesIndia",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/bGsVCQFvX1w/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/bGsVCQFvX1w/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/bGsVCQFvX1w/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/bGsVCQFvX1w/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/bGsVCQFvX1w/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "Sony Pictures India",
        "tags": [
          "Sony",
          "Pictures",
          "India",
          "Hollywood",
          "movie",
          "film",
          "picture",
          "cinema"
        ],
        "categoryId": "24",
        "liveBroadcastContent": "none",
        "localized": {
          "title": "SPIDER-MAN: ACROSS THE SPIDER-VERSE - Teaser | Trailer Out April 4",
          "description": "The next Spider-Man story is coming🕷 \nThe new trailer for Spider-Man: Across The #SpiderVerse arrives April 4. Stay tuned 🕸️\n\nMiles Morales returns for the next chapter of the Oscar®-winning Spider-Verse saga, Spider-Man: Across the Spider-Verse. After reuniting with Gwen Stacy, Brooklyn’s full-time, friendly neighborhood Spider-Man is catapulted across the Multiverse, where he encounters a team of Spider-People charged with protecting its very existence. But when the heroes clash on how to handle a new threat, Miles finds himself pitted against the other Spiders and must redefine what it means to be a hero so he can save the people he loves most.\n \nDirected by:                       \nJoaquim Dos Santos\nKemp Powers\nJustin K. Thompson\n \nScreenplay by:              \nPhil Lord & Christopher Miller and David Callaham\n \nBased on the MARVEL Comic Books\n \nProduced by:                       \nAvi Arad\nAmy Pascal\nPhil Lord\nChristopher Miller\nChristina Steinberg\n \nExecutive Producers:        \nBob Persichetti\nPeter Ramsey\nRodney Rothman\nAditya Sood\nRebecca Karch\nBrian Bendis\n \nCast:                                  \nShameik Moore\nHailee Steinfeld\nJake Johnson\nIssa Rae\nDaniel Kaluuya\nJason Schwartzman\nBrian Tyree Henry\nLuna Lauren Velez\nGreta Lee\nRachel Dratch\nJorma Taccone\nShea Whigham\nand Oscar Isaac                         \n \n#SpiderVerse #SpiderVerseMovie #AcrossTheSpiderVerse #SpiderMan #MilesMorales #SpiderGwen #SonyPictures #SonyPicturesAnimation #OfficialTrailer #Marvel #Movie #Teaser \n\nJoin us on:\r\n\r\nhttps://www.facebook.com/sonypicturesofindia\r\nhttps://www.twitter.com/SonyPicsIndia\r\nhttps://www.instagram.com/sonypicturesin\r\nhttps://plus.google.com/+SonyPicturesIndia"
        },
        "defaultAudioLanguage": "en-GB"
      },
      "contentDetails": {
        "duration": "PT15S",
        "dimension": "2d",
        "definition": "hd",
        "caption": "false",
        "licensedContent": true,
        "contentRating": {
          
        },
        "projection": "rectangular"
      },
      "statistics": {
        "viewCount": "909349",
        "likeCount": "33933",
        "favoriteCount": "0",
        "commentCount": "1421"
      }
    },
    {
      "kind": "youtube#video",
      "etag": "h0UdeqrIJAfzd-lB1WSd28Wa6zI",
      "id": "wyRvJQUahsI",
      "snippet": {
        "publishedAt": "2023-04-02T18:15:02Z",
        "channelId": "UCczKsS4gTjJzU5zayrNnwEA",
        "title": "I've Never Had To Prepare For A Season Like This",
        "description": "BauerOutage merch available at TrevorBauer.com\n\nLink to 4APP: https://apps.apple.com/us/app/4app-sports/id1551925155\n\nFOLLOW ME on all social channels!\nTwitter: https://twitter.com/BauerOutage\nInstagram: https://www.instagram.com/baueroutage/\nFacebook: https://www.facebook.com/TrevorBauerOfficial/\nYouTube: https://www.youtube.com/user/BauerOutage\nTikTok: https://www.tiktok.com/@baueroutageofficial\nDiscord: https://discord.gg/wynnQG7kpx",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/wyRvJQUahsI/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/wyRvJQUahsI/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/wyRvJQUahsI/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/wyRvJQUahsI/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/wyRvJQUahsI/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "Trevor Bauer",
        "categoryId": "17",
        "liveBroadcastContent": "none",
        "localized": {
          "title": "I've Never Had To Prepare For A Season Like This",
          "description": "BauerOutage merch available at TrevorBauer.com\n\nLink to 4APP: https://apps.apple.com/us/app/4app-sports/id1551925155\n\nFOLLOW ME on all social channels!\nTwitter: https://twitter.com/BauerOutage\nInstagram: https://www.instagram.com/baueroutage/\nFacebook: https://www.facebook.com/TrevorBauerOfficial/\nYouTube: https://www.youtube.com/user/BauerOutage\nTikTok: https://www.tiktok.com/@baueroutageofficial\nDiscord: https://discord.gg/wynnQG7kpx"
        },
        "defaultAudioLanguage": "en"
      },
      "contentDetails": {
        "duration": "PT29M57S",
        "dimension": "2d",
        "definition": "hd",
        "caption": "true",
        "licensedContent": true,
        "contentRating": {
          
        },
        "projection": "rectangular"
      },
      "statistics": {
        "viewCount": "294614",
        "likeCount": "10398",
        "favoriteCount": "0",
        "commentCount": "616"
      }
    },
    {
      "kind": "youtube#video",
      "etag": "Djgdlb7FpSlxLLFnIo0CSogfZBs",
      "id": "zT2tJu0IzJ8",
      "snippet": {
        "publishedAt": "2023-04-03T01:07:01Z",
        "channelId": "UCc6BTuuTzfMLKj_RgwuDnQw",
        "title": "We Tried Recreating The \"Smooth\" PB & J Sandwich",
        "description": "Hello and welcome to another video!\n\nToday we’re gonna be testing out our agar powder knowledge by attempting to make a smooth peanut butter and jelly sandwich, where not just the jelly is gelatinous, but so is the bread and the peanut butter! We know that it looks cool, but how does it taste?\n\nAlso shout-out to emmymade for the recipe! You can check out her video here: https://www.youtube.com/watch?v=Ug3Q0YeqcSk \n\nAlso also, you can check out our merch here!! https://fiendishbehavior.com\n\nProduced & Edited by\nCarly Dawson\nNez Covington\nTyler Williams\nSafiya Nygaard\n\nGFX by\nDayana Espinoza\nElizabeth Pinotti\n\nMUSIC\nVia Audio Network",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/zT2tJu0IzJ8/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/zT2tJu0IzJ8/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/zT2tJu0IzJ8/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/zT2tJu0IzJ8/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/zT2tJu0IzJ8/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "Tyler Williams",
        "tags": [
          "Smooth peanut butter and jelly sandwich",
          "smooth pbj",
          "peanut butter",
          "jelly",
          "sandwich",
          "smooth sandwich",
          "agar powder",
          "agar",
          "agar agar",
          "jello",
          "peanut butter and jelly",
          "grape jelly",
          "vegetarian",
          "viral",
          "taste test",
          "cooking",
          "baking",
          "food",
          "dessert",
          "gelatin",
          "safiya nygaard",
          "safiya and tyler",
          "tyler williams",
          "safia",
          "sofia",
          "sofiya"
        ],
        "categoryId": "22",
        "liveBroadcastContent": "none",
        "defaultLanguage": "en",
        "localized": {
          "title": "We Tried Recreating The \"Smooth\" PB & J Sandwich",
          "description": "Hello and welcome to another video!\n\nToday we’re gonna be testing out our agar powder knowledge by attempting to make a smooth peanut butter and jelly sandwich, where not just the jelly is gelatinous, but so is the bread and the peanut butter! We know that it looks cool, but how does it taste?\n\nAlso shout-out to emmymade for the recipe! You can check out her video here: https://www.youtube.com/watch?v=Ug3Q0YeqcSk \n\nAlso also, you can check out our merch here!! https://fiendishbehavior.com\n\nProduced & Edited by\nCarly Dawson\nNez Covington\nTyler Williams\nSafiya Nygaard\n\nGFX by\nDayana Espinoza\nElizabeth Pinotti\n\nMUSIC\nVia Audio Network"
        },
        "defaultAudioLanguage": "en-US"
      },
      "contentDetails": {
        "duration": "PT16M54S",
        "dimension": "2d",
        "definition": "hd",
        "caption": "true",
        "licensedContent": true,
        "contentRating": {
          
        },
        "projection": "rectangular"
      },
      "statistics": {
        "viewCount": "441364",
        "likeCount": "23717",
        "favoriteCount": "0",
        "commentCount": "801"
      }
    },
    {
      "kind": "youtube#video",
      "etag": "QKs8lNMswIfHhGhWfwtpIVs23Wk",
      "id": "r6TVO1Uq1RE",
      "snippet": {
        "publishedAt": "2023-04-02T18:08:33Z",
        "channelId": "UCUujfNBK9uv3cIW-P5PX7vA",
        "title": "Digging in a driveway with a new excavator",
        "description": "Getting a new Hyundai 235 excavator and using it to install a driveway into the side of a hill.",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/r6TVO1Uq1RE/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/r6TVO1Uq1RE/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/r6TVO1Uq1RE/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/r6TVO1Uq1RE/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/r6TVO1Uq1RE/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "Andrew Camarata",
        "categoryId": "15",
        "liveBroadcastContent": "none",
        "defaultLanguage": "en",
        "localized": {
          "title": "Digging in a driveway with a new excavator",
          "description": "Getting a new Hyundai 235 excavator and using it to install a driveway into the side of a hill."
        },
        "defaultAudioLanguage": "en"
      },
      "contentDetails": {
        "duration": "PT37M33S",
        "dimension": "2d",
        "definition": "hd",
        "caption": "true",
        "licensedContent": true,
        "contentRating": {
          
        },
        "projection": "rectangular"
      },
      "statistics": {
        "viewCount": "446920",
        "likeCount": "32508",
        "favoriteCount": "0",
        "commentCount": "1413"
      }
    },
    {
      "kind": "youtube#video",
      "etag": "Fc_6E8KgPYqP8nNItDgS08HRKO8",
      "id": "ZLLcxNiQ9Yg",
      "snippet": {
        "publishedAt": "2023-03-31T19:57:44Z",
        "channelId": "UCF6jRAgCbSanHolKt0Vt6Qw",
        "title": "6ix9ine - Bori feat. Lenier (Official Music Video)",
        "description": "Bori OUT NOW\nSTREAM / DOWNLOAD: https://69.lnk.to/bori",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/ZLLcxNiQ9Yg/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/ZLLcxNiQ9Yg/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/ZLLcxNiQ9Yg/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/ZLLcxNiQ9Yg/sddefault.jpg",
            "width": 640,
            "height": 480
          }
        },
        "channelTitle": "Tekashi 6ix9ine",
        "categoryId": "10",
        "liveBroadcastContent": "none",
        "localized": {
          "title": "6ix9ine - Bori feat. Lenier (Official Music Video)",
          "description": "Bori OUT NOW\nSTREAM / DOWNLOAD: https://69.lnk.to/bori"
        },
        "defaultAudioLanguage": "en"
      },
      "contentDetails": {
        "duration": "PT3M4S",
        "dimension": "2d",
        "definition": "hd",
        "caption": "false",
        "licensedContent": true,
        "regionRestriction": {
          "blocked": [
            "BY",
            "RU"
          ]
        },
        "contentRating": {
          
        },
        "projection": "rectangular"
      },
      "statistics": {
        "viewCount": "9433880",
        "likeCount": "693511",
        "favoriteCount": "0",
        "commentCount": "52405"
      }
    },
    {
      "kind": "youtube#video",
      "etag": "y4aIMxC0fAJEB-RSf6R54vdP_dQ",
      "id": "U2w6so52FiY",
      "snippet": {
        "publishedAt": "2023-04-02T23:52:39Z",
        "channelId": "UC5qUhMoqke0mnJtgVoEn0aw",
        "title": "IT FINALLY HAPPENED! $50,000 Intense 2v2 Finals!",
        "description": "CREATOR LEAGUE 2v2 SZN CHAMPIONSHIP GAME!! 🏆\nShout out @Samsung Galaxy for sponsoring this event! Make sure you check out the new Galaxy S23 Ultra at Samsung.com",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/U2w6so52FiY/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/U2w6so52FiY/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/U2w6so52FiY/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/U2w6so52FiY/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/U2w6so52FiY/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "Creator League",
        "tags": [
          "creator league",
          "friga",
          "cam wilder",
          "jenna bandy",
          "lolo",
          "lolo fitzmo",
          "2v2",
          "basketball",
          "house of highlights",
          "hoh",
          "finals",
          "50000"
        ],
        "categoryId": "17",
        "liveBroadcastContent": "none",
        "localized": {
          "title": "IT FINALLY HAPPENED! $50,000 Intense 2v2 Finals!",
          "description": "CREATOR LEAGUE 2v2 SZN CHAMPIONSHIP GAME!! 🏆\nShout out @Samsung Galaxy for sponsoring this event! Make sure you check out the new Galaxy S23 Ultra at Samsung.com"
        },
        "defaultAudioLanguage": "en-US"
      },
      "contentDetails": {
        "duration": "PT39M1S",
        "dimension": "2d",
        "definition": "hd",
        "caption": "false",
        "licensedContent": true,
        "contentRating": {
          
        },
        "projection": "rectangular"
      },
      "statistics": {
        "viewCount": "120697",
        "likeCount": "3960",
        "favoriteCount": "0",
        "commentCount": "793"
      }
    },
    {
      "kind": "youtube#video",
      "etag": "i5MnuS7buSufLPff5daroypBeGU",
      "id": "Cm9yAkPqqig",
      "snippet": {
        "publishedAt": "2023-04-03T02:30:08Z",
        "channelId": "UCiVJZlfcmWMUiXv5oywnDhQ",
        "title": "36 Unbelievable Secrets in Minecraft 1.20",
        "description": "1.20 snapshots are out! Meaning that there are a ton of hidden easter eggs and secret mechanics you didn't know about. Today we cover some of the weirdest and most fun and totally real secret things you didn't know about minecraft 1.20! How many do you know?\n\nFormat inspired by skip the tutorial: https://bit.ly/40Azroe\n\n➤➤ Twitter: https://twitter.com/WifiesWasTaken\n➤➤ Discord: https://discord.gg/zAWUuWb\n\n\n➤➤Links:  Cherry villagers resource pack: https://bit.ly/40PoT4e\nWandered too deep: https://bit.ly/3U584Qx\nTinted glass beacons: https://bit.ly/3U5qH79\n@Wifies for some of the facts from last years super real video they were so good I had to reuse it\n\n\nThis is NOT a series called Minecraft VVSauce where I explore random features of Minecraft. Not Minecraft, but the water rises or Minecraft Manhunt but a more fact based series where I blatantly lie and hope you believe it.",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/Cm9yAkPqqig/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/Cm9yAkPqqig/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/Cm9yAkPqqig/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/Cm9yAkPqqig/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/Cm9yAkPqqig/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "Wifies",
        "tags": [
          "wifies",
          "mumbo jumbo",
          "dream",
          "1.20",
          "secret minecraft things",
          "minecraft easter egg"
        ],
        "categoryId": "20",
        "liveBroadcastContent": "none",
        "localized": {
          "title": "36 Unbelievable Secrets in Minecraft 1.20",
          "description": "1.20 snapshots are out! Meaning that there are a ton of hidden easter eggs and secret mechanics you didn't know about. Today we cover some of the weirdest and most fun and totally real secret things you didn't know about minecraft 1.20! How many do you know?\n\nFormat inspired by skip the tutorial: https://bit.ly/40Azroe\n\n➤➤ Twitter: https://twitter.com/WifiesWasTaken\n➤➤ Discord: https://discord.gg/zAWUuWb\n\n\n➤➤Links:  Cherry villagers resource pack: https://bit.ly/40PoT4e\nWandered too deep: https://bit.ly/3U584Qx\nTinted glass beacons: https://bit.ly/3U5qH79\n@Wifies for some of the facts from last years super real video they were so good I had to reuse it\n\n\nThis is NOT a series called Minecraft VVSauce where I explore random features of Minecraft. Not Minecraft, but the water rises or Minecraft Manhunt but a more fact based series where I blatantly lie and hope you believe it."
        },
        "defaultAudioLanguage": "en"
      },
      "contentDetails": {
        "duration": "PT11M4S",
        "dimension": "2d",
        "definition": "hd",
        "caption": "false",
        "licensedContent": true,
        "contentRating": {
          
        },
        "projection": "rectangular"
      },
      "statistics": {
        "viewCount": "289230",
        "likeCount": "13935",
        "favoriteCount": "0",
        "commentCount": "1259"
      }
    },
    {
      "kind": "youtube#video",
      "etag": "iAqQIpgLWFxZWy10cyNaz2NH4Ng",
      "id": "FExS3lFEwqc",
      "snippet": {
        "publishedAt": "2023-04-02T09:00:12Z",
        "channelId": "UCB_qr75-ydFVKSF9Dmo6izg",
        "title": "Race Highlights | 2023 Australian Grand Prix",
        "description": "Our race in Melbourne did not disappoint! Catch up with all the best bits from a dramatic race at Albert Park.\n\nFor more F1® videos, visit https://www.Formula1.com\n\nFollow F1®:\nhttps://www.instagram.com/F1\nhttps://www.facebook.com/Formula1/\nhttps://www.twitter.com/F1\nhttps://www.twitch.tv/formula1\nhttps://www.tiktok.com/@f1\n\n#F1 #AusGP",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/FExS3lFEwqc/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/FExS3lFEwqc/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/FExS3lFEwqc/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/FExS3lFEwqc/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/FExS3lFEwqc/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "FORMULA 1",
        "tags": [
          "F1",
          "Formula One",
          "Formula 1",
          "Sports",
          "Sport",
          "Action",
          "GP",
          "Grand Prix",
          "Auto Racing",
          "Motor Racing",
          "Australian GP",
          "Aus GP",
          "Australia GP",
          "Australian GP F1",
          "F1 Australian GP",
          "Australian GP Highlights",
          "Highlights Australian GP",
          "Melbourne",
          "Melbourne F1",
          "F1 Melbourne"
        ],
        "categoryId": "17",
        "liveBroadcastContent": "none",
        "localized": {
          "title": "Race Highlights | 2023 Australian Grand Prix",
          "description": "Our race in Melbourne did not disappoint! Catch up with all the best bits from a dramatic race at Albert Park.\n\nFor more F1® videos, visit https://www.Formula1.com\n\nFollow F1®:\nhttps://www.instagram.com/F1\nhttps://www.facebook.com/Formula1/\nhttps://www.twitter.com/F1\nhttps://www.twitch.tv/formula1\nhttps://www.tiktok.com/@f1\n\n#F1 #AusGP"
        },
        "defaultAudioLanguage": "en"
      },
      "contentDetails": {
        "duration": "PT8M15S",
        "dimension": "2d",
        "definition": "hd",
        "caption": "false",
        "licensedContent": true,
        "regionRestriction": {
          "blocked": [
            "BY",
            "RU"
          ]
        },
        "contentRating": {
          
        },
        "projection": "rectangular"
      },
      "statistics": {
        "viewCount": "7614011",
        "likeCount": "153053",
        "favoriteCount": "0",
        "commentCount": "8737"
      }
    },
    {
      "kind": "youtube#video",
      "etag": "XebmR1ImjuSt4RAK5yayH-n8U-8",
      "id": "xS5e2o6REb4",
      "snippet": {
        "publishedAt": "2023-04-01T23:35:10Z",
        "channelId": "UCurvRE5fGcdUgCYWgh-BDsg",
        "title": "AJ IS BACK | Anthony Joshua vs. Jermaine Franklin Fight Highlights",
        "description": "April 1, 2023 -- Anthony Joshua vs. Jermaine Franklin fight highlights from the O2, London, England.\n\nSubscribe to our YouTube channel 👉  http://bit.ly/DAZNBoxingYouTube\nSubscribe to the DAZN X Series YouTube channel 👉 https://bit.ly/XSeriesYouTube \n\nDownload the DAZN app now 👉  http://bit.ly/DAZNYoutube\n\nFollow DAZN Boxing On Social Media 👇\nTwitter: https://www.twitter.com/DAZNBoxing\nInstagram: https://www.instagram.com/DAZNBoxing\nFacebook: https://www.facebook.com/DAZN\n\nThe DAZN Boxing Show ► https://bit.ly/3EQ70HN\nDAZN Rewind ► https://bit.ly/32iAaRT\n\n#DAZN #DAZNBoxing #Boxing",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/xS5e2o6REb4/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/xS5e2o6REb4/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/xS5e2o6REb4/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/xS5e2o6REb4/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/xS5e2o6REb4/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "DAZN Boxing",
        "tags": [
          "dazn",
          "boxing",
          "highlights",
          "full fight",
          "ko",
          "knockout",
          "top 10",
          "The DAZN Boxing Show",
          "Pelea",
          "Boxeo",
          "Pugile",
          "dazn boxing",
          "anthony joshua",
          "jermaine franklin",
          "london",
          "o2 london",
          "joshua franklin",
          "aj fight",
          "fight"
        ],
        "categoryId": "17",
        "liveBroadcastContent": "none",
        "defaultLanguage": "en",
        "localized": {
          "title": "AJ IS BACK | Anthony Joshua vs. Jermaine Franklin Fight Highlights",
          "description": "April 1, 2023 -- Anthony Joshua vs. Jermaine Franklin fight highlights from the O2, London, England.\n\nSubscribe to our YouTube channel 👉  http://bit.ly/DAZNBoxingYouTube\nSubscribe to the DAZN X Series YouTube channel 👉 https://bit.ly/XSeriesYouTube \n\nDownload the DAZN app now 👉  http://bit.ly/DAZNYoutube\n\nFollow DAZN Boxing On Social Media 👇\nTwitter: https://www.twitter.com/DAZNBoxing\nInstagram: https://www.instagram.com/DAZNBoxing\nFacebook: https://www.facebook.com/DAZN\n\nThe DAZN Boxing Show ► https://bit.ly/3EQ70HN\nDAZN Rewind ► https://bit.ly/32iAaRT\n\n#DAZN #DAZNBoxing #Boxing"
        },
        "defaultAudioLanguage": "en"
      },
      "contentDetails": {
        "duration": "PT13M43S",
        "dimension": "2d",
        "definition": "hd",
        "caption": "false",
        "licensedContent": true,
        "regionRestriction": {
          "blocked": [
            "BY",
            "RU"
          ]
        },
        "contentRating": {
          
        },
        "projection": "rectangular"
      },
      "statistics": {
        "viewCount": "3890486",
        "likeCount": "35544",
        "favoriteCount": "0",
        "commentCount": "9578"
      }
    },
    {
      "kind": "youtube#video",
      "etag": "ROXxo_CDcZB9fTOBIzOKJJKAYUs",
      "id": "4D_OwIyiTYU",
      "snippet": {
        "publishedAt": "2023-04-02T15:00:06Z",
        "channelId": "UC4laAHbk8VSgmvB47tsd2XQ",
        "title": "Daily Life at Our Dog Shelter",
        "description": "Welcome to our new dog shelter & non-profit cafe ☀️ To get a 1 year supply of Vitamin D + 5 travel packs FREE with your first purchase, go to https://athleticgreens.com/eamonandbec Thanks to AG1 for sponsoring this video. \n\nLearn more about Cerritos Beach Dogs here:\nhttps://www.cerritosbeachdogs.com/\n\n0:00 we built a dog shelter in 30 days\n2:50 the BEST way to wake up 🐶 \n4:00 full tour of our shelter & cafe!\n6:59 coffee shop is open 😬 \n11:00 daily habit 🍃 \n12:12 meet our new puppies!\n16:17 vet visits\n20:48 our puppies fly to Canada 🥲 \n\nEamon and I have been lucky enough to travel to Mexico in our van since 2018 and we've always been so sad to see the struggling stray dogs and puppies on the streets. We even fostered a sick puppy from Baja in 2019 and drove him back up to Canada where he's happily lived in his furever home for the last 4 years. So, when we met Alex and he said it was his dream to start a dog rescue here in Baja we knew we needed to help! 🐶 🐕 🐩\n\nGet caught up on this adventure:\nWe Built a Dog Shelter in 30 Days https://youtu.be/yhk5u-jl8Us\n\nToday we want to take you on a behind-the-scenes look at what it looks like to volunteer our time to this project. We show you working a shift at the cafe and give you a full tour of the space! PLUS you get to watch two of our first puppies make their way over to Canada 🇨🇦",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/4D_OwIyiTYU/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/4D_OwIyiTYU/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/4D_OwIyiTYU/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/4D_OwIyiTYU/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/4D_OwIyiTYU/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "Eamon & Bec",
        "tags": [
          "van life",
          "living in a van",
          "vanlife",
          "eamon and bec",
          "emon and bec",
          "bec and eamon",
          "van life couple",
          "eamon and bec dog",
          "we built a dog shelter",
          "dog shelter",
          "dog shelter mexico",
          "eamon and bec dog rescue",
          "cerritos",
          "cerritos beach dogs"
        ],
        "categoryId": "19",
        "liveBroadcastContent": "none",
        "localized": {
          "title": "Daily Life at Our Dog Shelter",
          "description": "Welcome to our new dog shelter & non-profit cafe ☀️ To get a 1 year supply of Vitamin D + 5 travel packs FREE with your first purchase, go to https://athleticgreens.com/eamonandbec Thanks to AG1 for sponsoring this video. \n\nLearn more about Cerritos Beach Dogs here:\nhttps://www.cerritosbeachdogs.com/\n\n0:00 we built a dog shelter in 30 days\n2:50 the BEST way to wake up 🐶 \n4:00 full tour of our shelter & cafe!\n6:59 coffee shop is open 😬 \n11:00 daily habit 🍃 \n12:12 meet our new puppies!\n16:17 vet visits\n20:48 our puppies fly to Canada 🥲 \n\nEamon and I have been lucky enough to travel to Mexico in our van since 2018 and we've always been so sad to see the struggling stray dogs and puppies on the streets. We even fostered a sick puppy from Baja in 2019 and drove him back up to Canada where he's happily lived in his furever home for the last 4 years. So, when we met Alex and he said it was his dream to start a dog rescue here in Baja we knew we needed to help! 🐶 🐕 🐩\n\nGet caught up on this adventure:\nWe Built a Dog Shelter in 30 Days https://youtu.be/yhk5u-jl8Us\n\nToday we want to take you on a behind-the-scenes look at what it looks like to volunteer our time to this project. We show you working a shift at the cafe and give you a full tour of the space! PLUS you get to watch two of our first puppies make their way over to Canada 🇨🇦"
        },
        "defaultAudioLanguage": "en-CA"
      },
      "contentDetails": {
        "duration": "PT21M38S",
        "dimension": "2d",
        "definition": "hd",
        "caption": "true",
        "licensedContent": true,
        "contentRating": {
          
        },
        "projection": "rectangular"
      },
      "statistics": {
        "viewCount": "425644",
        "likeCount": "23512",
        "favoriteCount": "0",
        "commentCount": "1336"
      }
    },
    {
      "kind": "youtube#video",
      "etag": "in4V4Rl-lKB6Wo9yL_KkJLYUiSA",
      "id": "-fEGC5gTQ18",
      "snippet": {
        "publishedAt": "2023-04-02T18:02:00Z",
        "channelId": "UCIRgR4iANHI2taJdz8hjwLw",
        "title": "WHAT HAS HE DONE!? Tavarish Bought the INFAMOUS Flood Damage McLaren P1",
        "description": "There's crazy, and then there's what @tavarish has gone and done! Freddy has bought the infamous flood damaged McLaren P1, and my goodness does he have his work cut out to bring this back to the road. Let's head over in his re-built 675LT to go check it out... Oh boy!\n\nI first visited Freddy when he had just bought the crash damaged 675LT, and in fact it had certainly seen better days: https://www.youtube.com/watch?v=z9kf5t5PWDA However, fast forward and it's had a total overhaul, been brough back to life, and has numerous totally unique features.\n\nObservant viewers will notice that unfortunately this 675LT has since rather blown up... to put it lightly. Hopefully it's easy enough to work out that this was filmed beforehand and held back to reveal the P1 once Freddy had taken the wraps off to the world! More about all of that on @tavarish's channel.\n\nHowever, today is all about the P1, the most infamous P1 in the world. The car that was destroyed by the hurricane in Florida last September, seem by millions in videos and images being battered around the owner's garage in flood water, sailing off down the street, and coming to a rest atop a toilet. Of course that was a devastating event and sadly many lost lives in the brutal weather, however it's Freddy's goal to get this car back on the road one day.\n\nWhen it comes to a rebuild project, it's safe to say that this must be the biggest undertaking ever seen in this space. Not only has the car been entirely submerged, but every body panel has taken a battering, and absolutely nothing works as it should. I have no idea how he's going to manage, but I can't wait to see it finished!\n\nA huge congratulations to Freddy on this massive brave pill he's swallowed, it's going to be quite the ride:\nhttp://youtube.com/tavarish\nhttp://instagram.com/therealtavarish\n\nIf you're interested in these kinds of rare and limited cars, be sure to check out Exclusive Car Registry where you can find this McLaren P1 here: https://exclusivecarregistry.com/details/mclaren/p1/1397\n\nThanks for watching, Tim\n\nChapters:\n00:00 Intro\n01:15 Walkaround of Freddy's 675LT\n05:50 675LT Drive\n15:41 Full Flood-damaged P1 Walkaround\n25:23 Dry Ice Cleaning Process\n26:14 Back to the McLaren P1\n28:09 Signing the P1 Engine Cover\n29:59 Final Thoughts\n30:48 Wrap Up\n\n#McLarenP1 #Tavarish #Wrecked\n\nWATCH NEXT:\n🍿 COMPLETE TOUR of My Car Collection! 2023; 13 Years of YouTube https://www.youtube.com/watch?v=CBAbD9PD24g\n🍿 RICHARD HAMMOND ROASTS MY Lambo! Visit to The Smallest Cog https://www.youtube.com/watch?v=sgwdSmkrbhg\n🍿 Preparing My 1,000HP WINTER SLAYER! Ferrari SF90 Stradale Roof Box Install https://www.youtube.com/watch?v=nfPCWMcz97M\n\nSHMEE150 GEAR:\n📹 Filming Equipment - https://kit.co/Shmee150/youtube-filming-gear-2023\n🎒 What's In My Bag - https://kit.co/Shmee150/in-my-bag\n🔌 Car Maintenance - https://kit.co/Shmee150/shmeemobile-car-maintenance\n\nSUPPORT SHMEE150:\n👕 Merch Store - http://cheers.shmee150.com\n🛒 Model Cars, Sunglasses & More - https://shmee150.com/affiliate-shop\n\nSHMEE150 PARTNERS:\n💸 Car Finance - https://www.approvedmotorfinance.co.uk/shmee150\n🏆 BOTB Win Your Dream Car - https://www.botb.com/shmee150\n🧼 Topaz Detailing - http://www.topazdetailing.com\n🗺️ Vehicle Tracking - https://globaltelemetrics.com\n\nOTHER SHMEE150 CHANNELS:\n🏠 The Shmuseum - http://youtube.com/theshmuseum\n🩳 Shmeebites - http://youtube.com/shmeebites\n⌚ Shwatch150 - http://youtube.com/shwatch150\n\nFIND SHMEE150 ONLINE:\n🌍 Website - http://www.shmee150.com\n📸 Instagram - http://instagram.com/shmee150\n👤 Facebook - http://facebook.com/shmee150\n📺 TikTok - https://tiktok.com/@shmee150\n\nWORK WITH SHMEE150:\n📈 Advertise - https://shmee150.com/advertise-on-shmee150",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/-fEGC5gTQ18/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/-fEGC5gTQ18/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/-fEGC5gTQ18/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/-fEGC5gTQ18/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/-fEGC5gTQ18/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "Shmee150",
        "tags": [
          "McLaren",
          "P1",
          "McLaren P1",
          "Flood",
          "Flooded",
          "Damage",
          "Damaged",
          "Wreck",
          "Rebuild",
          "Tavarish",
          "Freddy",
          "Project",
          "Water",
          "Walkaround",
          "Inspection",
          "Wrecked",
          "Ruined",
          "Sea",
          "Hurricane",
          "Smell",
          "Clean",
          "Cleaning",
          "Inspect",
          "Process",
          "Start",
          "Starts",
          "Begin",
          "Florida",
          "Famous",
          "Infamous",
          "Shmee",
          "Shmee150"
        ],
        "categoryId": "2",
        "liveBroadcastContent": "none",
        "localized": {
          "title": "WHAT HAS HE DONE!? Tavarish Bought the INFAMOUS Flood Damage McLaren P1",
          "description": "There's crazy, and then there's what @tavarish has gone and done! Freddy has bought the infamous flood damaged McLaren P1, and my goodness does he have his work cut out to bring this back to the road. Let's head over in his re-built 675LT to go check it out... Oh boy!\n\nI first visited Freddy when he had just bought the crash damaged 675LT, and in fact it had certainly seen better days: https://www.youtube.com/watch?v=z9kf5t5PWDA However, fast forward and it's had a total overhaul, been brough back to life, and has numerous totally unique features.\n\nObservant viewers will notice that unfortunately this 675LT has since rather blown up... to put it lightly. Hopefully it's easy enough to work out that this was filmed beforehand and held back to reveal the P1 once Freddy had taken the wraps off to the world! More about all of that on @tavarish's channel.\n\nHowever, today is all about the P1, the most infamous P1 in the world. The car that was destroyed by the hurricane in Florida last September, seem by millions in videos and images being battered around the owner's garage in flood water, sailing off down the street, and coming to a rest atop a toilet. Of course that was a devastating event and sadly many lost lives in the brutal weather, however it's Freddy's goal to get this car back on the road one day.\n\nWhen it comes to a rebuild project, it's safe to say that this must be the biggest undertaking ever seen in this space. Not only has the car been entirely submerged, but every body panel has taken a battering, and absolutely nothing works as it should. I have no idea how he's going to manage, but I can't wait to see it finished!\n\nA huge congratulations to Freddy on this massive brave pill he's swallowed, it's going to be quite the ride:\nhttp://youtube.com/tavarish\nhttp://instagram.com/therealtavarish\n\nIf you're interested in these kinds of rare and limited cars, be sure to check out Exclusive Car Registry where you can find this McLaren P1 here: https://exclusivecarregistry.com/details/mclaren/p1/1397\n\nThanks for watching, Tim\n\nChapters:\n00:00 Intro\n01:15 Walkaround of Freddy's 675LT\n05:50 675LT Drive\n15:41 Full Flood-damaged P1 Walkaround\n25:23 Dry Ice Cleaning Process\n26:14 Back to the McLaren P1\n28:09 Signing the P1 Engine Cover\n29:59 Final Thoughts\n30:48 Wrap Up\n\n#McLarenP1 #Tavarish #Wrecked\n\nWATCH NEXT:\n🍿 COMPLETE TOUR of My Car Collection! 2023; 13 Years of YouTube https://www.youtube.com/watch?v=CBAbD9PD24g\n🍿 RICHARD HAMMOND ROASTS MY Lambo! Visit to The Smallest Cog https://www.youtube.com/watch?v=sgwdSmkrbhg\n🍿 Preparing My 1,000HP WINTER SLAYER! Ferrari SF90 Stradale Roof Box Install https://www.youtube.com/watch?v=nfPCWMcz97M\n\nSHMEE150 GEAR:\n📹 Filming Equipment - https://kit.co/Shmee150/youtube-filming-gear-2023\n🎒 What's In My Bag - https://kit.co/Shmee150/in-my-bag\n🔌 Car Maintenance - https://kit.co/Shmee150/shmeemobile-car-maintenance\n\nSUPPORT SHMEE150:\n👕 Merch Store - http://cheers.shmee150.com\n🛒 Model Cars, Sunglasses & More - https://shmee150.com/affiliate-shop\n\nSHMEE150 PARTNERS:\n💸 Car Finance - https://www.approvedmotorfinance.co.uk/shmee150\n🏆 BOTB Win Your Dream Car - https://www.botb.com/shmee150\n🧼 Topaz Detailing - http://www.topazdetailing.com\n🗺️ Vehicle Tracking - https://globaltelemetrics.com\n\nOTHER SHMEE150 CHANNELS:\n🏠 The Shmuseum - http://youtube.com/theshmuseum\n🩳 Shmeebites - http://youtube.com/shmeebites\n⌚ Shwatch150 - http://youtube.com/shwatch150\n\nFIND SHMEE150 ONLINE:\n🌍 Website - http://www.shmee150.com\n📸 Instagram - http://instagram.com/shmee150\n👤 Facebook - http://facebook.com/shmee150\n📺 TikTok - https://tiktok.com/@shmee150\n\nWORK WITH SHMEE150:\n📈 Advertise - https://shmee150.com/advertise-on-shmee150"
        }
      },
      "contentDetails": {
        "duration": "PT31M12S",
        "dimension": "2d",
        "definition": "hd",
        "caption": "false",
        "licensedContent": true,
        "contentRating": {
          
        },
        "projection": "rectangular"
      },
      "statistics": {
        "viewCount": "402994",
        "likeCount": "17151",
        "favoriteCount": "0",
        "commentCount": "875"
      }
    },
    {
      "kind": "youtube#video",
      "etag": "hHUJsl7jvagUyhWD4JUhQ6s0LWU",
      "id": "8_Pmwy1ePJ4",
      "snippet": {
        "publishedAt": "2023-04-03T02:37:34Z",
        "channelId": "UCStBfpQeA4imrUzPJoTXoFA",
        "title": "Kane Brown & Katelyn Brown Perform “Thank God” | 2023 CMT Music Awards",
        "description": "Kane Brown and Katelyn Brown perform “Thank God” at the 2023 CMT Music Awards. Check out more at https://www.cmt.com/cmt-music-awards\n\n#CMTAwards #KaneBrown #KatelynBrown\n\nParamount+ is here! Stream all your favorite shows now on Paramount+. Try it FREE at https://bit.ly/3qyOeOf\n\nSUBSCRIBE now for more CMT: https://bit.ly/2EUv0Nc\n\nFor updates on all things country, follow CMT!\nCMT News & More: http://www.cmt.com\nCMT on FB: https://www.facebook.com/cmt\nCMT on Twitter: https://twitter.com/cmt\nCMT on Instagram: https://www.instagram.com/cmt/",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/8_Pmwy1ePJ4/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/8_Pmwy1ePJ4/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/8_Pmwy1ePJ4/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/8_Pmwy1ePJ4/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/8_Pmwy1ePJ4/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "CMT",
        "tags": [
          "Kane Brown and Katelyn Brown",
          "Katelyn Brown performance",
          "Kane Brown",
          "Katelyn Brown",
          "Kane Brown performance",
          "Kane Brown live",
          "Kane Brown cmt awards",
          "cmt awards 2023",
          "cmt awards",
          "cmt",
          "Thank God",
          "Thank God live",
          "Thank God Kane Brown and Katelyn Brown",
          "Kane Brown music",
          "Kane Brown songs",
          "Katelyn Brown songs",
          "country music",
          "country",
          "live performance",
          "music",
          "new music",
          "Kane Brown cmt awards performance 2023",
          "country music artist",
          "kane brown thank god ft katelyn brown",
          "award show"
        ],
        "categoryId": "24",
        "liveBroadcastContent": "none",
        "localized": {
          "title": "Kane Brown & Katelyn Brown Perform “Thank God” | 2023 CMT Music Awards",
          "description": "Kane Brown and Katelyn Brown perform “Thank God” at the 2023 CMT Music Awards. Check out more at https://www.cmt.com/cmt-music-awards\n\n#CMTAwards #KaneBrown #KatelynBrown\n\nParamount+ is here! Stream all your favorite shows now on Paramount+. Try it FREE at https://bit.ly/3qyOeOf\n\nSUBSCRIBE now for more CMT: https://bit.ly/2EUv0Nc\n\nFor updates on all things country, follow CMT!\nCMT News & More: http://www.cmt.com\nCMT on FB: https://www.facebook.com/cmt\nCMT on Twitter: https://twitter.com/cmt\nCMT on Instagram: https://www.instagram.com/cmt/"
        },
        "defaultAudioLanguage": "en"
      },
      "contentDetails": {
        "duration": "PT3M3S",
        "dimension": "2d",
        "definition": "hd",
        "caption": "true",
        "licensedContent": true,
        "regionRestriction": {
          "blocked": [
            "AE",
            "AM",
            "BH",
            "DZ",
            "EG",
            "IQ",
            "IR",
            "JO",
            "KW",
            "LB",
            "LY",
            "MA",
            "OM",
            "PS",
            "QA",
            "SA",
            "SY",
            "TN",
            "YE"
          ]
        },
        "contentRating": {
          
        },
        "projection": "rectangular"
      },
      "statistics": {
        "viewCount": "298624",
        "likeCount": "4713",
        "favoriteCount": "0",
        "commentCount": "311"
      }
    },
    {
      "kind": "youtube#video",
      "etag": "1A_qtqGncpzd793n3on4vVt1jyY",
      "id": "L_pi_qfmOQw",
      "snippet": {
        "publishedAt": "2023-04-02T20:05:31Z",
        "channelId": "UCrYrcFGGs_nke1MggS8Jvqg",
        "title": "I Beat Minecraft Stranded In A Desert",
        "description": "This desert was so hot lol\nSUBSCRIBE!!!\n\nWatch me live!\nhttps://www.twitch.tv/karljacobs\n\nJoin my discord server!\nhttps://discord.gg/ecH97hH66m\n----------------------------------------------------------------\nFollow me on all socials!\n• Twitter - https://twitter.com/KarlJacobs_\n•  Instagram - https://www.instagram.com/karljacobs_/\n--------------------------------------------------------------------\nEditor!!!: @RealZade on twitter",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/L_pi_qfmOQw/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/L_pi_qfmOQw/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/L_pi_qfmOQw/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/L_pi_qfmOQw/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/L_pi_qfmOQw/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "Karl",
        "tags": [
          "karl jacobs"
        ],
        "categoryId": "22",
        "liveBroadcastContent": "none",
        "localized": {
          "title": "I Beat Minecraft Stranded In A Desert",
          "description": "This desert was so hot lol\nSUBSCRIBE!!!\n\nWatch me live!\nhttps://www.twitch.tv/karljacobs\n\nJoin my discord server!\nhttps://discord.gg/ecH97hH66m\n----------------------------------------------------------------\nFollow me on all socials!\n• Twitter - https://twitter.com/KarlJacobs_\n•  Instagram - https://www.instagram.com/karljacobs_/\n--------------------------------------------------------------------\nEditor!!!: @RealZade on twitter"
        }
      },
      "contentDetails": {
        "duration": "PT8M5S",
        "dimension": "2d",
        "definition": "hd",
        "caption": "false",
        "licensedContent": true,
        "contentRating": {
          
        },
        "projection": "rectangular"
      },
      "statistics": {
        "viewCount": "411108",
        "likeCount": "31128",
        "favoriteCount": "0",
        "commentCount": "1265"
      }
    },
    {
      "kind": "youtube#video",
      "etag": "ey0MbMQ32VMyozg0rORHOaDwVbY",
      "id": "PfmiFUm_Jmc",
      "snippet": {
        "publishedAt": "2023-04-02T23:33:07Z",
        "channelId": "UCtn2hU9HKYQAgDtwrhux7Sw",
        "title": "My Flood Totaled ZR1 Corvette Ran for only 3 Miles after its Engine Repairs",
        "description": "Get a 4-week trial, free postage, and a digital scale at https://www.stamps.com/samcrac. Thanks to Stamps.com for sponsoring the show!\n\nAfter flushing the fluids and fixing up our engine, transmission, and every little problem area on our Flood Totaled ZR1 Corvette, we hit a roadblock...\n\nInstagram: https://www.instagram.com/samcracc/\nFacebook: https://www.facebook.com/SamcracAuto/\nEmail Me: SamcracAuto@gmail.com",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/PfmiFUm_Jmc/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/PfmiFUm_Jmc/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/PfmiFUm_Jmc/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/PfmiFUm_Jmc/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/PfmiFUm_Jmc/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "Samcrac",
        "tags": [
          "flood",
          "flooded cars",
          "flood cars",
          "hurricane ian",
          "salt water",
          "corvette",
          "ferrari",
          "zr1",
          "shelby",
          "copart",
          "totaled",
          "total",
          "scrap",
          "salvage",
          "restoration",
          "rebuild",
          "samcrac",
          "zr-1",
          "bentley",
          "c8",
          "mechanic",
          "repair",
          "mechanical",
          "auction",
          "win",
          "pennzoil"
        ],
        "categoryId": "2",
        "liveBroadcastContent": "none",
        "localized": {
          "title": "My Flood Totaled ZR1 Corvette Ran for only 3 Miles after its Engine Repairs",
          "description": "Get a 4-week trial, free postage, and a digital scale at https://www.stamps.com/samcrac. Thanks to Stamps.com for sponsoring the show!\n\nAfter flushing the fluids and fixing up our engine, transmission, and every little problem area on our Flood Totaled ZR1 Corvette, we hit a roadblock...\n\nInstagram: https://www.instagram.com/samcracc/\nFacebook: https://www.facebook.com/SamcracAuto/\nEmail Me: SamcracAuto@gmail.com"
        },
        "defaultAudioLanguage": "en"
      },
      "contentDetails": {
        "duration": "PT18M20S",
        "dimension": "2d",
        "definition": "hd",
        "caption": "false",
        "licensedContent": true,
        "contentRating": {
          
        },
        "projection": "rectangular"
      },
      "statistics": {
        "viewCount": "261772",
        "likeCount": "19030",
        "favoriteCount": "0",
        "commentCount": "519"
      }
    },
    {
      "kind": "youtube#video",
      "etag": "68NtJMLKv-rhNmnRaq8wiAUtqpg",
      "id": "1Sh0yZNhpEk",
      "snippet": {
        "publishedAt": "2023-04-02T19:05:44Z",
        "channelId": "UCilwZiBBfI9X6yiZRzWty8Q",
        "title": "This phone call changed my life..",
        "description": "I called old friends from my yearbook and now I’m possibly reconnecting with my old best friend. Life is crazy\n🔴 SUBSCRIBE TO BEAT DRAKE ► http://bit.ly/SubToRug\n🔵 Try my G FUEL Flavor!! ► https://gfuel.ly/use-code-rug \n\nGO SPAM MY OTHER PAGES!!\nInstagram ► https://www.instagram.com/fazerug/\nTikTok ► https://www.tiktok.com/@rug\nTwitter ► https://twitter.com/FaZeRug\nSnapchat ► \"thefazerug\"E",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/1Sh0yZNhpEk/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/1Sh0yZNhpEk/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/1Sh0yZNhpEk/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/1Sh0yZNhpEk/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/1Sh0yZNhpEk/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "FaZe Rug",
        "tags": [
          "faze rug",
          "rug",
          "rugfaze",
          "fazerug"
        ],
        "categoryId": "24",
        "liveBroadcastContent": "none",
        "localized": {
          "title": "This phone call changed my life..",
          "description": "I called old friends from my yearbook and now I’m possibly reconnecting with my old best friend. Life is crazy\n🔴 SUBSCRIBE TO BEAT DRAKE ► http://bit.ly/SubToRug\n🔵 Try my G FUEL Flavor!! ► https://gfuel.ly/use-code-rug \n\nGO SPAM MY OTHER PAGES!!\nInstagram ► https://www.instagram.com/fazerug/\nTikTok ► https://www.tiktok.com/@rug\nTwitter ► https://twitter.com/FaZeRug\nSnapchat ► \"thefazerug\"E"
        },
        "defaultAudioLanguage": "en"
      },
      "contentDetails": {
        "duration": "PT14M56S",
        "dimension": "2d",
        "definition": "hd",
        "caption": "false",
        "licensedContent": true,
        "contentRating": {
          
        },
        "projection": "rectangular"
      },
      "statistics": {
        "viewCount": "2670301",
        "likeCount": "107157",
        "favoriteCount": "0",
        "commentCount": "8330"
      }
    },
    {
      "kind": "youtube#video",
      "etag": "v5GMFxMPsvTCgrDo268YEYClnfc",
      "id": "Me6RQZV8VD4",
      "snippet": {
        "publishedAt": "2023-04-01T14:54:35Z",
        "channelId": "UCqZQlzSHbVJrwrn5XvzrzcA",
        "title": "Manchester City v. Liverpool | PREMIER LEAGUE HIGHLIGHTS | 4/1/2023 | NBC Sports",
        "description": "Facing a potentially disastrous blow to their title ambitions, Manchester City emphatically stepped up to hammer Liverpool 4-1 and pull within five points of Arsenal. #NBCSports #PremierLeague #ManCity #Liverpool\n» Subscribe to NBC Sports: https://www.youtube.com/nbcsports?sub_confirmation=1\n» Watch Live Sports on NBCSports.com: http://www.nbcsports.com/live\n» Get more Premier League news on NBC Sports: https://nbcsports.com/soccer/premier-league\n\nWant more Premier League? Check out Peacock Premium: https://peacocktv.com/premierleague\n\nNBC Sports Group serves sports fans 24/7 with premier live events, insightful studio shows, and compelling original programming. NBC Sports is an established leader in the sports media landscape with an unparalleled collection of sports properties that include the Olympics, NFL, Premier League, NASCAR, PGA TOUR, the Kentucky Derby, Tour de France, French Open, IndyCar and many more.\n\nSubscribe to our channel for the latest sporting news and highlights!\n\nThe Premier League across NBC Sports Group launched in 2013 with their biggest and broadest programming commitment to-date in the United States. With live multi-platform coverage of all 380 games, analysis from best-in-class talent and extensive surrounding coverage all week long, NBC Sports Group has become the ultimate destination for new and existing Premier League fans.\n\nThe Premier League maintains strong and consistent reach across NBC, USA Network, CNBC, and NBC Sports Group’s live streaming products, led by the biggest stars and most prestigious teams in the world.\n\nVisit NBC Sports: https://www.nbcsports.com\nFind NBC Sports on Facebook: https://www.facebook.com/NBCSports\nFollow NBC Sports on Twitter: https://twitter.com/nbcsports\nFollow NBC Sports on Instagram: https://www.instagram.com/nbcsports/\n\nhttps://www.nbcsports.com/nfl/sunday-night-football\nhttps://nbcsports.com/motors/nascar\nhttps://nbcsports.com/soccer/premier-league\n\nManchester City v. Liverpool | PREMIER LEAGUE HIGHLIGHTS | 4/1/2023 | NBC Sports\nhttps://www.youtube.com/nbcsports",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/Me6RQZV8VD4/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/Me6RQZV8VD4/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/Me6RQZV8VD4/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/Me6RQZV8VD4/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/Me6RQZV8VD4/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "NBC Sports",
        "tags": [
          "nbc sports",
          "nbc",
          "nbcsn",
          "premier",
          "league",
          "premier league",
          "premier league highlights",
          "english premier league",
          "epl",
          "premier league goals",
          "premier league soccer",
          "premier league live",
          "english premier league live",
          "english premier league today",
          "premier league 2022/23",
          "manchester city vs liverpool",
          "manchester city vs liverpool highlights",
          "manchester city highlights",
          "manchester city liverpool",
          "manchester city",
          "liverpool vs man city",
          "liverpool highlights",
          "liverpool",
          "man city"
        ],
        "categoryId": "17",
        "liveBroadcastContent": "none",
        "localized": {
          "title": "Manchester City v. Liverpool | PREMIER LEAGUE HIGHLIGHTS | 4/1/2023 | NBC Sports",
          "description": "Facing a potentially disastrous blow to their title ambitions, Manchester City emphatically stepped up to hammer Liverpool 4-1 and pull within five points of Arsenal. #NBCSports #PremierLeague #ManCity #Liverpool\n» Subscribe to NBC Sports: https://www.youtube.com/nbcsports?sub_confirmation=1\n» Watch Live Sports on NBCSports.com: http://www.nbcsports.com/live\n» Get more Premier League news on NBC Sports: https://nbcsports.com/soccer/premier-league\n\nWant more Premier League? Check out Peacock Premium: https://peacocktv.com/premierleague\n\nNBC Sports Group serves sports fans 24/7 with premier live events, insightful studio shows, and compelling original programming. NBC Sports is an established leader in the sports media landscape with an unparalleled collection of sports properties that include the Olympics, NFL, Premier League, NASCAR, PGA TOUR, the Kentucky Derby, Tour de France, French Open, IndyCar and many more.\n\nSubscribe to our channel for the latest sporting news and highlights!\n\nThe Premier League across NBC Sports Group launched in 2013 with their biggest and broadest programming commitment to-date in the United States. With live multi-platform coverage of all 380 games, analysis from best-in-class talent and extensive surrounding coverage all week long, NBC Sports Group has become the ultimate destination for new and existing Premier League fans.\n\nThe Premier League maintains strong and consistent reach across NBC, USA Network, CNBC, and NBC Sports Group’s live streaming products, led by the biggest stars and most prestigious teams in the world.\n\nVisit NBC Sports: https://www.nbcsports.com\nFind NBC Sports on Facebook: https://www.facebook.com/NBCSports\nFollow NBC Sports on Twitter: https://twitter.com/nbcsports\nFollow NBC Sports on Instagram: https://www.instagram.com/nbcsports/\n\nhttps://www.nbcsports.com/nfl/sunday-night-football\nhttps://nbcsports.com/motors/nascar\nhttps://nbcsports.com/soccer/premier-league\n\nManchester City v. Liverpool | PREMIER LEAGUE HIGHLIGHTS | 4/1/2023 | NBC Sports\nhttps://www.youtube.com/nbcsports"
        },
        "defaultAudioLanguage": "en"
      },
      "contentDetails": {
        "duration": "PT13M26S",
        "dimension": "2d",
        "definition": "hd",
        "caption": "true",
        "licensedContent": true,
        "regionRestriction": {
          "allowed": [
            "GU",
            "MP",
            "PR",
            "US",
            "VI"
          ]
        },
        "contentRating": {
          
        },
        "projection": "rectangular"
      },
      "statistics": {
        "viewCount": "987417",
        "likeCount": "11432",
        "favoriteCount": "0",
        "commentCount": "1019"
      }
    },
    {
      "kind": "youtube#video",
      "etag": "hn_UlnAQkiwNSTVX07RwYRKWqJ8",
      "id": "Yvqz-BYBnp4",
      "snippet": {
        "publishedAt": "2023-04-02T21:15:30Z",
        "channelId": "UCBJeMCIeLQos7wacox4hmLQ",
        "title": "Napoli-Milan 0-4 | Leao and the Rossoneri stun league leaders: Goals & Highlights | Serie A 2022/23",
        "description": "The unpredictable unfolds at the Diego Maradona Stadium as Napoli fail to reply to Milan’s 4 goals; the star of the show is undoubtedly Rafael Leao, who hit the 10-goal mark with a brace, becoming the highest-scoring Rossoneri player this season  | Serie A 2022/23\n\n#Highlights #NapoliMilan #SerieA\n\nThis is the official channel for the Serie A, providing all the latest highlights, interviews, news and features to keep you up to date with all things Italian football.\nSubscribe to the channel here! https://bit.ly/SERIEA_YT\n \nFind out more about the Serie A at: http://www.legaseriea.it/en/ \n\nQuesto è il canale ufficiale della Serie A, dove potrai avere accesso ai momenti salienti, alle interviste, alle notizie e alle funzionalità del momento per rimanere aggiornato sulle ultime novità del campionato.\nIscriviti qui al canale! https://bit.ly/SERIEA_YT\n\nPer maggiori informazioni sulla Serie A: http://www.legaseriea.it/it",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/Yvqz-BYBnp4/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/Yvqz-BYBnp4/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/Yvqz-BYBnp4/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/Yvqz-BYBnp4/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/Yvqz-BYBnp4/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "Serie A",
        "tags": [
          "Ronaldo",
          "Serie A",
          "Dybala",
          "highlights",
          "Juventus",
          "AC Milan",
          "Inter Milan",
          "Napoli",
          "Roma",
          "CR7",
          "Cristiano Ronaldo",
          "goals",
          "full highlights",
          "watch",
          "partita",
          "migliori gol",
          "gol del mese",
          "calcio",
          "Italia",
          "lukaku",
          "Lazio",
          "zlatan",
          "ibrahimovic",
          "highlights serie a",
          "highlights inter",
          "highlights juventus",
          "highlights milan",
          "highlights juve",
          "highlights roma",
          "lautaro",
          "lautaro martinez",
          "inter",
          "juventus",
          "juve",
          "liga italiana",
          "liga italia",
          "lega italiana",
          "lega italia",
          "matchid=A||2022-23||UNICO||UNI||28||NAPMIL"
        ],
        "categoryId": "17",
        "liveBroadcastContent": "none",
        "localized": {
          "title": "Napoli-Milan 0-4 | Leao and the Rossoneri stun league leaders: Goals & Highlights | Serie A 2022/23",
          "description": "The unpredictable unfolds at the Diego Maradona Stadium as Napoli fail to reply to Milan’s 4 goals; the star of the show is undoubtedly Rafael Leao, who hit the 10-goal mark with a brace, becoming the highest-scoring Rossoneri player this season  | Serie A 2022/23\n\n#Highlights #NapoliMilan #SerieA\n\nThis is the official channel for the Serie A, providing all the latest highlights, interviews, news and features to keep you up to date with all things Italian football.\nSubscribe to the channel here! https://bit.ly/SERIEA_YT\n \nFind out more about the Serie A at: http://www.legaseriea.it/en/ \n\nQuesto è il canale ufficiale della Serie A, dove potrai avere accesso ai momenti salienti, alle interviste, alle notizie e alle funzionalità del momento per rimanere aggiornato sulle ultime novità del campionato.\nIscriviti qui al canale! https://bit.ly/SERIEA_YT\n\nPer maggiori informazioni sulla Serie A: http://www.legaseriea.it/it"
        },
        "defaultAudioLanguage": "en"
      },
      "contentDetails": {
        "duration": "PT3M26S",
        "dimension": "2d",
        "definition": "hd",
        "caption": "false",
        "licensedContent": true,
        "regionRestriction": {
          "blocked": [
            "AE",
            "BH",
            "DJ",
            "DZ",
            "EG",
            "IQ",
            "IR",
            "IT",
            "JO",
            "KW",
            "LB",
            "LY",
            "MA",
            "MR",
            "OM",
            "PS",
            "QA",
            "SA",
            "SD",
            "SO",
            "SS",
            "SY",
            "TD",
            "TN",
            "YE"
          ]
        },
        "contentRating": {
          
        },
        "projection": "rectangular"
      },
      "statistics": {
        "viewCount": "3490246",
        "likeCount": "66787",
        "favoriteCount": "0",
        "commentCount": "3043"
      }
    },
    {
      "kind": "youtube#video",
      "etag": "xbudC1XN6gvNJ0evLRXI4hU0vT0",
      "id": "vkKh4aLzuYg",
      "snippet": {
        "publishedAt": "2023-04-02T03:00:04Z",
        "channelId": "UCJ5v_MCY6GNUBTO8-D3XoAg",
        "title": "Rey Mysterio vs. Dominik Mysterio: WrestleMania 39 Saturday Highlights",
        "description": "The family rivalry between Rey Mysterio and Dominik Mysterio gets real as they clash at WrestleMania, with megastar Bad Bunny looking on from the Spanish Commentary Table. Catch WWE action on Peacock, WWE Network, FOX, USA Network, Sony India and more. #WrestleMania\nStream WWE on Peacock https://pck.tv/3ZTjVE7 in the U.S. and on WWE Network http://wwe.yt/wwenetwork everywhere else\r\n---------------------------------------------------------------------\r\nFollow WWE for more exciting action! - Subscribe to WWE on YouTube: http://wwe.yt/\r\n---------------------------------------------------------------------\r\nCheck out WWE.com for news and updates: http://goo.gl/akf0J4\r\nWatch WWE on Sony in India: http://www.wwe.com/SonySportsNetwork\r\nWatch WWE on Disney+ Hotstar in Indonesia: http://www.wwe.com/hotstar\r\nWatch WWE on Shahid: http://www.wwe.com/yt-shahid\r\nFind the latest Superstar gear at WWEShop: http://shop.wwe.com\r\n---------------------------------------------\r\nCheck out these other channels!\r\n---------------------------------------------\r\nUpUpDownDown: https://www.youtube.com/upupdowndown\r\nCeltic Warrior Workouts: https://www.youtube.com/@CelticWarriorWorkouts\r\nWWE Music: https://www.youtube.com/wwemusic\r\n------------------------------------\r\nWWE on Social Media\r\n------------------------------------\r\nTwitter: https://twitter.com/wwe\r\nFacebook: https://www.facebook.com/wwe\r\nInstagram: https://www.instagram.com/wwe/\r\nTikTok: https://www.tiktok.com/@wwe\r\nGiphy: https://giphy.com/wwe\r\n------------------------------------",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/vkKh4aLzuYg/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/vkKh4aLzuYg/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/vkKh4aLzuYg/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/vkKh4aLzuYg/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/vkKh4aLzuYg/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "WWE",
        "tags": [
          "Aalyah Mysterio",
          "Angie Mysterio",
          "Bad Bunny",
          "Dominik Mysterio",
          "Rey Mysterio",
          "superstars",
          "world wrestling entertainment",
          "wrestle",
          "wrestler",
          "wrestling",
          "wwe",
          "wwe 2021",
          "مصارعه",
          "कुश्ती",
          "डब्लू डब्लू ई",
          "पहलवान",
          "मैच",
          "व्यावसायिक कुश्ती",
          "सुपरस्टार",
          "Wrestlemania",
          "wrestlemania 39",
          "wm",
          "wm39",
          "mania",
          "mania 39",
          "wrestlemania 2023",
          "wwe wrestlemania",
          "wrestlemania highlights",
          "wrestlemania match",
          "wrestlemania la"
        ],
        "categoryId": "17",
        "liveBroadcastContent": "none",
        "localized": {
          "title": "Rey Mysterio vs. Dominik Mysterio: WrestleMania 39 Saturday Highlights",
          "description": "The family rivalry between Rey Mysterio and Dominik Mysterio gets real as they clash at WrestleMania, with megastar Bad Bunny looking on from the Spanish Commentary Table. Catch WWE action on Peacock, WWE Network, FOX, USA Network, Sony India and more. #WrestleMania\nStream WWE on Peacock https://pck.tv/3ZTjVE7 in the U.S. and on WWE Network http://wwe.yt/wwenetwork everywhere else\r\n---------------------------------------------------------------------\r\nFollow WWE for more exciting action! - Subscribe to WWE on YouTube: http://wwe.yt/\r\n---------------------------------------------------------------------\r\nCheck out WWE.com for news and updates: http://goo.gl/akf0J4\r\nWatch WWE on Sony in India: http://www.wwe.com/SonySportsNetwork\r\nWatch WWE on Disney+ Hotstar in Indonesia: http://www.wwe.com/hotstar\r\nWatch WWE on Shahid: http://www.wwe.com/yt-shahid\r\nFind the latest Superstar gear at WWEShop: http://shop.wwe.com\r\n---------------------------------------------\r\nCheck out these other channels!\r\n---------------------------------------------\r\nUpUpDownDown: https://www.youtube.com/upupdowndown\r\nCeltic Warrior Workouts: https://www.youtube.com/@CelticWarriorWorkouts\r\nWWE Music: https://www.youtube.com/wwemusic\r\n------------------------------------\r\nWWE on Social Media\r\n------------------------------------\r\nTwitter: https://twitter.com/wwe\r\nFacebook: https://www.facebook.com/wwe\r\nInstagram: https://www.instagram.com/wwe/\r\nTikTok: https://www.tiktok.com/@wwe\r\nGiphy: https://giphy.com/wwe\r\n------------------------------------"
        }
      },
      "contentDetails": {
        "duration": "PT2M48S",
        "dimension": "2d",
        "definition": "hd",
        "caption": "true",
        "licensedContent": true,
        "regionRestriction": {
          "blocked": [
            "RU"
          ]
        },
        "contentRating": {
          
        },
        "projection": "rectangular"
      },
      "statistics": {
        "viewCount": "2477240",
        "likeCount": "36077",
        "favoriteCount": "0",
        "commentCount": "1621"
      }
    },
    {
      "kind": "youtube#video",
      "etag": "b0nfxxu7jZ93WSNdyausadvDgXw",
      "id": "6fZ8TMNT7mU",
      "snippet": {
        "publishedAt": "2023-04-02T11:01:00Z",
        "channelId": "UCBJh1lBd44OGUd5JrHZQvCQ",
        "title": "Stunning 4 CHAIR TURN Blind Auditions that BLEW AWAY the Coaches of The Voice | Top 10",
        "description": "Which Blind Audition blew you away? Let us know in the comments below👇\n\n🚨 This video features the following performances and moments:\n00:00 NOIVAS singing 'A Change Is Gonna Come' by Sam Cooke (USA, 2023)\n01:43 ლიკა სირაძე (Lika Siradze) singing 'Where Did You Sleep Last Night' by Nirvana (Georgia, 2022)\n03:36 Abram singing 'Cornerstone' by Benjamin Clementine (France, 2023)\n06:01 Janaki Easwar singing 'lovely' by Billie Eilish (Australia, 2021)\n07:32 Isak Øvrevold singing 'Break My Heart Again' by FINNEAS (Norway, 2023)\n09:31 Jessica singing 'Issues' by Julia Michaels (Vlaanderen/Belgium, 2022)\n11:21 John Akpos singing 'Say Something' by A Great Big World, Christina Aguilera (Nigeria, 2023)\n13:12 Ángela Navarro singing 'Cuando nadie me ve' by Alejandro Sanz (Argentina, 2022)\n14:53 Aku Keinonen singing 'Vincent' by Don McLean (Finland, 2023)\n16:48 Joana Oliveira singing 'Always Remember Us This Way' by Lady Gaga (Portugal, 2019)\n\n🚨 Our Socials\nFollow us on Instagram & TikTok for clips, fun facts, games, and more:\nhttp://instagram.com/TheVoiceHQ\nhttps://www.tiktok.com/@TheVoiceHQ\n\n🚨 Hashtags:\n#TheVoice #BlindAuditions #Top10",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/6fZ8TMNT7mU/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/6fZ8TMNT7mU/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/6fZ8TMNT7mU/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/6fZ8TMNT7mU/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/6fZ8TMNT7mU/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "Best of The Voice",
        "tags": [
          "Best Of The Voice",
          "The Voice",
          "Blind Auditions",
          "Blind Audition",
          "Voice",
          "the voice best auditions",
          "La Voz",
          "The Voice 2022",
          "La Voz 2022",
          "The Voice 2023",
          "La Voz 2023",
          "Best Blind Auditions",
          "4-Chair Turns",
          "Four Chair Turns",
          "All Chair Turns",
          "The Voice USA",
          "The Voice US",
          "The Voice Georgia",
          "The Voice France",
          "The Voice Australia",
          "The Voice Norway",
          "The Voice Belgium",
          "The Voice Nigeria",
          "La Voz Argentina",
          "The Voice of Finland",
          "The Voice Portugal",
          "Niall Horan",
          "Season 23",
          "Song",
          "Cover"
        ],
        "categoryId": "24",
        "liveBroadcastContent": "none",
        "defaultLanguage": "en",
        "localized": {
          "title": "Stunning 4 CHAIR TURN Blind Auditions that BLEW AWAY the Coaches of The Voice | Top 10",
          "description": "Which Blind Audition blew you away? Let us know in the comments below👇\n\n🚨 This video features the following performances and moments:\n00:00 NOIVAS singing 'A Change Is Gonna Come' by Sam Cooke (USA, 2023)\n01:43 ლიკა სირაძე (Lika Siradze) singing 'Where Did You Sleep Last Night' by Nirvana (Georgia, 2022)\n03:36 Abram singing 'Cornerstone' by Benjamin Clementine (France, 2023)\n06:01 Janaki Easwar singing 'lovely' by Billie Eilish (Australia, 2021)\n07:32 Isak Øvrevold singing 'Break My Heart Again' by FINNEAS (Norway, 2023)\n09:31 Jessica singing 'Issues' by Julia Michaels (Vlaanderen/Belgium, 2022)\n11:21 John Akpos singing 'Say Something' by A Great Big World, Christina Aguilera (Nigeria, 2023)\n13:12 Ángela Navarro singing 'Cuando nadie me ve' by Alejandro Sanz (Argentina, 2022)\n14:53 Aku Keinonen singing 'Vincent' by Don McLean (Finland, 2023)\n16:48 Joana Oliveira singing 'Always Remember Us This Way' by Lady Gaga (Portugal, 2019)\n\n🚨 Our Socials\nFollow us on Instagram & TikTok for clips, fun facts, games, and more:\nhttp://instagram.com/TheVoiceHQ\nhttps://www.tiktok.com/@TheVoiceHQ\n\n🚨 Hashtags:\n#TheVoice #BlindAuditions #Top10"
        },
        "defaultAudioLanguage": "en"
      },
      "contentDetails": {
        "duration": "PT18M57S",
        "dimension": "2d",
        "definition": "hd",
        "caption": "false",
        "licensedContent": true,
        "regionRestriction": {
          "blocked": [
            "AD",
            "BL",
            "FR",
            "GF",
            "GP",
            "MC",
            "MF",
            "MQ",
            "NC",
            "PF",
            "PM",
            "RE",
            "TF",
            "WF",
            "YT"
          ]
        },
        "contentRating": {
          
        },
        "projection": "rectangular"
      },
      "statistics": {
        "viewCount": "431225",
        "likeCount": "3910",
        "favoriteCount": "0",
        "commentCount": "82"
      }
    },
    {
      "kind": "youtube#video",
      "etag": "_klNdsj_Of57j68vv76MpdjO-hI",
      "id": "G7EZl8a2aFI",
      "snippet": {
        "publishedAt": "2023-04-02T17:00:07Z",
        "channelId": "UC9FkeEFIGd9FXRfxpTltXYA",
        "title": "I Played 100 RANDOM ROBLOX Games And This Is What Happened",
        "description": "In this video, I, Luke TheNotable, play 100 random games in Roblox! It was a journey! Subscribe and like for more Roblox content! \n\nFollow me on Twitter!! - \nhttps://twitter.com/LukeTheNotable \n\nThumbnail Art - Maeder\nhttps://twitter.com/itsmaeder\n\nFollow Tors! \nhttps://twitter.com/TorsThe",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/G7EZl8a2aFI/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/G7EZl8a2aFI/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/G7EZl8a2aFI/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/G7EZl8a2aFI/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/G7EZl8a2aFI/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "Luke TheNotable",
        "tags": [
          "luke thenotable",
          "luke",
          "the",
          "notable",
          "I Played 100 RANDOM ROBLOX Games And This Is What Happened",
          "100 games roblox",
          "best roblox games",
          "robox games",
          "random roblox",
          "random roblox games",
          "no swearing",
          "roblox funny",
          "roblox youtube",
          "roblox trolling",
          "roblox funny moments",
          "100 games",
          "100 days",
          "roblox doors",
          "luke thenotable roblox",
          "100 games of roblox",
          "100 drops roblox",
          "100 robox",
          "100 days robox",
          "roblox game",
          "roblox meme",
          "funny roblox",
          "no cursing"
        ],
        "categoryId": "20",
        "liveBroadcastContent": "none",
        "defaultLanguage": "en",
        "localized": {
          "title": "I Played 100 RANDOM ROBLOX Games And This Is What Happened",
          "description": "In this video, I, Luke TheNotable, play 100 random games in Roblox! It was a journey! Subscribe and like for more Roblox content! \n\nFollow me on Twitter!! - \nhttps://twitter.com/LukeTheNotable \n\nThumbnail Art - Maeder\nhttps://twitter.com/itsmaeder\n\nFollow Tors! \nhttps://twitter.com/TorsThe"
        },
        "defaultAudioLanguage": "en"
      },
      "contentDetails": {
        "duration": "PT20M1S",
        "dimension": "2d",
        "definition": "hd",
        "caption": "false",
        "licensedContent": true,
        "contentRating": {
          
        },
        "projection": "rectangular"
      },
      "statistics": {
        "viewCount": "450202",
        "likeCount": "34876",
        "favoriteCount": "0",
        "commentCount": "3124"
      }
    }
  ],
  "nextPageToken": "CDIQAA",
  "pageInfo": {
    "totalResults": 200,
    "resultsPerPage": 50
  }
}