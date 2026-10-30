import type { Project } from "../types";

export const hisAiWorkflow = {
  slug: "his-ai-workflow",
  title: "HIS AI Workflow",
  subtitle:
    "Analyser, construire et simuler des workflows métier dans un système d'information de santé",
  year: null,
  status: "draft",
  featured: true,
  order: 1,
  role: "Conception et développement",
  duration: null,
  team: null,
  summary:
    "Une plateforme qui observe une application HIS/ERP, reconstruit les workflows métier réels, les valide puis les simule avant exécution.",
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
        "Navigation",
        "Observation",
        "Exploration",
        "Workflow",
        "Simulation",
        "Chatbot",
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
      kind: "paragraph",
      title: "Déroulement",
      text: "Le cycle commence par la navigation et l'observation de l'interface. Les interpreters qualifient ensuite les éléments, les écrans, les entités et les actions. Le moteur de découverte assemble ces informations en un workflow, que le constructeur structure et que le validateur contrôle. Une fois le modèle stable, un plan d'exécution est généré puis rejoué par le simulateur, qui valide chaque état intermédiaire et déclenche une récupération si le résultat observé diffère du résultat attendu.",
    },
    {
      kind: "list",
      title: "Séparation des responsabilités",
      items: [
        "Les agents orchestrent, ils ne décident pas du sens des éléments observés",
        "Les interpreters traduisent une observation en concept métier",
        "Le workflow est un modèle, pas une suite d'actions",
        "La simulation vérifie le modèle avant toute action réelle",
      ],
    },
    {
      kind: "callout",
      title: "Contenu en cours de validation",
      text: "Les difficultés rencontrées, les solutions techniques détaillées, les résultats et les captures d'écran seront ajoutés après validation par Zakaria. Aucune donnée issue du système réel n'est publiée.",
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
