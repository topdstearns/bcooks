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
    title: <>Subscribe to Chef {person.firstName}'s Newsletter</>,
    description: <>Join Chef Bobby's culinary journey to receive updates, recipes, and insights on the art of cooking and the latest trends in the culinary world.</>
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
    title: `${person.name}'s Culinary Portfolio`,
    description: `Showcasing the creative work of Executive Chef ${person.name}`,
    headline: <>Culinary Innovator and Creator</>,
    subline: <>I'm Chef Bobby Stearns, a passionate Executive Chef at <InlineCode>Ophelia's</InlineCode> in Kansas City, where I create exceptional dining experiences.</>
}

const about = {
    label: 'About',
    title: 'About me',
    description: `Meet Chef ${person.name}, ${person.role} from ${person.location}`,
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
        description: <>Chef Bobby Stearns is known for his creativity and dedication to culinary excellence, transforming local ingredients into exquisite dishes that celebrate the flavors of Kansas City.</>
    },
    work: {
        display: true,
        title: 'Work Experience',
        experiences: [
            {
                company: 'Ophelia\'s',
                timeframe: '2015 - Present',
                role: 'Executive Chef',
                achievements: [
                    <>Developed a menu that highlights seasonal ingredients and local producers, enhancing the dining experience.</>,
                    <>Won the Culinary Fight Club's Steak Championship, showcasing innovative cooking techniques and presentation skills.</>
                ],
                images: []
            },
            {
                company: 'The Capital Grille',
                timeframe: '2010 - 2015',
                role: 'Sous Chef',
                achievements: [
                    <>Managed kitchen operations, ensuring the quality of food and presentation matched the restaurant’s high standards.</>,
                    <>Trained and mentored junior chefs, contributing to a collaborative kitchen environment.</>
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
                description: <>Graduated with a degree in Culinary Arts.</>,
            },
            {
                name: 'Johnson County Community College',
                description: <>Studied restaurant management and culinary techniques.</>,
            }
        ]
    },
    technical: {
        display: true,
        title: 'Culinary Skills',
        skills: [
            {
                title: 'Gastronomy',
                description: <>Expert in French and modern American cuisine, specializing in fine dining.</>,
            },
            {
                title: 'Menu Development',
                description: <>Skilled in creating innovative menus that reflect current culinary trends and seasonal ingredients.</>,
            }
        ]
    }
}

const blog = {
    label: 'Blog',
    title: 'Culinary Insights and Recipes',
    description: `Read what ${person.name} has been cooking up recently and discover delicious recipes and cooking tips.`
}

const work = {
    label: 'Work',
    title: 'My Culinary Projects',
    description: `Explore the culinary projects and initiatives by ${person.name}`
}

const gallery = {
    label: 'Gallery',
    title: 'My Culinary Creations',
    description: `A collection of stunning dishes by ${person.name}`,
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
