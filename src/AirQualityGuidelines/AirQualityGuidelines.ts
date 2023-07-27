interface AirQualityGroup {
  title: string;
  duration?: string;
  labels: Array<String>;
}

const genericText = {
  good: [new String("No restrictions")],
  Moderate: [new String("Ensure that sensitive individuals are medically managing their condition.")],
  UnhealthySensitive: [new String("Sensitive individuals should exercise indoors or avoid vigorous outdoor activities.")],
  unhealthy: [new String("Sensitive individuals should remain indoors.")],
  veryUnhealthy: [new String("No outdoor activity."), new String("All activities should be moved indoors.")],
  hazardous: [new String("No outdoor or indoor activities.")]
}

export const airQualityGuidelines: Array<Array<AirQualityGroup>> = [
  // Good
  [
    {
      title: "Recess",
      duration: "15 minutes",
      labels: genericText.good,
    },
    {
      title: "P.E.",
      duration: "1 hour",
      labels: genericText.good,
    },
    {
      title: "Athletic Practice & Training",
      duration: "2-4 hours",
      labels: genericText.good,
    },
    {
      title: "Scheduled Sporting Events",
      labels: genericText.good,
    },
  ],
  // Moderate
  [
    {
      title: "Recess",
      duration: "15 minutes",
      labels: genericText.Moderate,
    },
    {
      title: "P.E.",
      duration: "1 hour",
      labels: genericText.Moderate,
    },
    {
      title: "Athletic Practice & Training",
      duration: "2-4 hours",
      labels: genericText.Moderate,
    },
    {
      title: "Scheduled Sporting Events",
      labels: genericText.Moderate,
    },
  ],
  // Unhealthy for Sensitive Groups
  [
    {
      title: "Recess",
      duration: "15 minutes",
      labels: genericText.UnhealthySensitive,
    },
    {
      title: "P.E.",
      duration: "1 hour",
      labels: genericText.UnhealthySensitive,
    },
    {
      title: "Athletic Practice & Training",
      duration: "2-4 hours",
      labels: [
        "Reduce vigorous exercise to 30 min per hour of practice time with increased breaks and substitutions.",
        ...genericText.Moderate
      ],
    },
    {
      title: "Scheduled Sporting Events",
      labels: [
        "Increase rest breaks and substitutions per CIF guidelines for extreme heat.",
        ...genericText.Moderate
      ],
    },
  ],
  // Unhealthy
  [
    {
      title: "Recess",
      duration: "15 minutes",
      labels: [
        "Exercise indoors or avoid vigorous outdoor activities.",
        ...genericText.unhealthy
      ],
    },
    {
      title: "P.E.",
      duration: "1 hour",
      labels: [
        "Exercise indoors or limit vigorous outdoor activities to a maximum of 15 minutes.",
        ...genericText.unhealthy
      ],
    },
    {
      title: "Athletic Practice & Training",
      duration: "2-4 hours",
      labels: [
        "Exercise indoors or reduce vigorous exercise to 30 minutes of practice time with increased rest breaks and substitutions.",
        ...genericText.unhealthy
      ],
    },
    {
      title: "Scheduled Sporting Events",
      labels: [
        "Increase rest breaks and substitutions per CIF guidelines for extreme heat.",
        ...genericText.Moderate
      ],
    },
  ],
  // Very Unhealthy
  [
    {
      title: "Recess",
      duration: "15 minutes",
      labels: genericText.veryUnhealthy,
    },
    {
      title: "P.E.",
      duration: "1 hour",
      labels: genericText.veryUnhealthy,
    },
    {
      title: "Athletic Practice & Training",
      duration: "2-4 hours",
      labels: genericText.veryUnhealthy,
    },
    {
      title: "Scheduled Sporting Events",
      labels: genericText.veryUnhealthy,
    },
  ],
  // Hazardous
  [
    {
      title: "Recess",
      duration: "15 minutes",
      labels: genericText.hazardous,
    },
    {
      title: "P.E.",
      duration: "1 hour",
      labels: genericText.hazardous,
    },
    {
      title: "Athletic Practice & Training",
      duration: "2-4 hours",
      labels: genericText.hazardous,
    },
    {
      title: "Scheduled Sporting Events",
      labels: genericText.hazardous,
    },
  ],
]

export const altAirQualityGuidelines: Array<Array<AirQualityGroup>> = [
  // Good
  [
    {
      title: "All Individuals",
      labels: genericText.good,
    },
  ],
  // Moderate
  [
    {
      title: "All Individuals",
      labels: genericText.Moderate,
    },
  ],
  // Unhealthy for Sensitive Groups
  [
    {
      title: "Recess & P.E.",
      duration: "30 minutes - 2 hours",
      labels: genericText.UnhealthySensitive,
    },
    {
      title: "Athletic Practice, Training, & Scheduled Sporting Events",
      duration: "2+ hours",
      labels: [
        "Reduce vigorous exercise to 30 min per hour of practice time with increased breaks and substitutions.",
        ...genericText.Moderate
      ],
    },
  ],
  // Unhealthy
  [
    {
      title: "All Individuals",
      labels: genericText.unhealthy
    },
    {
      title: "Recess",
      duration: "15 minutes",
      labels: [ "Exercise indoors or avoid vigorous outdoor activities." ],
    },
    {
      title: "P.E.",
      duration: "1 hour",
      labels: [ "Exercise indoors or limit vigorous outdoor activities to a maximum of 15 minutes." ],
    },
    {
      title: "Athletic Practice & Training",
      duration: "2-4 hours",
      labels: [ "Exercise indoors or reduce vigorous exercise to 30 minutes of practice time with increased rest breaks and substitutions." ],
    },
    {
      title: "Scheduled Sporting Events",
      labels: [ "Increase rest breaks and substitutions per CIF guidelines for extreme heat." ],
    },
  ],
  // Very Unhealthy
  [
    {
      title: "All Individuals",
      duration: "15 minutes",
      labels: genericText.veryUnhealthy,
    },
  ],
  // Hazardous
  [
    {
      title: "All Individuals",
      duration: "15 minutes",
      labels: genericText.hazardous,
    },
  ],
]
