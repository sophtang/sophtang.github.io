// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-technical-articles",
          title: "Technical Articles",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/articles/";
          },
        },{id: "news-my-review-paper-on-peptide-functionalized-nanoparticles-for-brain-targeted-therapeutics-is-published-in-drug-delivery-and-translational-research",
          title: 'My review paper on Peptide-Functionalized Nanoparticles for Brain-Targeted Therapeutics is published in Drug...',
          description: "",
          section: "News",},{id: "news-peptune-de-novo-generation-of-therapeutic-peptides-with-multi-objective-guided-discrete-diffusion-accepted-at-icml-2025-come-by-us-at-poster-session-4-to-chat-free-peptune-stickers",
          title: 'PepTune: De Novo Generation of Therapeutic Peptides with Multi-Objective-Guided Discrete Diffusion accepted at...',
          description: "",
          section: "News",},{id: "news-branched-schrödinger-bridge-matching-released-on-arxiv-and-accepted-at-icml-exait-workshop-come-by-our-poster-in-vancouver",
          title: 'Branched Schrödinger Bridge Matching released on arXiv and accepted at ICML ExAIT workshop!...',
          description: "",
          section: "News",},{id: "news-tr2-d2-is-out-read-our-paper-on-off-policy-rl-for-discrete-diffusion-fine-tuning-with-multi-objective-rewards",
          title: 'TR2-D2 is out! Read our paper on off-policy RL for discrete diffusion fine-tuning...',
          description: "",
          section: "News",},{id: "news-entangledsbm-is-out-read-our-paper-on-simulating-interacting-multi-particle-systems-with-novel-schrödinger-bridge-matching-framework-we-will-present-entangledsbm-at-neurips-2025-in-the-fpi-and-spigm-workshops-so-come-say-hi",
          title: 'EntangledSBM is out! Read our paper on simulating interacting multi-particle systems with novel...',
          description: "",
          section: "News",},{
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
