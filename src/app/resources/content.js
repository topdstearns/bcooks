import { InlineCode } from "@/once-ui/components";

const person = {
    firstName: 'Bobby',
    lastName:  'Stearns',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role:      'Executive Chef',
    avatar:    '/images/avatar.jpg',
    location:  'America/Chicago',        // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
    languages: ['English']  // optional: Leave the array empty if you don't want to display languages
}

const newsletter = {
    display: true,
    title: <>Subscribe to Chef {person.firstName}'s Newsletter</>,
    description: <>I occasionally write about culinary arts, share recipes, and explore the relationship between flavors and techniques in cooking.</>
}

const social = [
    // Links are automatically displayed.
    // Import new icons in /once-ui/icons.ts
    {
        name: 'GitHub',
        icon: 'github',
        link: 'https://github.com/once-ui-system/nextjs-starter',
    },
    {
        name: 'LinkedIn',
        icon: 'linkedin',
        link: 'https://www.linkedin.com/in/robert-stearns-214311175',
    },
    {
        name: 'X',
        icon: 'x',
        link: '',
    },
    {
        name: 'Email',
        icon: 'email',
        link: 'mailto:example@gmail.com',
    },
]

const home = {
    label: 'Home',
    title: `${person.name}'s Culinary Portfolio`,
    description: `Portfolio website showcasing my work as an ${person.role}`,
    headline: <>Culinary artist and innovator</>,
    subline: <>I'm Bobby, an Executive Chef creating unforgettable dining experiences at <InlineCode>Ophelia's</InlineCode>, where I blend tradition with modern flair.</>
}

const about = {
    label: 'About',
    title: 'About me',
    description: `Meet ${person.name}, ${person.role} from ${person.location}`,
    tableOfContent: {
        display: true,
        subItems: true
    },
    avatar: {
        display: true
    },
    calendar: {
        display: true,
        link: 'https://cal.com/bobbystearns'
    },
    intro: {
        display: true,
        title: 'Introduction',
        description: <>Bobby Stearns is an Executive Chef based in Kansas City, passionate about transforming seasonal ingredients into exquisite culinary experiences. His work celebrates local flavors and innovative techniques.</>
    },
    work: {
        display: true, // set to false to hide this section
        title: 'Work Experience',
        experiences: [
            {
                company: 'Ophelia\'s',
                timeframe: '2020 - Present',
                role: 'Executive Chef',
                achievements: [
                    <>Developed a seasonal menu that emphasizes local ingredients, increasing customer satisfaction and restaurant reviews.</>,
                ],
                images: [ // optional: leave the array empty if you don't want to display images
                    {
                        src: '',
                        alt: '',
                        width: 16,
                        height: 9
                    }
                ]
            },
            {
                company: 'Grand Street Cafe',
                timeframe: '2015 - 2020',
                role: 'Head Chef',
                achievements: [
                    <>Assisted in managing kitchen operations, leading to an increase in efficiency during peak service hours.</>,
                    <>Designed and implemented a new dessert menu that boosted dessert sales.</>
                ],
                images: []
            }
        ]
    },
    studies: {
        display: true,
        title: 'Education',
        institutions: [
            {
                name: 'Culinary Institute of Johnson County Community College',
                description: <>Culinary Arts.</>,
            },
            {
                name: 'Kansas City Culinary School',
                description: <>Completed an internship focused on fine dining service.</>,
            }
        ]
    },
    technical: {
        display: true,
        title: 'Culinary Skills',
        skills: [
            {
                title: 'Recipe Development',
                description: <>Expert in creating and testing innovative recipes that highlight fresh, seasonal ingredients.</>,
                images: []
            },
            {
                title: 'Menu Design',
                description: <>Skilled in designing menus that reflect the concept and brand of the restaurant, focusing on sustainability and customer experience.</>,
                images: []
            }
        ]
    }
}

const blog = {
    label: 'Blog',
    title: 'Writing about culinary arts...',
    description: `Read what ${person.name} has been cooking up recently`
}

const work = {
    label: 'Work',
    title: 'My culinary projects',
    description: `Culinary creations by ${person.name}`
}

const gallery = {
    label: 'Gallery',
    title: 'My food photography',
    description: `A collection of food photography by ${person.name}`,
    // Images from https://pexels.com
    images: [
        { 
            src: '/images/gallery/img-01.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-02.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-03.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-04.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-05.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-06.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-07.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-08.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-09.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-10.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-11.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-12.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-13.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-14.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
    ]
}

export { person, social, newsletter, home, about, blog, work, gallery };