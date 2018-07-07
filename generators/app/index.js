'use strict';
const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);

    this.argument('arguments', {
      type: Array,
      required: true
    });
    this.componentName = this.options.arguments[0];
  }

  paths() {
    this.destinationRoot(`${this.destinationRoot()}/src/components/`);
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath(`MyComponent.vue`),
      this.destinationPath(`${this.componentName}.vue`),
      {
        name: this.componentName
      }
    );
  }
};
