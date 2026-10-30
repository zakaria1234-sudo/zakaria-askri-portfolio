import type { Project } from "../types";

export const hisAiWorkflow = {
  slug: "his-ai-workflow",
  title: "HIS AI Workflow",
  subtitle:
    "Analyser, représenter et simuler des workflows métier dans un environnement HIS/ERP",
  year: "2026",
  status: "published",
  featured: true,
  order: 1,
  role: "Conception et développement",
  duration: "Juillet 2026 — aujourd'hui",
  team: null,
  summary:
    "Une plateforme d'automatisation intelligente qui observe une application HIS/ERP, reconstruit les workflows métier réels, les valide puis les simule avant exécution.",
  context:
    "Dans un HIS ou un ERP, les processus métier réels sont rarement documentés de façon complète. Ils se lisent à travers les écrans, les enchaînements d'actions et les règles implicites de l'application. HIS AI Workflow part de ce constat : rendre ces workflows observables, compréhensibles et vérifiables.",
  problem:
    "Automatiser un processus sans le comprendre produit des scripts fragiles. Il faut d'abord découvrir le workflow tel qu'il est réellement exécuté, le représenter de manière structurée, vérifier sa cohérence, puis simuler son exécution pour détecter les erreurs avant de toucher au système.",
  goal:
    "Construire une plateforme capable de découvrir, modéliser, valider et simuler des workflows métier, avec une architecture séparant la perception de l'interface, l'interprétation du sens, la construction du workflow et l'exécution simulée.",
  constraints: [
    "Interfaces métier hétérogènes et fortement dynamiques",
    "Données sensibles : aucune donnée patient ne doit circuler hors du système",
    "Besoin de reproductibilité : une même observation doit produire un workflow stable",
    "Exécution simulée obligatoire avant toute action réelle",
  ],
  architecture: [
    {
      id: "agents",
      label: "Agents",
      description:
        "Les agents pilotent le cycle de vie : se déplacer dans l'application, observer, explorer, construire un workflow, simuler et dialoguer avec l'utilisateur.",
      components: [
        "NavigationAgent",
        "ObservationAgent",
        "ExplorationAgent",
        "WorkflowAgent",
        "SimulationAgent",
        "ChatbotAgent",
      ],
    },
    {
      id: "interpreters",
      label: "Interpreters",
      description:
        "Chaque interpreter transforme une observation brute en information exploitable : élément d'interface, écran, entité métier, action ou transition.",
      components: [
        "UIElementInterpreter",
        "ScreenSemanticInterpreter",
        "EntityInterpreter",
        "ActionInterpreter",
        "TransitionInterpreter",
      ],
    },
    {
      id: "workflow",
      label: "Workflow",
      description:
        "Le workflow est découvert, assemblé, validé et fusionné. Un plan d'exécution est produit à partir du modèle validé.",
      components: [
        "WorkflowDiscoveryEngine",
        "WorkflowBuilder",
        "WorkflowValidator",
        "WorkflowMerger",
        "ExecutionPlanBuilder",
      ],
    },
    {
      id: "simulation",
      label: "Simulation",
      description:
        "La simulation rejoue le plan sans effet réel : résolution des éléments, exécution des actions, validation de l'état et récupération en cas d'écart.",
      components: [
        "SimulationAgent",
        "ActionExecutor",
        "ElementResolver",
        "StateValidator",
        "RecoveryManager",
      ],
    },
  ],
  stack: [
    "JavaScript",
    "Node.js",
    "Playwright",
    "Automatisation de workflows",
    "Automatisation d'interface",
    "ERP / HIS",
  ],
  caseStudy: [
    {
      kind: "paragraph",
      title: "Le problème",
      text: "Un workflow métier n'est pas seulement une suite de clics. C'est une suite d'intentions : ouvrir un dossier, renseigner une entité, déclencher une transition, vérifier un état. Tant que ces intentions ne sont pas explicitées, l'automatisation reste une imitation fragile de l'interface.",
    },
    {
      kind: "list",
      title: "Objectifs du projet",
      items: [
        "Observer une application HIS/ERP sans hypothèse préalable sur ses écrans",
        "Reconstruire un workflow lisible à partir des observations",
        "Valider la cohérence du workflow avant toute exécution",
        "Simuler le plan d'exécution et détecter les écarts d'état",
        "Conserver une séparation stricte entre perception, interprétation, modèle et exécution",
      ],
    },
    {
      kind: "list",
      title: "Difficultés techniques traitées",
      items: [
        "Résolution fiable des éléments d'interface",
        "Distinction entre DOM visible et éléments cachés",
        "Gestion des composants Select2",
        "Différence entre identifiants sémantiques et sélecteurs DOM réels",
        "Génération et validation des workflows",
        "Construction des plans d'exécution",
        "Validation de l'état après une action",
        "Récupération après échec d'une action",
        "Navigation dans les modules et sous-modules HIS",
        "Automatisation avec Playwright",
      ],
    },
    {
      kind: "paragraph",
      title: "Solutions apportées",
      text: "La simulation s'appuie sur une résolution sémantique des éléments : l'élément visé est identifié par son rôle métier, puis traduit en interaction réelle selon le type de composant rencontré. Cette approche évite de dépendre d'un sélecteur DOM unique et rend l'exécution plus stable face aux variations de l'interface.",
    },
    {
      kind: "list",
      title: "Drivers d'interaction",
      items: [
        "NativeSelectDriver",
        "Select2Driver",
        "InputDriver",
        "ButtonDriver",
      ],
    },
    {
      kind: "paragraph",
      title: "Données de simulation",
      text: "Les valeurs utilisées pendant les simulations proviennent de jeux de données de test explicites. L'objectif est d'éviter les valeurs implicites ou arbitraires : chaque simulation s'exécute avec un jeu de données connu, ce qui rend le résultat comparable et reproductible.",
    },
    {
      kind: "list",
      title: "Déroulement",
      items: [
        "Navigation dans les modules et sous-modules du HIS",
        "Observation des écrans et des éléments disponibles",
        "Exploration des actions possibles",
        "Découverte et construction du workflow",
        "Validation et fusion des workflows",
        "Génération du plan d'exécution",
        "Simulation, validation d'état et récupération si nécessaire",
      ],
    },
    {
      kind: "callout",
      title: "Présentation conceptuelle",
      text: "Le code source est privé et les données de l'environnement HIS ne sont pas publiées. Cette étude de cas décrit l'architecture, les composants et les problèmes techniques traités, sans exposer d'information sensible.",
    },
  ],
  media: [],
  links: {
    repo: null,
    demo: null,
    note: "Code privé — démonstration possible sur demande.",
  },
  confidentiality: "concept-only",
} satisfies Project;
