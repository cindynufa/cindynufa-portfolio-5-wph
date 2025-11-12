type Career = {
  heading: string;
  text: string;
  date: string;
  src: boolean;
  description: string[];
};

const CareerCardConst: Career[] = [
  {
    heading: 'Frontend Developer',
    text: 'Google',
    date: 'Jul 2024 - Present',
    src: true,
    description: [
      'Developed and maintained responsive web applications, improving load times by 30% through performance optimization.',
      'Translated UI/UX designs into functional and visually appealing web interfaces using React and TailwindCSS.',
      'Collaborated with backend teams to integrate APIs, ensuring seamless data flow and functionality.',
      'Implemented interactive animations and dynamic features, enhancing user engagement by 25%.',
    ],
  },
  {
    heading: 'Frontend Developer',
    text: 'Slack',
    date: 'Jul 2023 - Jul 2024',
    src: true,
    description: [
      'Developed and maintained responsive web applications, improving load times by 30% through performance optimization.',
      'Translated UI/UX designs into functional and visually appealing web interfaces using React and TailwindCSS.',
      'Collaborated with backend teams to integrate APIs, ensuring seamless data flow and functionality.',
      'Implemented interactive animations and dynamic features, enhancing user engagement by 25%.',
    ],
  },
  {
    heading: 'Frontend Developer',
    text: 'Skype',
    date: 'Nov 2021 - Jul 2023',
    src: true,
    description: [
      'Developed and maintained responsive web applications, improving load times by 30% through performance optimization.',
      'Translated UI/UX designs into functional and visually appealing web interfaces using React and TailwindCSS.',
      'Collaborated with backend teams to integrate APIs, ensuring seamless data flow and functionality.',
      'Implemented interactive animations and dynamic features, enhancing user engagement by 25%.',
    ],
  },
];

export default CareerCardConst;
