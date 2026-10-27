import gasSearchImg from '../assets/gas-search.png';
import evSearchImg from '../assets/ev-search.png';
import aiAgentImg from '../assets/ai-agent.png';
import priceForecastImg from '../assets/price-forecast.png';
import favoritesImg from '../assets/favorites.png';
import fmUploadEmptyImg from '../assets/flyer-mind-ai-screenshots/01-upload-empty.png';
import fmUploadProgressImg from '../assets/flyer-mind-ai-screenshots/02-upload-progress.png';
import fmUploadDoneImg from '../assets/flyer-mind-ai-screenshots/03-upload-done.png';
import fmSearchGridImg from '../assets/flyer-mind-ai-screenshots/04-search-grid.png';
import fmSearchFiltersImg from '../assets/flyer-mind-ai-screenshots/05-search-filters.png';
import fmChatGridImg from '../assets/flyer-mind-ai-screenshots/06-chat-grid.png';
import fmChatSortImg from '../assets/flyer-mind-ai-screenshots/07-chat-sort-menu.png';
import fmChatCarouselImg from '../assets/flyer-mind-ai-screenshots/08-chat-carousel.png';

export const PROJECT_GROUPS = [
  {
    name: 'Flyer Mind AI',
    tagline: 'Searchable store flyers with an AI shopping agent',
    icon: 'flyer',
    description:
      "A cross-platform mobile app that turns a store's weekly flyer PDF into a searchable catalogue of every product, price, and deal in it. A Node service runs Google Gemini vision over each page, stores the results in SQLite, and builds a price history across flyers. Shoppers search locally and offline, or ask an AI agent in plain language to find products, judge whether a price is a good deal, and set price alerts.",
    stack: ['React Native', 'TypeScript', 'Node.js', 'Express', 'SQLite', 'Gemini'],
    repos: [{ label: 'flyer-mind-ai', url: 'https://github.com/Girujan1998/flyer-mind-ai' }],
    parts: [
      {
        slug: 'flyer-mind-ai',
        kind: 'Mobile app + API',
        blurb:
          'React Native (iOS and Android) client in TypeScript with Upload, Search, and Chat tabs, backed by an Express server that extracts products with Gemini vision and answers each chat turn with one structured call that triggers deterministic search, price insight, or alert actions.',
        stack: ['React Native', 'TypeScript', 'Express', 'SQLite', 'Gemini', 'Jest'],
        github: 'https://github.com/Girujan1998/flyer-mind-ai',
      },
    ],
  },
  {
    name: 'GasAgent.ai',
    tagline: 'Fuel & EV finder with a multi-step AI agent',
    icon: 'fuel',
    description:
      'A cross-platform mobile app that helps drivers find fuel and charging, track prices, and get short-term forecasts. It includes a built-in AI agent that plans and runs multi-step lookups on its own rather than answering from a script. A full-stack learning project built from a React Native client, a FastAPI backend, third-party data, and a bounded tool-calling agent. Not intended for production use.',
    stack: ['React Native', 'TypeScript', 'Python', 'FastAPI', 'LLM Tool-Calling'],
    repos: [{ label: 'gasagent-ai', url: 'https://github.com/Girujan1998/gasagent-ai' }],
    parts: [
      {
        slug: 'gasagent-frontend',
        kind: 'Mobile app',
        blurb:
          'React Native (iOS and Android) client in TypeScript. Gas and EV search, favorites, price forecasts, and the agent chat all share one location and one set of result cards.',
        stack: ['React Native', 'TypeScript', 'Jest'],
        github: 'https://github.com/Girujan1998/gasagent-ai/tree/main/mobile',
      },
      {
        slug: 'gasagent-backend',
        kind: 'API backend',
        blurb:
          "FastAPI REST API covering station search, deterministic fuel-cost math, price forecasting, and the agent's five-tool loop over an LLM API. Filtering and ranking happen in code.",
        stack: ['Python', 'FastAPI', 'pytest'],
        github: 'https://github.com/Girujan1998/gasagent-ai/tree/main/backend',
      },
    ],
  },
  {
    name: 'EyeGuide',
    tagline: 'Indoor navigation for the visually impaired',
    icon: 'white-cane',
    description:
      'A React Native app that lets visually impaired users navigate indoor spaces independently, with minimal hardware and no indoor GPS. Volunteers map buildings from Android devices; users pick a destination and get audio-guided, turn-by-turn navigation from pedometer step counting and magnetometer bearing. An optional Arduino Nano BLE lidar module adds haptic obstacle alerts within 2 metres.',
    stack: ['React Native', 'JavaScript', 'Django', 'PostgreSQL', 'Arduino'],
    repos: [
      { label: 'EyeGuide', url: 'https://github.com/Girujan1998/EyeGuide' },
      { label: 'EyeGuide-backend', url: 'https://github.com/Girujan1998/EyeGuide-backend' },
    ],
    parts: [
      {
        slug: 'eyeguide-frontend',
        kind: 'Frontend',
        blurb:
          'React Native app with full Android TalkBack support. Pedometer and magnetometer navigation, remote building-map creation, and optional lidar obstacle detection.',
        stack: ['React Native', 'Java', 'C++', 'Arduino'],
        github: 'https://github.com/Girujan1998/EyeGuide',
      },
      {
        slug: 'eyeguide-backend',
        kind: 'Backend',
        blurb:
          'Django REST API for building maps, GPS path coordinates, and route data consumed by the app. PostgreSQL via pgAdmin, with NGROK tunneling for on-device access during development.',
        stack: ['Python', 'Django', 'PostgreSQL'],
        github: 'https://github.com/Girujan1998/EyeGuide-backend',
      },
    ],
  },
];

export const PROJECTS = [
  {
    slug: 'flyer-mind-ai',
    name: 'Flyer Mind AI',
    tagline: 'Turn weekly store flyers into a searchable, price-aware catalogue',
    overview: [
      "Flyer Mind AI is a cross-platform React Native app (iOS and Android) that turns a store's weekly flyer PDF into a searchable catalogue of every product, price, and deal in it, and then lets shoppers find things by asking for them in plain language.",
      'The app talks to a small Node and Express service. On upload, the server rasterises each flyer page with mupdf and sends it to Google Gemini vision, which returns every product with its name, price, size, category, department, sale status, and a bounding box on the page. Results are stored in SQLite along with page images and per-product crop thumbnails. Re-uploading the same PDF is matched by SHA-256 and returns the stored result instead of running Gemini again.',
      'The Chat tab is an AI agent rather than a chatbot. Each turn is a single structured Gemini call that classifies the message into an action (search, price insight, or set alert), and the server then does the work deterministically against the database. The model never states a price or trend itself, so it cannot hallucinate a number. Every flyer stays in the database, so canonical product matching across flyers builds a real price history behind each item for deal-quality scoring, lowest-price tracking, and retailer comparison.',
    ],
    features: [
      'Flyer PDF upload with Gemini vision extraction of every product, price, sale flag, and bounding box',
      'Store name and validity window detection, so each product knows whether its flyer is active, upcoming, or expired',
      'Resumable uploads that reconnect to the same job after a phone lock or network blip',
      'Fast local search with a three-mode query classifier (aisle, specific item, or keyword) and relevance ranking',
      'Faceted filters by department, store, flyer status, and on-sale, with counts that reflect the other selections',
      'Source view that jumps to the exact spot on the rendered flyer page with the product highlighted',
      'AI agent with one structured Gemini call per turn, driving deterministic search, price insight, and price alert actions',
      'Canonical product matching across flyers for 90-day deal quality, lowest price, retailer comparison, and sale frequency',
      'Lint, TypeScript, and Jest checks for the app',
    ],
    stack: ['React Native', 'TypeScript', 'Node.js', 'Express', 'SQLite', 'Google Gemini', 'Jest'],
    github: 'https://github.com/Girujan1998/flyer-mind-ai',
    live: null,
    related: null,
    screenshots: [
      { src: fmUploadEmptyImg, caption: 'Upload a flyer' },
      { src: fmUploadProgressImg, caption: 'Extraction in progress' },
      { src: fmUploadDoneImg, caption: 'Extraction complete' },
      { src: fmSearchGridImg, caption: 'Product search' },
      { src: fmSearchFiltersImg, caption: 'Search filters' },
      { src: fmChatGridImg, caption: 'AI agent results' },
      { src: fmChatSortImg, caption: 'Sorting agent results' },
      { src: fmChatCarouselImg, caption: 'Carousel view' },
    ],
  },
  {
    slug: 'gasagent-frontend',
    name: 'GasAgent.ai — Frontend',
    tagline: 'Cross-platform mobile app for finding fuel and charging',
    overview: [
      'GasAgent.ai is a cross-platform React Native app (iOS and Android) that helps drivers find fuel and charging options, track prices, and get short-term price forecasts. It includes a built-in AI agent that plans and executes multi-step lookups on its own rather than answering from a script.',
      'The mobile client is written in TypeScript and consumes a Python (FastAPI) backend. Search results for gas stations, EV chargers, and forecasts render as rich cards that are reused across the dedicated search tabs and inline in the AI agent chat. Location shared once carries across every tab instead of being re-requested.',
      'This is a personal portfolio and learning project, built to practice full-stack mobile development: a React Native client, a Python API backend, third-party data integration, and an AI agent with tool-calling. It runs on free-tier hosting and public data sources and is not intended for production use.',
    ],
    features: [
      'Gas station search by city, postal code, or current location, with brand, per-grade pricing, distance, and ratings',
      'EV charging station search with network, connector types, and charging speed',
      'Conversational AI agent that chains multiple lookups to answer a single goal',
      'Short-term local gas price forecasting',
      'Favorites: save stations from results, reorder them, and refresh prices later',
      'Shared location state across all tabs, so you share once and use it everywhere',
      'Rich station result cards reused across search tabs and the agent chat',
      'Jest test suite for the mobile app',
    ],
    stack: ['React Native', 'TypeScript', 'iOS', 'Android', 'Jest'],
    github: 'https://github.com/Girujan1998/gasagent-ai',
    live: null,
    related: 'gasagent-backend',
    relatedLabel: 'View Backend →',
    screenshots: [
      { src: gasSearchImg, caption: 'Gas station search' },
      { src: evSearchImg, caption: 'EV charging search' },
      { src: aiAgentImg, caption: 'AI agent (multi-step)' },
      { src: priceForecastImg, caption: 'Price forecast' },
      { src: favoritesImg, caption: 'Favorites' },
    ],
  },
  {
    slug: 'gasagent-backend',
    name: 'GasAgent.ai — Backend',
    tagline: 'FastAPI service with a bounded tool-calling AI agent',
    overview: [
      'The GasAgent.ai backend is a FastAPI (Python) REST API that powers the mobile app. It handles gas and EV station search, fuel-cost arithmetic, and gas price forecasting, integrating a mix of free public and third-party data sources behind a single clean API surface.',
      'Its centrepiece is an AI agent implemented as a bounded tool-calling loop over a large-language-model API. Given a goal like "what would it cost to fill up at the cheapest station near me?", the agent decides which tools to call and in what order, feeds each result into the next step, and continues, up to a bounded number of steps, until it can give a grounded answer.',
      'The agent has five tools: gas station search, EV charging search, combined gas and EV search, fuel-cost arithmetic, and price forecasting. All filtering, sorting, ranking, and math happen in code. The model never reasons over raw result lists or does arithmetic itself; it only decides which tools to call and how to phrase the answer.',
    ],
    features: [
      'REST API for gas station, EV charging, and combined station search',
      'Bounded tool-calling agent loop over an LLM API with five code-backed tools',
      'Deterministic fuel-cost arithmetic, computed in code, never by the model',
      'Next-day gas price forecasting combining local average and regional trend',
      'Third-party and public data source integration behind a unified API',
      'Graceful degradation when optional API keys are absent',
      'pytest test suite for the backend',
    ],
    stack: ['Python', 'FastAPI', 'REST APIs', 'LLM Tool-Calling', 'pytest'],
    github: 'https://github.com/Girujan1998/gasagent-ai',
    live: null,
    related: 'gasagent-frontend',
    relatedLabel: 'View Frontend →',
  },
  {
    slug: 'eyeguide-frontend',
    name: 'EyeGuide — Frontend',
    tagline: 'Indoor navigation mobile app for the visually impaired',
    overview: [
      'EyeGuide is a React Native mobile application designed to enable visually impaired users to navigate indoor spaces independently, with minimal hardware and at an affordable cost.',
      'Building administrators or volunteers create detailed indoor maps remotely using Android devices. Visually impaired users then launch EyeGuide, select a destination, and receive real-time audio-guided turn-by-turn navigation through the building. The app is built with full Android TalkBack accessibility support throughout.',
      'Navigation is powered by pedometer-based step counting for distance tracking and magnetometer bearing detection for directional guidance, eliminating any dependency on indoor GPS. An optional custom-built Arduino Nano BLE lidar module can be mounted to the device; it vibrates to alert the user when an obstacle is detected within 2 metres.',
    ],
    features: [
      'Audio-guided turn-by-turn indoor navigation without internet or GPS',
      'Pedometer step counting for real-time distance tracking',
      'Magnetometer-based bearing detection for directional guidance',
      'Full Android TalkBack accessibility support',
      'Remote building map creation via Android devices',
      'Optional lidar obstacle detection with haptic vibration alert (< 2 m)',
      'Designed for low cost and minimal hardware dependency',
      'Open-source with planned community contribution from visually impaired users',
    ],
    stack: ['React Native', 'JavaScript', 'Java', 'C++', 'Arduino'],
    github: 'https://github.com/Girujan1998/EyeGuide',
    live: null,
    related: 'eyeguide-backend',
    relatedLabel: 'View Backend →',
  },
  {
    slug: 'eyeguide-backend',
    name: 'EyeGuide — Backend',
    tagline: 'Django REST API powering the EyeGuide navigation system',
    overview: [
      'The EyeGuide Backend is a Django-based REST API that serves as the data backbone for the EyeGuide indoor navigation application. It handles storage and retrieval of building maps, GPS path coordinates, and route data consumed by the mobile frontend.',
      'The API is structured into four focused modules: api/ for endpoint definitions, server/ for the Django configuration, capstone-env/ for environment setup, and scripts/ for utility automation. During development, NGROK is used for localhost tunneling to allow the Android app to reach the local server remotely.',
      'PostgreSQL serves as the primary database, managed through pgAdmin 4, with Postman used for API testing and validation during development.',
    ],
    features: [
      'RESTful API endpoints for building map creation and retrieval',
      'GPS path coordinate storage and management',
      'Route data endpoints consumed by the React Native frontend',
      'PostgreSQL database with pgAdmin 4 for administration',
      'NGROK tunneling for remote development access',
      'Modular codebase: api/, server/, capstone-env/, scripts/',
      'Postman-tested endpoints with full request/response documentation',
    ],
    stack: ['Python', 'Django', 'PostgreSQL', 'REST APIs'],
    github: 'https://github.com/Girujan1998/EyeGuide-backend',
    live: null,
    related: 'eyeguide-frontend',
    relatedLabel: 'View Frontend →',
  },
];
