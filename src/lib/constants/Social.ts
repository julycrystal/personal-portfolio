// import Linkedin from "$lib/assets/icons/linkedin.svg"
// import Instagram from "$lib/assets/icons/instagram.svg"
// import Twitter from "$lib/assets/icons/twitter.svg"

import Github from "virtual:icons/mdi/github"
import Telegram from "virtual:icons/ic/baseline-telegram"
import Email from "virtual:icons/mdi/email"
import Linkedin from "virtual:icons/mdi/linkedin"
import Instagram from "~icons/mdi/instagram"
import Twitter from "~icons/bi/twitter-x"

export const SOCIAL_LINKS = [
  {
    link: "https://github.com/julycrystal",
    hoverColor: "hover:text-gray-800 dark:hover:text-gray-200",
    label: "Github",
    icon: Github
  },
  {
    link: "https://t.me/julycrystal",
    hoverColor: "hover:text-blue-500 dark:hover:text-blue-500",
    label: "Telegram",
    icon: Telegram
  },
  {
    link: "https://www.linkedin.com/in/julycrystal",
    hoverColor: "hover:text-blue-500 dark:hover:text-blue-500",
    label: "Linkedin",
    icon: Linkedin
  },
  {
    link: "https://instagram.com/julycrystal",
    hoverColor: "hover:text-red-400 dark:hover:text-red-400",
    label: "Instagram",
    icon: Instagram
  },
  {
    link: "https://twitter.com/julycrystal",
    hoverColor: "hover:text-gray-800 dark:hover:text-gray-200",
    label: "Twitter",
    icon: Twitter
  }
]
