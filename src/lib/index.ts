// import thumbnails
import pour_toi from "../assets/pour_toi.jpg"
import romeo_juliet from "../assets/romeo_juliet.jpg"
import adobi from "../assets/adobi.jpg"
import special_someone from "../assets/special_someone.jpg"
import heart_affairs from "../assets/heart_affairs.jpg";
// import inlove from "../assets/inlove.jpg"
// import maame_yaa from "../assets/maame_yaa.jpg"
// import omoge from "../assets/omoge.jpg"
// import treat_you_better from "../assets/treat_you_better.jpg"
// import club_love from "../assets/club_love.jpg"
// import intoxicated from "../assets/intoxicated.jpg"

//import types
import { MusicType, SocialType } from "../types";

// import icons
import {
    BsMusicNoteBeamed,
    BsFacebook,
    BsTiktok,
    BsTwitter,
    BsInstagram,
    BsSpotify,
    BsYoutube,
} from "react-icons/bs"

//custom exports
export const musics: MusicType[] = [
    {
        title: "Pour Toi",
        link: "https://tr.ee/mCOP9Eku-v",
        thumbnail: pour_toi
    },
    {
        title: "Heart Affairs EP",
        link: "https://tr.ee/rwFfo06gfQ",
        thumbnail: heart_affairs
    },
    {
        title: "Adobi",
        link: "https://tr.ee/3j-5f0kzA7",
        thumbnail: adobi
    },
    {
        title: "Romeo & Juliet",
        link: "https://tr.ee/iw8QtIkrES",
        thumbnail: romeo_juliet
    },
    {
        title: "Special Someone",
        link: "https://tr.ee/cAWclibumH",
        thumbnail: special_someone
    }
    // {
    //     title: "Treat you better",
    //     link: "https://drwoy.myshopify.com/",
    //     thumbnail: treat_you_better
    // },
    // {
    //     title: "In Love",
    //     link: "https://drwoy.myshopify.com/",
    //     thumbnail: inlove
    // },
    // {
    //     title: "Omoge",
    //     link: "https://drwoy.myshopify.com/",
    //     thumbnail: omoge
    // },
    // {
    //     title: "Club Love",
    //     link: "https://drwoy.myshopify.com/",
    //     thumbnail: club_love
    // },
    // {
    //     title: "Intoxicated",
    //     link: "https://drwoy.myshopify.com/",
    //     thumbnail: intoxicated
    // },
];


export const socials: SocialType[] = [
    {
        link: "https://www.instagram.com/officialdrwoy/",
        icon: BsInstagram
    },
    {
        link: "https://www.facebook.com/officialdrwoy?paipv=0&eav=AfZ-4W6xp-ZfpbDIpPfhp5J3PJUAYqBapqqX-vb1ayCQkfaHkMs-ZUuvxF31qlH7qcA&_rdr",
        icon: BsFacebook
    },
    {
        link: "https://twitter.com/officialdrwoy",
        icon: BsTwitter
    },
    {
        link: "https://www.tiktok.com/@officialdrwoy",
        icon: BsTiktok
    },
    {
        link: "https://www.youtube.com/channel/UCZXt5cG0fR18rQTP6N4mW8Q",
        icon: BsYoutube
    },
    {
        link: "https://open.spotify.com/artist/46BWKg5bywuLNSZArFrvfO",
        icon: BsSpotify
    },
    {
        link: "https://music.apple.com/us/artist/d-rwoy/1575023181",
        icon: BsMusicNoteBeamed
    }
]