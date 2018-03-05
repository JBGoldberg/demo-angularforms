# DemoAngularforms

## About the App

This app was developed as `Demo` of front-end development and does not include back-end.

The chosen technology was Angular 5 because it can generate very well structured and scalable application. Time constraints and my personal preference for this technology played an essential role in this choose. Despite that, the software may be perfectly programmed using only technologies like `jquery` or `vanilla javascript`.

Installation: download the repository using `git clone`, install the required with `npm install` and check for problems with `ng test`.
Once everything is working fine, run the development server using `ng serve` and start examining the files. Finally, you can build a final version with 'ng build'. Check the new created folder ./dist for files to final deploy.

Opportunities os improvement: For lack of time, I let two issues aside in this codebase. First, the tests are too basics. I want to expand them and improve their sophistication. The second issue is the tooltip balloon colours. I found a problem with the styles for the tooltip related to CSS style propagation to deep into the DOM element structure. To locate a solution will be required further investigation.

## About the Tools
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.8. To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

The component library for layout is [Bootstrap](https://getbootstrap.com/) version 4.0.0.

For icons [font-awesome](https://fontawesome.com/) version 4.7.0. was selected.

## About the Development Environment

Testing: Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

Development Server: Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

App Building: Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.
