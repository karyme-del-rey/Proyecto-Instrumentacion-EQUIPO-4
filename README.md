# Sistema de Control e Instrumentación — Columna de Absorción

Sitio web interactivo para el proyecto final de Instrumentación Industrial.  
**ESIQIE — Instituto Politécnico Nacional** | Grupo 5IV81, Equipo 4.

## Estructura del Proyecto

```
├── index.html          # Página principal
├── styles.css          # Estilos personalizados
├── script.js           # Interactividad y animaciones
├── assets/
│   └── images/         # Diagramas e imágenes del proyecto
│       ├── pfd.png             # Diagrama de Flujo de Procesos
│       ├── dti.png             # Diagrama de Tubería e Instrumentación
│       ├── lazo-nivel.jpg      # Lazo de control de nivel
│       ├── lazo-presion.jpg    # Lazo de control de presión
│       └── lazo-temperatura.jpg # Lazo de control de temperatura
└── README.md
```

## Tecnologías

- HTML5, CSS3, JavaScript (vanilla)
- [TailwindCSS](https://tailwindcss.com/) — utilidades CSS vía CDN
- [GSAP + ScrollTrigger](https://greensock.com/gsap/) — animaciones y scroll effects
- [Lucide Icons](https://lucide.dev/) — iconografía
- [Chart.js](https://www.chartjs.org/) — gráficas (disponible)

## Ejecutar localmente

No se requiere instalación. Abre `index.html` directamente en el navegador o usa un servidor local:

```bash
# Opción 1: Python
python -m http.server 8000

# Opción 2: Node.js (si tienes npx)
npx serve .

# Opción 3: VS Code
# Instala la extensión "Live Server" y haz clic en "Go Live"
```

Luego abre `http://localhost:8000` en tu navegador.

## Desplegar en GitHub Pages

1. Sube el repositorio a GitHub.
2. Ve a **Settings > Pages**.
3. En **Source**, selecciona la rama `main` y la carpeta `/ (root)`.
4. Haz clic en **Save**.
5. Tu sitio estará disponible en `https://<tu-usuario>.github.io/<nombre-repo>/`.

## Equipo

- Gallo Díaz Rafael David
- Lopez Paz Azalia
- Martínez Alamilla Dulce María
- Pareja Hernandez Carlos Alexis
- Ramirez Paz Barbara
- Zenderos Ramírez Karyme

**Profesor:** Ing. José Ignacio Rauda Rodríguez
