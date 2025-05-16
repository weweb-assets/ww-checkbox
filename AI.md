---
name: ww-checkbox
description: A customizable checkbox icon component that displays a visual check mark for form inputs and selections
keywords: checkbox, check, icon, form, input, selection
---

#### Checkbox

Properties:
- `icon`: `string` - The icon to display. Default: `'check'`
- `color`: `string` - The color of the icon. Default: `inherit`
- `fontSize`: `number` - The size of the icon in pixels. Default: `16`

Behavior:
- The component renders an SVG icon dynamically
- Uses the new icon system with `SystemIcon` type
- Automatically inherits color from parent element using `currentColor`
- Shows a placeholder check icon in editor mode when no icon is set

Example:
<elements>
{"uid":0,"tag":"ww-checkbox","props":{"default":{"icon":"check","color":"#000000","fontSize":16}},"styles":{"default":{"display":"flex","alignItems":"center","justifyContent":"center"}}}
</elements>