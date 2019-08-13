# Taller de React+Redux+Saga con Typescript

<div align="center">
    <img width="200" src="./docs/images/logoasl.png" alt="Aula Software Libre de la UCO">
</div>

<div align="center">

![built by developers](https://img.shields.io/badge/built%20by-developers%20%3C%2F%3E-orange.svg?longCache=true&style=for-the-badge) ![made with typescript](https://img.shields.io/badge/made%20with-typescript-green.svg?longCache=true&style=for-the-badge) ![uses git](https://img.shields.io/badge/uses-git-blue.svg?longCache=true&style=for-the-badge)

</div>

Este taller forma parte de las actividades del [Aula de Software Libre de la
Universidad de Córdoba](https://www.uco.es/aulasoftwarelibre).

## Desarrollo del taller

El taller está etiquetado en once pasos:

- **step0**: Commit inicial
- **step1**: Instalación de react-semantic-ui
- **step2**: Desarrollo de un componente contador básico (no interactivo)
- **step3**: Contador implementado con una clase con estado
- **step4**: Implementación del contador con componente (función pura) y con contenedor
- **step5**: Refactorizado a un componente funcional con hooks
- **step6**: Introducción a High order components
- **step7**: Refactorización con Redux: contenedor+componente
- **step8**: Refactorización con Redux y hooks: componente sin contenedor
- **step9**: Refactorización son Saga: acciones asíncronas
- **step10**: Conexión con APIs usando Saga
- **step11**: Componente de carga y error

Puedes cambiar a un nuevo paso ejecutando `git checkout stepNN`, siendo NN el número del paso.

> **ATENCIÓN**: Recuerda hacer `yarn install` después de hacer checkout a un nuevo _step_, ya que puede haber nuevas dependencias. Después es recomendable reiniciar la aplicación y volver a ejecutar `yarn start`. A partir del _step10_ se necesita iniciar el servidor de la API. Ejecuta `yarn mock:api` en otra terminal.
