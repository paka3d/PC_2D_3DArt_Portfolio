/* ============================================================
   PASCAL CHAUMETTE — PORTFOLIO APP
   Gallery data (shared 2D/3D taxonomy), filters, lightbox,
   YouTube clips, nav, reveal animations.
   ============================================================ */
'use strict';

const $ = (id) => document.getElementById(id);
const enc = (s) => s.split('/').map(encodeURIComponent).join('/');
const YT = (id, start) => ({ kind: 'youtube', id, start: start || 0 });

/* ---------------- taxonomy shared by 2D & 3D ---------------- */
const CATS = [
  { id: 'characters',   label: 'Characters' },
  { id: 'creatures',    label: 'Creatures' },
  { id: 'environments', label: 'Environments' },
  { id: 'vehicles',     label: 'Vehicles' },
  { id: 'props',        label: 'Props' },
  { id: 'product',      label: 'Product' },
  { id: 'illustration', label: 'Illustration' },
  { id: 'sketches',     label: 'Sketches & Studies' },
  { id: 'older-work',   label: 'Older Work' },
];

/* ---------------- project catalog ---------------- */
const PROJECTS = [
  /* ---------- 2D ART ---------- */
  {
    id: 'concept-characters', name: 'Characters', series: '2D Concept Art', media: '2d', category: 'characters',
    blurb: 'Character concept studies — silhouettes, costumes and expressions pushed quickly from sketch to painted color.',
    images: [
      '2D Art/2D Concept_Art/Characters/character_Concept_1.PNG',
      '2D Art/2D Concept_Art/Characters/female concept.jpg',
      '2D Art/2D Concept_Art/Characters/male concept1.jpg',
      '2D Art/2D Concept_Art/Characters/sci fi poster 1e.jpg',
    ],
  },
  {
    id: 'concept-creatures', name: 'Creatures', series: '2D Concept Art', media: '2d', category: 'creatures',
    blurb: 'Creature exploration cycles — proportion studies, paint passes and final concept direction, many of which later became 3D models.',
    youtube: YT('YZZwtGZqkd4'),
    images: [
      '2D Art/2D Concept_Art/Creatures/creature_1.png',
      '2D Art/2D Concept_Art/Creatures/Creature_v1_paintV1_.png',
      '2D Art/2D Concept_Art/Creatures/creature_v13.PNG',
      '2D Art/2D Concept_Art/Creatures/Creature_v2_paintV1_.png',
      '2D Art/2D Concept_Art/Creatures/creature_v2.PNG',
      '2D Art/2D Concept_Art/Creatures/Creature_v3_paintV1.png',
      '2D Art/2D Concept_Art/Creatures/Creature_v3.PNG',
      '2D Art/2D Concept_Art/Creatures/Creature_v5_paintV2_.png',
      '2D Art/2D Concept_Art/Creatures/Creature_v6_paintV2a__bak.png',
      '2D Art/2D Concept_Art/Creatures/creature_v9.PNG',
    ],
  },
  {
    id: 'concept-environments', name: 'Environments', series: '2D Concept Art', media: '2d', category: 'environments',
    blurb: 'Environmental concept art — cave systems, sci-fi hangars and cityscapes establishing mood, scale and art direction.',
    images: [
      '2D Art/2D Concept_Art/Environments/sci_fi_hanger_concept.jpg',
      '2D Art/2D Concept_Art/Environments/Cave_scene_v2.png',
      '2D Art/2D Concept_Art/Environments/city_concept_1_by_paka3d_dkjijx-pre.jpg',
      '2D Art/2D Concept_Art/Environments/concept_environment.PNG',
      '2D Art/2D Concept_Art/Environments/Concept_Final.jpg',
      '2D Art/2D Concept_Art/Environments/dkmlbd-9dbac0c6-92f0-4554-b5ed-9ed1e3df83e0.jpg',
    ],
  },
  {
    id: 'concept-vehicles', name: 'Vehicles', series: '2D Older Work', media: '2d', category: 'older-work',
    blurb: 'Vehicle and ship concept sketches — from SL-Commander studies to the SwanShip and boss-vehicle directions.',
    images: [
      '2D Art/2D Concept_Art/Vehicles/SwanShip_Concept copy.jpg',
      '2D Art/2D Concept_Art/Vehicles/Boss enemy_2a.jpg',
      '2D Art/2D Concept_Art/Vehicles/ship2ajpg.jpg',
      '2D Art/2D Concept_Art/Vehicles/SL-Commander_Project_Sketch copy.jpg',
    ],
  },
  {
    id: 'illustration-2d', name: 'Illustration', series: '2D Illustration', media: '2d', category: 'illustration',
    blurb: 'Standalone digital illustration — portraits, landscapes and stylized character pieces painted in Krita, Rebelle and Photoshop.',
    youtube: YT('kwhDtNEKgYc'),
    images: [
      '2D Art/2D Art_Illustration/Mountain_Study_PHC_V1a.png',
      '2D Art/2D Art_Illustration/buckaroo_study.png',
      '2D Art/2D Art_Illustration/Electric_BioMetalic_Portrait_PC.png',
      '2D Art/2D Art_Illustration/Sci_Fi_Landscape_Big1a.jpg',
      '2D Art/2D Art_Illustration/SkullFire_1a.jpg',
      '2D Art/2D Art_Illustration/space_woman.png',
      '2D Art/2D Art_Illustration/The Old Woman.jpg',
      '2D Art/2D Art_Illustration/city_Attack.jpg',
      '2D Art/2D Art_Illustration/Fantasy_Muse.jpg',
    ],
  },
  {
    id: 'sketches-caricatures', name: 'Caricatures', series: 'Sketch & Studies', media: '2d', category: 'sketches',
    blurb: 'Caricature and quick-painting work — loose, expressive character studies for fun.',
    images: [
      '2D Art/Sketch & Studies/Caricatures/The End_PC.jpg',
      '2D Art/Sketch & Studies/Caricatures/Devilish_PC.png',
      '2D Art/Sketch & Studies/Caricatures/Jerry_PC.png',
      '2D Art/Sketch & Studies/Caricatures/New SketchPainting Work.jpg',
      '2D Art/Sketch & Studies/Caricatures/Portrait_1.PNG',
      '2D Art/Sketch & Studies/Caricatures/Portrait_2.PNG',
      '2D Art/Sketch & Studies/Caricatures/Portrait_3.PNG',
      '2D Art/Sketch & Studies/Caricatures/Smoking Lady_PC.png',
      '2D Art/Sketch & Studies/Caricatures/Soldier_PC.png',
    ],
  },
  {
    id: 'sketches-studies', name: 'Studies', series: 'Sketch & Studies', media: '2d', category: 'sketches',
    blurb: 'Anatomical and value studies — faces, figures and the 2026 self-portrait, built up in traditional digital paint.',
    youtube: YT('6H0wEq8_JvI'),
    images: [
      '2D Art/Sketch & Studies/Studies/Face_Portrait_Female.PNG',
      '2D Art/Sketch & Studies/Studies/Figure_pc.PNG',
      '2D Art/Sketch & Studies/Studies/Old_man_paint_study_1a.png',
      '2D Art/Sketch & Studies/Studies/Self_Portait_PC_2026.JPG',
      '2D Art/Sketch & Studies/Studies/sketch_study_face1.png',
    ],
  },
  {
    id: 'sketches-pads', name: 'Sketch Pads', series: 'Sketch & Studies', media: '2d', category: 'sketches',
    blurb: 'Pages from sketch pads of past years — the raw warm-ups behind the polished work.',
    images: ['2D Art/Sketch & Studies/Sketch Pads From Past/SketchPads_1.PNG'],
  },

  /* ---------- 3D ART · CHARACTERS ---------- */
  {
    id: 'sci-fi-soldier', name: 'Sci-Fi Soldier', series: '3D Characters', media: '3d', category: 'characters',
    blurb: 'Game-ready sci-fi armor set — concept to textured, normal-mapped and game-ready final in Blender. Spin the interactive model below.',
    sketchfab: '65d4e17e35d4494fbdd778a7de8405a3',
    links: [
      { label: 'View on Sketchfab ↗', url: 'https://sketchfab.com/3d-models/pc-sci-fi-suit-walk-cycle-65d4e17e35d4494fbdd778a7de8405a3' },
    ],
    images: [
      '3D Art/3D_Characters/SCI_FI_Soldier breakdown/Sci_Fi Suit.jpg',
      '3D Art/3D_Characters/SCI_FI_Soldier breakdown/Sci_Fi Suit2.jpg',
      '3D Art/3D_Characters/SCI_FI_Soldier breakdown/Sci_Fi_Suit_game-Ready.jpg',
      '3D Art/3D_Characters/SCI_FI_Soldier breakdown/Sci_Fi_suit_mainTex.PNG',
      '3D Art/3D_Characters/SCI_FI_Soldier breakdown/Sci_Fi_suit_NM.PNG',
    ],
  },
  {
    id: 'pc-demon', name: 'PC Demon', series: '3D Characters', media: '3d', category: 'characters',
    blurb: 'Demon creature — low-poly game-ready build with texture and normal map breakdown. Spin the interactive model below.',
    sketchfab: 'a665d887383541338950a7042fce76b7',
    links: [
      { label: 'View on Sketchfab ↗', url: 'https://sketchfab.com/3d-models/pc-demons-a665d887383541338950a7042fce76b7' },
    ],
    images: [
      '3D Art/3D_Characters/Creatures/PC_Demon/demon_single.png',
      '3D Art/3D_Characters/Creatures/PC_Demon/the_demon_model.jpg',
      '3D Art/3D_Characters/Creatures/PC_Demon/Creature_LOW_2_TXTR.png',
      '3D Art/3D_Characters/Creatures/PC_Demon/Creature_LOW_2_NM.png',
    ],
  },
  {
    id: 'older-work', name: 'Older Work', series: '3D Older Work', media: '3d', category: 'older-work',
    blurb: 'Early character concepts and suit explorations from the first years of 3D work.',
    images: [
      '3D Art/3D_Older_Work/alien_suit_concept_by_paka3d_d7nqgan-fullview.jpg',
      '3D Art/3D_Older_Work/concept_3_by_paka3d.jpg',
    ],
  },
  {
    id: 'enterprise', name: 'Enterprise', series: '3D Older Work', media: '3d', category: 'older-work',
    blurb: 'The Enterprise — a classic starship recreation in Blender.',
    images: ['3D Art/3D_Vehicles_Hard Surface/Sci_Fi_Vehicles/Enterprise/enterprise_by_paka3d_dk843v-414w-2x.jpg'],
  },
  {
    id: 'various-ships', name: 'Various Ship Designs', series: '3D Older Work', media: '3d', category: 'older-work',
    blurb: 'Assorted ship and vehicle concept renders — including the SwanShip.',
    images: [
      '3D Art/3D_Vehicles_Hard Surface/Sci_Fi_Vehicles/Various Designs/SwanShip_Concept6.jpg',
      '3D Art/3D_Vehicles_Hard Surface/Sci_Fi_Vehicles/Various Designs/NewShip.jpg',
      '3D Art/3D_Vehicles_Hard Surface/Sci_Fi_Vehicles/Various Designs/concept_vehicle_by_paka3d_d51zqi8-fullview.jpg',
    ],
  },
  {
    id: 'scifi-wip', name: 'Sci-Fi Environment WIP', series: '3D Older Work', media: '3d', category: 'older-work',
    blurb: 'An early sci-fi environment work-in-progress from the older archive.',
    images: [
      '3D Art/3D_Environments/Game-Environments/Sci-Fi_Environments/SciFi_wip2.jpg',
    ],
  },
  {
    id: 'cityscape', name: 'CityScape Generators', series: '3D Older Work', media: '3d', category: 'older-work',
    blurb: 'Procedural cityscape generation systems — modular building scripts composing ghost towns and full city blocks.',
    youtube: YT('kJKxpgxu36Q'),
    images: [
      '3D Art/3D_Environments/Game-Environments/CityScape_Generators/cityGen_PHC.PNG',
      '3D Art/3D_Environments/Game-Environments/CityScape_Generators/BR_IFI.jpg',
      '3D Art/3D_Environments/Game-Environments/CityScape_Generators/GhostTown_Script.jpg',
    ],
  },
  {
    id: 'atlantis', name: '20,000 Leagues Under the Sea', series: '3D Older Work', media: '3d', category: 'older-work',
    blurb: 'Atlantis environment build — submerged architecture, statues and deep-water lighting for “20,000 Leagues Under the Sea”.',
    youtube: YT('BxqraC18a-0'),
    images: [
      '3D Art/3D_Environments/Atlantis_20k_LeaguesUnderTheSea_Environment/20k Leagues_1.PNG',
      '3D Art/3D_Environments/Atlantis_20k_LeaguesUnderTheSea_Environment/20k Leagues_1a.PNG',
      '3D Art/3D_Environments/Atlantis_20k_LeaguesUnderTheSea_Environment/20k Leagues_2.PNG',
      '3D Art/3D_Environments/Atlantis_20k_LeaguesUnderTheSea_Environment/Focus_On_Statue.PNG',
    ],
  },
  {
    id: 'game-envs', name: 'Game Environments', series: '3D Older Work', media: '3d', category: 'older-work',
    blurb: 'Game environments and terrain work — including The Legacy Forest.',
    youtube: YT('qpaqxBg7MYU'),
    images: [
      '3D Art/3D_Environments/Game-Environments/Unity Terrain Systems/TheLegacyForest_PC_2018.jpg',
      '3D Art/3D_Environments/Game-Environments/Unity Terrain Systems/PC_Terrain.jpg',
      '3D Art/3D_Environments/Game-Environments/Unity Terrain Systems/Environment PC2016.jpg',
    ],
  },
  {
    id: 'holoroom', name: 'Holoroom', series: '3D Older Work', media: '3d', category: 'older-work',
    blurb: 'A starship holodeck room — 3D concept, textured build and final render.',
    images: [
      '3D Art/3D_Environments/Game-Environments/Holoroom_Environment/Holoroom_render_3.png',
      '3D Art/3D_Environments/Game-Environments/Holoroom_Environment/FD_VCL_Holodeck_room_3d concep_1a.PNG',
      '3D Art/3D_Environments/Game-Environments/Holoroom_Environment/FD_VCL_Holodeck_Textured_v1.PNG',
    ],
  },

  /* ---------- 3D ART · CREATURES ---------- */
  {
    id: 'the-creature', name: 'The Creature', series: '3D Creatures', media: '3d', category: 'creatures',
    blurb: 'The hero creature — sculpted, textured and rigged with a full animation set.',
    youtube: YT('7HeYYOA34IY'),
    youtube2: YT('m9_GX4lhLFU'),
    images: [
      '3D Art/3D_Characters/Creatures/The Creature/Creature_render_2.png',
      '2D Art/2D Concept_Art/Creatures/creature_1.png',
      '3D Art/3D_Characters/Creatures/The Creature/Creature_render_1.png',
      '3D Art/3D_Characters/Creatures/The Creature/Creature_render_3.png',
      '3D Art/3D_Characters/Creatures/The Creature/The Creature_PC.jpg',
      '3D Art/3D_Characters/Creatures/The Creature/TheCreature_wireframe.PNG',
      '3D Art/3D_Characters/Creatures/The Creature/TheCreature_Rigging.PNG',
      '3D Art/3D_Characters/Creatures/The Creature/TheCreature_Tex_UV.PNG',
      '3D Art/3D_Characters/Creatures/The Creature/TheCreature_NM_UV.PNG',
    ],
  },
  {
    id: 'pc-spider', name: 'PC Spider', series: '3D Creatures', media: '3d', category: 'creatures',
    blurb: 'A fully rigged spider creature — also published as a Unity asset pack (see Asset Packs below). Spin the interactive model below.',
    sketchfab: '88f519a508ff42889deea7d17e652c23',
    links: [
      { label: 'View on Sketchfab ↗', url: 'https://sketchfab.com/3d-models/pc-spider-88f519a508ff42889deea7d17e652c23' },
    ],
    images: [
      '3D Art/3D_Characters/Creatures/PC_Spider/spider_v1.PNG',
      '3D Art/3D_Characters/Creatures/PC_Spider/phc_spider_media_1.PNG',
      '3D Art/3D_Characters/Creatures/PC_Spider/qwen_xxx__00568_.png',
    ],
  },

  /* ---------- 3D ART · ENVIRONMENTS ---------- */
  {
    id: 'archviz', name: 'ArchViz', series: '3D Environments', media: '3d', category: 'environments',
    blurb: 'Architectural visualization renders from the early days of the portfolio.',
    images: [
      '3D Art/3D_Environments/ArchViz/ArchViz_splash_small.jpg',
      '3D Art/3D_Environments/ArchViz/PC_ArchViz_2018.jpg',
    ],
  },
  {
    id: 'disney-portals-env', name: 'Disney Portals', series: '3D Environments', media: '3d', category: 'environments',
    blurb: 'Worlds for Disney’s “Portals” — Majestica’s pie shop, Big Reef, Donald Island, the Lair and portal machines, from layout to lit final.',
    youtube: YT('dTlvbTH9HMo'),
    images: [
      '3D Art/3D_Environments/Game-Environments/Disney Portals/Image_4.png',
      '3D Art/3D_Environments/Game-Environments/Disney Portals/Disney_Portals_Majestica_PieShop_2.png',
      '3D Art/3D_Environments/Game-Environments/Disney Portals/Disney_Portals_Majestica_PieShop_3.png',
      '3D Art/3D_Environments/Game-Environments/Disney Portals/Disney_Portals_World_2.jpg',
      '3D Art/3D_Environments/Game-Environments/Disney Portals/Disney_Portals_World_2_Big Reef.jpg',
      '3D Art/3D_Environments/Game-Environments/Disney Portals/Disney_Portals_World_3.jpg',
      '3D Art/3D_Environments/Game-Environments/Disney Portals/Disney_Portals_World_3_Donald Island.jpg',
      '3D Art/3D_Environments/Game-Environments/Disney Portals/Image_5.png',
      '3D Art/3D_Environments/Game-Environments/Disney Portals/MG_Lair_Layout_Tweak.jpg',
      '3D Art/3D_Environments/Game-Environments/Disney Portals/S_D_Portal_Machine_wip.jpg',
      '3D Art/3D_Environments/Game-Environments/Disney Portals/The Lair_Concept_lighting_Cycles_Render1.png',
    ],
  },
  {
    id: 'scifi-envs', name: 'Sci-Fi Condo', series: '3D Environments', media: '3d', category: 'environments',
    blurb: 'Sci-Fi environment builds — a crime-scene condo explored through multiple lighting and material passes.',
    youtube: YT('NWVz9Xwg4vk'),
    images: [
      '3D Art/3D_Environments/Game-Environments/Sci-Fi_Environments/Sci_Fi_Condo.png',
      '3D Art/3D_Environments/Game-Environments/Sci-Fi_Environments/Crime_scene_environment_continued7.png',
      '3D Art/3D_Environments/Game-Environments/Sci-Fi_Environments/Crime_scene_environment_continued.png',
      '3D Art/3D_Environments/Game-Environments/Sci-Fi_Environments/Crime_scene_environment_continued1.png',
      '3D Art/3D_Environments/Game-Environments/Sci-Fi_Environments/Crime_scene_environment_continued2.png',
      '3D Art/3D_Environments/Game-Environments/Sci-Fi_Environments/Crime_scene_environment_continued6.png',
      '3D Art/3D_Environments/Game-Environments/Sci-Fi_Environments/Crime_scene_environment_continued8.png',
    ],
  },
  {
    id: 'scifi-hanger', name: 'Sci-Fi Hanger', series: '3D Environments', media: '3d', category: 'environments',
    blurb: 'Sci-fi hanger environment — from v1 blockout through v2 to the animatic pass.',
    youtube: YT('8Hg4vHA90cs'),
    images: [
      '3D Art/3D_Environments/Sci-Fi Hanger/Sci_Fi_Hanger_v1.png',
      '3D Art/3D_Environments/Sci-Fi Hanger/Sci_Fi_Hanger_v2.png',
      '3D Art/3D_Environments/Sci-Fi Hanger/Sci_Fi_Hanger_animatic.PNG',
    ],
  },

  /* ---------- 3D ART · VEHICLES ---------- */
  {
    id: 'af2-vehicles', name: 'AF2 Agro Vehicles', series: '3D Vehicles', media: '3d', category: 'vehicles',
    blurb: 'Branded agricultural vehicle recreations for The Armoured Pug — clay, wireframe and Unity bakes. Watch the local turntable clip below.',
    videos: ['3D Art/3D_Vehicles_Hard Surface/AA_AF2_3D Models_Agro_Vehicles/AF2_vehicles.mp4'],
    images: [
      '3D Art/3D_Vehicles_Hard Surface/AA_AF2_3D Models_Agro_Vehicles/T7_genesis_unity.PNG',
      '3D Art/3D_Vehicles_Hard Surface/AA_AF2_3D Models_Agro_Vehicles/T7_genesis.PNG',
      '3D Art/3D_Vehicles_Hard Surface/AA_AF2_3D Models_Agro_Vehicles/T7_genesis_clay.PNG',
      '3D Art/3D_Vehicles_Hard Surface/AA_AF2_3D Models_Agro_Vehicles/NH P2185- clay - hardsurface.PNG',
      '3D Art/3D_Vehicles_Hard Surface/AA_AF2_3D Models_Agro_Vehicles/NH P2185- wireframe - hardsurface.PNG',
      '3D Art/3D_Vehicles_Hard Surface/AA_AF2_3D Models_Agro_Vehicles/NH P2185- Unity.PNG',
    ],
  },
  {
    id: 'sw-racer', name: 'Star Wars Racer', series: '3D Vehicles', media: '3d', category: 'vehicles',
    blurb: 'Contributed to the released game Disney’s Star Wars: Resistance Racer — including a low-poly X-Wing build. Read the Neo-Pangea breakdown article linked below.',
    youtube: YT('NnXc2ZINgYo'),
    links: [
      { label: 'Neo-Pangea: from cinema 3D to game art ↗', url: 'https://www.neopangea.com/news/technology/tips-for-turning-high-polygon-cinema-ready-3d-models-into-beautiful-usable-game-art.html' },
    ],
    images: [
      '3D Art/3D_Vehicles_Hard Surface/StarWars_Racer/SWRacers.png',
      '3D Art/3D_Vehicles_Hard Surface/StarWars_Racer/2.jpg',
      '3D Art/3D_Vehicles_Hard Surface/StarWars_Racer/4.jpg',
      '3D Art/3D_Vehicles_Hard Surface/StarWars_Racer/5.jpg',
      '3D Art/3D_Vehicles_Hard Surface/StarWars_Racer/7.jpg',
      '3D Art/3D_Vehicles_Hard Surface/StarWars_Racer/8.jpg',
      '3D Art/3D_Vehicles_Hard Surface/StarWars_Racer/LowPoly_xwing.jpg',
    ],
  },
  {
    id: 'disney-vehicles', name: 'Goofy Train · Disney Mobile', series: '3D Vehicles', media: '3d', category: 'vehicles',
    blurb: 'Disney mobile-game vehicles — the Goofy Train asset from UVs to final close-ups, plus a new Disney car. Watch the local clip below.',
    videos: ['3D Art/3D_Vehicles_Hard Surface/Disney_Mobile games/The_Goofy_Train_asset_1.mp4'],
    images: [
      '3D Art/3D_Vehicles_Hard Surface/Disney_Mobile games/GoofyTrain_v1.jpg',
      '3D Art/3D_Vehicles_Hard Surface/Disney_Mobile games/GoofyTrain_closeUp.jpg',
      '3D Art/3D_Vehicles_Hard Surface/Disney_Mobile games/GoofyTrain_closeUp2.jpg',
      '3D Art/3D_Vehicles_Hard Surface/Disney_Mobile games/GoofyTrain_model_uv.jpg',
      '3D Art/3D_Vehicles_Hard Surface/Disney_Mobile games/New Disney Car.jpg',
    ],
  },
  {
    id: 'metafd-drone', name: 'MetaFD Drone', series: 'Sci-Fi Vehicles', media: '3d', category: 'vehicles',
    blurb: 'MetaFD drone iteration studies — v1.3 through v1.5a.',
    images: [
      '3D Art/3D_Vehicles_Hard Surface/Sci_Fi_Vehicles/MetaFD_Drone/Drone_v1_5a.png',
      '3D Art/3D_Vehicles_Hard Surface/Sci_Fi_Vehicles/MetaFD_Drone/Drone_v1_3.png',
      '3D Art/3D_Vehicles_Hard Surface/Sci_Fi_Vehicles/MetaFD_Drone/Drone_v1_5.png',
    ],
  },
  {
    id: 'atlantis-drone', name: 'Atlantis Drone', series: 'Sci-Fi Vehicles', media: '3d', category: 'vehicles',
    blurb: 'Small droid/drone model — game-ready build with material breakdown.',
    images: [
      '3D Art/3D_Vehicles_Hard Surface/Sci_Fi_Vehicles/Atlantis_Drone/small droid.PNG',
      '3D Art/3D_Vehicles_Hard Surface/Sci_Fi_Vehicles/Atlantis_Drone/small droid_model.PNG',
    ],
  },
  {
    id: 'cargo-ships', name: 'Cargo Ships', series: 'Sci-Fi Vehicles', media: '3d', category: 'vehicles',
    blurb: 'Freighter and cargo-ship concept builds — four design directions.',
    youtube: YT('KMWbBUobhTI'),
    images: [
      '3D Art/3D_Vehicles_Hard Surface/Sci_Fi_Vehicles/PC_Cargo Ships/PHC_CargoShip_concepts_1.png',
      '3D Art/3D_Vehicles_Hard Surface/Sci_Fi_Vehicles/PC_Cargo Ships/PHC_CargoShip_concepts_3.png',
      '3D Art/3D_Vehicles_Hard Surface/Sci_Fi_Vehicles/PC_Cargo Ships/PHC_CargoShip_concepts_5.png',
      '3D Art/3D_Vehicles_Hard Surface/Sci_Fi_Vehicles/PC_Cargo Ships/PHC_CargoShip_concepts_8.png',
    ],
  },
  {
    id: 'concept-car', name: 'Concept Car', series: '3D Vehicles', media: '3d', category: 'vehicles',
    blurb: 'A futuristic concept car — hard-surface modeling study.',
    images: [
      '3D Art/3D_Vehicles_Hard Surface/Concept_Car/nice.jpg',
      '3D Art/3D_Vehicles_Hard Surface/Concept_Car/future_car.jpg',
      '3D Art/3D_Vehicles_Hard Surface/Concept_Car/Future_car_wip3.jpg',
    ],
  },
  {
    id: 'the-mech', name: 'The Mech', series: '3D Vehicles', media: '3d', category: 'vehicles',
    blurb: 'The Mech — a 2017 mech build study. Spin the interactive model below.',
    sketchfab: 'd2fe214653fb4e47be77a331d7f5c9f1',
    links: [
      { label: 'View on Sketchfab ↗', url: 'https://sketchfab.com/3d-models/the-mech-pc-2017-d2fe214653fb4e47be77a331d7f5c9f1' },
    ],
    images: [
      '3D Art/3D_Environments/Game-Environments/Sci-Fi_Environments/TheMech-.jpg',
    ],
  },

  /* ---------- 3D ART · PROPS ---------- */
  {
    id: 'props-disney', name: 'Disney Portals Props', series: '3D Props', media: '3d', category: 'props',
    blurb: 'Collectible props for Disney Portals — pie shop, hot-dog stand, moongirl assets and the windmill, with texture and UV breakdowns. Two showreel clips below.',
    youtube: YT('peWBxnKXHeE', 12),
    youtube2: YT('dTlvbTH9HMo', 12),
    images: [
      '3D Art/3D Props/Disney Portals_Props/Moongirl_assets.jpg',
      '3D Art/3D Props/Disney Portals_Props/Disney_Alice_WB_Portals_Collectibles_Group_1.jpg',
      '3D Art/3D Props/Disney Portals_Props/Disney_Alice_WB_Portals_Collectibles_Group_2.jpg',
      '3D Art/3D Props/Disney Portals_Props/Disney_Alice_WB_Portals_Collectibles_Group_3.jpg',
      '3D Art/3D Props/Disney Portals_Props/Disney_Portals_World Collectibles.jpg',
      '3D Art/3D Props/Disney Portals_Props/Disney_RRR_HotDogStand_textured.jpg',
      '3D Art/3D Props/Disney Portals_Props/Moongirl_Assets_Examples.jpg',
      '3D Art/3D Props/Disney Portals_Props/Windmill.jpg',
      '3D Art/3D Props/Disney Portals_Props/Windmill_Diff.jpg',
      '3D Art/3D Props/Disney Portals_Props/Windmill_uvs.jpg',
    ],
  },
  {
    id: 'props-tavern', name: 'Sleeping Troll Tavern', series: '3D Props', media: '3d', category: 'props',
    blurb: 'A cozy tavern build — WIP to final promo shots. Spin the interactive model below.',
    sketchfab: '6e782c36824647f0b2783c332bf4c796',
    links: [
      { label: 'View on Sketchfab ↗', url: 'https://sketchfab.com/3d-models/the-sleeping-troll-tavern-6e782c36824647f0b2783c332bf4c796' },
    ],
    images: [
      '3D Art/3D Props/SleepingTrolTavern/Promo_1.jpg',
      '3D Art/3D Props/SleepingTrolTavern/STT-WIP_1.jpg',
      '3D Art/3D Props/SleepingTrolTavern/STT(promo3).jpg',
    ],
  },

  {
    id: 'boba-fett', name: 'Boba Fett', series: '3D Props', media: '3d', category: 'props',
    blurb: 'Cinema-ready Boba Fett helmet — base mesh, texture and spec breakdown with WIP progression shots. Spin the interactive model below.',
    sketchfab: '0a3a6efe928946b08fdd9fe3b0c7f6e6',
    links: [
      { label: 'View on Sketchfab ↗', url: 'https://sketchfab.com/3d-models/bobba-fett-fan-art-0a3a6efe928946b08fdd9fe3b0c7f6e6' },
    ],
    images: [
      '3D Art/3D_Characters/Boba Fett/Boba_Fett_3a.jpg',
      '3D Art/3D_Characters/Boba Fett/boba_fett_wip2.jpg',
      '3D Art/3D_Characters/Boba Fett/Bobba_Fett_Helmet_Base_Mesh_TXTR.png',
      '3D Art/3D_Characters/Boba Fett/Bobba_Fett_Helmet_Base_Mesh_NM.png',
      '3D Art/3D_Characters/Boba Fett/Bobba_Fett_Helmet_Base_Mesh_Spec.png',
    ],
  },

  /* ---------- 3D ART · PRODUCT ---------- */
  {
    id: 'casper-snow', name: 'Casper Snow', series: '3D Product', media: '3d', category: 'product',
    blurb: 'Casper “Snow” mattress — HD product renders of the layered build, from material study to final campaign shots.',
    youtube: YT('IZNlQcSK88A'),
    images: [
      '3D Art/3D_Product_Hard Surface/Casper/test_1.png',
      '3D Art/3D_Product_Hard Surface/Casper/Casper_Snow.PNG',
      '3D Art/3D_Product_Hard Surface/Casper/Shot_8.png',
      '3D Art/3D_Product_Hard Surface/Casper/Casper_Snow_model_Mats.png',
    ],
  },
  {
    id: 'harrington-hoists', name: 'Harrington Hoists', series: '3D Product', media: '3d', category: 'product',
    blurb: 'Harrington electric chain hoist — HD product render with macro detail shots in a workshop setting.',
    youtube: YT('IZNlQcSK88A'),
    images: [
      '3D Art/3D_Product_Hard Surface/Harrington Hoists/Harrington Hoists.png',
      '3D Art/3D_Product_Hard Surface/Harrington Hoists/Scene_5a.png',
      '3D Art/3D_Product_Hard Surface/Harrington Hoists/Scene_7.png',
      '3D Art/3D_Product_Hard Surface/Harrington Hoists/Scene_10.png',
      '3D Art/3D_Product_Hard Surface/Harrington Hoists/Scene_12a.png',
    ],
  },
  {
    id: 'mccormick', name: 'McCormick Grinders', series: '3D Product', media: '3d', category: 'product',
    blurb: 'HD product renders of McCormick adjustable grinders for marketing content — branded packaging and studio lighting.',
    youtube: YT('IZNlQcSK88A'),
    images: [
      '3D Art/3D_Product_Hard Surface/McCormick/McCormick_Grinder_BlackPepper Corn0000.png',
      '3D Art/3D_Product_Hard Surface/McCormick/McCormick_Grinder_Garlic_Pepper_Seasoning0000.png',
      '3D Art/3D_Product_Hard Surface/McCormick/McCormick_Grinder_Italian_Herb_Seasoning0000.png',
    ],
  },

  /* ---------- 3D ART · ILLUSTRATION ---------- */
  {
    id: 'illustration-3d', name: '3D Illustration', series: '3D Illustration', media: '3d', category: 'illustration',
    blurb: 'Stylized 3D illustration — characters, portraits and creatures rendered for presentation pieces.',
    images: [
      '3D Art/3D_Illustration/blender_render_1.png',
      '3D Art/3D_Illustration/portrait_by_paka3d.jpg',
      '3D Art/3D_Illustration/The Lady_paka3d.jpg',
      '3D Art/3D_Illustration/old_eyes_by_paka3d.jpg',
      '3D Art/3D_Illustration/creature_2026.png',
      '3D Art/3D_Illustration/the_demon_model_2.jpg',
      '3D Art/3D_Illustration/Valiant.png',
      '3D Art/3D_Illustration/Boba_Fett_3a.jpg',
      '3D Art/3D_Illustration/Car_Concept1.jpg',
      '3D Art/3D_Illustration/blender_scene.png',
      '3D Art/3D_Illustration/b_17_by_paka3d_d53pu1n-fullview.jpg',
      '3D Art/3D_Illustration/The Old Man.jpg',
    ],
  },
  {
    id: 'sw-hanger', name: 'Star Wars Hanger', series: '3D Illustration', media: '3d', category: 'illustration',
    blurb: 'Star Wars–style fireball hanger environment.',
    images: ['3D Art/3D_Environments/Game-Environments/Star Wars Hanger/Fireball_Hanger_0001.jpg'],
  },
];

const ytEmbed = (c) => {
  const q = new URLSearchParams({ rel: '0', modestbranding: '1' });
  if (c.start) q.set('start', String(c.start));
  return `https://www.youtube-nocookie.com/embed/${c.id}?${q.toString()}`;
};
const ytThumb = (id) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;

/* ================= gallery rendering ================= */
const state = { media: '3d', cat: 'all' };
const grid = $('workGrid');
const chipsBox = $('catChips');
const countBox = $('workCount');
const emptyBox = $('emptyState');

const catLabel = (id) => (CATS.find((c) => c.id === id) || {}).label || id;

function renderChips() {
  chipsBox.innerHTML = '';
  const mk = (id, label) => {
    const b = document.createElement('button');
    b.className = 'chip' + (state.cat === id ? ' active' : '');
    b.textContent = label;
    b.setAttribute('role', 'listitem');
    b.addEventListener('click', () => { state.cat = id; renderChips(); renderGrid(); });
    return b;
  };
  chipsBox.append(mk('all', 'All Categories'));
  const visible = CATS.filter((c) => state.media === 'all' || PROJECTS.some((p) => p.media === state.media && p.category === c.id));
  if (state.cat !== 'all' && !visible.some((c) => c.id === state.cat)) state.cat = 'all';
  visible.forEach((c) => chipsBox.append(mk(c.id, c.label)));
}

function cardHTML(p) {
  const hasVideo = !!(p.videos && p.videos.length) || !!p.youtube;
  return `
    <button class="p-card" data-id="${p.id}">
      <span class="p-card-media">
        <img src="${enc(p.images[0])}" alt="${p.name} — ${p.series}" loading="lazy" />
        <span class="p-badges">
          <span class="badge badge-media ${p.media === '3d' ? 'm-3d' : ''}">${p.media === '2d' ? '2D Art' : '3D Art'}</span>
          ${hasVideo ? '<span class="badge badge-video">&#9654; video</span>' : ''}
        </span>
        <span class="p-card-info">
          <span class="p-card-series">${p.series}</span>
          <span class="p-card-name">${p.name}</span>
          <span class="p-card-meta">
            <span>${catLabel(p.category)}</span><span class="dot"></span>
            <span>${p.images.length} image${p.images.length > 1 ? 's' : ''}</span>
            <span class="p-card-arrow" aria-hidden="true">→</span>
          </span>
        </span>
      </span>
    </button>`;
}

function renderGrid() {
  const list = PROJECTS.filter(
    (p) => (state.media === 'all' || p.media === state.media) && (state.cat === 'all' || p.cat === state.cat || p.category === state.cat)
  );
  /* Older Work always sorts last in the grid */
  list.sort((a, b) => Number(a.category === 'older-work') - Number(b.category === 'older-work'));
  grid.innerHTML = list.map(cardHTML).join('');
  emptyBox.hidden = list.length > 0;
  countBox.innerHTML = `<b>${list.length}</b> project${list.length === 1 ? '' : 's'} · ${list.reduce((n, p) => n + p.images.length, 0)} images`;
  grid.querySelectorAll('.p-card').forEach((el) => {
    el.addEventListener('click', () => openProject(el.dataset.id));
  });
}

document.querySelectorAll('.seg-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.seg-btn').forEach((b) => { b.classList.remove('active'); b.setAttribute('aria-selected', 'false'); });
    btn.classList.add('active');
    btn.setAttribute('aria-selected', 'true');
    state.media = btn.dataset.media;
    renderChips();
    renderGrid();
  });
});

/* ================= lightbox ================= */
const lightbox = $('lightbox');
const lbBody = $('lbBody');
const lbTitle = $('lbTitle');
const lbSeries = $('lbSeries');

function openProject(id) {
  const p = PROJECTS.find((x) => x.id === id);
  if (!p) return;

  const badges = [
    `<span class="badge ${p.media === '3d' ? 'o' : ''}">${p.media === '2d' ? '2D Art' : '3D Art'}</span>`,
    `<span class="badge">${catLabel(p.category)}</span>`,
  ];
  const yts = [p.youtube, p.youtube2].filter(Boolean);
  const videosHTML = (p.videos || []).map((v) => `
    <div class="lb-vid">
      <video controls playsinline preload="metadata" src="${enc(v)}" poster="${enc(p.images[0])}">Your browser does not support embedded video.</video>
    </div>`).join('');
  const ytHTML = yts.map((c) => `
    <button class="lb-yt" data-embed="${encodeURIComponent(JSON.stringify(c))}">
      <img src="${ytThumb(c.id)}" alt="YouTube clip: ${p.name}" loading="lazy" />
      <span class="yt-play">&#9654;</span>
    </button>`).join('');
  const imgsHTML = p.images.map((src) => `<img class="lb-img" src="${enc(src)}" alt="${p.name}" loading="lazy" />`).join('');
  const linksHTML = (p.links || []).map((l) =>
    `<a class="lb-link" href="${l.url}" target="_blank" rel="noopener">${l.label}</a>`).join('');
  const sfHTML = p.sketchfab ? `
    <div class="lb-sf">
      <iframe title="${p.name} — interactive 3D model (Sketchfab)" src="https://sketchfab.com/models/${p.sketchfab}/embed" loading="lazy" allow="autoplay; fullscreen; xr-spatial-tracking" allowfullscreen></iframe>
    </div>` : '';

  lbSeries.textContent = p.series;
  lbTitle.textContent = p.name;
  lbBody.innerHTML = `
    <div class="lb-badges">${badges.join('')}</div>
    <p class="lb-blurb">${p.blurb}</p>
    <div class="lb-media">${sfHTML}${videosHTML}${ytHTML}${imgsHTML}</div>
    ${linksHTML ? `<div class="lb-links">${linksHTML}</div>` : ''}
  `;

  lbBody.querySelectorAll('.lb-img').forEach((img) => {
    img.addEventListener('click', () => openZoom(img.src, img.alt));
  });
  lbBody.querySelectorAll('.lb-yt').forEach((b) => {
    b.addEventListener('click', () => {
      const c = JSON.parse(decodeURIComponent(b.dataset.embed));
      const wrap = document.createElement('div');
      const iframe = document.createElement('iframe');
      iframe.className = 'lb-yt-frame';
      iframe.src = `${ytEmbed(c)}&autoplay=1`;
      iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
      iframe.allowFullscreen = true;
      iframe.title = 'YouTube clip';
      wrap.appendChild(iframe);
      b.replaceWith(wrap);
    });
  });

  lightbox.hidden = false;
  document.body.style.overflow = 'hidden';
  lbBody.scrollTop = 0;
  $('lbClose').focus({ preventScroll: true });
}

function closeLightbox() {
  lightbox.hidden = true;
  document.body.style.overflow = '';
  // stop any playing media
  lbBody.querySelectorAll('video, iframe').forEach((m) => { m.src = ''; });
  lbBody.innerHTML = '';
}

/* standalone video lightbox (asset-pack showreels) */
function openYouTube(id, start, title) {
  const q = new URLSearchParams({ rel: '0', modestbranding: '1', autoplay: '1' });
  if (start) q.set('start', String(start));
  lbSeries.textContent = 'Showreel';
  lbTitle.textContent = title || 'Video';
  lbBody.innerHTML = `<div class="lb-badges"><span class="badge">YouTube</span></div>
    <iframe class="lb-yt-frame" style="max-width:820px" src="https://www.youtube-nocookie.com/embed/${id}?${q.toString()}"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen title="${title || 'YouTube clip'}"></iframe>`;
  lightbox.hidden = false;
  document.body.style.overflow = 'hidden';
  lbBody.scrollTop = 0;
}
$('lbClose').addEventListener('click', closeLightbox);
lightbox.querySelectorAll('[data-lb-close]').forEach((el) => el.addEventListener('click', closeLightbox));

/* ================= zoom ================= */
const zoom = $('zoom');
const zoomImg = $('zoomImg');
function openZoom(src, alt) {
  zoomImg.src = src;
  zoomImg.alt = alt || 'Image';
  zoom.hidden = false;
}
function closeZoom() { zoom.hidden = true; zoomImg.src = ''; }
$('zoomClose').addEventListener('click', closeZoom);
zoom.addEventListener('click', (e) => { if (e.target === zoom) closeZoom(); });

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    if (!zoom.hidden) closeZoom();
    else if (!lightbox.hidden) closeLightbox();
  }
});

/* asset-pack showreel buttons */
document.querySelectorAll('.btn-yt').forEach((b) => {
  const card = b.closest('.asset-card');
  const name = (card && card.querySelector('h3')) ? card.querySelector('h3').textContent : 'Showreel';
  b.addEventListener('click', () => openYouTube(b.dataset.yt, 0, name + ' showreel'));
});

/* ================= nav ================= */
const nav = document.querySelector('.nav');
const burger = $('navBurger');
const navLinks = document.querySelector('.nav-links');
window.addEventListener('scroll', () => nav.classList.toggle('scrolled', window.scrollY > 30), { passive: true });
burger.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  burger.setAttribute('aria-expanded', String(open));
});
navLinks.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => {
  navLinks.classList.remove('open');
  burger.setAttribute('aria-expanded', 'false');
}));

/* ================= timeline expand / collapse ================= */
const tlToggle = $('tlToggle');
if (tlToggle) {
  const timeline = tlToggle.closest('.timeline');
  tlToggle.addEventListener('click', () => {
    const collapsed = timeline.classList.toggle('collapsed');
    tlToggle.setAttribute('aria-expanded', String(!collapsed));
    tlToggle.innerHTML = collapsed ? 'Show all 7 more roles &#9662;' : 'Show less &#9652;';
  });
}

/* ================= reveal on scroll ================= */
const io = new IntersectionObserver((entries) => {
  entries.forEach((en) => {
    if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
document.querySelectorAll('.reveal').forEach((el) => io.observe(el));

/* ================= misc ================= */
$('year').textContent = new Date().getFullYear();

/* init */
renderChips();
renderGrid();
