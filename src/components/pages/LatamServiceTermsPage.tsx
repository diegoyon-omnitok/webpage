/**
 * Términos y Condiciones del Servicio (documento contractual, plataforma Omnitok).
 *
 * Página NO LISTADA: se accede solo por URL directa. No va en el menú, ni en el
 * footer, ni en el sitemap, y se sirve con robots noindex/nofollow desde el
 * catch-all de /es. El texto reproduce el documento legal entregado por la empresa.
 */

type Block =
  | { type: "p"; text: string }
  | { type: "list"; items: { term?: string; text: string }[] }
  | { type: "table"; head: string[]; rows: string[][] };

type Section = {
  id: string;
  number: string;
  title: string;
  blocks: Block[];
};

const LAST_UPDATE = "11 de agosto de 2026";

const INTRO =
  "Los presentes Términos y Condiciones (en adelante, los “Términos”) regulan la contratación y el uso de la plataforma Omnitok, operada por Pervasive Mind SpA (RUT 76.312.442-8), representada legalmente por Eduardo Yon Bazán (en adelante, “Omnitok” o “el Proveedor”). Estos Términos forman parte integral de toda Orden de Servicio, cotización o propuesta comercial suscrita entre el Proveedor y el cliente que contrata el servicio (en adelante, “el Cliente”), y se encuentran publicados y disponibles de manera permanente en omnitok.com. La firma o aprobación de una Orden de Servicio, o el uso efectivo de la plataforma, implican el conocimiento y la aceptación plena de estos Términos.";

const sections: Section[] = [
  {
    id: "definiciones",
    number: "1",
    title: "Definiciones",
    blocks: [
      {
        type: "list",
        items: [
          {
            term: "Plataforma / Omnitok",
            text: "la suite de software de comercio digital provista bajo modalidad SaaS, en sus módulos Connect, Content, Assistant y Digital Shelf Analytics (DSA).",
          },
          {
            term: "Orden de Servicio (OS)",
            text: "el documento comercial que individualiza al Cliente, los módulos, mercados, alcance, precios y condiciones particulares del servicio contratado.",
          },
          {
            term: "Módulos",
            text: "los componentes funcionales de la Plataforma que el Cliente puede contratar de forma individual o combinada, en perfil Marca.",
          },
          {
            term: "Información Confidencial",
            text: "toda información, datos, contenidos, estrategias, catálogos, precios y credenciales que una parte comparta con la otra con motivo del servicio.",
          },
        ],
      },
    ],
  },
  {
    id: "objeto",
    number: "2",
    title: "Objeto y modalidad del servicio",
    blocks: [
      {
        type: "p",
        text: "El Proveedor otorga al Cliente una suscripción de acceso a la Plataforma, en los módulos y mercados indicados en la Orden de Servicio, bajo modalidad SaaS (Software as a Service), accesible de forma remota a través de los entornos habilitados por el Proveedor. El servicio se presta en perfil Marca y no contempla la entrega de código fuente, licencias de propiedad ni instalaciones locales. Los módulos operan de forma independiente o combinada según lo contratado.",
      },
    ],
  },
  {
    id: "alcance",
    number: "3",
    title: "Alcance, modularidad y escalabilidad",
    blocks: [
      {
        type: "p",
        text: "El alcance del servicio se define en la Orden de Servicio por módulos, mercados, categorías, SKUs, retailers y marcas, según corresponda. El servicio es modular y escalable: el Cliente puede sumar o dar de baja módulos, categorías, marcas, SKUs, retailers o países durante la vigencia, con ajuste proporcional del precio conforme a la lista vigente. El valor del módulo DSA considera el alcance de retailers, marcas competidoras y categorías descrito en la Orden; cualquier ampliación o modificación de dicho alcance requerirá una recotización del módulo.",
      },
    ],
  },
  {
    id: "inicio-facturacion",
    number: "4",
    title: "Inicio del servicio y ciclos de facturación",
    blocks: [
      {
        type: "p",
        text: "El inicio del servicio es el indicado en la Orden de Servicio. Los ciclos de facturación se computan a partir de la fecha de firma o aprobación de la Orden, la que determina el día de corte de cada ciclo mensual. El servicio se factura mensualmente conforme a la sección de precios de la Orden, con valores fijos por país; el total corresponde a la suma de los mercados contratados.",
      },
    ],
  },
  {
    id: "precio",
    number: "5",
    title: "Precio, condiciones de pago y reajuste",
    blocks: [
      {
        type: "p",
        text: "Los precios se expresan en dólares de los Estados Unidos de América (USD) y no incluyen impuestos locales (IVA, retenciones u otros aplicables en cada país). El precio base considera pago anual upfront. Las modalidades de pago fraccionado aplican los recargos indicados en la siguiente tabla, salvo acuerdo distinto en la Orden de Servicio:",
      },
      {
        type: "table",
        head: ["Modalidad de pago", "Recargo"],
        rows: [
          ["Anual upfront", "Sin recargo"],
          ["Semestral", "+2%"],
          ["Trimestral", "+3%"],
          ["Mensual", "+5%"],
        ],
      },
      {
        type: "p",
        text: "El plazo de pago es de 30 días desde la emisión de la factura. El valor del servicio se reajustará anualmente según la variación del Índice de Precios al Consumidor (IPC) de los Estados Unidos de América. El atraso en el pago podrá facultar al Proveedor a suspender el acceso a la Plataforma, previa notificación, sin que ello afecte las obligaciones de pago devengadas.",
      },
    ],
  },
  {
    id: "plazo",
    number: "6",
    title: "Plazo, vigencia y renovación",
    blocks: [
      {
        type: "p",
        text: "La Orden de Servicio tiene una vigencia mínima de doce (12) meses contados desde el inicio del servicio, sin posibilidad de salida anticipada, salvo pacto expreso en contrario. Transcurrido dicho plazo, la suscripción se renueva automáticamente por períodos sucesivos de igual duración, salvo aviso en contrario de cualquiera de las partes con al menos treinta (30) días de anticipación al vencimiento del período vigente.",
      },
    ],
  },
  {
    id: "sla",
    number: "7",
    title: "Implementación, niveles de servicio (SLA) y soporte",
    blocks: [
      {
        type: "p",
        text: "El Proveedor entregará soporte técnico y acompañamiento durante la implementación y la vigencia del servicio. Para los módulos que requieran integración con terceros (retailers o marketplaces), su implementación está sujeta a la disponibilidad y aprobación técnica de dichos terceros; la activación final de scripts en las PDP o en el ecommerce propio es responsabilidad del retailer o de la marca, con acompañamiento de Omnitok.",
      },
      {
        type: "table",
        head: ["Concepto", "Compromiso de referencia"],
        rows: [
          [
            "Disponibilidad de la plataforma",
            "99,5% mensual, excluyendo mantenimientos programados y causas de fuerza mayor.",
          ],
          [
            "Ventana de soporte",
            "Días hábiles, horario laboral (zona horaria del Proveedor), vía canales habilitados.",
          ],
          [
            "Tiempo de respuesta — incidencia crítica",
            "Dentro del siguiente día hábil desde el reporte.",
          ],
          [
            "Mantenimientos programados",
            "Notificados con anticipación razonable, preferentemente en ventanas de bajo tráfico.",
          ],
        ],
      },
      {
        type: "p",
        text: "Los niveles de servicio específicos, cuando se pacten, se detallan en la Orden de Servicio correspondiente y prevalecen sobre los valores de referencia anteriores. La frecuencia de los reportes del módulo DSA (diaria/semanal) se rige por lo descrito en el alcance del módulo.",
      },
    ],
  },
  {
    id: "obligaciones",
    number: "8",
    title: "Obligaciones del Cliente",
    blocks: [
      {
        type: "p",
        text: "El Cliente se obliga a: (i) proporcionar de forma oportuna los inputs de onboarding y la información necesaria para la prestación del servicio; (ii) mantener la titularidad y la licitud del contenido, marcas y datos de producto que aporte; (iii) usar la Plataforma conforme a estos Términos y a la legislación aplicable; (iv) resguardar las credenciales de acceso entregadas; y (v) facilitar las gestiones, autorizaciones y coordinaciones con retailers y terceros que sean necesarias para las integraciones contratadas.",
      },
    ],
  },
  {
    id: "confidencialidad",
    number: "9",
    title: "Confidencialidad y protección de la información",
    blocks: [
      {
        type: "p",
        text: "Cada parte se obliga a mantener estricta confidencialidad sobre la Información Confidencial de la otra, no divulgándola ni utilizándola para fines distintos a la ejecución del servicio, adoptando medidas de seguridad razonables. Esta obligación se mantendrá durante la relación contractual y por tres (3) años posteriores a su término. Toda la información y datos generados o procesados en el marco del servicio son y seguirán siendo de propiedad exclusiva del Cliente.",
      },
    ],
  },
  {
    id: "propiedad-intelectual",
    number: "10",
    title: "Propiedad intelectual",
    blocks: [
      {
        type: "p",
        text: "La Plataforma Omnitok, su software, código, algoritmos, modelos de inteligencia artificial, metodologías de homologación y product matching, dashboards, plantillas de contenido y todo desarrollo o componente tecnológico asociado, son y seguirán siendo de propiedad exclusiva del Proveedor. Estos Términos y las Órdenes de Servicio no transfieren derecho de propiedad intelectual alguno sobre dichos elementos, otorgándose únicamente una licencia de uso limitada, no exclusiva e intransferible durante la vigencia. Las marcas, contenidos, catálogos y datos de producto aportados por el Cliente son de su propiedad exclusiva; los reportes e insights generados para el Cliente podrán ser utilizados por éste para sus fines internos de negocio.",
      },
    ],
  },
  {
    id: "datos-personales",
    number: "11",
    title: "Protección de datos personales",
    blocks: [
      {
        type: "p",
        text: "Cada parte cumplirá la normativa de protección de datos personales aplicable en los mercados contratados. Cuando el Proveedor trate datos personales por cuenta del Cliente con motivo del servicio, lo hará únicamente conforme a las instrucciones del Cliente y para las finalidades del servicio, aplicando medidas de seguridad razonables. Las integraciones de mensajería con terceros (por ejemplo, WhatsApp / Meta) se rigen adicionalmente por los términos y costos de dichos proveedores, facturados directamente al Cliente según volumen y país.",
      },
    ],
  },
  {
    id: "responsabilidad",
    number: "12",
    title: "Limitación de responsabilidad",
    blocks: [
      {
        type: "p",
        text: "El servicio se presta conforme a las funcionalidades descritas en la Orden de Servicio. El Proveedor no será responsable por interrupciones, demoras o resultados atribuibles a terceros (retailers, marketplaces, proveedores de mensajería o conectividad), a la validación y publicación propia de cada canal, o a causas de fuerza mayor. Salvo dolo o culpa grave, la responsabilidad total del Proveedor por cualquier concepto se limita al monto efectivamente pagado por el Cliente por el servicio durante los tres (3) meses anteriores al hecho que origine la responsabilidad. En ningún caso el Proveedor responderá por daños indirectos, lucro cesante o pérdida de datos imputables al Cliente o a terceros.",
      },
    ],
  },
  {
    id: "integraciones",
    number: "13",
    title: "Integraciones con terceros",
    blocks: [
      {
        type: "p",
        text: "La implementación de módulos que requieran integración con retailers, marketplaces u otros terceros está sujeta a la disponibilidad, políticas y aprobación técnica de dichos terceros. La actualización y publicación final del contenido en los sitios de destino depende de los procesos propios de cada retailer o plataforma. Omnitok acompaña estas gestiones, sin que ello constituya garantía sobre plazos o resultados controlados por terceros.",
      },
    ],
  },
  {
    id: "sap",
    number: "14",
    title: "Strategic Agreement Program (SAP)",
    blocks: [
      {
        type: "p",
        text: "Cuando una Orden de Servicio contemple un Strategic Agreement Program, el Proveedor bonificará total o parcialmente uno o más módulos —habitualmente Content— durante un período inicial acordado, con el objetivo de acelerar el despliegue y demostrar valor. Al término del período, el módulo bonificado se activa a su tarifa según lo pactado. Como contraparte esencial de la bonificación, el Cliente se obliga a desplegar todos sus esfuerzos razonables para lograr, durante dicho período, las integraciones con los retailers de interés del proyecto, facilitando las gestiones, autorizaciones y coordinaciones necesarias.",
      },
    ],
  },
  {
    id: "ley-aplicable",
    number: "15",
    title: "Ley aplicable y resolución de controversias",
    blocks: [
      {
        type: "p",
        text: "Estos Términos y las Órdenes de Servicio se regirán e interpretarán conforme a las leyes de la República de Chile o del país del Cliente en los mercados contratados, según la naturaleza de la materia. Las controversias se resolverán, en primer lugar, de buena fe mediante negociación directa; de no prosperar, podrán someterse a los tribunales ordinarios de la ciudad de Santiago de Chile o de la jurisdicción del Cliente, conforme lo acuerden las partes.",
      },
    ],
  },
  {
    id: "disposiciones-generales",
    number: "16",
    title: "Disposiciones generales",
    blocks: [
      {
        type: "list",
        items: [
          {
            term: "Aceptación",
            text: "la firma o aprobación por correo electrónico de una Orden de Servicio, o el uso de la Plataforma, implican la aceptación de estos Términos.",
          },
          {
            term: "Prelación",
            text: "en caso de discrepancia, las condiciones particulares de la Orden de Servicio prevalecen sobre estos Términos generales.",
          },
          {
            term: "Modificaciones",
            text: "el Proveedor podrá actualizar estos Términos, publicando la versión vigente en omnitok.com; las Órdenes en curso se rigen por la versión aceptada al momento de su suscripción.",
          },
          {
            term: "Cesión",
            text: "ninguna parte podrá ceder su posición contractual sin autorización previa y por escrito de la otra.",
          },
          {
            term: "Acuerdo completo",
            text: "estos Términos, junto con la Orden de Servicio respectiva, constituyen el acuerdo completo entre las partes y reemplazan cualquier comunicación o propuesta previa.",
          },
        ],
      },
    ],
  },
];

function BlockRenderer({ block }: { block: Block }) {
  if (block.type === "p") {
    return <p className="text-[15px] leading-[1.85] text-gray-600">{block.text}</p>;
  }

  if (block.type === "list") {
    return (
      <ul className="space-y-4">
        {block.items.map((item) => (
          <li key={item.term ?? item.text} className="flex gap-3">
            <span
              className="mt-[10px] h-1.5 w-1.5 flex-none rounded-full"
              style={{ background: "#FF6AAA" }}
            />
            <p className="text-[15px] leading-[1.85] text-gray-600">
              {item.term && (
                <strong className="font-bold text-gray-900">{item.term}: </strong>
              )}
              {item.text}
            </p>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div className="w-full overflow-x-auto rounded-2xl border border-gray-200">
      <table className="w-full min-w-[360px] border-collapse text-left">
        <thead>
          <tr style={{ background: "#F3F1FA" }}>
            {block.head.map((cell) => (
              <th
                key={cell}
                className="px-5 py-3.5 text-xs font-bold uppercase tracking-[0.12em]"
                style={{ color: "#4D4A9D" }}
              >
                {cell}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {block.rows.map((row) => (
            <tr key={row[0]} className="border-t border-gray-100">
              <td className="px-5 py-4 text-sm font-semibold text-gray-900">{row[0]}</td>
              <td className="px-5 py-4 text-sm leading-relaxed text-gray-600">{row[1]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function LatamServiceTermsPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden pt-28 pb-20 gradient-hero">
        <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/60">
            Documento legal
          </p>
          <h1 className="mt-5 text-4xl font-bold leading-tight text-white lg:text-[42px]">
            Términos y Condiciones del Servicio
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/70">
            Condiciones que regulan la contratación y el uso de la plataforma Omnitok en
            modalidad SaaS, en todos los mercados donde opera el servicio.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5">
            {["Plataforma Omnitok", "Modalidad SaaS", "Versión 1"].map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold text-white/80"
              >
                {chip}
              </span>
            ))}
            <span
              className="rounded-full px-4 py-1.5 text-xs font-semibold text-white"
              style={{ background: "#FF6AAA" }}
            >
              Actualizado: {LAST_UPDATE}
            </span>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 translate-y-px">
          <svg viewBox="0 0 1440 40" fill="none" className="block w-full">
            <path
              d="M0 40L1440 40L1440 10C1200 40 900 0 720 10C540 20 240 0 0 10L0 40Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* ── Cuerpo ── */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-16">
            {/* Índice */}
            <aside className="hidden lg:block">
              <div className="sticky top-28">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-gray-400">
                  Contenido
                </p>
                <nav className="mt-5 space-y-1 border-l border-gray-200">
                  {sections.map((section) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className="-ml-px block border-l-2 border-transparent py-1.5 pl-4 text-[13px] leading-snug text-gray-500 transition-colors hover:border-current hover:text-[#4D4A9D]"
                    >
                      <span className="font-semibold text-gray-400">{section.number}.</span>{" "}
                      {section.title}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Contenido */}
            <div className="min-w-0">
              {/* Preámbulo */}
              <div
                className="rounded-3xl border p-7 lg:p-9"
                style={{ background: "#F6F5FC", borderColor: "#E6E3F5" }}
              >
                <p className="text-[15px] leading-[1.85] text-gray-700">{INTRO}</p>
              </div>

              {/* Secciones */}
              <div className="mt-14 space-y-14">
                {sections.map((section) => (
                  <section key={section.id} id={section.id} className="scroll-mt-28">
                    <div className="flex items-baseline gap-3">
                      <span
                        className="text-sm font-extrabold"
                        style={{ color: "#FF6AAA" }}
                      >
                        {section.number}
                      </span>
                      <h2 className="text-[22px] font-bold leading-snug text-gray-900 lg:text-2xl">
                        {section.title}
                      </h2>
                    </div>
                    <div className="mt-5 space-y-5">
                      {section.blocks.map((block, index) => (
                        <BlockRenderer key={index} block={block} />
                      ))}
                    </div>
                  </section>
                ))}
              </div>

              {/* Pie del documento */}
              <div className="mt-16 rounded-3xl border border-gray-200 bg-gray-50 p-7 lg:p-8">
                <p className="text-sm font-bold text-gray-900">
                  Términos y Condiciones del Servicio Omnitok
                </p>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  Pervasive Mind SpA · RUT 76.312.442-8 · Publicados en omnitok.com
                </p>
                <p className="mt-4 text-xs leading-relaxed text-gray-500">
                  Documento informativo. No requiere firma: forma parte integral de toda Orden
                  de Servicio aceptada por el Cliente. Última actualización: {LAST_UPDATE}.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
