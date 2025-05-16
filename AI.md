---
name: ww-checkbox
description: A visual checkbox icon component that displays a check mark. Must be used within ww-input-checkbox for proper functionality
keywords: [checkbox, check, icon, form, input, selection]
---

#### ww-checkbox

***Purpose:***
Displays a customizable checkbox icon that serves as the visual representation for checkbox inputs. This component provides the check mark icon and visual states for checkbox functionality.

***Properties:***
- icon: string - The icon to display. Default: 'lucide/check'
- color: string - The color of the icon. Default: inherit
- fontSize: number - The size of the icon in pixels. Default: 16

***Events:***
None

***Exposed Element Actions:***
None

***Notes:***
- Must be used within a ww-input-checkbox component for proper checkbox functionality
- Renders SVG icons dynamically using the new SystemIcon type
- Automatically inherits color from parent element using currentColor
- Shows a placeholder check icon in editor mode when no icon is set

***Example:***
<elements>
{"uid":0,"tag":"97a63460-5c25-4d74-ac1f-86693c2e4a08","name":"Checkbox Icon","states":[{"id":"_wwHover","label":"hover"},{"id":"zna45c","label":"checked"}],"props":{"default":{"icon":"lucide/check","color":"#0075df00","fontSize":14},"zna45c_default":{"color":"#0A89FF"}},"styles":{"default":{"width":"24px","border":"1px solid #c2c7ce","cursor":"pointer","height":"24px","display":"flex","borderRadius":"4px","alignItems":"center","justifyContent":"center"},"_wwHover_default":{"backgroundColor":"rgba(0, 117, 223, 0.1)"}}}
</elements>