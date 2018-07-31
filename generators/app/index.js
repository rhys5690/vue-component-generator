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
    this.parentDirectory = this.options.arguments[1] ? this.options.arguments[1] : 'components';
  }

  paths() {
    this.destinationRoot(`${this.destinationRoot()}/src/${this.parentDirectory}/${this.componentName}`);
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath(`MyComponent/MyComponent.vue`),
      this.destinationPath(`${this.componentName}.vue`),
      {
        name: this.componentName
      }
    );
  }
};
