/* ==================================
   CHIAROSCURO MUSIC LIBRARY
================================== */

// ADD YOUR SONGS HERE
// No MP3 upload button is needed.
// Add a "video" path (a short clip) to each song for the live video panel.

const songs = [

    {
        title: "Talking Body",
        artist: "Tove Lo",
        file: "spoty.audio/1.mp3",
        cover: "spoty.image/talking body.jpg",
        video: "spoty.video/tb.mp4",

        lyrics: [
            { time: 1, text: "Hey" },
            { time: 5, text: "Hey" },
            { time: 8.3, text: "Bed, stay in bed" },
            { time: 10.8, text: "The feeling of your skin locked in my head" },
            { time: 16.5, text: "Smoke, smoke me broke" },
            { time: 18.8, text: "I don't care, I'm down for what you want" },
            { time: 24, text: "Day drunk into the night" },
            { time: 26.8, text: "Wanna keep you here" },
            { time: 28.8, text: "'Cause you dry my tears" },
            { time: 31, text: "Yeah" },
            { time: 32, text: "Summer lovin' and fights" },
            { time: 34.7, text: "How it is for us" },
            { time: 36.8, text: "And it's all because" },
            { time: 39, text: "Now if we're talking body (Hey)" },
            { time: 42.3, text: "You got a perfect one" },
            { time: 43.8, text: "So put it on me (Hey)" },
            { time: 46.3, text: "Swear it won't take you long" },
            { time: 48, text: "If you love me right" },
            { time: 50, text: "We fuck for life" },
            { time: 51.9, text: "On and on and on" },
            { time: 55.1, text: "Now if we're talking body (Hey)" },
            { time: 58.5, text: "You got a perfect one" },
            { time: 59.7, text: "So put it on me (Hey)" },
            { time: 62, text: "Swear it won't take you long" },
            { time: 64, text: "If you love me right" },
            { time: 66, text: "We fuck for life" },
            { time: 67.9, text: "On and on and on" },
            { time: 72.4, text: "Love, give me love" },
            { time: 75, text: "Anything you want I'll give it up" },
            { time: 80.2, text: "Lips, lips I kiss" },
            { time: 83, text: "Bite me while I taste your fingertips" },
            { time: 87.9, text: "Day drunk into the night" },
            { time: 90.5, text: "Wanna keep you here" },
            { time: 92.5, text: "'Cause you dry my tears" },
            { time: 95, text: "Yeah" },
            { time: 96, text: "Summer lovin' and fights" },
            { time: 98.7, text: "How it is for us" },
            { time: 100.8, text: "And it's all because" },
            { time: 103.4, text: "Now if we're talking body (Hey)" },
            { time: 106, text: "You got a perfect one" },
            { time: 107.8, text: "So put it on me (Hey)" },
            { time: 110, text: "Swear it won't take you long" },
            { time: 112, text: "If you love me right" },
            { time: 114, text: "We fuck for life" },
            { time: 116, text: "On and on and on" },
            { time: 118.8, text: "Oh, now if we're talking body (Hey)" },
            { time: 122, text: "You got a perfect one" },
            { time: 123.8, text: "So put it on me (Hey)" },
            { time: 126, text: "Swear it won't take you long" },
            { time: 128, text: "If you love me right" },
            { time: 130, text: "We fuck for life" },
            { time: 132, text: "On and on and on (On and on and on)" },
            { time: 139.1, text: "Oh, oh (Hey)" },
            { time: 144, text: "Bodies" },
            { time: 146.8, text: "Our baby making bodies we just use for fun" },
            { time: 152, text: "Bodies" },
            { time: 154.8, text: "Let's use them up 'til every little piece is gone" },
            { time: 159.5, text: "(Let's go)" },
            { time: 160, text: "On and on and on" },
            { time: 163.5, text: "(Let's go)" },
            { time: 164, text: "On and on" },
            { time: 167.5, text: "(Let's go)" },
            { time: 169.5, text: "Now if we're talking body (Hey)" },
            { time: 172, text: "You got a perfect one" },
            { time: 173.8, text: "So put it on me (Hey)" },
            { time: 176, text: "Swear it won't take you long" },
            { time: 178, text: "If you love me right" },
            { time: 180, text: "We fuck for life" },
            { time: 182, text: "On and on and on" },
            { time: 184.8, text: "Oh, now if we're talking body (Hey)" },
            { time: 188, text: "You got a perfect one" },
            { time: 189.8, text: "So put it on me (Hey)" },
            { time: 192.3, text: "Swear it won't take you long" },
            { time: 194, text: "If you love me right" },
            { time: 196.3, text: "We fuck for life" },
            { time: 198, text: "On and on and on (On and on and on)" },
            { time: 201, text: "Oh, now if we're talking body (Hey)" },
            { time: 206, text: "So put it on me (Hey)" },
            { time: 209.8, text: "If you love me right" },
            { time: 212, text: "We fuck for life" },
            { time: 214, text: "On and on and on" },
            { time: 217, text: "Now if we're talking body (Hey)" },
            { time: 220.2, text: "You got a perfect one" },
            { time: 221.8, text: "So put it on me (Hey)" },
            { time: 224, text: "Swear it won't take you long" },
            { time: 226, text: "If you love me right" },
            { time: 228, text: "We fuck for life" },
            { time: 230, text: "On and on and on(Hey)" },
        ]
      },

    {
        title: "One Of The Girls",
        artist: "The Weeknd, JENNIE, Lily-Rose Depp",
        file: "spoty.audio/2.mp3",
        cover: "spoty.image/one of the girls.jpg",
        video: "spoty.video/ootg.mp4",

        lyrics: [
            { time: 0.00, text: "Lock me up and throw away the key" },
            { time: 2.5, text: "He knows how to get the best out of me" },
            { time: 5, text: "I'm no force for the world to see" },
            { time: 8, text: "Trade my whole life just to be" },
            { time: 22, text: "Tell nobody I control you" },
            { time: 25, text: "I broke you just to own you" },
            { time: 28, text: "They can't tell, but I love you" },
            { time: 31, text: "'Cause you're loyal, baby" },
            { time: 32, text: "I love when you're submissive" },
            { time: 36, text: "You love it when I break skin" },
            { time: 39, text: "You feel pain without flinchin'" },
            { time: 42, text: "So, say it" },
            { time: 44, text: "Give me tough love" },
            { time: 49.15, text: "Leave me with nothin' when I come down" },
            { time: 55, text: "My kind of love" },
            { time: 60, text: "Push me and choke me 'til I pass out" },
            { time: 66, text: "We don't gotta be in love, no" },
            { time: 69, text: "I don't gotta be the one, no" },
            { time: 72, text: "I just wanna be one of your girls tonight" },
            { time: 77, text: "We don't gotta be in love, no" },
            { time: 80, text: "I don't gotta be the one, no" },
            { time: 83, text: "I just wanna be one of your girls tonight, oh" },
            { time: 101, text: "Push me down, hold me down" },
            { time: 104, text: "Spit in my mouth while you turn me out" },
            { time: 108, text: "I wanna take your light inside" },
            { time: 112, text: "Tear me down, snuff me out" },
            { time: 114, text: "Hands on my neck while you push it up" },
            { time: 118, text: "And I'm screamin' now" },
            { time: 121, text: "Give me tough love" },
            { time: 126, text: "Leave me with nothin' when I come down" },
            { time: 132, text: "My kind of love" },
            { time: 137, text: "Force me and choke me 'til I pass out" },
            { time: 143, text: "We don't gotta be in love, no" },
            { time: 146, text: "I don't gotta be the one, no" },
            { time: 149, text: "I just wanna be one of your girls tonight" },
            { time: 154, text: "We don't gotta be in love, no" },
            { time: 157, text: "I don't gotta be the one, no" },
            { time: 160, text: "I just wanna be one of your girls tonight, oh" },
            { time: 167, text: "Lock me up and throw away the key" },
            { time: 170, text: "He knows how to get the best out of me" },
            { time: 172, text: "I'm no force for the world to see" },
            { time: 175, text: "Trade my whole life just to be" },
            { time: 178, text: "Top of the world, but I'm still not free" },
            { time: 181, text: "This is a secret that I keep" },
            { time: 183, text: "Until it's gone, I can never find peace" },
            { time: 186, text: "Waste my whole life just to be" },
            { time: 192, text: "We don't gotta be in love, no" },
            { time: 195, text: "I don't gotta be the one, no" },
            { time: 198, text: "I just wanna be one of your girls tonight" },
            { time: 203, text: "We don't gotta be in love, no" },
            { time: 206, text: "I don't gotta be the one, no" },
            { time: 209, text: "I just wanna be one of your girls tonight, oh" }
        ]
    },

    {
        title: "Wait",
        artist: "Maroon 5",
        file: "spoty.audio/3.mp3",
        cover: "spoty.image/wait.jpg",
        video: "spoty.video/wait.mp4",

        lyrics: [
            { time: 8, text: "Dirty looks from your mother" },
            { time: 12, text: "Never seen you in a dress that color, no" },
            { time: 16, text: "It's a special occasion" },
            { time: 19, text: "Not invited but I'm glad I made it" },
            { time: 23, text: "Oh, let me apologize" },
            { time: 26, text: "I'll make up, make up, make up, make up for all those times" },
            { time: 30, text: "Your love, I don't wanna lose" },
            { time: 34, text: "I'm beggin', beggin', beggin', beggin', begging you" },
            { time: 38, text: "Wait, can you turn around, can you turn around?" },
            { time: 41, text: "Just wait, can we work this out, can we work this out?" },
            { time: 45, text: "Just wait, can you call me please? 'Cause I wanna be with you" },
            { time: 50, text: "Oh, wait, can you turn around, can you turn around?" },
            { time: 57, text: "Just wait, can we work this out, can we work this out?" },
            { time: 61, text: "Just wait, can you call me please? 'Cause I wanna be with you" },
            { time: 69, text: "Can we talk for a moment?" },
            { time: 72, text: "Got these feelings that I'm tired of holding on" },
            { time: 76, text: "Wasn't tryin' to get wasted" },
            { time: 80, text: "I needed more than three or four to say this, oh" },
            { time: 83, text: "Let me apologize, yeah" },
            { time: 87, text: "I'll make up, make up, make up, make up for all those times" },
            { time: 91, text: "Your love, I don't wanna lose" },
            { time: 95, text: "I'm beggin', beggin', beggin', beggin', I'm begging you" },
            { time: 98, text: "Wait, can you turn around, can you turn around?" },
            { time: 102, text: "Just wait, can we work this out, can we work this out?" },
            { time: 106, text: "Just wait, can you call me please? 'Cause I wanna be with you" },
            { time: 114, text: "Wait, can you turn around, can you turn around?" },
            { time: 117, text: "Just wait, can we work this out, can we work this out?" },
            { time: 121, text: "Just wait, can you call me please? 'Cause I wanna be with you" },
            { time: 136, text: "You say I'm just another bad guy" },
            { time: 140, text: "You say I've done a lot of things I can't undo" },
            { time: 143, text: "Before you tell me for the last time, yeah" },
            { time: 148, text: "I'm beggin', beggin', beggin', beggin' you" },
            { time: 154, text: "Wait, can you turn around, can you turn around?" },
            { time: 157, text: "Just wait, can we work this out, can we work this out?" },
            { time: 161, text: "Just wait, can you call me please? 'Cause I wanna be with you" },
            { time: 169.5, text: "Wait, can you turn around, can you turn around?" },
            { time: 173, text: "Just wait, can we work this out, can we work this out?" },
            { time: 177, text: "Just wait, can you call me please? 'Cause I wanna be with you" }
        ]
    },

    {
        title: "Flatline",
        artist: "Justine Bieber",
        file: "spoty.audio/4.mp3",
        cover: "spoty.image/flatline.jpg",
        video: "spoty.video/flatline.mp4",

        lyrics: [
            { time: 3, text: "Lately you've been busy, wondering if you miss me" },
            { time: 6, text: "Why did you go against me? I just wanna know" },
            { time: 11, text: "How come you act so different? Talk to me, I'll listen" },
            { time: 15, text: "All the love I'm giving, don't act like you don't know" },
            { time: 18, text: "I was out there on the road, life out of control" },
            { time: 22, text: "She became a victim to my busy schedule" },
            { time: 26, text: "And I know that it's not fair, that don't mean that I don't care" },
            { time: 30, text: "This one's dedicated to the girl out there" },
            { time: 34, text: "Girl, you always catch me at the bad time" },
            { time: 38, text: "When I know you probably think it's a lie" },
            { time: 41.5, text: "I know I told you last time was the last time" },
            { time: 45, text: "How could you pull the plug and leave me flatline?" },
            { time: 50, text: "Flatline, flatline" },
            { time: 53, text: "How could you pull the plug and leave me flatline?" },
            { time: 57, text: "'Cause when I hit you, you don't even reply" },
            { time: 61, text: "How could you pull the plug and leave me flatline?" },
            { time: 65, text: "Not breathing, what is it I'm not seeing?" },
            { time: 69, text: "She said she's leaving, damn, I can't believe it" },
            { time: 73, text: "It's like my heart's bleeding knowing that you don't need me" },
            { time: 77, text: "Shut my heart down, now I don't know what I'ma do now" },
            { time: 81, text: "I was out there on the road, life out of control" },
            { time: 85, text: "She became a victim to my busy schedule" },
            { time: 89, text: "And I know that it's not fair, that don't mean that I don't care" },
            { time: 93, text: "This one's dedicated to the girl out there" },
            { time: 96.5, text: "Girl, you always catch me at the bad time" },
            { time: 100, text: "When I know you probably think it's a lie" },
            { time: 104, text: "I know I told you last time was the last time" },
            { time: 108, text: "How could you pull the plug and leave me flatline?" },
            { time: 112, text: "Flatline, flatline" },
            { time: 116, text: "How could you pull the plug and leave me flatline?" },
            { time: 122, text: "Flatline, flatline" },
            { time: 126, text: "How could you pull the plug and leave me flatline?" },
            { time: 120, text: "'Cause when I hit you, you don't even reply" },
            { time: 124, text: "How could you pull the plug and leave me flatline?" },
            { time: 128.5, text: "Girl, you always catch me at the bad time" },
            { time: 132, text: "Girl, you always catch me at the bad time" },
            { time: 136, text: "I know I told you last time was the last time" },
            { time: 140, text: "How could you pull the plug and leave me flatline?" },
            { time: 143, text: "Flatline, flatline" },
            { time: 159, text: "Girl, you always catch me at the bad time" },
            { time: 164, text: "When I know you probably think it's a lie" },
            { time: 167, text: "I know I told you last time was the last time" },
            { time: 171, text: "How could you pull the plug and leave me flatline?" },
            { time: 175, text: "Flatline, flatline" },
            { time: 179, text: "How could you pull the plug and leave me flatline?" },
            { time: 183, text: "'Cause when I hit you, you don't even reply" },
            { time: 187, text: "How could you pull the plug and leave me flatline?" }
        ]
    },

    {
        title: "Pure",
        artist: "Sienna Spiro",
        file: "spoty.audio/5.mp3",
        cover: "spoty.image/pure.jpg",
        video: "spoty.video/pure.mp4",

        lyrics: [
            { time: 15, text: "Used to do it all so pure for the love of the song, no more" },
            { time: 21, text: "Now I think about an applause when I open my mouth" },
            { time: 27, text: "I've abandoned my emotions, I've isolated myself" },
            { time: 32, text: "When I see my mother in pain, wish I could feel what she felt" },
            { time: 38, text: "And I don't know what this all means" },
            { time: 44, text: "What this all means" },
            { time: 46.5, text: "It don't feel like me" },
            { time: 49, text: "And sometimes I get insecure, so I wear a dress on the town" },
            { time: 55, text: "Hope a man notices me" },
            { time: 58, text: "I don't know, it makes me proud" },
            { time: 61, text: "I get jealous and I see myself in my sister's eyes" },
            { time: 67, text: "At least she can have a good time, at least she can calm down" },
            { time: 72, text: "And I don't know what this all means" },
            { time: 78, text: "What this all means" },
            { time: 81, text: "It don't feel like me" },
            { time: 84, text: "And you won't give me the deal" },
            { time: 89, text: "I wish I was real, I wish I was" },
            { time: 94, text: "I think about it all the time" },
            { time: 100, text: "What I've been doing with my life" },
            { time: 106, text: "'Cause when it calls me back again" },
            { time: 112, text: "I hope it meant something" },
            { time: 117, text: "I hope it meant something" },
            { time: 123, text: "I've been losing all my friends, stepping up onto the ledge" },
            { time: 132, text: "Thinking I can be an angel, but keep falling instead" },
            { time: 138, text: "Find it hard to stay connected when I wanna feel protected" },
            { time: 144, text: "So hold me, won't you? Just hold me 'cause" },
            { time: 149, text: "I think about it all the time" },
            { time: 154, text: "What I've been doing with my life" },
            { time: 160, text: "'Cause when it calls me back again" },
            { time: 165, text: "I hope it meant something, oh" },
            { time: 172, text: "I think about it all the time, no" },
            { time: 177, text: "What I've been doing with my life" },
            { time: 183, text: "'Cause when it calls me back again" },
            { time: 189, text: "I hope it meant something" },
            { time: 194, text: "I hope I meant something" },
            { time: 204, text: "I don't know the meaning of anything in this song" },
            { time: 210, text: "Just wanna feel special" },
            { time: 213, text: "I just wanna feel" }
        ]
    },

    {
        title: "Gorgeous",
        artist: "Doja Cat",
        file: "spoty.audio/6.mp3",
        cover: "spoty.image/gorgeous.jpg",
        video: "spoty.video/gorgeous.mp4",

        lyrics: [
            { time: 24, text: "If they wasn't grillin' before" },
            { time: 25, text: "They gon' be really mad when we hit the floor" },
            { time: 27, text: "It's a crime to be gorgeous" },
            { time: 29, text: "Between you and a million phones" },
            { time: 30, text: "They takin' pictures like we hittin' a pose" },
            { time: 33, text: "It's alright to be honest" },
            { time: 34, text: "Even when we sit in the dark" },
            { time: 36, text: "I feel the prettiest that you ever saw" },
            { time: 38, text: "Are your eyes even open?" },
            { time: 40, text: "It ain't ever really our fault" },
            { time: 41, text: "We make a killing being so beautiful" },
            { time: 43, text: "It's a crime to be gorgeous" },
            { time: 49, text: "It's a crime to be gorgeous" },
            { time: 54, text: "It's a crime to be gorgeous" },
            { time: 60, text: "It's a crime to be gorgeous" },
            { time: 63, text: "La-la-la, la-la-la, la-la-la, la-la-la" },
            { time: 65, text: "It's a crime" },
            { time: 67, text: "Babe, I just called to tell you how much I love you" },
            { time: 69, text: "And how amazingly beautiful that you are" },
            { time: 74, text: "Oh my God, how uplifting and inspiring you've been to me" },
            { time: 80, text: "For all this time" },
            { time: 82, text: "And I love you, and" },
            { time: 85, text: "No one even has fine hair or is smarter" },
            { time: 87, text: "Yeah, look at me, really look at me" },
            { time: 90, text: "Loaded the magazine, they throwin' the book at me" },
            { time: 93, text: "I'm bookin' it 80 miles per hour 'cause my jewelry" },
            { time: 96, text: "I'm cookin' some collard greens, I ain't got no room for these" },
            { time: 98, text: "Then I got surgery 'cause of scrutiny" },
            { time: 101, text: "But he like my before and after pictures, he cool wit' these" },
            { time: 103, text: "I took off the wig and put some mousse on my new 4C" },
            { time: 106, text: "I put on the wig and take it off as I damn well please" },
            { time: 109, text: "I look like my family, I don't need to brag" },
            { time: 112, text: "Titty used to sag, least she got some ass" },
            { time: 115, text: "Can't avoid the pap, can't even avoid the cash" },
            { time: 118, text: "Yeah, you beautiful, baby, but you got more than that" },
            { time: 121, text: "Pretty hurts, don't talk to me 'bout Brazilians" },
            { time: 123, text: "After that wax, you thought you wanted to kill him" },
            { time: 126, text: "But now you walkin' 'round like you one in a million" },
            { time: 128, text: "He lookin' at me like he want some beautiful children" },
            { time: 132, text: "If they wasn't grillin' before" },
            { time: 134, text: "They gon' be really mad when we hit the floor" },
            { time: 136, text: "It's a crime to be gorgeous" },
            { time: 138, text: "Between you and a million phones" },
            { time: 140, text: "They takin' pictures like we hittin' a pose" },
            { time: 142, text: "It's alright to be honest" },
            { time: 144, text: "Even when we sit in the dark" },
            { time: 145, text: "I feel the prettiest that you ever saw" },
            { time: 147, text: "Are your eyes even open?" },
            { time: 149, text: "It ain't ever really our fault" },
            { time: 151, text: "We make a killing being so beautiful" },
            { time: 153, text: "It's a crime to be gorgeous" },
            { time: 158, text: "It's a crime to be gorgeous" },
            { time: 164, text: "It's a crime to be gorgeous" },
            { time: 169, text: "It's a crime to be gorgeous" },
            { time: 174, text: "It's a crime to be gorgeous" },
            { time: 175, text: "It's a crime" },
            { time: 176, text: "She like white gold in her hardware with an install and a long nail" },
            { time: 180, text: "With a eyelash and it's glued on, she ain't so Christian in Louboutins" },
            { time: 186, text: "And now she got contacts but no close friends" },
            { time: 189, text: "And she lasered all that hair off" },
            { time: 191, text: "And she thank God for that Emsculpt" },
            { time: 194, text: "She wanna be chic when it's inspired by heroin" },
            { time: 197, text: "Ah, there you go with that smile again" },
            { time: 200, text: "She stay in school but she more privy to collagen" },
            { time: 202, text: "Aw, now you on Botched again" },
            { time: 205, text: "You oughta cut off all them Khias, they toxic, friend" },
            { time: 209, text: "You gettin' showered in compliments, huh" },
            { time: 211, text: "You feel empowered but not within" },
            { time: 213, text: "I mean, I only got myself to appeal to" },
            { time: 216, text: "They got they nose up judging me, but ain't all of 'em real" },
            { time: 219, text: "If they wasn't grillin' before" },
            { time: 222, text: "They gon' be really mad when we hit the floor" },
            { time: 223, text: "It's a crime to be gorgeous" },
            { time: 225, text: "Between you and a million phones" },
            { time: 227, text: "They takin' pictures like we hittin' a pose" },
            { time: 229, text: "It's alright to be honest" },
            { time: 231, text: "Even when we sit in the dark" },
            { time: 232, text: "I feel the prettiest that you ever saw" },
            { time: 234, text: "Are your eyes even open?" },
            { time: 236, text: "It ain't ever really our fault" },
            { time: 238, text: "We make a killing being so beautiful" },
            { time: 240, text: "It's a crime to be gorgeous" },
            { time: 245, text: "It's a crime to be gorgeous" },
            { time: 251, text: "It's a crime to be gorgeous" },
            { time: 256, text: "It's a crime to be gorgeous" },
            { time: 262, text: "It's a crime to be gorgeous" }
        ]
    },

    {
        title: "Cinderella",
        artist: "Mac Miller",
        file: "spoty.audio/7.mp3",
        cover: "spoty.image/cinderella.jpg",
        video: "spoty.video/cinderella.mp4",

        lyrics: [
            { time: 1, text: "Uh, $ign" },
            { time: 7, text: "Oh, no, no, no, no, no, no, no, no, no, no, no" },
            { time: 11.5, text: "Ayy" },
            { time: 13, text: "I been waitin' all night for this moment" },
            { time: 16, text: "I been waitin' all year for this moment" },
            { time: 20, text: "I been picturin' you takin' off your clothes for me" },
            { time: 23, text: "I been literally curvin' all these hoes for you" },
            { time: 27, text: "Daddy told you better bring your ass home" },
            { time: 30, text: "Cinderella, better get your ass home" },
            { time: 34, text: "Man, I swear that parents just don't understand" },
            { time: 37, text: "You ain't gotta be old to be a man" },
            { time: 40, text: "Take my hand" },
            { time: 41.5, text: "Come with me to my room" },
            { time: 46.5, text: "Girl, I got a suite at the SLS" },
            { time: 51, text: "I already know you got expensive taste" },
            { time: 55, text: "Take my hand" },
            { time: 57, text: "Follow me to my room" },
            { time: 61, text: "Tell your little friends you gon' be alright" },
            { time: 65, text: "Girl, I got a plan for the whole night" },
            { time: 68, text: "Okay, your legs just like a store, they open up and you got people in line" },
            { time: 73, text: "Been there every night for weeks at the time" },
            { time: 76, text: "You in my dreams, that's why I sleep all the time" },
            { time: 79, text: "Just to hear you say: I love you" },
            { time: 80, text: "Just to touch you, just to leave you behind" },
            { time: 83, text: "I told you you don't have to worry, you'll be fine" },
            { time: 86, text: "The type of thing I heard it happen all the time" },
            { time: 91, text: "I just wanna see you fly" },
            { time: 93, text: "Because your fragrance got me faded, you be keepin' me high" },
            { time: 97, text: "Said nothing better than the first time" },
            { time: 99, text: "I'll be at your service like the check-in at the curbside" },
            { time: 102, text: "You don't have to spend another second on this Earth dry" },
            { time: 106, text: "Wet you like a fresh pool, go a second and a third time" },
            { time: 109, text: "Left you a perverse mind" },
            { time: 111, text: "And when you hungry, I can chef you up a stir fry" },
            { time: 114, text: "Get you some dessert wine, elevate your third eye" },
            { time: 118, text: "First prize, Nobel, get a piece" },
            { time: 121, text: "Your clothes off, turn around, lemme see" },
            { time: 124, text: "I been waitin' all night for this moment" },
            { time: 127, text: "I been waitin' all year for this moment" },
            { time: 131, text: "I been picturin' you takin' off your clothes for me" },
            { time: 134, text: "I been literally curvin' all these hoes for you" },
            { time: 138, text: "Daddy told you, better bring your ass home" },
            { time: 141, text: "Cinderella, better get your ass home" },
            { time: 144, text: "Man, I swear that parents just don't understand" },
            { time: 148, text: "You ain't gotta be old to be a man" },
            { time: 151, text: "Take my hand" },
            { time: 153, text: "Come with me to my room" },
            { time: 158, text: "Girl, I got a suite at the SLS" },
            { time: 161, text: "I already know you got expensive taste" },
            { time: 165, text: "Take my hand" },
            { time: 167, text: "Follow me to my room" },
            { time: 172, text: "Tell your little friends you gon' be alright" },
            { time: 175, text: "Girl, I got a plan for the whole night" },
            { time: 178, text: "Okay, I came up with a plan, it was" },
            { time: 180, text: "Take you by the hand and bring you somewhere where the sand is" },
            { time: 183, text: "Soon as we landed, we went straight into the room and played the music, started dancin'" },
            { time: 187, text: "You was takin' off your pants, it look like Dorothy ain't in Kansas anymore" },
            { time: 193, text: "I do you like a chore" },
            { time: 195, text: "We started on the bed and then we movin' to the floor" },
            { time: 198, text: "You started gettin' crazy, told me fuck you like a whore" },
            { time: 201, text: "I thought you was an angel, now you yellin' to the Lord" },
            { time: 205, text: "You used to tell me all the time I ain't ya type" },
            { time: 209, text: "Now you always wanna spend the night" },
            { time: 212, text: "Now I'm doin' everything you like" },
            { time: 216, text: "When I'm inside your pussy, damn, it feels so right" },
            { time: 219, text: "But I still respect ya game" },
            { time: 221, text: "Every time I'm outta line, you always set me straight" },
            { time: 224, text: "The sex is great, for Heaven's sakes, I need it every day" },
            { time: 227, text: "I yell your name, Cinderella" },
            { time: 230, text: "Never gonna find nobody better, all my life" },
            { time: 233, text: "I been waitin' all night for this moment" },
            { time: 236, text: "I been waitin' all year for this moment" },
            { time: 239, text: "I been picturin' you takin' off your clothes for me" },
            { time: 243, text: "I been literally curvin' all these hoes for you" },
            { time: 246, text: "Daddy told you, better bring your ass home" },
            { time: 250, text: "Cinderella, better get your ass home" },
            { time: 253, text: "Man, I swear that parents just don't understand" },
            { time: 257, text: "You ain't gotta be old to be a man" },
            { time: 260, text: "Take my hand" },
            { time: 262, text: "Come with me to my room" },
            { time: 267, text: "Girl, I got a suite at the SLS" },
            { time: 270, text: "I already know you got expensive taste" },
            { time: 274, text: "Take my hand" },
            { time: 276, text: "Follow me to my room" },
            { time: 280, text: "Tell your little friends you gon' be alright" },
            { time: 284, text: "Girl, I got a plan for the whole night" },
            { time: 348, text: "Hey now, I'm saying" },
            { time: 351.5, text: "My only way out is a way in" },
            { time: 356, text: "I won't stop till you mine, no way" },
            { time: 362, text: "Well, all my days now, they changing" },
            { time: 367, text: "I got angels, no more Satan" },
            { time: 372, text: "Looks like God's on my side this time" },
            { time: 380, text: "Been meaning to tell ya, you looking better every day" },
            { time: 387, text: "Write you letters" },
            { time: 388, text: "It's only right that right after love, I write my name" },
            { time: 395, text: "If it's forever or never, it's all the same" },
            { time: 402, text: "Under the weather" },
            { time: 405, text: "Feel much better when that weather isn't rain" },
            { time: 412, text: "Ooh, Cinderella, don't you run out of time" },
            { time: 417, text: "It feels like you've been takin' all day" },
            { time: 424, text: "Well, wherever you came from" },
            { time: 427, text: "Wherever you going, I promise I'm not far behind" },
            { time: 433, text: "So don't you dare throw this away" },
            { time: 441, text: "I've been meaning to tell ya, you look better every day" },
            { time: 448, text: "Write you letters" },
            { time: 450, text: "It's only right that right after love, I write my name" },
            { time: 458, text: "And if it's forever or never, it's all the same" },
            { time: 464, text: "Under the weather" },
            { time: 466, text: "Feel much better when that weather isn't rain" }
        ]
    },

    {
        title: "B.E.D.",
        artist: "Jacquees",
        file: "spoty.audio/8.mp3",
        cover: "spoty.image/bed.jpg",
        video: "spoty.video/b.e.d.mp4",

        lyrics: [
            { time: 5, text: "Yeah-yeah, yeah, yeah, yeah" },
            { time: 8, text: "Yeah-yeah, yeah, yeah, yeah" },
            { time: 12, text: "Yeah-yeah, yeah, yeah, yeah" },
            { time: 14, text: "I know you wanna love, but I just wanna fuck" },
            { time: 18, text: "And girl, you know the deal, I gotta keep it real" },
            { time: 22, text: "I know you wanna see, I know you wanna be" },
            { time: 26, text: "In my B.E.D., grinding slowly" },
            { time: 30, text: "I know you wanna love, but I just wanna fuck" },
            { time: 34, text: "And girl, you know the deal, I gotta keep it real" },
            { time: 38, text: "I know you wanna see, I know you wanna be" },
            { time: 42, text: "In my B.E.D., grinding slowly" },
            { time: 47, text: "Ay what it is? What you wanna know?" },
            { time: 49, text: "I done ripped about a hundred shows" },
            { time: 51, text: "You'll be coming back to me" },
            { time: 53, text: "Ay, you'll be coming back to me" },
            { time: 55, text: "Always worried 'bout them other hoes" },
            { time: 57, text: "And you'll be on me when the money throw" },
            { time: 59, text: "And they be looking out for Quees" },
            { time: 61, text: "And they be looking out for Quees" },
            { time: 63, text: "Bitch bad, no Kanye, when we do it, do it our way" },
            { time: 67, text: "2015 Wanya, I give no damn 'bout what ya mom say" },
            { time: 71, text: "Rollie wrist, I'm the shit, 21 with no kids" },
            { time: 75, text: "'Bout to rain on a bitch, I'ma rain on a bitch" },
            { time: 79, text: "I know you wanna love, but I just wanna fuck" },
            { time: 81, text: "And girl, you know the deal, I gotta keep it real" },
            { time: 85, text: "I know you wanna see, I know you wanna be" },
            { time: 89, text: "In my B.E.D., grinding slowly" },
            { time: 93, text: "I know you wanna love, but I just wanna fuck" },
            { time: 97, text: "And girl, you know the deal, I gotta keep it real" },
            { time: 101, text: "I know you wanna see, I know you wanna be" },
            { time: 105, text: "In my B.E.D., grinding slowly" },
            { time: 111, text: "Baby girl, she the action" },
            { time: 112, text: "Don't know why you actin'" },
            { time: 114, text: "She on ready-set-go, she will never let go" },
            { time: 118, text: "Need it all, fuck a fraction" },
            { time: 120, text: "Know she think I'm Michael Jackson" },
            { time: 122, text: "Billie Jean, moonwalk" },
            { time: 124, text: "I need the front and the back end" },
            { time: 126, text: "She in love with the fashion" },
            { time: 128, text: "But she in love with the flashin'" },
            { time: 130, text: "Bitch, this ain't your money" },
            { time: 131, text: "Bitch, I spend it on you 'cause you know I have it" },
            { time: 134, text: "With my woes in the six, ex-hos, yeah, they sick" },
            { time: 138, text: "I'ma rain on a bitch, let me rain on a bitch" },
            { time: 141, text: "I know you wanna love, but I just wanna fuck" },
            { time: 144, text: "And girl, you know the deal, I gotta keep it real" },
            { time: 148, text: "I know you wanna see, I know you wanna be" },
            { time: 152, text: "In my B.E.D., grinding slowly" },
            { time: 156, text: "I know you wanna love, but I just wanna fuck" },
            { time: 160, text: "And girl, you know the deal, I gotta keep it real" },
            { time: 164, text: "I know you wanna see, I know you wanna be" },
            { time: 168, text: "In my B.E.D., grinding slowly" },
            { time: 170, text: "Rollie wrist, I'm the shit, 21 with no kids" },
            { time: 173, text: "I'ma rain on a bitch, really rain on a bitch" },
            { time: 177, text: "Rollie wrist, I'm the shit, 21 with no kids" },
            { time: 181, text: "I'ma rain on a bitch, really rain on a bitch" },
            { time: 185, text: "Rollie wrist, I'm the shit, 21 with no kids" },
            { time: 189, text: "I'ma rain on a bitch, really rain on a bitch" },
            { time: 193, text: "Rollie wrist, I'm the shit, 21 with no kids" },
            { time: 197, text: "I'ma rain on a bitch, really rain on a bitch" },
            { time: 204, text: "Say yeah, say yeah" },
            { time: 208, text: "Say yeah, say yeah" },
            { time: 212, text: "Say yeah, say yeah" },
            { time: 214, text: "Say yeah, say yeah" },
            { time: 218, text: "Say yeah, say yeah" },
            { time: 222, text: "Say yeah, say yeah" },
            { time: 226, text: "Say yeah, say yeah" },
            { time: 228, text: "Say yeah" }
        ]
    },

    {
        title: "Don't",
        artist: "Bryson Tiller",
        file: "spoty.audio/9.mp3",
        cover: "spoty.image/dont.jpg",
        video: "spoty.video/dont.mp4",

        lyrics: [
            { time: 3, text: "Don't, don't play with her, don't be dishonest" },
            { time: 8, text: "Still not understandin' this logic" },
            { time: 13, text: "I'm back, and I'm better" },
            { time: 16, text: "I want you bad as ever" },
            { time: 18, text: "Don't let me just let up" },
            { time: 21, text: "I wanna give you better" },
            { time: 23, text: "Baby, it's whatever" },
            { time: 26, text: "Somebody gotta step up" },
            { time: 28, text: "Girl, I'm that somebody, so I'm next up" },
            { time: 31, text: "Be damned if I let him catch up" },
            { time: 33, text: "It's easy to see that you're fed up" },
            { time: 35, text: "I am on a whole 'nother level" },
            { time: 37, text: "Girl, he only fucked you over 'cause you let him" },
            { time: 39, text: "Fuck him, girl, I guess he didn't know any better" },
            { time: 42, text: "Girl, that man didn't show any effort" },
            { time: 44, text: "Do all I can just to show you you're special" },
            { time: 47, text: "Certain it's your love that holds me together" },
            { time: 49, text: "Lately you say he been killin' the vibe" },
            { time: 52, text: "Gotta be sick of this guy" },
            { time: 54, text: "Pull up, skrr, get in the ride" },
            { time: 56, text: "Left hand is steerin' the other is grippin' your thigh" },
            { time: 59, text: "Light up a spliff and get high" },
            { time: 61, text: "Shawty, you deserve what you've been missin'" },
            { time: 64, text: "Lookin' at you, I'm thinkin' he must be trippin'" },
            { time: 67, text: "Play this song for him, tell him, \"Just listen\"" },
            { time: 70, text: "Don't" },
            { time: 76.5, text: "Don't" },
            { time: 80, text: "Girl, said he keeps on playin' games" },
            { time: 84, text: "And his lovin' ain't the same" },
            { time: 86, text: "I don't know what to say, but" },
            { time: 90, text: "What a shame" },
            { time: 91, text: "If you were mine, you would not get the same" },
            { time: 93, text: "If you were mine, you would top everything" },
            { time: 96, text: "Suicide in the drop switchin' lanes" },
            { time: 98, text: "And that thing so fire, baby, no propane" },
            { time: 100, text: "Got good -, girl, can I be frank?" },
            { time: 103, text: "To keep it one hundred, girl, I ain't no saint" },
            { time: 105, text: "But he the only reason that I'm feelin' this way" },
            { time: 108, text: "Givin' you the world, baby, when you get space" },
            { time: 110, text: "Pen game get me laid, baby, that's penetrate" },
            { time: 113, text: "Oh, baby" },
            { time: 116, text: "Don't" },
            { time: 123, text: "H-Town got a - so throwed" },
            { time: 126, text: "Pour up, we can party some more" },
            { time: 129, text: "Yeah, got this drank in my cup" },
            { time: 132, text: "Got a young - feelin' so throwed" },
            { time: 134, text: "Spit fire in a world so cold" },
            { time: 136, text: "Young money got a - feelin' old" },
            { time: 139, text: "Spit fire in a world so cold" },
            { time: 141, text: "H-Town got me feelin' so throwed" },
            { time: 144, text: "H-Town got me feelin' so throwed" },
            { time: 146, text: "Ride paint and we sip 'til we fold" },
            { time: 149, text: "H-Town got me feelin' so throwed" },
            { time: 151, text: "Spit fire in a world so cold" },
            { time: 154, text: "H-Town got a - so throwed" }
        ]
    },

    {
        title: "E85",
        artist: "Don Toliver",
        file: "spoty.audio/10.mp3",
        cover: "spoty.image/e85.jpg",
        video: "spoty.video/e85.mp4",

        lyrics: [
            { time: 18, text: "On the highway and I'm thinkin' that I love her" },
            { time: 22, text: "On the highway and I'm thinkin' there ain't no rubber" },
            { time: 25, text: "On the highway with my significant lover" },
            { time: 33, text: "I've been tryin', tryin', tryin'" },
            { time: 36, text: "High octane, one pill for your consumption" },
            { time: 39, text: "One tank for the main niggas" },
            { time: 42, text: "It's lit, yeah" },
            { time: 47, text: "On the highway and I'm thinkin' that I love her" },
            { time: 51, text: "On the highway and I'm thinkin' there ain't no rubber" },
            { time: 55, text: "On the highway with my significant lover" },
            { time: 66, text: "You been runnin' the summer, you got a brand-new Hummer" },
            { time: 70, text: "We laugh all day like Dumber and Dumber" },
            { time: 73, text: "I'm 'bout to shoot my shot, she lovin' my jumper" },
            { time: 77, text: "My favorite outfit is her see-through romper" },
            { time: 81, text: "Don't worry, I got you, I promise I won't hurt her" },
            { time: 84, text: "She talk like a snappin' turtle, she squirt like that shit fertile" },
            { time: 88, text: "Got drink in my cup, on Kirko, she move that ass in circles" },
            { time: 91, text: "Not sippin' on green, it's purple, we said that shit never hurt though" },
            { time: 97, text: "I just hope you down for me" },
            { time: 101, text: "'Cause this shit what it supposed to be" },
            { time: 106, text: "On the highway and I'm thinkin' that I love her" },
            { time: 109, text: "On the highway and I'm thinkin' there ain't no rubber" },
            { time: 113, text: "On the highway with my significant lover" },
            { time: 123, text: "You been runnin' the summer, you got a brand-new Hummer" },
            { time: 128, text: "We laugh all day like Dumber and Dumber" },
            { time: 132, text: "I'm 'bout to shoot my shot, she lovin' my jumper" },
            { time: 135, text: "My favorite outfit is her see-through romper" },
            { time: 142, text: "I've been tryin', tryin', tryin', tryin'" },
            { time: 149, text: "I've been cryin', cryin', cry-" }
        ]
    },
];


/* ==================================
   PLAYER ELEMENTS
================================== */

const audio = document.getElementById("audioPlayer");

const playBtn = document.getElementById("playBtn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const shuffleBtn = document.getElementById("shuffleBtn");
const repeatBtn = document.getElementById("repeatBtn");

const progressBar = document.getElementById("progressBar");
const volumeBar = document.getElementById("volumeBar");

const playerTitle = document.getElementById("playerTitle");
const playerArtist = document.getElementById("playerArtist");
const playerCover = document.getElementById("playerCover");

const currentTime = document.getElementById("currentTime");
const duration = document.getElementById("duration");

const songGrid = document.getElementById("songGrid");
const lyricsContainer = document.getElementById("lyricsContainer");
const lyricsSongTitle = document.getElementById("lyricsSongTitle");

const searchInput = document.getElementById("searchInput");

// Video panel elements
const videoClip = document.getElementById("videoClip");
const videoOverlay = document.getElementById("videoOverlay");
const replayBtn = document.getElementById("replayBtn");
const videoPlayBtn = document.getElementById("videoPlayBtn");
const videoLabel = document.getElementById("videoLabel");


/* ==================================
   PLAYER STATE
================================== */

let currentSongIndex = -1;

/* SHUFFLE AND REPEAT */

let shuffleEnabled = false;
let repeatMode = "off";

// SHUFFLE BUTTON
shuffleBtn.addEventListener("click", () => {

    shuffleEnabled = !shuffleEnabled;

    shuffleBtn.classList.toggle("active", shuffleEnabled);

    shuffleBtn.title = shuffleEnabled
        ? "Shuffle On"
        : "Shuffle Off";

    // Immediately choose a random song when enabled
    if (shuffleEnabled && songs.length > 1 && currentSongIndex >= 0) {

        let randomIndex;

        do {
            randomIndex = Math.floor(Math.random() * songs.length);
        } while (randomIndex === currentSongIndex);

        loadSong(randomIndex);
    }

});


// REPEAT BUTTON
repeatBtn.addEventListener("click", () => {

    if (repeatMode === "off") {
        repeatMode = "all";
    } else if (repeatMode === "all") {
        repeatMode = "one";
    } else {
        repeatMode = "off";
    }

    // Native audio looping for Repeat One
    audio.loop = repeatMode === "one";

    repeatBtn.classList.toggle("active", repeatMode !== "off");

    if (repeatMode === "off") {
        repeatBtn.textContent = "↻";
        repeatBtn.title = "Repeat Off";
    }

    if (repeatMode === "all") {
        repeatBtn.textContent = "↻";
        repeatBtn.title = "Repeat All";
    }

    if (repeatMode === "one") {
        repeatBtn.textContent = "↻¹";
        repeatBtn.title = "Repeat One";
    }

});


/* GET NEXT SONG */

function getNextSongIndex() {

    if (songs.length === 0) return -1;

    if (currentSongIndex === -1) return 0;

    if (shuffleEnabled && songs.length > 1) {

        let randomIndex;

        do {
            randomIndex = Math.floor(Math.random() * songs.length);
        } while (randomIndex === currentSongIndex);

        return randomIndex;

    }

    return (currentSongIndex + 1) % songs.length;

}


/* ==================================
   DISPLAY SONG LIBRARY
================================== */

function displaySongs(songList = songs) {

    songGrid.innerHTML = "";

    if (songList.length === 0) {
        songGrid.innerHTML = `
            <div class="empty-state">
                <div class="empty-icon">♫</div>
                <h3>Your library is waiting</h3>
                <p>Add your favorite songs in script.js.</p>
            </div>
        `;
        return;
    }

    songList.forEach(song => {

        const originalIndex = songs.indexOf(song);

        const card = document.createElement("div");
        card.className = "song-card";

        card.innerHTML = `
            <img src="${song.cover}" alt="Album cover">
            <h3>${song.title}</h3>
            <p>${song.artist}</p>
        `;

        card.addEventListener("click", () => {
            loadSong(originalIndex);
        });

        songGrid.appendChild(card);
    });
}


/* ==================================
   LOAD SONG
================================== */

function loadSong(index) {

    if (index < 0 || index >= songs.length) return;

    currentSongIndex = index;

    const song = songs[index];

    audio.src = song.file;

    playerTitle.textContent = song.title;
    playerArtist.textContent = song.artist;
    playerCover.src = song.cover;

    lyricsSongTitle.textContent = song.title;

    displayLyrics(song.lyrics || []);

    loadVideo(song);

    audio.load();

    audio.play().then(() => {
        playBtn.textContent = "Ⅱ";
    }).catch(error => {
        console.error("Playback error:", error);
        playBtn.textContent = "▶";
    });
}


/* ==================================
   LIVE VIDEO CLIP
================================== */

function loadVideo(song) {
    if (song.video) {
        videoClip.src = song.video;
        videoClip.load();
        videoLabel.textContent = song.title + " — " + song.artist;
        videoClip.play().then(() => {
            videoPlayBtn.textContent = "Ⅱ";
        }).catch(error => {
            console.error("Video playback error:", error);
            videoPlayBtn.textContent = "▶";
        });
    } else {
        videoClip.removeAttribute("src");
        videoClip.load();
        videoLabel.textContent = "No clip for this song";
        videoPlayBtn.textContent = "▶";
    }
}

videoPlayBtn.addEventListener("click", () => {
    if (!videoClip.src) return;

    if (videoClip.paused) {
        videoClip.play().then(() => {
            videoPlayBtn.textContent = "Ⅱ";
        }).catch(error => {
            console.error("Video playback error:", error);
        });
    } else {
        videoClip.pause();
        videoPlayBtn.textContent = "▶";
    }
});

replayBtn.addEventListener("click", () => {
    if (!videoClip.src) return;

    videoClip.currentTime = 0;
    videoClip.play().then(() => {
        videoPlayBtn.textContent = "Ⅱ";
    }).catch(error => {
        console.error("Video replay error:", error);
    });
});

videoClip.addEventListener("ended", () => {
    videoPlayBtn.textContent = "▶";
});

videoClip.addEventListener("play", () => {
    videoPlayBtn.textContent = "Ⅱ";
});

videoClip.addEventListener("pause", () => {
    videoPlayBtn.textContent = "▶";
});


/* ==================================
   PLAY / PAUSE
================================== */

playBtn.addEventListener("click", () => {

    if (currentSongIndex === -1) {
        if (songs.length > 0) {
            loadSong(0);
        }
        return;
    }

    if (audio.paused) {

        audio.play().then(() => {
            playBtn.textContent = "Ⅱ";
        }).catch(error => {
            console.error("Playback error:", error);
        });

    } else {

        audio.pause();
        playBtn.textContent = "▶";

    }

});



/* NEXT SONG */

nextBtn.addEventListener("click", () => {

    if (songs.length === 0) return;

    let nextIndex;

    if (shuffleEnabled && songs.length > 1) {

        do {
            nextIndex = Math.floor(Math.random() * songs.length);
        } while (nextIndex === currentSongIndex);

    } else {

        nextIndex = (currentSongIndex + 1) % songs.length;

    }

    loadSong(nextIndex);

});




/* ==================================
   PREVIOUS SONG
================================== */

prevBtn.addEventListener("click", () => {

    if (songs.length === 0) return;

    const previousIndex = currentSongIndex < 0
        ? 0
        : (currentSongIndex - 1 + songs.length) % songs.length;

    loadSong(previousIndex);

});

/* AUTOMATIC NEXT SONG */

audio.addEventListener("ended", () => {

    if (songs.length === 0) return;

    // Repeat One is handled by audio.loop
    if (repeatMode === "one") return;

    let nextIndex;

    if (shuffleEnabled && songs.length > 1) {

        do {
            nextIndex = Math.floor(Math.random() * songs.length);
        } while (nextIndex === currentSongIndex);

    } else if (currentSongIndex < songs.length - 1) {

        nextIndex = currentSongIndex + 1;

    } else if (repeatMode === "all") {

        nextIndex = 0;

    } else {

        playBtn.textContent = "▶";
        return;

    }

    loadSong(nextIndex);

});

/* ==================================
   TIME FORMAT
================================== */

function formatTime(seconds) {

    if (!Number.isFinite(seconds)) return "0:00";

    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);

    return `${minutes}:${String(remainingSeconds).padStart(2, "0")}`;
}


/* ==================================
   UPDATE PROGRESS BAR
================================== */

audio.addEventListener("timeupdate", () => {

    if (!Number.isFinite(audio.duration)) return;

    const progress = (audio.currentTime / audio.duration) * 100;

    progressBar.value = progress;

    currentTime.textContent = formatTime(audio.currentTime);
    duration.textContent = formatTime(audio.duration);

    syncLyrics();

});


/* ==================================
   SEEK SONG
================================== */

progressBar.addEventListener("input", () => {

    if (Number.isFinite(audio.duration)) {

        audio.currentTime =
            (progressBar.value / 100) * audio.duration;

    }

});


/* ==================================
   VOLUME CONTROL
================================== */

volumeBar.addEventListener("input", () => {

    audio.volume = volumeBar.value;

});

audio.volume = 0.7;


/* ==================================
   SYNCHRONIZED LYRICS
================================== */

let currentLyrics = [];

function displayLyrics(lyrics) {

    currentLyrics = lyrics;

    lyricsContainer.innerHTML = "";

    if (lyrics.length === 0) {

        lyricsContainer.innerHTML = `
            <p class="lyrics-placeholder">
                No lyrics added for this song.
            </p>
        `;

        return;
    }

    lyrics.forEach((line, index) => {

        const lyric = document.createElement("p");

        lyric.className = "lyrics-line";
        lyric.textContent = line.text;
        lyric.dataset.index = index;

        lyricsContainer.appendChild(lyric);

    });

}


/* ==================================
   SYNC LYRICS WITH SONG TIME
================================== */

function syncLyrics() {

    if (currentLyrics.length === 0) return;

    const time = audio.currentTime;

    let activeIndex = -1;

    for (let i = 0; i < currentLyrics.length; i++) {

        if (time >= currentLyrics[i].time) {
            activeIndex = i;
        } else {
            break;
        }

    }

    const lyricLines = lyricsContainer.querySelectorAll(".lyrics-line");

    lyricLines.forEach((line, index) => {

        line.classList.toggle("active", index === activeIndex);

    });

    const activeLine = lyricsContainer.querySelector(".lyrics-line.active");

    if (activeLine) {

        const containerRect = lyricsContainer.getBoundingClientRect();
        const lineRect = activeLine.getBoundingClientRect();

        const offset = lineRect.top - containerRect.top
            - (containerRect.height / 2)
            + (lineRect.height / 2);

        lyricsContainer.scrollBy({
            top: offset,
            behavior: "smooth"
        });

    }

}


/* ==================================
   SEARCH SONGS
================================== */

searchInput.addEventListener("input", () => {

    const searchValue = searchInput.value.toLowerCase();

    const filteredSongs = songs.filter(song => {

        return song.title.toLowerCase().includes(searchValue) ||
               song.artist.toLowerCase().includes(searchValue);

    });

    displaySongs(filteredSongs);

});


/* ==================================
   INITIALIZE CHIAROSCURO
================================== */

displaySongs();

document.addEventListener("click", function(e) {

    const sparkleSymbols = ["✦", "✧", ".✦ ݁˖", "⋆", "✶"];

    for (let i = 0; i < 7; i++) {

        const sparkle = document.createElement("span");

        sparkle.className = "click-sparkle";

        sparkle.textContent =
            sparkleSymbols[
                Math.floor(Math.random() * sparkleSymbols.length)
            ];

        // Random movement
        const x = (Math.random() - 0.5) * 120;
        const y = (Math.random() - 0.5) * 120;

        sparkle.style.left = e.clientX + "px";
        sparkle.style.top = e.clientY + "px";

        sparkle.style.setProperty("--x", x + "px");
        sparkle.style.setProperty("--y", y + "px");

        document.body.appendChild(sparkle);

        // Remove after animation
        sparkle.addEventListener("animationend", () => {
            sparkle.remove();
        });
    }

});


// =========================================
// CHIAROSCURO - MOBILE SIDEBAR
// =========================================

document.addEventListener("DOMContentLoaded", () => {

    const menuToggle = document.getElementById("menuToggle");
    const sidebar = document.getElementById("sidebar");

    if (!menuToggle || !sidebar) {
        console.error("Mobile menu elements were not found.");
        return;
    }

    function openMenu() {
        sidebar.classList.add("active");
        document.body.classList.add("menu-open");

        menuToggle.textContent = "✕";
        menuToggle.setAttribute("aria-expanded", "true");
    }

    function closeMenu() {
        sidebar.classList.remove("active");
        document.body.classList.remove("menu-open");

        menuToggle.textContent = "☰";
        menuToggle.setAttribute("aria-expanded", "false");
    }

    menuToggle.addEventListener("click", (event) => {
        event.stopPropagation();

        if (sidebar.classList.contains("active")) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    // Close when clicking outside the sidebar
    document.addEventListener("click", (event) => {

        if (
            sidebar.classList.contains("active") &&
            !sidebar.contains(event.target) &&
            !menuToggle.contains(event.target)
        ) {
            closeMenu();
        }

    });

    // Close after selecting a navigation link
    sidebar.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", closeMenu);
    });

    // Close with Escape key
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closeMenu();
        }
    });

});
