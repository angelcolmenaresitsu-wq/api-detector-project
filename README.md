# Práctica 12: Detector de APIs

Proyecto desarrollado con arquitectura modular para detectar el soporte de APIs nativas en el navegador web del usuario y sincronizar el estado con un backend desarrollado en Python con Flask.

## 📂 Estructura del Proyecto

```text
api-detector-project/
├── backend/
│   ├── app.py           # Endpoints y servidor Flask
│   ├── models.py        # Modelo de datos para las detecciones
│   └── requirements.txt # Dependencias del proyecto
├── frontend/
│   ├── index.html       # Estructura del detector
│   ├── style.css        # Estilos visuales
│   └── app.js           # Lógica de detección e integración HTTP
└── README.md