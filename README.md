# Como acceder a la aplicación

La manera más fácil de acceder a la aplicación es a través de:\
[https://neobanks.netlify.app/](https://neobanks.netlify.app/)\
He subido la aplicación a través de netlify con GitHub Actions.\
\
Si preferís descargar el código ahora os explico cómo.\
\
## Descargar la aplicación

Para descargarla desde GitHub, hay dos maneras:\

### En zip

Desde la misma pestanya del repositorio,en el botón verde que pone "Code", se despliegan unas opciones. Al darle en la opcion "Download ZIP" se nos descargará el proyecto.\

### Desde terminal

Desde una terminal bash, usar el comando: \
git clone [https://github.com/Marcsc99/NeoBanks.git](https://github.com/Marcsc99/NeoBanks.git) \
Se os descargará el código en el sitio desde donde hayáis abierto la terminal.\

## Arrancar el proyecto

Ya en el directorio del proyecto, se puede usar:\

### `npm start`

Arranca el proyecto en modo desarrollo\
Acceder a [http://localhost:3000](http://localhost:3000) para verlo desde tu navegador.\
\
Si haces cambios, al guardar se recargará la página.\

### `npm run build`

Hace una build de la app y la guarda en la carpeta `build`.\
Optimiza y minifica la build automáticamente para un mejor performance.\

### `npm run lint`

Para tener un código limpio y consistente en todos los componentes, he instalado y usado eslint.\
Al ejecutar este comando te arregla los errores existentes que pueda manejar y te indica el resto. \

## Porqué he decidio hacerlo únicamente con Reactjs

La razón principal es porque lo tengo mucho más a mano al utilizarlo diariamente. Después, ya que tiene que ser para móbil y para web, se que se puede hacer muy responsive para los dos simplemente con Reactjs, y no veía la necesidad de hacerlo diferente. Estoy muy contento con el resultado tanto en tamaño de pc como con el de móbil.\

## Librerias utilizadas

### styled-components

Para los estilos, he hecho uso de styled-components, que me permite una mayor modulación, al poder usarlos en diferentes sitios cambiando las características con props. \

### react-chartjs-2

Para las gráficas que había, me he lanzado a usar react-chartjs-2 por primera vez. Ha sido todo un aprendizaje y estoy contento con el resultado. \

### redux

He usado redux para el control de información a través de la aplicación. En este caso no había nada que compartir, así que lo he usado para guardar el estado del tamaño de la pantalla para mejorar el responsive. Lo he mezclado con hooks de react para que sea más modular y quede un código más limpio. \

### react-router-dom

Para estar preparado por si se tenían que hacer más pantallas, he usadp react-router-dom para controlar el flujo de la aplicación a través de rutas. \

## Architectura del proyecto

│   .eslintrc.js\
│   .gitignore\
│   package-lock.json\
│   package.json\
│   README.md\
│\
├───.github\
│   └───workflows\
│           main.yml\
│\
├───node_modules\
│\
├───public\
│       index.html\
│\
└───src\
    │   index.js\
    │\
    ├───assets\
    │   ├───img\
    │   │       arrow-up.png\
    │   │       compass.png\
    │   │       graphIcon.png\
    │   │       icon.png\
    │   │       logo-neobank.png\
    │   │       settings.png\
    │   │       userIcon.png\
    │   │\
    │   └───styles\
    │           style.css\
    │\
    ├───common\
    │   └───utils\
    │           updateDeviceType.js\
    │           windowSizes.js\
    │\
    ├───components\
    │   ├───app\
    │   │       App.js\
    │   │\
    │   ├───container\
    │   │   │   Container.js\
    │   │   │   index.js\
    │   │   │\
    │   │   ├───conversion\
    │   │   │       Conversion.js\
    │   │   │       index.js\
    │   │   │\
    │   │   ├───mobile-navbar\
    │   │   │       index.js\
    │   │   │       MobileNavBar.js\
    │   │   │\
    │   │   ├───month-transactions\
    │   │   │       index.js\
    │   │   │       MonthTransactions.js\
    │   │   │\
    │   │   ├───today-transactions\
    │   │   │       index.js\
    │   │   │       TodayTransactions.js\
    │   │   │\
    │   │   ├───transactions-last-year\
    │   │   │       index.js\
    │   │   │       TransactionsLastYear.js\
    │   │   │\
    │   │   └───weekly-expenses\
    │   │           index.js\
    │   │           WeeklyExpenses.js\
    │   │\
    │   ├───dash-text\
    │   │       DashText.js\
    │   │       index.js\
    │   │\
    │   ├───dashboard\
    │   │       Dashboard.js\
    │   │       index.js\
    │   │\
    │   ├───header\
    │   │       Header.js\
    │   │       index.js\
    │   │\
    │   └───styled-components\
    │           StyledBG.js\
    │           StyledContainer.js\
    │           StyledDashText.js\
    │           StyledHeader.js\
    │           StyledInfo.js\
    │           StyledItem.js\
    │           StyledLine.js\
    │           StyledMiniCircle.js\
    │           StyledMobileNavBar.js\
    │           StyledProgressCircle.js\
    │           Wrapper.js\
    │\
    └───deviceHelper\
            deviceTypeController.js\