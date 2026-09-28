// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/Simon-Homepage/";
    },
  },{id: "nav-projects",
          title: "Projects",
          description: "Research and engineering projects in aerial robotics.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/Simon-Homepage/projects/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/Simon-Homepage/publications/";
          },
        },{id: "projects-adaptive-visual-inertial-odometry",
          title: 'Adaptive Visual-Inertial Odometry',
          description: "Robust UAV odometry for indoor and GNSS-denied flight.",
          section: "Projects",handler: () => {
              window.location.href = "/Simon-Homepage/projects/01-adaptive-vio/";
            },},{id: "projects-tracking-moving-objects",
          title: 'Tracking Moving Objects',
          description: "Visual tracking and relative motion estimation for aerial robotics.",
          section: "Projects",handler: () => {
              window.location.href = "/Simon-Homepage/projects/02-dynamic-tracking/";
            },},{id: "projects-vio-evaluation-toolkit",
          title: 'VIO Evaluation Toolkit',
          description: "Reproducible trajectory evaluation using public and custom datasets.",
          section: "Projects",handler: () => {
              window.location.href = "/Simon-Homepage/projects/03-vio-benchmark/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
