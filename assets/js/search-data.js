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
  },{id: "nav-technical-articles",
          title: "Technical Articles",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/articles/";
          },
        },{id: "news-gumbel-softmax-flow-matching-is-out-on-arxiv-check-out-our-work-on-guided-discrete-flow-matching-on-the-simplex",
          title: 'Gumbel-Softmax Flow Matching is out on arXiv! Check out our work on guided...',
          description: "",
          section: "News",},{id: "news-my-review-paper-on-peptide-functionalized-nanoparticles-for-brain-targeted-therapeutics-is-published-in-drug-delivery-and-translational-research",
          title: 'My review paper on Peptide-Functionalized Nanoparticles for Brain-Targeted Therapeutics is published in Drug...',
          description: "",
          section: "News",},{id: "news-peptune-de-novo-generation-of-therapeutic-peptides-with-multi-objective-guided-discrete-diffusion-accepted-at-icml-2025-come-by-us-at-poster-session-4-to-chat-free-peptune-stickers",
          title: 'PepTune: De Novo Generation of Therapeutic Peptides with Multi-Objective-Guided Discrete Diffusion accepted at...',
          description: "",
          section: "News",},{id: "news-branched-schrödinger-bridge-matching-released-on-arxiv-and-accepted-at-icml-exait-workshop-come-by-our-poster-in-vancouver",
          title: 'Branched Schrödinger Bridge Matching released on arXiv and accepted at ICML ExAIT workshop!...',
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
