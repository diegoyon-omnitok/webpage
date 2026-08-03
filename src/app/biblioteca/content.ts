// Contenido de la Biblioteca de Aprendizaje.
//
// Cada módulo tiene SUB-MÓDULOS. Cada sub-módulo se despliega (acordeón) y
// muestra, a la izquierda, una breve descripción + los pasos de uso; y a la
// derecha, un mini video.
//
// NOMBRES de sub-módulos de Content y Connect = reales (provistos por el equipo).
// DESCRIPCIONES y PASOS = propuesta inicial, revisar/ajustar al procedimiento real.
// DSA = sub-módulos de ejemplo (pendiente de definir los reales).
// Cuando tengas los videos, completa `videoSrc` (por ahora se muestra placeholder).

export type SubModule = {
  name: string;
  description: string;
  steps: string[];
  videoSrc?: string;
};

export type LearningModule = {
  key: string;
  name: string;
  tagline: string;
  accent: string;
  intro: string;
  submodules: SubModule[];
  suggestions: string[];
};

export const MODULES: LearningModule[] = [
  {
    key: "content",
    name: "Content",
    tagline: "Contenido enriquecido que convierte en cada retailer",
    accent: "#FF177B",
    intro:
      "Content te permite crear y optimizar las páginas de producto (PDPs) para una experiencia de compra que resuelve dudas y vende. Explora cada sub-módulo para ver cómo se usa.",
    submodules: [
      {
        name: "In-Page",
        description:
          "Edita el contenido que se muestra dentro de la página de producto: secciones descriptivas, imágenes y textos que resuelven las dudas del shopper.",
        steps: [
          "Abre el producto y elige la sección In-Page que quieres editar.",
          "Carga las imágenes y escribe los textos de cada bloque.",
          "Ordena los bloques según lo que el shopper necesita ver primero.",
          "Previsualiza y guarda para publicar el contenido en la PDP.",
        ],
      },
      {
        name: "HotSpots",
        description:
          "Agrega puntos interactivos sobre las imágenes del producto para destacar características y beneficios al pasar o tocar.",
        steps: [
          "Selecciona la imagen del producto donde agregarás los hotspots.",
          "Ubica cada punto sobre la zona que quieres destacar.",
          "Escribe el texto o dato que aparece al interactuar.",
          "Guarda y previsualiza la experiencia.",
        ],
      },
      {
        name: "Contenido Variable",
        description:
          "Crea contenido que se adapta según condiciones (campaña, fecha, retailer o segmento) sin rehacer la ficha.",
        steps: [
          "Define la regla o condición que activa el contenido.",
          "Crea las variantes de contenido para cada caso.",
          "Asocia cada variante a su condición.",
          "Publica: la ficha mostrará la variante que corresponda.",
        ],
      },
      {
        name: "Métricas",
        description:
          "Revisa el desempeño del contenido de tus fichas para entender qué funciona y dónde optimizar.",
        steps: [
          "Abre el panel de métricas del producto o categoría.",
          "Revisa los indicadores de contenido y engagement.",
          "Compara entre productos o períodos.",
          "Prioriza las fichas a optimizar según los datos.",
        ],
      },
      {
        name: "¿Cómo implementar en retailers?",
        description:
          "Guía para llevar el contenido creado en Content a cada retailer.",
        steps: [
          "Verifica que la ficha esté completa y aprobada.",
          "Revisa los requisitos del retailer de destino.",
          "Genera y distribuye el contenido al retailer.",
          "Confirma la publicación en el retailer.",
        ],
      },
      {
        name: "¿Cómo enviar material para creación de fichas?",
        description:
          "Cómo hacernos llegar imágenes, textos y especificaciones para que creemos tus fichas.",
        steps: [
          "Reúne el material: imágenes, textos, atributos y logos.",
          "Verifica que cumpla los formatos requeridos.",
          "Súbelo o envíalo por el canal indicado.",
          "Haz seguimiento del estado de creación de la ficha.",
        ],
      },
    ],
    suggestions: [
      "Prioriza la primera imagen y el primer bullet: es lo que más mira el shopper.",
      "Revisa cómo se ve la ficha en el celular, donde compra la mayoría.",
      "Reutiliza el contenido enriquecido en todos los retailers con PIM.",
    ],
  },
  {
    key: "connect",
    name: "PIM",
    tagline: "Un catálogo maestro, contenido consistente en todos lados",
    accent: "#6366F1",
    intro:
      "PIM centraliza tu catálogo en una sola fuente de verdad y genera los exportables listos para cada retailer. Explora cada sub-módulo para ver cómo se usa.",
    submodules: [
      {
        name: "¿Cómo crear un producto?",
        description:
          "Da de alta un producto nuevo en tu catálogo maestro.",
        steps: [
          "Entra a la sección Productos y elige “Nuevo producto”.",
          "Completa los campos obligatorios (nombre, SKU, atributos).",
          "Asígnalo a su categoría correspondiente.",
          "Guarda para sumarlo al catálogo.",
        ],
      },
      {
        name: "¿Cómo crear una categoría?",
        description:
          "Organiza tu catálogo creando categorías para agrupar productos.",
        steps: [
          "Ve a la sección Categorías y elige “Nueva categoría”.",
          "Asigna nombre y, si aplica, una categoría padre.",
          "Define los campos que tendrán los productos de esa categoría.",
          "Guarda la categoría.",
        ],
      },
      {
        name: "¿Cómo crear campos y grupos de campos?",
        description:
          "Define los atributos (campos) de tus productos y agrúpalos para ordenarlos.",
        steps: [
          "Abre la configuración de campos.",
          "Crea un campo nuevo y elige su tipo (texto, número, lista, etc.).",
          "Agrúpalo dentro de un grupo de campos.",
          "Guarda y asígnalo a las categorías que lo usen.",
        ],
      },
      {
        name: "¿Cómo exportar y generar formatos de exportación?",
        description:
          "Genera los archivos listos para subir a cada retailer y crea formatos de exportación reutilizables.",
        steps: [
          "Elige los productos y el retailer o canal de destino.",
          "Selecciona o crea el formato de exportación.",
          "Mapea los campos al formato que pide el retailer.",
          "Genera y descarga el exportable.",
        ],
      },
    ],
    suggestions: [
      "Mantén un único catálogo maestro como fuente de verdad.",
      "Revisa los requisitos de atributos de cada retailer antes de exportar.",
      "Vuelve a exportar cuando cambien precios, fotos o descripciones.",
    ],
  },
  {
    key: "dsa",
    name: "Digital Shelf Analytics",
    tagline: "Visibilidad de precio, stock y contenido en tiempo real",
    accent: "#4D4A9D",
    intro:
      "Digital Shelf Analytics monitorea tu presencia en retailers y marketplaces, interpreta las señales y te indica dónde actuar. Explora cada sub-módulo para ver cómo se usa.",
    submodules: [
      {
        name: "Monitoreo de precio",
        description:
          "Sigue el precio de tus productos y de la competencia en cada retailer, con su evolución en el tiempo.",
        steps: [
          "Selecciona los productos y retailers a seguir.",
          "Agrega los competidores que quieres comparar.",
          "Revisa la evolución de precios en el dashboard.",
          "Configura alertas por cambios bruscos.",
        ],
      },
      {
        name: "Disponibilidad y stock",
        description:
          "Detecta quiebres de stock apenas ocurren, antes de perder ventas y posiciones en la góndola digital.",
        steps: [
          "Activa el seguimiento de stock por SKU y retailer.",
          "Define los umbrales de alerta.",
          "Revisa el panel de quiebres detectados.",
          "Prioriza la reposición según el impacto.",
        ],
      },
      {
        name: "Share of Search",
        description:
          "Mide qué tan visible es tu marca en las búsquedas de cada retailer frente a la competencia.",
        steps: [
          "Define las palabras clave de tu categoría.",
          "Selecciona los retailers a medir.",
          "Revisa tu participación frente a la competencia.",
          "Identifica oportunidades para subir posiciones.",
        ],
      },
    ],
    suggestions: [
      "Empieza por tus 20 SKUs de mayor venta para ver impacto rápido.",
      "Activa alertas de quiebre de stock antes de fechas clave (Cyber, Hot Sale).",
      "Compara tu precio y contenido contra la competencia, no solo lo tuyo.",
    ],
  },
];
