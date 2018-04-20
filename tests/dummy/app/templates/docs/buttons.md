# Buttons
Check out the examples below. All colors can be applied see {{docs-link 'Colors' 'docs.colors'}}

** Types **
- [Flat](#default-flat)
- [Outline](#outline)
- [Large](#large)
- [Large Outline](#large-outline)

## Default / Flat
{{#docs-demo as |demo|}}
  {{#demo.example name='button-default'}}
    <button class="button">Button Text</button>
    <button class="button hover">Button Text</button>
    <button class="button button__icon button__icon--download-gray">Button Text</button>
    <button class="button hover button__icon button__icon--download-gray">Button Text</button>
  {{/demo.example}}

  {{#docs-snippet name="button-default"}}
    <button class="button">Button Text</button>
    <button class="button hover">Button Text</button>
    <button class="button button__icon button__icon--download-gray">Button Text</button>
    <button class="button hover button__icon button__icon--download-gray">Button Text</button>
  {{/docs-snippet}}

  {{#demo.example name='button-default-errors'}}
    <h3 style="color:red;margin-bottom:10px;">Errors</h3>
    <button class="button button--error">Button Text</button>
    <button class="button button--error hover">Button Text</button>
    <button class="button button--error button__icon button__icon--download-gray">Button Text</button>
    <button class="button button--error hover button__icon button__icon--download-gray">Button Text</button>
  {{/demo.example}}

  {{#docs-snippet name="button-default-errors"}}
  <button class="button button--error">Button Text</button>
  <button class="button button--error hover">Button Text</button>
  <button class="button button--error button__icon button__icon--download-gray">Button Text</button>
  <button class="button button--error hover button__icon button__icon--download-gray">Button Text</button>
  {{/docs-snippet}}
{{/docs-demo}}

## Outline
{{#docs-demo as |demo|}}
  {{#demo.example name='button-outline'}}
    <button class="button button__outline">Button Text</button>
    <button class="button button__outline hover">Button Text</button>
    <button class="button button__outline button__icon button__icon--download-gray">Button Text</button>
    <button class="button button__outline hover button__icon button__icon--download-gray">Button Text</button>
  {{/demo.example}}

  {{#docs-snippet name="button-outline"}}
    <button class="button button__outline">Button Text</button>
    <button class="button button__outline hover">Button Text</button>
    <button class="button button__outline button__icon button__icon--download-gray">Button Text</button>
    <button class="button button__outline hover button__icon button__icon--download-gray">Button Text</button>
  {{/docs-snippet}}

  {{#demo.example name='button-outline-errors'}}
    <h3 style="color:red;margin-bottom:10px;">Errors</h3>
    <button class="button button--error button__outline">Button Text</button>
    <button class="button button--error button__outline hover">Button Text</button>
    <button class="button button--error button__outline button__icon button__icon--download-gray">Button Text</button>
    <button class="button button--error button__outline hover button__icon button__icon--download-gray">Button Text</button>
  {{/demo.example}}

  {{#docs-snippet name="button-outline-errors"}}
    <button class="button button--error button__outline">Button Text</button>
    <button class="button button--error button__outline hover">Button Text</button>
    <button class="button button--error button__outline button__icon button__icon--download-gray">Button Text</button>
    <button class="button button--error button__outline hover button__icon button__icon--download-gray">Button Text</button>
  {{/docs-snippet}}
{{/docs-demo}}

## Large
{{#docs-demo as |demo|}}
  {{#demo.example name='button-large'}}
    <button class="button button__large">Button Text</button>
    <button class="button button__large hover">Button Text</button>
    <button class="button button__large button__icon button__icon--download-gray">Button Text</button>
    <button class="button button__large hover button__icon button__icon--download-gray">Button Text</button>
  {{/demo.example}}

  {{#docs-snippet name="button-large"}}
    <button class="button button__large">Button Text</button>
    <button class="button button__large hover">Button Text</button>
    <button class="button button__large button__icon button__icon--download-gray">Button Text</button>
    <button class="button button__large hover button__icon button__icon--download-gray">Button Text</button>
  {{/docs-snippet}}

  {{#demo.example name='button-large-errors'}}
  <h3 style="color:red;margin-bottom:10px;">Errors</h3>
    <button class="button button--error button__large">Button Text</button>
    <button class="button button--error button__large hover">Button Text</button>
    <button class="button button--error button__large button__icon button__icon--download-gray">Button Text</button>
    <button class="button button--error button__large hover button__icon button__icon--download-gray">Button Text</button>
  {{/demo.example}}

  {{#docs-snippet name="button-large-errors"}}
    <button class="button button--error button__large">Button Text</button>
    <button class="button button--error button__large hover">Button Text</button>
    <button class="button button--error button__large button__icon button__icon--download-gray">Button Text</button>
    <button class="button button--error button__large hover button__icon button__icon--download-gray">Button Text</button>
  {{/docs-snippet}}
{{/docs-demo}}

## Large Outline
{{#docs-demo as |demo|}}
  {{#demo.example name='button-outline-large'}}
    <button class="button button__large button__outline">Button Text</button>
    <button class="button button__large button__outline hover">Button Text</button>
    <button class="button button__large button__outline button__icon button__icon--download-gray">Button Text</button>
    <button class="button button__large button__outline hover button__icon button__icon--download-gray">Button Text</button>
  {{/demo.example}}

  {{#docs-snippet name="button-outline-large"}}
    <button class="button button__large button__outline">Button Text</button>
    <button class="button button__large button__outline hover">Button Text</button>
    <button class="button button__large button__outline button__icon button__icon--download-gray">Button Text</button>
    <button class="button button__large button__outline hover button__icon button__icon--download-gray">Button Text</button>
  {{/docs-snippet}}

  {{#demo.example name='button-outline-large-errors'}}
    <h3 style="color:red;margin-bottom:10px;">Errors</h3>
    <button class="button button--error button__large button__outline">Button Text</button>
    <button class="button button--error button__large button__outline hover">Button Text</button>
    <button class="button button--error button__large button__outline button__icon button__icon--download-gray">Button Text</button>
    <button class="button button--error button__large button__outline hover button__icon button__icon--download-gray">Button Text</button>
  {{/demo.example}}

  {{#docs-snippet name="button-outline-large-errors"}}
    <button class="button button--error button__large button__outline">Button Text</button>
    <button class="button button--error button__large button__outline hover">Button Text</button>
    <button class="button button--error button__large button__outline button__icon button__icon--download-gray">Button Text</button>
    <button class="button button--error button__large button__outline hover button__icon button__icon--download-gray">Button Text</button>
  {{/docs-snippet}}
{{/docs-demo}}
