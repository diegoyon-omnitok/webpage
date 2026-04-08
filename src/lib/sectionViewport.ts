/**
 * Bloques al menos altura de viewport, contenido centrado verticalmente (misma escala que el hero del home).
 * Usar pt seguro para navbar fija (~4rem) en la primera sección de cada página.
 */
export const sectionViewport = "min-h-[100dvh] flex flex-col justify-center box-border w-full";

/**
 * Hero de módulo (foto + copy): alto según contenido. Evita justify-center del viewport, que dejaba
 * franja morada bajo la imagen antes de ClientsBar.
 */
export const productHeroSection =
  "relative w-full box-border overflow-hidden gradient-hero";

export const sectionViewportStart = "min-h-[100dvh] flex flex-col justify-start box-border w-full";
