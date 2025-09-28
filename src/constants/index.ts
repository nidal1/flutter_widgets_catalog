const widgets = [
  // 1. Structure & Layout
  {
    name: 'Scaffold',
    description:
      'Implements the basic Material Design visual layout structure.',
    category: 'App Structure',
  },
  {
    name: 'AppBar',
    description:
      'A Material Design app bar that is typically used as a child of a Scaffold.',
    category: 'App Structure',
  },
  {
    name: 'SliverAppBar',
    description:
      'A Material Design app bar that integrates with a CustomScrollView.',
    category: 'App Structure',
  },
  {
    name: 'Drawer',
    description:
      'A Material Design panel that slides in horizontally from the edge of a Scaffold.',
    category: 'App Structure',
  },
  {
    name: 'BottomNavigationBar',
    description:
      'A Material Design widget that shows a row of navigation items at the bottom of the screen.',
    category: 'App Structure',
  },
  {
    name: 'MaterialApp',
    description:
      'A convenience widget that wraps a number of widgets that are commonly required for Material Design applications.',
    category: 'App Structure',
  },
  {
    name: 'Container',
    description:
      'A convenience widget that combines common painting, positioning, and sizing widgets.',
    category: 'Container & Sizing',
  },
  {
    name: 'Padding',
    description: 'A widget that insets its child by the given padding.',
    category: 'Container & Sizing',
  },
  {
    name: 'Center',
    description: 'A widget that centers its child within itself.',
    category: 'Container & Sizing',
  },
  {
    name: 'SizedBox',
    description: 'A box with a specified size.',
    category: 'Container & Sizing',
  },
  {
    name: 'Row',
    description: 'A widget that displays its children in a horizontal array.',
    category: 'Container & Sizing',
  },
  {
    name: 'Column',
    description: 'A widget that displays its children in a vertical array.',
    category: 'Container & Sizing',
  },
  {
    name: 'Stack',
    description:
      'A widget that positions its children relative to the edges of its box.',
    category: 'Container & Sizing',
  },
  {
    name: 'Expanded',
    description: 'A widget that expands a child of a Row, Column, or Flex.',
    category: 'Container & Sizing',
  },

  // 2. Buttons & Actions
  {
    name: 'ElevatedButton',
    description: 'A Material Design elevated button.',
    category: 'Standard Buttons',
  },
  {
    name: 'FilledButton',
    description:
      'A Material Design filled button, a contained button with a solid background color.',
    category: 'Standard Buttons',
  },
  {
    name: 'OutlinedButton',
    description:
      'A Material Design button with a thin border and no fill color.',
    category: 'Standard Buttons',
  },
  {
    name: 'TextButton',
    description:
      'A Material Design button that looks like a flat piece of text.',
    category: 'Standard Buttons',
  },
  {
    name: 'IconButton',
    description:
      'A picture printed on a Material widget that reacts to touches.',
    category: 'Standard Buttons',
  },
  {
    name: 'FloatingActionButton (FAB)',
    description:
      'A circular icon button that hovers over content to promote a primary, or most common, action in an application.',
    category: 'Standard Buttons',
  },

  // Menus & Popups
  {
    name: 'AlertDialog',
    description: 'A Material Design alert dialog.',
    category: 'Menus & Popups',
  },
  {
    name: 'PopupMenuButton',
    description:
      'Displays a menu when pressed and calls onSelected when the menu is dismissed because an item was selected.',
    category: 'Menus & Popups',
  },
  {
    name: 'DropdownButton',
    description:
      'A button that, when pressed, displays a list of items from which to choose.',
    category: 'Menus & Popups',
  },
  {
    name: 'SnackBar',
    description:
      'A lightweight message with an optional action which briefly displays at the bottom of the screen.',
    category: 'Menus & Popups',
  },
  {
    name: 'Tooltip',
    description:
      'A textual label that appears when the user hovers over, focuses on, or long-presses a widget.',
    category: 'Menus & Popups',
  },

  // 3. Data Display & Input
  {
    name: 'Text',
    description: 'A run of text with a single style.',
    category: 'Data Display',
  },
  {
    name: 'Icon',
    description: 'A graphical icon widget drawn from a font.',
    category: 'Data Display',
  },
  {
    name: 'Image',
    description: 'A widget that displays an image.',
    category: 'Data Display',
  },
  {
    name: 'Card',
    description:
      'A Material Design card: a panel with slightly rounded corners and an elevation shadow.',
    category: 'Data Display',
  },
  {
    name: 'Chip',
    description:
      'A compact element that represents an input, attribute, or action.',
    category: 'Data Display',
  },

  {
    name: 'CircularProgressIndicator',
    description:
      'A circular progress indicator, which spins to indicate that the application is busy.',
    category: 'Data Display',
  },
  {
    name: 'TextField',
    description: 'A text input field that allows users to enter and edit text.',
    category: 'Input Fields',
  },
  {
    name: 'TextFormField',
    description: 'A TextField that integrates with a Form.',
    category: 'Input Fields',
  },
  {
    name: 'InputDecoration',
    description:
      'The visual decoration for a Material Design text field, such as labels, icons, and borders.',
    category: 'Input Fields',
  },
  {
    name: 'Form',
    description:
      'An optional container for grouping and validating multiple form fields.',
    category: 'Input Fields',
  },
  // 4. Lists Views & Slivers
  {
    name: 'ListView',
    description: 'A scrollable list of widgets arranged linearly.',
    category: 'List Views',
  },
  {
    name: 'GridView',
    description: 'A scrollable, 2D array of widgets.',
    category: 'List Views',
  },
  {
    name: 'CustomScrollView',
    description:
      'A ScrollView that creates custom scroll effects using slivers.',
    category: 'List Views',
  },
  {
    name: 'SliverList',
    description:
      'A sliver that places multiple box children in a linear array along the main axis.',
    category: 'Slivers',
  },
  {
    name: 'SliverGrid',
    description: 'A Material Design alert dialog.',
    category: 'Slivers',
  },

  // 5. Theming & Effects
  {
    name: 'Theme',
    description:
      'Applies a theme to descendant widgets. A theme describes the colors and typographic choices for an application.',
    category: 'Theming',
  },
  {
    name: 'ThemeData',
    description:
      'Defines the configuration of the overall visual Theme for a MaterialApp or a widget subtree.',
    category: 'Theming',
  },
  {
    name: 'MediaQuery',
    description:
      'Establishes a subtree in which media queries resolve to the given data.',
    category: 'Theming',
  },
  {
    name: 'ColorScheme',
    description:
      'A set of 30 colors based on the Material spec that can be used to configure the color properties of most components.',
    category: 'Theming',
  },
  {
    name: 'BackdropFilter',
    description:
      'A widget that applies a filter to the existing painted content and then paints the child.',
    category: 'Effects',
  },
  {
    name: 'BoxShadow',
    description:
      'A shadow cast by a box. The BoxShadow is not a widget but a class used in BoxDecoration.',
    category: 'Effects',
  },
  {
    name: 'Opacity',
    description: 'A widget that makes its child partially transparent.',
    category: 'Effects',
  },
  {
    name: 'Transform',
    description:
      'A widget that applies a perspective transformation to its child.',
    category: 'Effects',
  },
];

const categories = [
  'All',
  'Structure & Layout',
  'Buttons & Actions',
  'Menus & Popups',
  'Data Display & Input',
  'Lists Views & Slivers',
  'Theming & Effects',
];

const categoryMap: Record<string, string[]> = {
  'Structure & Layout': ['App Structure', 'Container & Sizing'],
  'Buttons & Actions': ['Standard Buttons'],
  'Menus & Popups': ['Menus & Popups'],
  'Data Display & Input': ['Data Display', 'Input Fields', 'Selection'],
  'Lists Views & Slivers': ['List Views', 'Slivers'],
  'Theming & Effects': ['Theming', 'Effects'],
};
export { widgets, categories, categoryMap };
