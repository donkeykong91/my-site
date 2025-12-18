import dhImage from '../../assets/dental-hygiene.webp';
import flImage from '../../assets/free-lance.webp';
import aiImage from '../../assets/ai.webp';
import rebImage from '../../assets/re-blog.webp';
import bsImage from '../../assets/barber-shop.webp';
import resImage from '../../assets/re-site.webp';

const PROJECTS_PAGE_TITLE = 'Projects';

// Card Headers
const PROJ_CARD_HYG_HEADER = 'Dental Hygienist Site';
const PROJ_CARD_FL_HEADER = 'Freelancing Site';
const PROJ_CARD_GPT_HEADER = 'AI Chatbot';
const PROJ_CARD_REB_HEADER = 'Real Estate Blog';
const PROJ_CARD_BS_HEADER = 'Barber Shop Site';
const PROJ_CARD_RE_HEADER = 'Real Estate Site';

//Card Titles
const PROJ_CARD_HYG_TITLE = 'Website';
const PROJ_CARD_FL_TITLE = 'Website';
const PROJ_CARD_GPT_TITLE = 'AI';
const PROJ_CARD_REB_TITLE = 'Website';
const PROJ_CARD_BS_TITLE = 'Website';
const PROJ_CARD_RE_TITLE = 'Website';

//Card SubTitles
const PROJ_CARD_HYG_SUB_TITLE = 'Informational';
const PROJ_CARD_FL_SUB_TITLE = 'Services';
const PROJ_CARD_GPT_SUB_TITLE = 'Assistant';
const PROJ_CARD_REB_SUB_TITLE = 'Blog';
const PROJ_CARD_BS_SUB_TITLE = 'Booking System';
const PROJ_CARD_RE_SUB_TITLE = 'Services';

//Card Body
const PROJ_CARD_HYG_SUB_BODY =
  'Professionally developed site with a keen eye for pearly whites.';
const PROJ_CARD_FL_SUB_BODY =
  'Web services offered at a price that is not too shabby.';
const PROJ_CARD_GPT_SUB_BODY =
  'This terminator shoots down questions with answers.';
const PROJ_CARD_REB_SUB_BODY =
  'Opinions on when to buy a house (read: buy a house today). ';
const PROJ_CARD_BS_SUB_BODY = `What's that old saying? Cut your "hair" and get a job.`;
const PROJ_CARD_RE_SUB_BODY =
  'This is where all the house-buying magic starts.';

// Project Github Links
const GH_AI_CHATBOT_PROJ_LINK = 'https://github.com/donkeykong91/my-ai-chatbot';
const GH_HYG_PROJ_LINK =
  'https://github.com/donkeykong91/pearly-whites-website';

// Project Aria Labels
const GH_AI_CHATBOT_ARIA_LABEL = 'visit ai chatbot github';

// Project ToolTips
const HYG_TOOL_TIP = 'Time to pay the (Tooth) Piper!';
const FL_TOOL_TIP = `In Progress - It's a Feature; Not a Bug.`;
const GPT_TOOL_TIP = 'The Sleeper has Awoken!';
const REB_TOOL_TIP = 'In Progress - Controversial Take: Buy Now';
const BS_TOOL_TIP = `In Progress - Don't Stop! Believin'! Grow that Hair!`;
const RE_TOOL_TIP = 'In Progress - Who Said the Housing Market is Down?';

const PROJECTS_DATA = [
  {
    header: PROJ_CARD_HYG_HEADER,
    title: PROJ_CARD_HYG_TITLE,
    subTitle: PROJ_CARD_HYG_SUB_TITLE,
    body: PROJ_CARD_HYG_SUB_BODY,
    image: dhImage,
    link: GH_HYG_PROJ_LINK,
    tooltip: HYG_TOOL_TIP,
  },
  {
    header: PROJ_CARD_FL_HEADER,
    title: PROJ_CARD_FL_TITLE,
    subTitle: PROJ_CARD_FL_SUB_TITLE,
    body: PROJ_CARD_FL_SUB_BODY,
    image: flImage,
    tooltip: FL_TOOL_TIP,
  },
  {
    header: PROJ_CARD_GPT_HEADER,
    title: PROJ_CARD_GPT_TITLE,
    subTitle: PROJ_CARD_GPT_SUB_TITLE,
    body: PROJ_CARD_GPT_SUB_BODY,
    image: aiImage,
    link: GH_AI_CHATBOT_PROJ_LINK,
    ariaLabel: GH_AI_CHATBOT_ARIA_LABEL,
    tooltip: GPT_TOOL_TIP,
  },
  {
    header: PROJ_CARD_REB_HEADER,
    title: PROJ_CARD_REB_TITLE,
    subTitle: PROJ_CARD_REB_SUB_TITLE,
    body: PROJ_CARD_REB_SUB_BODY,
    image: rebImage,
    tooltip: REB_TOOL_TIP,
  },
  {
    header: PROJ_CARD_BS_HEADER,
    title: PROJ_CARD_BS_TITLE,
    subTitle: PROJ_CARD_BS_SUB_TITLE,
    body: PROJ_CARD_BS_SUB_BODY,
    image: bsImage,
    tooltip: BS_TOOL_TIP,
  },
  {
    header: PROJ_CARD_RE_HEADER,
    title: PROJ_CARD_RE_TITLE,
    subTitle: PROJ_CARD_RE_SUB_TITLE,
    body: PROJ_CARD_RE_SUB_BODY,
    image: resImage,
    tooltip: RE_TOOL_TIP,
  },
];

export { PROJECTS_DATA, PROJECTS_PAGE_TITLE };
