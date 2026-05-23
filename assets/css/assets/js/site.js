// =========================================================
// Mohammad Rezaei website data
// File: assets/js/data.js
// This file feeds dynamic sections in index.html, work.html,
// publications.html, and GitHub repo loading if site.js uses window.SITE.
// =========================================================

window.SITE = {
  githubUser: "mrezaei-sci",

  featured: [
    {
      title: "Interpretable skeleton-based deep learning for squat-quality assessment",
      blurb:
        "An end-to-end movement-assessment pipeline using KIMORE 3D skeleton time series, temporal alignment, body-centered normalization, bone-direction features, motion derivatives, CNN-BiLSTM/TCN models, and Grad-CAM-style explanations for rehabilitation feedback.",
      tags: [
        "KIMORE",
        "RGB-D skeletons",
        "Movement assessment",
        "Explainable AI",
        "Rehabilitation AI"
      ],
      details: [
        "Developed a pose-based movement-quality assessment workflow for squat rehabilitation exercises.",
        "Used 3D skeletal joint trajectories, temporal modeling, and interpretable deep learning.",
        "Focused on clinically meaningful feedback rather than only correct/incorrect classification."
      ],
      links: [
        { label: "Work page", href: "work.html" },
        { label: "Publications", href: "publications.html" }
      ]
    },
    {
      title: "Neural efficiency in creative decision-making",
      blurb:
        "A task-fMRI study of creative soccer decision-making in expert players, using directed network analysis to identify a sparse decision-related subnetwork associated with neural efficiency.",
      tags: [
        "NeuroImage",
        "Task-fMRI",
        "Directed networks",
        "Sports neuroscience"
      ],
      details: [
        "Studied creative decision-making in soccer experts using fMRI.",
        "Focused on sparse directed network organization during realistic sport-related decisions.",
        "Published in NeuroImage."
      ],
      links: [
        {
          label: "DOI",
          href: "https://doi.org/10.1016/j.neuroimage.2026.121961"
        },
        { label: "Publications", href: "publications.html" }
      ]
    },
    {
      title: "Early Alzheimer’s diagnosis with VBM and deep learning",
      blurb:
        "A structural MRI and deep learning project combining voxel-based morphometry, biologically meaningful MRI biomarkers, and CNN/FCN models for interpretable Alzheimer’s disease classification.",
      tags: [
        "NeuroImage: Reports",
        "Structural MRI",
        "VBM",
        "CNN/FCN",
        "Alzheimer’s disease"
      ],
      details: [
        "Integrated gray matter, white matter, CSF, WMH, and cortical thickness features.",
        "Converted MRI-derived biomarkers into multi-bit heatmap representations.",
        "Published in NeuroImage: Reports."
      ],
      links: [
        {
          label: "DOI",
          href: "https://doi.org/10.1016/j.ynirp.2025.100315"
        },
        { label: "Publications", href: "publications.html" }
      ]
    },
    {
      title: "Cortical-subcortical network reconfiguration after motor learning",
      blurb:
        "A resting-state fMRI project studying how motor task learning reorganizes cortical and subcortical networks, with emphasis on accuracy-speed outcomes.",
      tags: [
        "rs-fMRI",
        "Motor learning",
        "Brain networks",
        "Scientific Reports"
      ],
      details: [
        "M.Sc. thesis project on whole-brain resting-state fMRI.",
        "Studies network reconfiguration after motor task learning.",
        "Manuscript currently under review in Scientific Reports."
      ],
      links: [
        { label: "Research page", href: "research.html" },
        { label: "Publications", href: "publications.html" }
      ]
    }
  ],

  projects: [
    {
      title: "Interpretable skeleton-based deep learning for automated squat-quality assessment",
      year: "2026",
      tags: [
        "Computer vision",
        "Human movement",
        "Rehabilitation AI",
        "Deep learning"
      ],
      summary:
        "Pose-based movement-quality assessment using KIMORE 3D skeleton time series, CNN-BiLSTM/TCN models, and Grad-CAM-style explanations.",
      bullets: [
        "Built a full skeleton-sequence pipeline including temporal alignment, body-centered normalization, bone-direction features, and motion derivatives.",
        "Compared CNN-BiLSTM and Temporal Convolutional Network models for movement-quality classification.",
        "Used explainability tools to identify movement phases that contributed most strongly to model decisions."
      ],
      links: [
        { label: "Publications", href: "publications.html" }
      ]
    },
    {
      title: "Effective connectivity after motor skill learning",
      year: "2024–Present",
      tags: [
        "rs-fMRI",
        "Motor learning",
        "Brain networks",
        "Connectivity"
      ],
      summary:
        "M.Sc. thesis project on cortical-subcortical network reconfiguration after motor task learning.",
      bullets: [
        "Analyzed whole-brain resting-state fMRI data before and after motor task learning.",
        "Focused on accuracy-speed networks and cortical-subcortical contributions.",
        "Connected neuroimaging network features with behavioral learning outcomes."
      ],
      links: [
        { label: "Research page", href: "research.html" },
        { label: "Publications", href: "publications.html" }
      ]
    },
    {
      title: "Neural efficiency in creative soccer decision-making",
      year: "2026",
      tags: [
        "Task-fMRI",
        "Sports neuroscience",
        "Directed networks",
        "NeuroImage"
      ],
      summary:
        "Task-fMRI study of creative decision-making in soccer experts, published in NeuroImage.",
      bullets: [
        "Studied creative and routine decision-making in expert soccer players.",
        "Used directed network analysis to identify a sparse task-related network.",
        "Connected brain-network organization with neural-efficiency interpretation."
      ],
      links: [
        {
          label: "DOI",
          href: "https://doi.org/10.1016/j.neuroimage.2026.121961"
        }
      ]
    },
    {
      title: "Early Alzheimer’s diagnosis using morphometry and deep learning",
      year: "2026",
      tags: [
        "Structural MRI",
        "Clinical AI",
        "VBM",
        "Deep learning"
      ],
      summary:
        "Published NeuroImage: Reports study combining voxel-based morphometry and deep learning for Alzheimer’s disease diagnosis.",
      bullets: [
        "Used T1-weighted MRI and MRI-derived biomarkers including GM, WM, CSF, WMH, and cortical thickness.",
        "Converted biological features into multi-bit heatmap representations.",
        "Evaluated CNN and FCN models for interpretable disease classification."
      ],
      links: [
        {
          label: "DOI",
          href: "https://doi.org/10.1016/j.ynirp.2025.100315"
        }
      ]
    },
    {
      title: "Frontal spectral entropy and decision failure under pressure",
      year: "Under review",
      tags: [
        "EEG",
        "Biosignal processing",
        "Sports neuroscience",
        "Entropy"
      ],
      summary:
        "EEG study investigating whether frontal spectral entropy tracks pressure-induced decision-making failure in youth soccer.",
      bullets: [
        "Used EEG signal processing to study decision-making under pressure.",
        "Focused on frontal spectral entropy as a marker of performance failure.",
        "Connected brain-signal complexity with sport-performance outcomes."
      ],
      links: [
        { label: "Publications", href: "publications.html" }
      ]
    },
    {
      title: "Integrated Information Decomposition in REM dream emotion",
      year: "Under review",
      tags: [
        "EEG",
        "Sleep neuroscience",
        "Information theory",
        "REM dreams"
      ],
      summary:
        "EEG and information-theoretic analysis of redundancy-related hemispheric asymmetry during negative REM dreams.",
      bullets: [
        "Analyzed REM pre-awakening EEG in relation to dream emotion.",
        "Used information decomposition to study hemispheric asymmetry.",
        "Applied mixed-effects and robustness analyses for inference."
      ],
      links: [
        { label: "Publications", href: "publications.html" }
      ]
    },
    {
      title: "EEG ocular artifact removal using particle filtering",
      year: "2023–2024",
      tags: [
        "EEG",
        "Signal processing",
        "Bayesian filtering",
        "Artifact correction"
      ],
      summary:
        "Bayesian denoising framework for suppressing ocular artifacts while preserving EEG rhythms.",
      bullets: [
        "Designed a particle-filtering approach to estimate clean EEG activity.",
        "Targeted non-Gaussian and non-stationary ocular contamination.",
        "Focused on preserving downstream spectral and time-frequency features."
      ],
      links: [
        { label: "Work page", href: "work.html" }
      ]
    },
    {
      title: "Criticality in excitatory-inhibitory neural networks",
      year: "2023",
      tags: [
        "Computational neuroscience",
        "Spiking networks",
        "Dynamical systems"
      ],
      summary:
        "Simulation study of excitatory-inhibitory neural networks using Izhikevich neuron models.",
      bullets: [
        "Simulated E-I spiking neural networks to study synchrony and phase transitions.",
        "Explored avalanche-like dynamics and criticality-related regimes.",
        "Connected computational modeling with principles of cortical information processing."
      ],
      links: [
        { label: "Research page", href: "research.html" }
      ]
    }
  ],

  publications: {
    peer: [
      {
        title:
          "Neural efficiency in creative decision-making: A sparse directed subnetwork in soccer experts revealed by fMRI.",
        authors:
          "Rezaei, M., Zarei, A., & Talesh Jafadideh, A.",
        venue: "NeuroImage",
        year: "2026",
        meta: "334, 121961. DOI: 10.1016/j.neuroimage.2026.121961",
        tags: [
          "Task-fMRI",
          "Creative decision-making",
          "Directed networks",
          "Sports neuroscience"
        ],
        links: [
          {
            label: "DOI",
            href: "https://doi.org/10.1016/j.neuroimage.2026.121961"
          }
        ]
      },
      {
        title:
          "Early diagnosis of Alzheimer’s disease based on brain morphological changes: A comprehensive approach combining voxel-based morphometry and deep learning.",
        authors:
          "Rezaei, M., Mohammadikhaveh, S., Faraji, H., Ardalani, R., Rezaei, M., & Shirazinodeh, A.",
        venue: "NeuroImage: Reports",
        year: "2026",
        meta: "6(1), 100315. DOI: 10.1016/j.ynirp.2025.100315",
        tags: [
          "Structural MRI",
          "Voxel-based morphometry",
          "Deep learning",
          "Alzheimer’s disease"
        ],
        links: [
          {
            label: "DOI",
            href: "https://doi.org/10.1016/j.ynirp.2025.100315"
          }
        ]
      }
    ],

    underReview: [
      {
        title:
          "Distinct cortical-subcortical contributions underlying accuracy-speed networks following motor task learning: A resting-state fMRI study.",
        authors:
          "Rezaei, M., Bahrami, F., Tahmasebi Boroujeni, S., & Talesh Jafadideh, A.",
        venue: "Scientific Reports",
        year: "Under review",
        meta: "Manuscript under review.",
        tags: [
          "Resting-state fMRI",
          "Motor learning",
          "Accuracy-speed networks",
          "Cortical-subcortical systems"
        ],
        links: []
      },
      {
        title:
          "Integrated Information Decomposition reveals redundancy-related hemispheric asymmetry during negative REM dreams.",
        authors:
          "Rezaei, M. & Talesh Jafadideh, A.",
        venue: "SLEEP",
        year: "Under review",
        meta: "Manuscript under review.",
        tags: [
          "EEG",
          "REM dreams",
          "Information decomposition",
          "Sleep neuroscience"
        ],
        links: []
      },
      {
        title:
          "Frontal spectral entropy tracks pressure-induced decision-making failure in youth soccer.",
        authors:
          "Rezaei, M., Talesh Jafadideh, A., & Bohloul, A.",
        venue: "Scientific Reports",
        year: "Under review",
        meta: "Manuscript under review.",
        tags: [
          "EEG",
          "Spectral entropy",
          "Decision-making under pressure",
          "Sports neuroscience"
        ],
        links: []
      }
    ],

    talks: [
      {
        title:
          "Interpretable skeleton-based deep learning for automated squat quality assessment in rehabilitation.",
        authors:
          "Rezaei, M., Mohammadikhaveh, S., Zarei, M., & Amiri, H.",
        venue: "34th International Conference on Electrical Engineering (ICEE), IEEE",
        year: "May 2026",
        meta: "Peer-reviewed conference paper.",
        tags: [
          "RGB-D skeletons",
          "Human movement analysis",
          "TCN",
          "Grad-CAM",
          "Rehabilitation AI"
        ],
        links: []
      },
      {
        title:
          "Brain network reconfiguration during creative playmaking: A task-fMRI study.",
        authors:
          "Rezaei, M., Siami, M., Zarei, A., & Talesh Jafadideh, A.",
        venue:
          "32nd National & 10th International Iranian Conference on Biomedical Engineering (ICBME)",
        year: "Nov 2025",
        meta: "Conference presentation.",
        tags: [
          "Task-fMRI",
          "Brain networks",
          "Creative playmaking"
        ],
        links: []
      },
      {
        title:
          "Effective connectivity alterations within the cortico-basal ganglia circuit associated with motor skill learning.",
        authors:
          "Rezaei, M., Talesh Jafadideh, A., Bahrami, F., & Tahmasebi Boroujeni, S.",
        venue:
          "32nd National & 10th International Iranian Conference on Biomedical Engineering (ICBME)",
        year: "Nov 2025",
        meta: "Conference presentation.",
        tags: [
          "Effective connectivity",
          "Motor skill learning",
          "Cortico-basal ganglia"
        ],
        links: []
      }
    ]
  }
};
