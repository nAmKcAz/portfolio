export interface Game {
  id: string;
  title: string;
  image: string;
  link?: string;
  link_download?: string;
  link_steam?: string;
  overview: string;
  role: string;
  abstract_image: string;
  abstract_title: string;
  tech: string[];
  date: string;
  who: string;
  who_link?: string;
  who_linked_in?: string;
  who_github?: string;
}
const baseUrl = import.meta.env.BASE_URL;

export const games: Game[] = [
    {
      id: "edgeofdivinit",
      title: "Edge of Divinity",
      image: `${baseUrl}images/eod/EOD_Title2.png`,
      overview:
        `<span class="text-lg font-semibold">Edge of Divinity</span><span> is a follow on from </span><span class="text-lg font-semibold">Starlight Re:Volver</span><span> where we reworked the art and core game systems, removed the social city outgame portions, and made a focused Roguelite experience where your character climbs the tower floor by floor trying to get back to the celestial realm until you fall back down to basecamp.</span>
        <div class="flex flex-wrap items-center">
          <img src="${baseUrl}images/eod/EOD_Menu.png" alt="game-image" class="w-35 md:w-60 mx-2 my-2 rounded-xl shadow-lg border border-slate-800 transition-transform duration-500 ease-in-out hover:scale-[3.5] hover:z-50 hover:relative"/>
          <img src="${baseUrl}images/eod/EOD_Preon.png" alt="game-image-2" class="w-35 md:w-60 mx-2 my-2 rounded-xl shadow-lg border border-slate-800 transition-transform duration-500 ease-in-out hover:scale-[3.5] hover:z-50 hover:relative"/>
          <img src="${baseUrl}images/eod/EOD_Arcana.png" alt="game-image-3" class="w-35 md:w-60 mx-2 my-2 rounded-xl shadow-lg border border-slate-800 transition-transform duration-500 ease-in-out hover:scale-[3.5] hover:z-50 hover:relative"/>
          <img src="${baseUrl}images/eod/EOD_Gameplay2.png" alt="game-image-4" class="w-35 md:w-60 mx-2 my-2 rounded-xl shadow-lg border border-slate-800 transition-transform duration-500 ease-in-out hover:scale-[3.5] hover:z-50 hover:relative"/>
        </div>`,
      role: `Pahdo Labs shrunk dramatically after Starlight Re:Volver to focus on trying to release a 2nd game and possibly acquire enough funds to continue operating.
      <div class="mt-2" >I worked on almost every part of this game ...</div>
          <ul class="list-disc list-outside ml-6 mt-2 space-y-2">
            <li>Re-working our netcode to be P2P using Fishy Steamworks instead of server centric</li>
            <li>Building a new outgame progression system and UIs for Score and Ranks</li>
            <li>Fleshing out a new in game missions progress tracking system and UIs</li>
            <li>Building a new experience for selecting your character loadout</li>
            <li>Building game menus</li>
            <li>Helping build and tune levels</li>
            <li>Removing all of our backend service integrations</li>
            <li>Tearing down our old AWS infrastructure</li>
            <li>Tracking down bugs in state machines and timelines</li>
            <li>And just about everything in between ...</li>
          </ul>`,
      link_steam: "https://store.steampowered.com/app/4329030/Edge_of_Divinity/",
      abstract_title: "Edge of Divinity",
      abstract_image: `${baseUrl}images/eod/EOD_Title.jpg`,
      tech: ["Unity", "C#", "Fishnet", "Coherent Gameface", "React", "Steam"],
      date: "November 2025 - February 2026",
      who: "Pahdo Labs",
      who_link: "https://www.pahdolabs.com/",
      who_linked_in: "https://www.linkedin.com/company/pahdo/",
      who_github: "https://github.com/pahdolabs"
    },
    {
      id: "starlight",
      title: "Starlight Re:Volver",
      image: `${baseUrl}images/srv/SRV_Banner1.png`,
      overview:
        `<span class="text-lg font-semibold">Starlight Re:Volver</span><span> is a Magical Girl Roguelite multiplayer game that blends a highly social outworld with a fast paced dungeon diving roguelite experience. Transform into one of 4 magical heroes, collect cosmetics and accessories, upgrade for future dives with trinkets, and experience fishing and crafting.</span>
        <div class="flex flex-wrap tems-center">
          <img src="${baseUrl}images/srv/SRV_Menu.png" alt="game-image" class="w-35 md:w-60 mx-2 my-2 rounded-xl shadow-lg border border-slate-800 transition-transform duration-500 ease-in-out hover:scale-[3.5] hover:z-50 hover:relative"/>
          <img src="${baseUrl}images/srv/SRV_Nim_Fishing.png" alt="game-image-2" class="w-35 md:w-60 mx-2 my-2 rounded-xl shadow-lg border border-slate-800 transition-transform duration-500 ease-in-out hover:scale-[3.5] hover:z-50 hover:relative"/>
          <img src="${baseUrl}images/srv/SRV_Nim_Shopping.png" alt="game-image-3" class="w-35 md:w-60 mx-2 my-2 rounded-xl shadow-lg border border-slate-800 transition-transform duration-500 ease-in-out hover:scale-[3.5] hover:z-50 hover:relative"/>
          <img src="${baseUrl}images/srv/SRV_Nim_Dive.png" alt="game-image-4" class="w-35 md:w-60 mx-2 my-2 rounded-xl shadow-lg border border-slate-800 transition-transform duration-500 ease-in-out hover:scale-[3.5] hover:z-50 hover:relative"/>
          <img src="${baseUrl}images/srv/SRV_Gameplay.jpg" alt="game-image-5" class="w-35 md:w-60 mx-2 my-2 rounded-xl shadow-lg border border-slate-800 transition-transform duration-500 ease-in-out hover:scale-[3.5] hover:z-50 hover:relative"/>
          <img src="${baseUrl}images/srv/SRV_SOMI_Portals.png" alt="game-image-6" class="w-35 md:w-60 mx-2 my-2 rounded-xl shadow-lg border border-slate-800 transition-transform duration-500 ease-in-out hover:scale-[3.5] hover:z-50 hover:relative"/>
          <img src="${baseUrl}images/srv/SRV_Sendoff.png" alt="game-image-7" class="w-35 md:w-60 mx-2 my-2 rounded-xl shadow-lg border border-slate-800 transition-transform duration-500 ease-in-out hover:scale-[3.5] hover:z-50 hover:relative"/>
        </div>`,
      role: `I joined this project 'late', about 5 months before early access release. My purpose was to help accelerate the release on the engineering side. I ended up contributing to this game on everything from PostgreSQL database tables, to matchmaking apis, all the way up to Coherent Gameface UIs for gameplay and outgame systems.
      <div class="font-lg font-semibold mt-4">Backend APIs/DBs</div>
        <div class="mt-4">On the backend, I built out our APIs for Matchmaking and Accounts</div>
        <div class="mt-4">The matchmaking service was built using a timed batch processing system and supported building parties across multiple maps and difficulties from queued players using a combination of factors including; number of matches played, player rank, relative player build strength, maps selected, difficulties selected, time in queue, relative cpu performance of player, locale/language of player, RTT to server of player, and estimated geo-location of players. The system also supported friend preferences, combining pre-made partial parties together, and player blacklists.</div>
        <div class="mt-4">The accounts service was built to manage the association of the multiple services accounts we were using including Steam, Unity Gaming Services, and Playfab as well as providing support for linking Twitch accounts and providing friend referral codes.</div>
      <div class="font-lg font-semibold mt-4">Game Systems</div>
        <div class="mt-4">I added multiple systems and their associated UI elements to our game.</div>
        <div class="mt-4">Matchmaking integration to our backend APIs - Allowed selecting which Map(s) and Difficulties you wanted to queue for and managed the UI timers and queueing status updates for the player/party.</div>
        <div class="mt-4">Accounts integration to our backend APIs & 3rd party services - Managed user login via Steam and used Steam auth tokens to also auth the player to Unity Gaming Services and Playfab.</div>
        <div class="mt-4">Party Management, Friends, and Blacklists - Enabled players to manage their relationship with other players including inviting/kicking players from party, adding/removing friends - including Steam friends integration, blacklisting other players - including Steam ingtegration, and queueing for a match as a party.</div>
        <div class="mt-4">Referral Codes - Generated a unique referral code for each player that they could use to refer their friends and get rewards in game based on the number of players they had referred.</div>
        <div class="mt-4">Twitch Account Linking & Drops - Players could link their Twitch account and earn in game rewards based on their Twitch activity via Twitch Drops.</div>
        <div class="mt-4">Chat - Integrated Unity Vivox chat into the game supporting both party and server chat channels.</div>
      <div class="font-lg font-semibold mt-4">Netcode</div>
        <div class="mt-4">This game's netcode was built using Fishnet. I was responsible for 'fixing' the netcode. I profiled and re-designed the usage of reliable vs unreliable network channels for various portions of our game traffic. I reduced the size and frequency of various payload state updates, adjusted some of the reconciliation/prediction logic, and ultimately got the game into a good state where players across multiple timezones were able to play in a single match without notable lag or delay.</div>
      <div class="font-lg font-semibold mt-4">Performance/Scaling</div>
        <div class="mt-4">Similar to what I did for Netcode, one of my main responsibilities for this game was to 'fix' the performance.</div>
        <div class="mt-4">These efforts covered 3 main areas ...
          <ul class="list-disc list-outside ml-6 mt-2 space-y-2">
            <li>Player FPS/Memory - I profiled and micro-optimized game code across nearly every system, from netcode updates, to timelines, to state machines, to effects processing, etc. This included allocation reductions and Unity specific code optimizations.</li>
            <li>Server FPS/Memory - Being a server hosted game, it was critical that both CPU usage and memory usage stayed as low as possible so that we could run as many instances as possible on a single AWS Gamelift server. A lot of the Client FPS/Memory work applied here as well, but I also implemented changes to how we loaded level data and other addressables so that we only kept the current dungeon room + the possible next rooms loaded at any time.</li>
            <li>UI Updates - We utilized Coherent Gameface with React for most of our in game UIs, including healthbars and other high update frequency combat information. I optimized the frequency of our Reactive value updates across all of our game elements and also refactored the React/Typescript side code to minimize the number of re-renders using a combination of memoization and code 'isDirty' comparison logic to limit the number of updates.</li>
          </ul>
        </div>
      <div class="font-lg font-semibold mt-4">Offline</div>
        <div class="mt-4">Sadly, when this project came to an end we had to make the hard decision to convert the game to offline so that players who had purchased could continue to play without servers online. I unhooked all external systems except for Steam, removed all of our own API integrations, and reworked the core game such that players could play it connecting to their own instance as the server while still preserving all of the original gameplay elements.</div>
      `,
      link: "https://starlightrevolver.com/",
      link_steam: "https://store.steampowered.com/app/3201010/Starlight_Revolver/",
      abstract_title: "Starlight Re:Volver",
      abstract_image: `${baseUrl}images/srv/SRV_Header.jpg`,
      tech: ["Unity", "C#", "Fishnet", "Coherent Gameface", "React", "Steam", "Playfab", "Unity Gaming Services", "Vivox Chat", "Twitch", "APIs", "AWS-Gamelift", "PostgreSQL"],
      date: "March 2025 - November 2025",
      who: "Pahdo Labs",
      who_link: "https://www.pahdolabs.com/",
      who_linked_in: "https://www.linkedin.com/company/pahdo/",
      who_github: "https://github.com/pahdolabs"
    },
    {
      id: "regressiongames",
      title: "Regression Games",
      image: `${baseUrl}images/rg/RG_Staff2.png`,
      overview:
        `<span class="text-lg font-semibold">Regression Games</span> was an AI Gaming startup that after a few experiments, landed on trying to solve testing in games using a combination of gameplay recordings, AI, and Computer Vision analysis. We released a product that allowed users to record segments of gameplay (states&inputs) and build those into sequences with validations similarly to how you might test a modern web application.
        <div class="flex flex-wrap tems-center">
          <img src="${baseUrl}images/rg/CV_analysis.png" alt="game-image" class="w-35 md:w-60 mx-2 my-2 rounded-xl shadow-lg border border-slate-800 transition-transform duration-500 ease-in-out hover:scale-[3.5] hover:z-50 hover:relative"/>
          <img src="${baseUrl}images/rg/demo.gif" alt="game-image-2" class="w-35 md:w-60 mx-2 my-2 rounded-xl shadow-lg border border-slate-800 transition-transform duration-500 ease-in-out hover:scale-[3.5] hover:z-50 hover:relative"/>
          <img src="${baseUrl}images/rg/GameplayrecordingSample.png" alt="game-image-3" class="w-35 md:w-60 mx-2 my-2 rounded-xl shadow-lg border border-slate-800 transition-transform duration-500 ease-in-out hover:scale-[3.5] hover:z-50 hover:relative"/>
          <img src="${baseUrl}images/rg/ViewingARecording.png" alt="game-image-4" class="w-35 md:w-60 mx-2 my-2 rounded-xl shadow-lg border border-slate-800 transition-transform duration-500 ease-in-out hover:scale-[3.5] hover:z-50 hover:relative"/>
          <div className="group relative w-35 md:w-60 mx-2 my-2">
            <video 
              src="${baseUrl}images/rg/BotSequenceBuilder.mp4" 
              autoPlay 
              loop 
              muted 
              playsInline
              className="w-full rounded-xl shadow-lg border border-slate-800 transition-all duration-500 ease-in-out 
                        group-hover:fixed group-hover:inset-0 group-hover:m-auto group-hover:z-50 
                        group-hover:scale-[2.5] group-hover:max-w-[80vw] group-hover:max-h-[80vh] group-hover:object-contain"
            />
          </div>
        </div>`,
      role: `
      <div>I was Founding Engineer #1 (the first hire) on this project. My role was quite literally 'do whatever needs doing today'.</div>
      <div class="mt-4">I built CI pipelines, developed our core Unity extensions that recorded game states and input, helped create the React UIs for building, running, and analyzing our Bot Sequences, and built out the backend Kotlin APIs for our testing framework.</div>
      <div class="mt-4">I also wrote systems in Python that utilized SIFT computer vision analysis to detect objects in screenshots captured during a bot recording or playback.
        <ul class="list-disc list-outside ml-6 mt-2 space-y-2">
          <li>A system that used OCR and state information to navigate game menus.</li>
          <li>A system that auto created and tagged image analysis data using the state recordings and the captured screen space renderer and/or collider boundaries for game objects in combination with recorded screen captures.</li>
          <li>A system that compared the image analysis data from the intial recording vs the image analysis of the bot playback to detect errors in game functionality or rendering based on configured tolerance thresholds.</li>
        </ul>
      </div>
      <div class="mt-4">Other experiments that never fully saw the light of day ...
        <ul class="list-disc list-outside ml-6 mt-2 space-y-2">
          <li>Giving recorded game state/inputs/screenshots data as context to an LLM and giving it human language instructions for an objective to complete and validate in the game. It would then generate a new bot sequence to run based on the prompt and the context.</li>
          <li>Training an RL agent to replay the game based on the training from an original gameplay recording or sequence of recordings and associated analysis data.</li>
        </ul>
      </div>`,
      link: "https://www.regression.gg/",
      abstract_title: "Regression Games",
      abstract_image: `${baseUrl}images/rg/RG_Staff2.png`,
      tech: ["Unity", "C#", "NodeJS", "Python", "SIFT", "Computer Vision", "AI", "Kotlin", "APIs", "MySQL"],
      date: "September 2022 - March 2025",
      who: "Regression Games",
      who_link: "https://www.regression.gg/",
      who_linked_in: "https://www.linkedin.com/company/regression-games",
      who_github: "https://github.com/Regression-Games"
    },
    {
      id: "swizzle",
      title: "Swizzle: Word Game",
      image: `${baseUrl}images/swizzle/SWIZZLE_FEATURE_GRAPHIC.png`,
      overview:
        `<span class="text-lg font-semibold">Swizzle: Word Game</span> was my first foray into mobile gaming. It was a mobile word finding game with daily challenges and a level progression system. Users swiped to build words from the grid of letters to complete the objectives of each level. It was released on Kindle, Android, and iOS.
        <div class="flex flex-wrap items-center">
          <img src="${baseUrl}images/swizzle/Screenshot_RELAX_2_1920_1080.png" alt="game-image" class="w-35 md:w-60 mx-2 my-2 rounded-xl shadow-lg border border-slate-800 transition-transform duration-500 ease-in-out hover:scale-[1.25] hover:z-50 hover:relative"/>
          <img src="${baseUrl}images/swizzle/IMG_0002.PNG" alt="game-image-2" class="w-35 md:w-60 mx-2 my-2 rounded-xl shadow-lg border border-slate-800 transition-transform duration-500 ease-in-out hover:scale-[1.25] hover:z-50 hover:relative"/>
        </div>`,
      role: "This was an independent venture, I built this game from scratch including the art/effects, gameplay and progression systems, Google Admob integrations, and mobile native social sharing hooks. This game also included a high score tracking system and online leaderboard built in NodeJS.",
      link_download: `${baseUrl}files/swizzle-game-build.zip`,
      abstract_title: "Swizzle: Word Game",
      abstract_image: `${baseUrl}images/swizzle/swizzleIcon.png`,
      tech: ["Unity", "C#", "Android", "iOS", "Google Admob", "NodeJS"],
      date: "January 2022 - September 2022",
      who: "Mud Creek Games (Independent)",
    }
  ];
  