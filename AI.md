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
{"uid":0,"tag":"ww-checkbox","props":{"default":{"icon":"lucide/check","color":"#000000","fontSize":16}},"styles":{"default":{"display":"flex","alignItems":"center","justifyContent":"center"}}}
</elements>