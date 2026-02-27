import { 
  Beaker, 
  Droplet, 
  HeartPulse, 
  Shield, 
  Activity, 
  Stethoscope,
  Baby,
  Dna,
  Syringe,
  Microscope,
  Eye,
  Brain
} from "lucide-astro";

export interface Study {
  id: string;
  name: string;
  category: "Rutina" | "Hormonal" | "Especial" | "Imagen" | "Preventivo";
  desc: string;
  details: string;
  includes: string[];
  preparations: string[];
  postRecommendations: string[];
  price: "$" | "$$" | "$$$";
  icon: any;
}

export const studies: Study[] = [
  {
    id: "qs35",
    name: "Química Sanguínea (35 elementos)",
    category: "Rutina",
    desc: "Perfil completo para evaluación metabólica integral.",
    details: "Estudio exhaustivo que mide niveles de glucosa, urea, creatinina, ácido úrico, perfil de lípidos completo, pruebas de funcionamiento hepático y proteínas.",
    includes: ["Glucosa", "Urea", "Creatinina", "Perfil de Lípidos", "Pruebas de Función Hepática", "Electrolitos"],
    preparations: ["Ayuno de 8 a 12 horas.", "No realizar ejercicio intenso 24 horas antes.", "Informar sobre medicamentos que esté tomando."],
    postRecommendations: ["Retomar dieta habitual.", "Mantener hidratación."],
    price: "$$",
    icon: Beaker,
  },
  {
    id: "bh",
    name: "Biometría Hemática",
    category: "Rutina",
    desc: "Análisis detallado de las células de la sangre.",
    details: "Mide glóbulos rojos, blancos y plaquetas. Esencial para detectar anemias, infecciones y otros trastornos sanguíneos.",
    includes: ["Hemoglobina", "Hematocrito", "Conteo de Leucocitos", "Diferencial de Blancos", "Plaquetas"],
    preparations: ["No requiere ayuno prolongado, pero se recomienda ligero (4 horas)."],
    postRecommendations: ["Ninguna en especial."],
    price: "$",
    icon: Droplet,
  },
  {
    id: "pli",
    name: "Perfil de Lípidos",
    category: "Preventivo",
    desc: "Control de niveles de grasa en sangre.",
    details: "Evalúa los diferentes tipos de colesterol y triglicéridos para determinar el riesgo de enfermedades cardiovasculares.",
    includes: ["Colesterol Total", "Colesterol HDL", "Colesterol LDL", "Triglicéridos", "Índice Aterogénico"],
    preparations: ["Ayuno estricto de 12 horas.", "No ingerir alcohol 48 horas antes."],
    postRecommendations: ["Seguir indicaciones médicas si los niveles son altos."],
    price: "$",
    icon: Activity,
  },
  {
    id: "t4tsh",
    name: "Perfil Tiroideo Básico",
    category: "Hormonal",
    desc: "Evaluación de la función de la glándula tiroides.",
    details: "Determina si existe hipertiroidismo o hipotiroidismo midiendo las hormonas principales.",
    includes: ["TSH", "T4 Total", "T4 Libre", "T3 Total"],
    preparations: ["Se recomienda ayuno de 8 horas.", "Si toma levotiroxina, la muestra debe tomarse antes de la dosis diaria."],
    postRecommendations: ["Ninguna."],
    price: "$$",
    icon: Activity,
  },
  {
    id: "cv19",
    name: "Prueba COVID-19 (Antígenos)",
    category: "Especial",
    desc: "Detección rápida de infección por SARS-CoV-2.",
    details: "Prueba de inmunocromatografía para detectar proteínas específicas del virus.",
    includes: ["Toma de muestra nasofaríngea", "Resultado en 15-30 minutos"],
    preparations: ["Informar si presenta síntomas y fecha de inicio.", "Nivel de protección: cubrebocas obligatorio."],
    postRecommendations: ["En caso de positivo, seguir protocolos de aislamiento.", "Consultar con su médico médico."],
    price: "$$",
    icon: Shield,
  },
  {
    id: "check-exec",
    name: "Check-up Ejecutivo Mujer/Hombre",
    category: "Preventivo",
    desc: "Evaluación integral de salud anual.",
    details: "Conjunto de estudios diseñados para una detección oportuna de padecimientos comunes.",
    includes: ["Química Sanguínea 35", "Biometría Hemática", "Examen General de Orina", "Electrocardiograma (opcional)"],
    preparations: ["Ayuno de 12 horas.", "Recolección de la primera orina de la mañana en frasco estéril."],
    postRecommendations: ["Agendar cita de interpretación de resultados."],
    price: "$$$",
    icon: Stethoscope,
  },
  {
    id: "prg",
    name: "Prueba de Embarazo (Sanguínea)",
    category: "Hormonal",
    desc: "Detección de la hormona hCG en sangre.",
    details: "Prueba altamente sensible para confirmar el embarazo de forma temprana.",
    includes: ["Determinación cuantitativa/cualitativa de hCG"],
    preparations: ["No requiere ayuno.", "Recomendado después de al menos un día de retraso menstrual."],
    postRecommendations: ["Consultar con ginecología."],
    price: "$",
    icon: Baby,
  },
  {
    id: "dna",
    name: "Prueba de Paternidad (ADN)",
    category: "Especial",
    desc: "Determinación de parentesco biológico.",
    details: "Análisis genético de alta precisión para verificar la relación padre-hijo.",
    includes: ["Toma de muestra bucal o sanguínea", "Análisis de marcadores genéticos"],
    preparations: ["Cita previa.", "Identificación oficial de los participantes.", "Consentimiento informado legal."],
    postRecommendations: ["Entrega confidencial de resultados."],
    price: "$$$",
    icon: Dna,
  }
];
