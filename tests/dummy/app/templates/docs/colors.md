# Colors
- [Palette](#palette)
- [Background Colors](#background-colors)
- [Text Colors](#text-colors)
- [Border Colors](#border-colors)

{{#docs-demo as |demo|}}
  {{#demo.example name="palette"}}
    {{freestyle-palette
      colorPalette=colorPalette
      title="Popular Pays Color Palette"
      description="The following palette colors can be applied to text or backgrounds see below"
    }}
  {{/demo.example}}
{{/docs-demo}}

## Background Colors
{{#docs-demo as |demo|}}
  {{#demo.example name='bg-colors'}}
    <div class="bg--green-light">
      ...some content
    </div>
  {{/demo.example}}

  {{#docs-snippet name='bg-colors'}}
    <div class="bg--green-light">
      ...some content
    </div>
  {{/docs-snippet}}
{{/docs-demo}}

## Text Colors
{{#docs-demo as |demo|}}
  {{#demo.example name='text-colors'}}
    <div class="color--green-light">
      ...some content
    </div>
  {{/demo.example}}

  {{#docs-snippet name='text-colors'}}
    <div class="color--green-light">
      ...some content
    </div>
  {{/docs-snippet}}
{{/docs-demo}}

## Border Colors
{{#docs-demo as |demo|}}
  {{#demo.example name='border-colors'}}
    <div class="border--green-light" style="border-width:1px">
      ...some content
    </div>
  {{/demo.example}}

  {{#docs-snippet name='border-colors'}}
  <div class="border--green-light" style="border-width:1px">
    ...some content
  </div>
  {{/docs-snippet}}
{{/docs-demo}}
