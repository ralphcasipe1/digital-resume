/* eslint-disable max-len */
const email = 'ralphcasipe1@gmail.com';

export default {
  about: `
    I'm an experienced web developer with 7+ years of software craftsmanship. 
    I'm comfortable writing web applications in JS/TS.
    I'm fond of writing code that are testable and have strict type-safety.
    Today, I am continuously improving my skillsets by learning Go and Rust and there ecosystem.
    I am well aware of, that software engineering is a never-ending journey, and that's what I like about it,
    that you have the sense of urgency to learn new things that could help you with your skills.
  `,

  email,
  portfolio: '',

  experience: [
    {
      employer: 'High Output Ventures',
      position: 'Senior Backend Engineer',
      location: 'Singapore - Remote',
      startDate: new Date('2021-11-01'),
      tasks: [
        'Lead teams to create prototypes, research, and development',
        'Design solutions and architect development and production environment',
        'Teach and mentor co-workers and interns to the technology stack',
        'Lead teams for Developer Experience',
      ],
    },
    {
      employer: 'High Output Ventures',
      position: 'Mid Backend Engineer',
      location: 'Singapore - Remote',
      startDate: new Date('2020-06-01'),
      endDate: new Date('2021-11-01'),
      tasks: [
        'Lead a team concerning a single service',
        'Maintain and add features for the core in-house framework we\'re using',
      ],
    },
    {
      employer: 'High Output Ventures',
      position: 'Junior Backend Engineer',
      location: 'Singapore - Remote',
      startDate: new Date('2019-02-13'),
      endDate: new Date('2020-06-01'),
      tasks: [
        'Developed features in services that adheres to CQRS + ES in Microservice Architecture',
        'Maintained utility functions that falls under Developer Experience toolkits',
      ],
    },
    {
      employer: 'Riverside Medical Center Inc.',
      position: 'Junior Software Developer',
      location: 'Bacolod City, Philippines',
      startDate: new Date('2014-08-14'),
      endDate: new Date('2018-09-18'),
      tasks: [
        'Designed and developed an application to ease the recording of vitals in Hemodialysis',
        'Designed and developed an application to have an Electronic Medical Records',
        'Taught colleagues about Git, unit testing, and agile development',
      ],
    },
  ],

  work: [
    {
      title: 'OneWallet',
      href: 'https://codus.io/',
      github: 'https://github.com/codus-app/codus',
      startDate: new Date('2019-02-13'),
      endDate: new Date('2021-07-01'),
      tags: ['ReactJS', 'Koa', 'ActiveMQ', 'TypeScript', 'GraphQL', 'REST'],
      description: `
        A gambling platform for Europe and China.
      `,
    },
  ],

  education: [
    {
      institution: 'University of Saint La Salle',
      startDate: new Date('2010-06-01'),
      // gpa: '3.98',
      endDate: new Date('2014-04-01'),
      description: 'B.S. in Information Technology',
    },
  ],

  skills: [
    {
      title: 'JavaScript',
      description: `
        Expert-level development skills in web programming.
      `,
      tags: [
        'React', 'Next.js', 'Vue', 'TypeScript', 'Node', 'Apollo Server/Client', 'NestJS', 'tRPC', 'Prisma',
      ],
    },
    {
      title: 'Solidity',
      description: 'Less than a year of experience',
      tags: ['UniSwap', 'GnosisSafe', 'SnapShot', 'HardHat'],
    },
    {
      title: 'Go',
      description: '2 years of experience',
      tags: ['Bitclout', 'Gin'],
    },
    {
      title: 'Rust',
      description: 'Continuously studying the ecosystem of Rust',
      tags: ['Solana', 'Rocket'],
    },
    {
      title: 'Database',
      description: 'Continuously studying the ecosystem of Rust',
      tags: ['MySQL', 'PostgreSQL', 'ArangoDB', 'Neo4j', 'MongoDB'],
    },
    {
      title: 'API',
      tags: [
        'RESTful',
        'GraphQL',
        'gRPC',
        'Slack API',
        'GitHub API',
      ],
    },
    {
      title: 'Agile Development',
      tags: ['Scrum', 'Kanban', 'User Story Mapping'],
    },
    {
      title: 'Amazon Web Services',
      tags: ['S3', 'EC2', 'Lambda'],
    },
    {
      title: 'Technologies',
      tags: [
        'Docker', 'Kubernetes', 'RabbitMQ', 'ActiveMQ', 'Pulumi', 'Waypoint', 'Vault', 'Packer',
        'Github Actions', 'CircleCI',
      ],
    },
  ],

  links: [
    'github.com/ralphcasipe1',
    'linkedin.com/in/ralph-casipe/',
  ],
};
