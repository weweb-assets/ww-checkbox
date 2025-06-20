---
name: ww-checkbox
description: A visual checkbox icon component that displays a check mark. Must be used within ww-input-checkbox for proper functionality
keywords: [checkbox, check, icon, form, input, selection]
---

#### ww-checkbox

***Purpose:***
Displays a customizable checkbox icon that serves as the visual representation for checkbox inputs. This component provides the check mark icon and visual states for checkbox functionality. It automatically receives state information from its parent ww-input-checkbox component.

***Properties:***
- icon: string - The icon to display. Default: 'lucide/check'
- color: string - The color of the icon. Default: inherit

***Events:***
None

***Exposed Element Actions:***
None

***Notes:***
- Must be used within a ww-input-checkbox component for proper checkbox functionality
- Size is controlled by setting width and height styles on the component (not fontSize)
- Automatically receives 'checked' state from parent ww-input-checkbox via Vue's provide/inject
- Icon visibility is controlled automatically using opacity (0 when unchecked, 1 when checked)
- Shows a placeholder check icon in editor mode when no icon is set
- The component handles all visual states automatically - DO NOT manually manage states

***Example:***
<elements>
{"uid":0,"tag":"ww-checkbox","name":"Checkbox Icon","props":{"default":{"icon":"lucide/check","color":"#0A89FF"}},"styles":{"default":{"width":"24px","height":"24px"}}}
</elements>

**Note:** This component should ONLY be used within the checkbox slot of ww-input-checkbox. The parent component handles all state management and interactivity.