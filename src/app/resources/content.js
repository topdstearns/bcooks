import { InlineCode } from "@/once-ui/components";

const person = {
    firstName: 'Bobby',
    lastName:  'Stearns',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role:      'Executive Chef',
    avatar:    '/images/avatar.jpg',
    location:  'Kansas City, MO',
    languages: ['English', 'Spanish']  // Adjust as necessary
}

const newsletter = {
    display: true,
    title: <>Join Chef {person.firstName}'s Newsletter</>,
    description: <>Subscribe to get updates on culinary adventures, exclusive recipes, and insights into the art of cooking and the latest culinary trends.</>
}

const social = [
    {
        name: 'Facebook',
        icon: 'facebook',
        link: 'https://www.facebook.com/BobbyStearnsChef',  // Update with actual link
    },
    {
        name: 'Instagram',
        icon: 'instagram',
        link: 'https://www.instagram.com/bobbystearnschef/',  // Update with actual link
    },
    {
        name: 'Twitter',
        icon: 'twitter',
        link: 'https://twitter.com/bobbystearns',  // Update with actual link
    },
    {
        name: 'Email',
        icon: 'email',
        link: 'mailto:bobbystearns@example.com',  // Update with actual email
    },
]

const home = {
    label: 'Home',
    title: `${person.name}'s Culinary Showcase`,
    description: `A portfolio website highlighting the creative culinary work of Executive Chef ${person.name}`,
    headline: <>Culinary Artist and Innovator</>,
    subline: <>I’m Chef Bobby Stearns, the Executive Chef at <InlineCode>Ophelia's</InlineCode> in Kansas City, where I craft unique and memorable dining experiences.</>
}

const about = {
    label: 'About',
    title: 'About me',
    description: `Discover Chef ${person.name}, ${person.role} from ${person.location}`,
    tableOfContent: {
        display: true,
        subItems: true
    },
    avatar: {
        display: true
    },
    intro: {
        display: true,
        title: 'Introduction',
        description: <>Chef Bobby Stearns is celebrated for his innovative approach to cooking, turning fresh, local ingredients into stunning dishes that reflect the essence of Kansas City cuisine.</>
    },
    work: {
        display: true,
        title: 'Professional Experience',
        experiences: [
            {
                company: 'Ophelia\'s',
                timeframe: '2015 - Present',
                role: 'Executive Chef',
                achievements: [
                    <>Crafted a menu emphasizing seasonal and locally sourced ingredients, enriching the culinary experience.</>,
                    <>Secured a victory at the Culinary Fight Club's Steak Championship, demonstrating exceptional culinary skills and presentation.</>
                ],
                images: []
            },
            {
                company: 'The Capital Grille',
                timeframe: '2010 - 2015',
                role: 'Sous Chef',
                achievements: [
                    <>Oversaw kitchen operations, ensuring the highest quality of food and meticulous presentation.</>,
                    <>Provided training and mentorship to junior chefs, fostering a collaborative and supportive kitchen environment.</>
                ],
                images: []
            }
        ]
    },
    studies: {
        display: true,
        title: 'Culinary Education',
        institutions: [
            {
                name: 'Culinary Institute of America',
                description: <>Earned a degree in Culinary Arts.</>,
            },
            {
                name: 'Johnson County Community College',
                description: <>Focused on restaurant management and advanced culinary techniques.</>,
            }
        ]
    },
    technical: {
        display: true,
        title: 'Culinary Skills',
        skills: [
            {
                title: 'Culinary Techniques',
                description: <>Expertise in French cuisine and modern American dishes, specializing in fine dining experiences.</>,
            },
            {
                title: 'Menu Innovation',
                description: <>Experienced in designing innovative menus that showcase seasonal ingredients and culinary trends.</>,
            }
        ]
    }
}

const blog = {
    label: 'Blog',
    title: 'Culinary Insights and Recipes',
    description: `Catch up with ${person.name}'s latest culinary creations, recipes, and cooking tips.`
}

const work = {
    label: 'Projects',
    title: 'Culinary Projects',
    description: `Explore the culinary initiatives and projects led by ${person.name}`
}

const gallery = {
    label: 'Gallery',
    title: 'My Culinary Creations',
    description: `A showcase of beautiful dishes by ${person.name}`,
    images: [
        { 
            src: '/images/gallery/dish-01.jpg', 
            alt: 'Grilled Steak with Seasonal Vegetables',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/dish-02.jpg', 
            alt: 'Gourmet Dessert Plating',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/dish-03.jpg', 
            alt: 'Fresh Seafood Platter',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/dish-04.jpg', 
            alt: 'Artisanal Bread Selection',
            orientation: 'vertical'
        }
    ]
}

export { person, social, newsletter, home, about, blog, work, gallery };
