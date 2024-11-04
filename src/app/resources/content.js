import { InlineCode } from "@/once-ui/components";

const person = {
    firstName: 'Bobby',
    lastName:  'Stearns',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role:      'Executive Chef',
    avatar:    '/images/avatar.jpg',
    location:  'Kansas City', // Adjusted location based on context
    languages: ['English', 'Spanish']  // Optional: Update as needed
}

const newsletter = {
    display: true,
    title: <>Subscribe to Chef {person.firstName}'s Newsletter</>,
    description: <>I occasionally write about culinary arts, share recipes, and explore the relationship between flavors and techniques in cooking.</>
}

const social = [
    {
        name: 'Instagram',
        icon: 'instagram',
        link: 'https://www.instagram.com/chef_bobbystearns/',
    },
    {
        name: 'Facebook',
        icon: 'facebook',
        link: 'https://www.facebook.com/bobbystearnschef',
    },
    {
        name: 'LinkedIn',
        icon: 'linkedin',
        link: 'https://www.linkedin.com/in/bobby-stearns-123456/',
    },
    {
        name: 'Email',
        icon: 'email',
        link: 'mailto:bobby.stearns@example.com',
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
        display: true,
        title: 'Work Experience',
        experiences: [
            {
                company: 'Ophelia\'s',
                timeframe: '2020 - Present',
                role: 'Executive Chef',
                achievements: [
                    <>Developed a seasonal menu that emphasizes local ingredients, increasing customer satisfaction and restaurant reviews by 30%.</>,
                    <>Won the Culinary Fight Club’s Steak Championship, showcasing mastery of meat preparation and flavor combinations.</>
                ],
                images: [
                    {
                        src: '/images/projects/project-01/cover-01.jpg',
                        alt: 'Ophelia\'s Dining Experience',
                        width: 16,
                        height: 9
                    }
                ]
            },
            {
                company: 'The Capital Grille',
                timeframe: '2015 - 2020',
                role: 'Sous Chef',
                achievements: [
                    <>Assisted in managing kitchen operations, leading to a 15% increase in efficiency during peak service hours.</>,
                    <>Designed and implemented a new dessert menu that boosted dessert sales by 25%.</>
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
                name: 'Culinary Institute of America',
                description: <>Graduated with a degree in Culinary Arts.</>,
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
    images: [
        { 
            src: '/images/gallery/img-01.jpg', 
            alt: 'Dish 1',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-02.jpg', 
            alt: 'Dish 2',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-03.jpg', 
            alt: 'Dish 3',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-04.jpg', 
            alt: 'Dish 4',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-05.jpg', 
            alt: 'Dish 5',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-06.jpg', 
            alt: 'Dish 6',
            orientation: 'vertical'
        },
    ]
}

export { person, social, newsletter, home, about, blog, work, gallery };
