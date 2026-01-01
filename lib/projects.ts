export type Project = {
    slug: string;
    title: string;
    description: string;
    bullets: string[];
    tech: string[];
    links?: {
      github?: string;
      demo?: string;
    };
    internalHref?: string;
    internalLabel?: string;
  };
  
  export const projects: Project[] = [
    {
      slug: "coin-in-modeling",
      title: "Casino Coin-In Modeling",
      description: "Predict monthly coin-in using engineered spatial features and ML models.",
      bullets: [
        "Built a supervised ML pipeline with feature engineering on floor layout + traffic proxies.",
        "Compared models (XGBoost, RF, LightGBM) and utilized cross-validation to analyze performance",
        "Used SHAP to explain drivers of predicted revenue and guide optimization.",
      ],
      tech: ["Python", "scikit-learn", "LightGBM", "Random Forest", "SHAP", "Optimization", "Feature Engineering", "Clustering"],
      internalHref: "/projects/nugget",
      internalLabel: "View Nugget case study →",
    },
    // {
    //   slug: "layout-optimizer",
    //   title: "Floor Layout Optimization",
    //   description: "Search over machine swaps to maximize predicted coin-in under constraints.",
    //   bullets: [
    //     "Implemented swap-based search with constraints (e.g., bar slots only swap with bar slots).",
    //     "Parallelized candidate evaluation to speed up iteration.",
    //     "Integrated model predictions to score layouts and track best-so-far solutions.",
    //   ],
    //   tech: ["Python", "multiprocessing", "optimization"],
    //   internalHref: "/projects/nugget",
    //   internalLabel: "View Layout Optimizer →",
    // },
    {
        slug: "air-traffic-control-sim",
        title: "Air Traffic Control Simulator",
        description:
          "Built an interactive air-traffic control simulator in OCaml with a live radar UI and a programmable command console for real-time aircraft control.",
        bullets: [
          "Developed the backend simulation engine to model aircraft motion in a 2D airspace and maintain consistent state over time.",
          "Integrated backend ↔ UI communication so radar updates, command log events, compass heading, and runway indicators stayed synchronized in real time.",
          "Implemented a programmable console supporting commands like changing headings, spawning aircraft, and removing aircraft during live simulation.",
          "Collaborated in a 4-person Agile team (sprints, task breakdown, iterative demos) with clear ownership boundaries and frequent integration.",
        ],
        tech: ["OCaml", "Agile", "simulation", "state management", "UI integration"],
      },
      
    {
        slug: "huffman-compression",
        title: "Huffman Compression Program",
        description:
          "Built a Huffman file compression system in C using priority structures and Huffman tree encoding for efficient lossless compression.",
        bullets: [
          "Implemented a Huffman file compression system in C by building and traversing a Huffman tree.",
          "Used priority stack/queue structures to construct codes and encode characters into variable-length bit patterns based on frequency.",
          "Produced correctly formatted compressed output to achieve efficient lossless compression.",
        ],
        tech: ["C", "data structures", "Huffman coding", "file I/O"],
      },
      {
        slug: "intelligent-image-segmentation",
        title: "Intelligent Image Segmentation Tool",
        description:
          "Created a Java intelligent scissors image editor using pixel-graph modeling and Dijkstra’s algorithm for real-time selections.",
        bullets: [
          "Built a Java-based intelligent scissors image editor application with a Swing UI.",
          "Modeled images as pixel graphs and applied Dijkstra’s algorithm to compute optimal selection paths.",
          "Delivered a real-time selection tool with visual progress indicators for interactive image editing.",
        ],
        tech: ["Java", "Swing", "graphs", "Dijkstra’s algorithm"],
      },
      {
        slug: "optimized-matrix-multiplication",
        title: "Optimized Matrix Multiplication for Performance",
        description:
          "Implemented and benchmarked cache-aware matrix multiplication techniques in C to improve performance via locality and tiling.",
        bullets: [
          "Implemented and benchmarked cache-aware matrix multiplication algorithms in C (tiling, memory layout, access stride optimizations).",
          "Focused on spatial locality and instruction-level optimization to reduce cache misses and improve throughput.",
          "Analyzed runtime across implementations and quantified performance gains using profiling tools.",
        ],
        tech: ["C", "performance optimization", "cache locality", "profiling"],
      },

  ];
  