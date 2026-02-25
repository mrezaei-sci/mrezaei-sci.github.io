window.SITE = {
  githubUser: "mre:contentReference[oaicite:4]{index=4}d: [
    {
      title: "Motor-skill learning: cortico–subcortical reorganization (rs-fMRI)",
      blurb: "Directed connectivity pipeline for pre/post training; lag-aware dependencies + controlled inference; link network reconfiguration to kinematic learning.",
      tags: ["rs-fMRI", "Directed connectivity", "FWER", "Motor learning"],
      details: [
        "Whole-brain directed connectivity analysis of pre/post training resting-state fMRI.",
        "Time-lagged dependency estimation across cortical/subcortical ROIs with multiple-testing control.",
        "Goal: map network reconfiguration onto accuracy vs speed/vigor learning components."
      ],
      links: [
        { label: "Research page", href: "research.html" },
        { label: "Publications", href: "publications.html" }
      ]
    },
    {
      title: "Alzheimer’s morphometry + deep learning biomarkers",
      blurb: "Voxel-based morphometry combined with deep learning for early diagnosis signals and class separation.",
      tags: ["T1 MRI", "VBM/CAT12", "CNN", "Biomarkers"],
      details: [
        "Structural MRI pipeline combining morphometric features with deep learning classification.",
        "Focus on early diagnostic separation using morphometry-driven representations."
      ],
      links: [
        { label: "Publication (DOI)", href: "https://doi.org/10.1016/j.ynirp.2025.100315" }
      ]
    },
    {
      title: "Creative decision-making in soccer experts (task-fMRI)",
      blurb: "Sparse directed subnetwork signature of neural efficiency during creative choices under realistic constraints.",
      tags: ["Task-fMRI", "Sparse networks", "Creativity"],
      details: [
        "Naturalistic sports decision-making paradigm with network-level interpretation.",
        "Emphasis on sparse connectivity backbones and robustness."
      ],
      links: [{ label: "Publications", href: "publications.html" }]
    },
    {
      title: "Criticality in excitatory–inhibitory spiking networks",
      blurb: "Izhikevich E–I simulations with mean-field/bifurcation analysis to map stability and avalanche-like regimes.",
      tags: ["Computational neuroscience", "Izhikevich", "Bifurcation"],
      details: [
        "E–I spiking network simulations with dynamical analysis to characterize regimes.",
        "Bridges mechanistic simulation outputs to interpretable system-level behavior."
      ],
      links: [{ label: "Work", href: "work.html" }]
    }
  ],

  projects: [
    {
      title: "Effective Connectivity After Motor Skill Learning (M.Sc. Thesis)",
      year: "2024–Present",
      tags: ["rs-fMRI", "Directed connectivity", "FWER", "Motor learning"],
      summary: "Whole-brain directed connectivity analysis; time-lagged dependencies; link to kinematic learning.",
      bullets: [
        "Pre/post training resting-state fMRI; cortical + subcortical focus.",
        "Lag-aware dependency estimation; error control across links.",
        "Tools: SPM12/FSL, MATLAB/Python; reproducible pipelines & QC."
      ]
    },
    {
      title: "KIMORE Squat — Deep CV for clinical movement scoring",
      year: "2024",
      tags: ["Deep learning", "Computer vision", "Rehab"],
      summary: "Pose-based action quality assessment; compared CNN→BiLSTM vs dilated TCN (F1≈0.80).",
      bullets: [
        "Temporal feature pipeline on Kinect skeleton sequences.",
        "Robustness to tempo/phase variation.",
        "Tools: PyTorch, NumPy."
      ]
    },
    {
      title: "Particle filtering for EEG ocular artifact removal",
      year: "2023–2024",
      tags: ["EEG", "Signal processing", "Bayesian"],
      summary: "Bayesian denoising to suppress ocular artifacts while preserving rhythms.",
      bullets: [
        "Jointly track clean EEG and time-varying EOG leakage.",
        "Designed for downstream spectral and feature analyses.",
        "Tools: Python, MNE."
      ]
    },
    {
      title: "Network signatures of risk-taking in ADHD (task-fMRI, BART)",
      year: "2023",
      tags: ["Task-fMRI", "Network analysis", "ADHD"],
      summary: "BIDS/fMRIPrep preprocessing; subject GLMs; cluster-FWE; Schaefer-400 mapping.",
      bullets: [
        "Adult ADHD vs control design described in CV.",
        "Whole-brain inference and network interpretation.",
        "Tools: fMRIPrep, SPM12."
      ]
    },
    {
      title: "Criticality in E–I neural networks",
      year: "2023",
      tags: ["Computational neuroscience", "Dynamics"],
      summary: "Spiking networks + mean-field/bifurcation analysis; map synchrony/stability regimes.",
      bullets: [
        "Izhikevich E–I spiking model.",
        "Used dynamical tools for regime characterization.",
        "Tools: Python, XPPAUT/MatCont."
      ]
    }
  ],

  publications: {
    peer: [
      {
        title: "Early diagnosis of Alzheimer’s disease based on brain morphological changes: A comprehensive approach combining voxel-based morphometry and deep learning.",
        venue: "NeuroImage: Reports",
        year: "2026",
        meta: "DOI: 10.1016/j.ynirp.2025.100315",
        links: [{ label: "DOI", href: "https://doi.org/10.1016/j.ynirp.2025.100315" }]
      }
    ],
    underReview: [
      {
        title: "Distinct cortical–subcortical contributions underlying accuracy–speed networks following motor task learning: a resting-state fMRI study.",
        venue: "Nature Communications",
        year: "Submitted Feb 18, 2026",
        meta: "Manuscript under review",
        links: []
      },
      {
        title: "Neural efficiency in creative decision-making: a sparse directed subnetwork in soccer experts revealed by fMRI.",
        venue: "NeuroImage",
        year: "Under review (Submitted Dec 20, 2025)",
        meta: "Manuscript under review",
        links: []
      },
      {
        title: "Permutation-Controlled Lag-Aware Inference of Sparse Brain Network Backbones in Real-World Creative Decision-making: A fMRI Study.",
        venue: "IEEE JBHI",
        year: "Under review (Submitted Feb 16, 2026)",
        meta: "Manuscript under review",
        links: []
      }
    ],
    talks: [
      {
        title: "Brain network reconfiguration during creative playmaking: a task-fMRI study.",
        venue: "ICBME",
        year: "Nov 2025",
        meta: "Oral presentation"
      },
      {
        title: "Effective connectivity alterations within the cortico–basal ganglia circuit associated with motor skill learning.",
        venue: "ICBME",
        year: "Nov 2025",
        meta: "Oral presentation"
      }
    ]
  }
};
