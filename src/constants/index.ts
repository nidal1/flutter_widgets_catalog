const widgets = [
  // 1. Structure & Layout
  {
    name: 'Scaffold',
    description:
      'Implements the basic Material Design visual layout structure.',
    category: 'App Structure',
    docUrl: 'https://api.flutter.dev/flutter/material/Scaffold-class.html',
    code: `
import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: const Text('Scaffold Example'),
        ),
        body: const Center(child: Text('Hello, world!')),
      ),
    );
  }
}`,
    properties: [
      { name: 'appBar', type: 'AppBar', defaultValue: 'null' },
      { name: 'body', type: 'Widget', defaultValue: 'null' },
      { name: 'floatingActionButton', type: 'Widget', defaultValue: 'null' },
      { name: 'drawer', type: 'Widget', defaultValue: 'null' },
      { name: 'backgroundColor', type: 'Color', defaultValue: 'null' },
    ],
  },
  {
    name: 'AppBar',
    description:
      'A Material Design app bar that is typically used as a child of a Scaffold.',
    category: 'App Structure',
    docUrl: 'https://api.flutter.dev/flutter/material/AppBar-class.html',
    code: `
import 'package:flutter/material.dart';

void main() => runApp(const MyApp());

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: const Text('AppBar Example'),
          actions: <Widget>[
            IconButton(
              icon: const Icon(Icons.add_alert),
              tooltip: 'Show Snackbar',
              onPressed: () {},
            ),
          ],
        ),
        body: const Center(
          child: Text('This is the home page'),
        ),
      ),
    );
  }
}`,
    properties: [
      { name: 'leading', type: 'Widget', defaultValue: 'null' },
      { name: 'title', type: 'Widget', defaultValue: 'null' },
      { name: 'actions', type: 'List<Widget>', defaultValue: 'null' },
      { name: 'elevation', type: 'double', defaultValue: '4.0' },
      { name: 'backgroundColor', type: 'Color', defaultValue: 'null' },
    ],
  },
  {
    name: 'SliverAppBar',
    description:
      'A Material Design app bar that integrates with a CustomScrollView.',
    category: 'App Structure',
    docUrl: 'https://api.flutter.dev/flutter/material/SliverAppBar-class.html',
    code: `
import 'package:flutter/material.dart';

void main() => runApp(const MyApp());

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return const MaterialApp(
      home: Scaffold(
        body: CustomScrollView(
          slivers: <Widget>[
            SliverAppBar(
              pinned: true,
              expandedHeight: 250.0,
              flexibleSpace: FlexibleSpaceBar(
                title: Text('SliverAppBar'),
              ),
            ),
            SliverFillRemaining(
              child: Center(child: Text('Scroll up!')),
            ),
          ],
        ),
      ),
    );
  }
}`,
    properties: [
      { name: 'expandedHeight', type: 'double', defaultValue: 'null' },
      { name: 'flexibleSpace', type: 'Widget', defaultValue: 'null' },
      { name: 'pinned', type: 'bool', defaultValue: 'false' },
      { name: 'floating', type: 'bool', defaultValue: 'false' },
      { name: 'snap', type: 'bool', defaultValue: 'false' },
    ],
  },
  {
    name: 'Drawer',
    description:
      'A Material Design panel that slides in horizontally from the edge of a Scaffold.',
    category: 'App Structure',
    docUrl: 'https://api.flutter.dev/flutter/material/Drawer-class.html',
    code: `
import 'package:flutter/material.dart';

void main() => runApp(const MyApp());

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(title: const Text('Drawer Example')),
        drawer: Drawer(
          child: ListView(
            padding: EdgeInsets.zero,
            children: const <Widget>[
              DrawerHeader(
                decoration: BoxDecoration(
                  color: Colors.blue,
                ),
                child: Text('Drawer Header'),
              ),
              ListTile(
                title: Text('Item 1'),
              ),
              ListTile(
                title: Text('Item 2'),
              ),
            ],
          ),
        ),
        body: const Center(child: Text('Swipe from left to open drawer')),
      ),
    );
  }
}`,
    properties: [
      { name: 'child', type: 'Widget', defaultValue: 'null' },
      { name: 'elevation', type: 'double', defaultValue: '16.0' },
      { name: 'width', type: 'double', defaultValue: '304.0' },
    ],
  },
  {
    name: 'BottomNavigationBar',
    description:
      'A Material Design widget that shows a row of navigation items at the bottom of the screen.',
    category: 'App Structure',
    docUrl:
      'https://api.flutter.dev/flutter/material/BottomNavigationBar-class.html',
    code: `
import 'package:flutter/material.dart';

void main() => runApp(const MyApp());

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(title: const Text('BottomNavigationBar')),
        body: const Center(child: Text('Page Content')),
        bottomNavigationBar: BottomNavigationBar(
          items: const <BottomNavigationBarItem>[
            BottomNavigationBarItem(
              icon: Icon(Icons.home),
              label: 'Home',
            ),
            BottomNavigationBarItem(
              icon: Icon(Icons.business),
              label: 'Business',
            ),
            BottomNavigationBarItem(
              icon: Icon(Icons.school),
              label: 'School',
            ),
          ],
        ),
      ),
    );
  }
}`,
    properties: [
      {
        name: 'items',
        type: 'List<BottomNavigationBarItem>',
        defaultValue: '[]',
      },
      { name: 'onTap', type: 'ValueChanged<int>', defaultValue: 'null' },
      { name: 'currentIndex', type: 'int', defaultValue: '0' },
      { name: 'elevation', type: 'double', defaultValue: '8.0' },
    ],
  },
  {
    name: 'MaterialApp',
    description:
      'A convenience widget that wraps a number of widgets that are commonly required for Material Design applications.',
    category: 'App Structure',
    docUrl: 'https://api.flutter.dev/flutter/material/MaterialApp-class.html',
    code: `
import 'package:flutter/material.dart';

void main() {
  runApp(
    MaterialApp(
      home: Scaffold(
        appBar: AppBar(title: const Text('MaterialApp Example')),
        body: const Center(
          child: Text('Hello, World!'),
        ),
      ),
    ),
  );
}`,
    properties: [
      { name: 'home', type: 'Widget', defaultValue: 'null' },
      { name: 'theme', type: 'ThemeData', defaultValue: 'null' },
      { name: 'darkTheme', type: 'ThemeData', defaultValue: 'null' },
      {
        name: 'routes',
        type: 'Map<String, WidgetBuilder>',
        defaultValue: '{}',
      },
    ],
  },
  {
    name: 'Container',
    description:
      'A convenience widget that combines common painting, positioning, and sizing widgets.',
    category: 'Container & Sizing',
    docUrl: 'https://api.flutter.dev/flutter/widgets/Container-class.html',
    code: `
import 'package:flutter/material.dart';

void main() => runApp(
  MaterialApp(
    home: Scaffold(
      body: Center(
        child: Container(
          width: 200.0,
          height: 200.0,
          color: Colors.blue,
          child: const Center(
            child: Text('Hello Container'),
          ),
        ),
      ),
    ),
  ),
);`,
    properties: [
      { name: 'child', type: 'Widget', defaultValue: 'null' },
      { name: 'color', type: 'Color', defaultValue: 'null' },
      { name: 'width', type: 'double', defaultValue: 'null' },
      { name: 'height', type: 'double', defaultValue: 'null' },
      { name: 'padding', type: 'EdgeInsetsGeometry', defaultValue: 'null' },
      { name: 'margin', type: 'EdgeInsetsGeometry', defaultValue: 'null' },
    ],
  },
  {
    name: 'Padding',
    description: 'A widget that insets its child by the given padding.',
    category: 'Container & Sizing',
    docUrl: 'https://api.flutter.dev/flutter/widgets/Padding-class.html',
    code: `
import 'package:flutter/material.dart';

void main() => runApp(
  MaterialApp(
    home: Scaffold(
      body: Center(
        child: Container(
          color: Colors.blue,
          child: const Padding(
            padding: EdgeInsets.all(32.0),
            child: Text('Padded Text'),
          ),
        ),
      ),
    ),
  ),
);`,
    properties: [
      { name: 'padding', type: 'EdgeInsetsGeometry', defaultValue: 'required' },
      { name: 'child', type: 'Widget', defaultValue: 'null' },
    ],
  },
  {
    name: 'Center',
    description: 'A widget that centers its child within itself.',
    category: 'Container & Sizing',
    docUrl: 'https://api.flutter.dev/flutter/widgets/Center-class.html',
    code: `
import 'package:flutter/material.dart';

void main() => runApp(
  const MaterialApp(
    home: Scaffold(
      body: Center(
        child: Text('Centered Text'),
      ),
    ),
  ),
);`,
    properties: [
      { name: 'child', type: 'Widget', defaultValue: 'null' },
      { name: 'widthFactor', type: 'double', defaultValue: 'null' },
      { name: 'heightFactor', type: 'double', defaultValue: 'null' },
    ],
  },
  {
    name: 'SizedBox',
    description: 'A box with a specified size.',
    category: 'Container & Sizing',
    docUrl: 'https://api.flutter.dev/flutter/widgets/SizedBox-class.html',
    code: `
import 'package:flutter/material.dart';

void main() => runApp(
  MaterialApp(
    home: Scaffold(
      body: Center(
        child: SizedBox(
          width: 200.0,
          height: 100.0,
          child: Container(
            color: Colors.amber,
            child: const Center(child: Text('SizedBox')),
          ),
        ),
      ),
    ),
  ),
);`,
    properties: [
      { name: 'width', type: 'double', defaultValue: 'null' },
      { name: 'height', type: 'double', defaultValue: 'null' },
      { name: 'child', type: 'Widget', defaultValue: 'null' },
    ],
  },
  {
    name: 'Row',
    description: 'A widget that displays its children in a horizontal array.',
    category: 'Container & Sizing',
    docUrl: 'https://api.flutter.dev/flutter/widgets/Row-class.html',
    code: `
import 'package:flutter/material.dart';

void main() => runApp(
  const MaterialApp(
    home: Scaffold(
      body: Center(
        child: Row(
          mainAxisAlignment: MainAxisAlignment.spaceEvenly,
          children: <Widget>[
            Icon(Icons.star),
            Icon(Icons.star),
            Icon(Icons.star),
          ],
        ),
      ),
    ),
  ),
);`,
    properties: [
      {
        name: 'children',
        type: 'List<Widget>',
        defaultValue: 'const <Widget>[]',
      },
      {
        name: 'mainAxisAlignment',
        type: 'MainAxisAlignment',
        defaultValue: 'MainAxisAlignment.start',
      },
      {
        name: 'crossAxisAlignment',
        type: 'CrossAxisAlignment',
        defaultValue: 'CrossAxisAlignment.center',
      },
      {
        name: 'mainAxisSize',
        type: 'MainAxisSize',
        defaultValue: 'MainAxisSize.max',
      },
    ],
  },
  {
    name: 'Column',
    description: 'A widget that displays its children in a vertical array.',
    category: 'Container & Sizing',
    docUrl: 'https://api.flutter.dev/flutter/widgets/Column-class.html',
    code: `
import 'package:flutter/material.dart';

void main() => runApp(
  const MaterialApp(
    home: Scaffold(
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.spaceEvenly,
          children: <Widget>[
            Text('First Item'),
            Text('Second Item'),
            Text('Third Item'),
          ],
        ),
      ),
    ),
  ),
);`,
    properties: [
      {
        name: 'children',
        type: 'List<Widget>',
        defaultValue: 'const <Widget>[]',
      },
      {
        name: 'mainAxisAlignment',
        type: 'MainAxisAlignment',
        defaultValue: 'MainAxisAlignment.start',
      },
      {
        name: 'crossAxisAlignment',
        type: 'CrossAxisAlignment',
        defaultValue: 'CrossAxisAlignment.center',
      },
      {
        name: 'mainAxisSize',
        type: 'MainAxisSize',
        defaultValue: 'MainAxisSize.max',
      },
    ],
  },
  {
    name: 'Stack',
    description:
      'A widget that positions its children relative to the edges of its box.',
    category: 'Container & Sizing',
    docUrl: 'https://api.flutter.dev/flutter/widgets/Stack-class.html',
    code: `
import 'package:flutter/material.dart';

void main() => runApp(
  MaterialApp(
    home: Scaffold(
      body: Center(
        child: Stack(
          alignment: Alignment.center,
          children: <Widget>[
            Container(width: 200, height: 200, color: Colors.red),
            Container(width: 150, height: 150, color: Colors.green),
            Container(width: 100, height: 100, color: Colors.blue),
          ],
        ),
      ),
    ),
  ),
);`,
    properties: [
      {
        name: 'children',
        type: 'List<Widget>',
        defaultValue: 'const <Widget>[]',
      },
      {
        name: 'alignment',
        type: 'AlignmentGeometry',
        defaultValue: 'AlignmentDirectional.topStart',
      },
      { name: 'fit', type: 'StackFit', defaultValue: 'StackFit.loose' },
    ],
  },
  {
    name: 'Expanded',
    description: 'A widget that expands a child of a Row, Column, or Flex.',
    category: 'Container & Sizing',
    docUrl: 'https://api.flutter.dev/flutter/widgets/Expanded-class.html',
    code: `
import 'package:flutter/material.dart';

void main() => runApp(
  MaterialApp(
    home: Scaffold(
      body: Column(
        children: <Widget>[
          Container(height: 100, color: Colors.blue),
          Expanded(
            child: Container(color: Colors.amber),
          ),
          Container(height: 100, color: Colors.blue),
        ],
      ),
    ),
  ),
);`,
    properties: [
      { name: 'flex', type: 'int', defaultValue: '1' },
      { name: 'child', type: 'Widget', defaultValue: 'required' },
    ],
  },

  // 2. Buttons & Actions
  {
    name: 'ElevatedButton',
    description: 'A Material Design elevated button.',
    category: 'Standard Buttons',
    docUrl:
      'https://api.flutter.dev/flutter/material/ElevatedButton-class.html',
    code: `
import 'package:flutter/material.dart';

void main() => runApp(
  MaterialApp(
    home: Scaffold(
      body: Center(
        child: ElevatedButton(
          onPressed: () {},
          child: const Text('Elevated Button'),
        ),
      ),
    ),
  ),
);`,
    properties: [
      { name: 'onPressed', type: 'VoidCallback?', defaultValue: 'required' },
      { name: 'child', type: 'Widget', defaultValue: 'required' },
      { name: 'style', type: 'ButtonStyle', defaultValue: 'null' },
    ],
  },
  {
    name: 'FilledButton',
    description:
      'A Material Design filled button, a contained button with a solid background color.',
    category: 'Standard Buttons',
    docUrl: 'https://api.flutter.dev/flutter/material/FilledButton-class.html',
    code: `
import 'package:flutter/material.dart';

void main() => runApp(
  MaterialApp(
    home: Scaffold(
      body: Center(
        child: FilledButton(
          onPressed: () {},
          child: const Text('Filled Button'),
        ),
      ),
    ),
  ),
);`,
    properties: [
      { name: 'onPressed', type: 'VoidCallback?', defaultValue: 'required' },
      { name: 'child', type: 'Widget', defaultValue: 'required' },
      { name: 'style', type: 'ButtonStyle', defaultValue: 'null' },
    ],
  },
  {
    name: 'OutlinedButton',
    description:
      'A Material Design button with a thin border and no fill color.',
    category: 'Standard Buttons',
    docUrl:
      'https://api.flutter.dev/flutter/material/OutlinedButton-class.html',
    code: `
import 'package:flutter/material.dart';

void main() => runApp(
  MaterialApp(
    home: Scaffold(
      body: Center(
        child: OutlinedButton(
          onPressed: () {},
          child: const Text('Outlined Button'),
        ),
      ),
    ),
  ),
);`,
    properties: [
      { name: 'onPressed', type: 'VoidCallback?', defaultValue: 'required' },
      { name: 'child', type: 'Widget', defaultValue: 'required' },
      { name: 'style', type: 'ButtonStyle', defaultValue: 'null' },
    ],
  },
  {
    name: 'TextButton',
    description:
      'A Material Design button that looks like a flat piece of text.',
    category: 'Standard Buttons',
    docUrl: 'https://api.flutter.dev/flutter/material/TextButton-class.html',
    code: `
import 'package:flutter/material.dart';

void main() => runApp(
  MaterialApp(
    home: Scaffold(
      body: Center(
        child: TextButton(
          onPressed: () {},
          child: const Text('Text Button'),
        ),
      ),
    ),
  ),
);`,
    properties: [
      { name: 'onPressed', type: 'VoidCallback?', defaultValue: 'required' },
      { name: 'child', type: 'Widget', defaultValue: 'required' },
      { name: 'style', type: 'ButtonStyle', defaultValue: 'null' },
    ],
  },
  {
    name: 'IconButton',
    description:
      'A picture printed on a Material widget that reacts to touches.',
    category: 'Standard Buttons',
    docUrl: 'https://api.flutter.dev/flutter/material/IconButton-class.html',
    code: `
import 'package:flutter/material.dart';

void main() => runApp(
  MaterialApp(
    home: Scaffold(
      body: Center(
        child: IconButton(
          icon: const Icon(Icons.thumb_up),
          onPressed: () {},
          tooltip: 'Like',
        ),
      ),
    ),
  ),
);`,
    properties: [
      { name: 'icon', type: 'Widget', defaultValue: 'required' },
      { name: 'onPressed', type: 'VoidCallback?', defaultValue: 'required' },
      { name: 'iconSize', type: 'double', defaultValue: '24.0' },
      { name: 'tooltip', type: 'String', defaultValue: 'null' },
    ],
  },
  {
    name: 'FloatingActionButton (FAB)',
    description:
      'A circular icon button that hovers over content to promote a primary, or most common, action in an application.',
    category: 'Standard Buttons',
    docUrl:
      'https://api.flutter.dev/flutter/material/FloatingActionButton-class.html',
    code: `
import 'package:flutter/material.dart';

void main() => runApp(
  MaterialApp(
    home: Scaffold(
      appBar: AppBar(title: const Text('FAB Example')),
      body: const Center(child: Text('Press the button!')),
      floatingActionButton: FloatingActionButton(
        onPressed: () {},
        child: const Icon(Icons.add),
      ),
    ),
  ),
);`,
    properties: [
      { name: 'child', type: 'Widget', defaultValue: 'required' },
      { name: 'onPressed', type: 'VoidCallback?', defaultValue: 'required' },
      { name: 'tooltip', type: 'String', defaultValue: 'null' },
      { name: 'backgroundColor', type: 'Color', defaultValue: 'null' },
    ],
  },

  // Menus & Popups
  {
    name: 'AlertDialog',
    description: 'A Material Design alert dialog.',
    category: 'Menus & Popups',
    docUrl: 'https://api.flutter.dev/flutter/material/AlertDialog-class.html',
    code: `
import 'package:flutter/material.dart';

void main() => runApp(const MyApp());

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        body: Center(
          child: Builder(
            builder: (context) => ElevatedButton(
              child: const Text('Show Dialog'),
              onPressed: () {
                showDialog(
                  context: context,
                  builder: (BuildContext context) => AlertDialog(
                    title: const Text('Alert'),
                    content: const Text('This is an alert dialog.'),
                    actions: <Widget>[
                      TextButton(
                        onPressed: () => Navigator.pop(context, 'OK'),
                        child: const Text('OK'),
                      ),
                    ],
                  ),
                );
              },
            ),
          ),
        ),
      ),
    );
  }
}`,
    properties: [
      { name: 'title', type: 'Widget', defaultValue: 'null' },
      { name: 'content', type: 'Widget', defaultValue: 'null' },
      { name: 'actions', type: 'List<Widget>', defaultValue: 'null' },
      { name: 'elevation', type: 'double', defaultValue: '24.0' },
    ],
  },
  {
    name: 'PopupMenuButton',
    description:
      'Displays a menu when pressed and calls onSelected when the menu is dismissed because an item was selected.',
    category: 'Menus & Popups',
    docUrl:
      'https://api.flutter.dev/flutter/material/PopupMenuButton-class.html',
    code: `
import 'package:flutter/material.dart';

void main() => runApp(
  MaterialApp(
    home: Scaffold(
      appBar: AppBar(
        title: const Text('PopupMenuButton'),
        actions: [
          PopupMenuButton<String>(
            onSelected: (String result) {},
            itemBuilder: (BuildContext context) => <PopupMenuEntry<String>>[
              const PopupMenuItem<String>(
                value: 'Option 1',
                child: Text('Option 1'),
              ),
              const PopupMenuItem<String>(
                value: 'Option 2',
                child: Text('Option 2'),
              ),
            ],
          ),
        ],
      ),
      body: const Center(child: Text('Click the menu on the top right')),
    ),
  ),
);`,
    properties: [
      {
        name: 'itemBuilder',
        type: 'PopupMenuItemBuilder<T>',
        defaultValue: 'required',
      },
      {
        name: 'onSelected',
        type: 'PopupMenuItemSelected<T>',
        defaultValue: 'null',
      },
      { name: 'icon', type: 'Widget', defaultValue: 'null' },
    ],
  },
  {
    name: 'DropdownButton',
    description:
      'A button that, when pressed, displays a list of items from which to choose.',
    category: 'Menus & Popups',
    docUrl:
      'https://api.flutter.dev/flutter/material/DropdownButton-class.html',
    code: `
import 'package:flutter/material.dart';

void main() => runApp(
  MaterialApp(
    home: Scaffold(
      body: Center(
        child: DropdownButton<String>(
          value: 'One',
          items: <String>['One', 'Two', 'Free', 'Four']
              .map<DropdownMenuItem<String>>((String value) {
            return DropdownMenuItem<String>(
              value: value,
              child: Text(value),
            );
          }).toList(),
          onChanged: (String? newValue) {},
        ),
      ),
    ),
  ),
);`,
    properties: [
      {
        name: 'items',
        type: 'List<DropdownMenuItem<T>>',
        defaultValue: 'required',
      },
      { name: 'value', type: 'T', defaultValue: 'null' },
      { name: 'onChanged', type: 'ValueChanged<T?>', defaultValue: 'required' },
      { name: 'hint', type: 'Widget', defaultValue: 'null' },
    ],
  },
  {
    name: 'SnackBar',
    description:
      'A lightweight message with an optional action which briefly displays at the bottom of the screen.',
    category: 'Menus & Popups',
    docUrl: 'https://api.flutter.dev/flutter/material/SnackBar-class.html',
    code: `
import 'package:flutter/material.dart';

void main() => runApp(const MyApp());

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        body: Center(
          child: Builder(
            builder: (context) => ElevatedButton(
              onPressed: () {
                final snackBar = SnackBar(content: const Text('Yay! A SnackBar!'));
                ScaffoldMessenger.of(context).showSnackBar(snackBar);
              },
              child: const Text('Show SnackBar'),
            ),
          ),
        ),
      ),
    );
  }
}`,
    properties: [
      { name: 'content', type: 'Widget', defaultValue: 'required' },
      { name: 'action', type: 'SnackBarAction', defaultValue: 'null' },
      { name: 'duration', type: 'Duration', defaultValue: '4 seconds' },
    ],
  },
  {
    name: 'Tooltip',
    description:
      'A textual label that appears when the user hovers over, focuses on, or long-presses a widget.',
    category: 'Menus & Popups',
    docUrl: 'https://api.flutter.dev/flutter/material/Tooltip-class.html',
    code: `
import 'package:flutter/material.dart';

void main() => runApp(
  const MaterialApp(
    home: Scaffold(
      body: Center(
        child: Tooltip(
          message: 'I am a Tooltip',
          child: Icon(Icons.info),
        ),
      ),
    ),
  ),
);`,
    properties: [
      { name: 'message', type: 'String', defaultValue: 'required' },
      { name: 'child', type: 'Widget', defaultValue: 'null' },
      { name: 'height', type: 'double', defaultValue: '32.0' },
    ],
  },

  // 3. Data Display & Input
  {
    name: 'Text',
    description: 'A run of text with a single style.',
    category: 'Data Display',
    docUrl: 'https://api.flutter.dev/flutter/widgets/Text-class.html',
    code: `
import 'package:flutter/material.dart';

void main() => runApp(
  const MaterialApp(
    home: Scaffold(
      body: Center(
        child: Text(
          'Hello, World!',
          style: TextStyle(fontSize: 24),
        ),
      ),
    ),
  ),
);`,
    properties: [
      { name: 'data', type: 'String', defaultValue: 'required' },
      { name: 'style', type: 'TextStyle', defaultValue: 'null' },
      { name: 'textAlign', type: 'TextAlign', defaultValue: 'null' },
      { name: 'maxLines', type: 'int', defaultValue: 'null' },
    ],
  },
  {
    name: 'Icon',
    description: 'A graphical icon widget drawn from a font.',
    category: 'Data Display',
    docUrl: 'https://api.flutter.dev/flutter/widgets/Icon-class.html',
    code: `
import 'package:flutter/material.dart';

void main() => runApp(
  const MaterialApp(
    home: Scaffold(
      body: Center(
        child: Icon(
          Icons.favorite,
          color: Colors.pink,
          size: 48.0,
        ),
      ),
    ),
  ),
);`,
    properties: [
      { name: 'icon', type: 'IconData', defaultValue: 'required' },
      { name: 'size', type: 'double', defaultValue: '24.0' },
      { name: 'color', type: 'Color', defaultValue: 'null' },
    ],
  },
  {
    name: 'Image',
    description: 'A widget that displays an image.',
    category: 'Data Display',
    docUrl: 'https://api.flutter.dev/flutter/widgets/Image-class.html',
    code: `
import 'package:flutter/material.dart';

void main() => runApp(
  const MaterialApp(
    home: Scaffold(
      body: Center(
        child: Image(
          image: NetworkImage('https://flutter.github.io/assets-for-api-docs/assets/widgets/owl.jpg'),
        ),
      ),
    ),
  ),
);`,
    properties: [
      { name: 'image', type: 'ImageProvider', defaultValue: 'required' },
      { name: 'width', type: 'double', defaultValue: 'null' },
      { name: 'height', type: 'double', defaultValue: 'null' },
      { name: 'fit', type: 'BoxFit', defaultValue: 'null' },
    ],
  },
  {
    name: 'Card',
    description:
      'A Material Design card: a panel with slightly rounded corners and an elevation shadow.',
    category: 'Data Display',
    docUrl: 'https://api.flutter.dev/flutter/material/Card-class.html',
    code: `
import 'package:flutter/material.dart';

void main() => runApp(
  const MaterialApp(
    home: Scaffold(
      body: Center(
        child: Card(
          child: SizedBox(
            width: 300,
            height: 100,
            child: Center(child: Text('This is a Card')),
          ),
        ),
      ),
    ),
  ),
);`,
    properties: [
      { name: 'child', type: 'Widget', defaultValue: 'null' },
      { name: 'color', type: 'Color', defaultValue: 'null' },
      { name: 'elevation', type: 'double', defaultValue: '1.0' },
      {
        name: 'shape',
        type: 'ShapeBorder',
        defaultValue: 'RoundedRectangleBorder',
      },
    ],
  },
  {
    name: 'Chip',
    description:
      'A compact element that represents an input, attribute, or action.',
    category: 'Data Display',
    docUrl: 'https://api.flutter.dev/flutter/material/Chip-class.html',
    code: `
import 'package:flutter/material.dart';

void main() => runApp(
  const MaterialApp(
    home: Scaffold(
      body: Center(
        child: Chip(
          avatar: CircleAvatar(
            backgroundColor: Colors.blue,
            child: Text('A'),
          ),
          label: Text('Aaron Burr'),
        ),
      ),
    ),
  ),
);`,
    properties: [
      { name: 'label', type: 'Widget', defaultValue: 'required' },
      { name: 'avatar', type: 'Widget', defaultValue: 'null' },
      { name: 'backgroundColor', type: 'Color', defaultValue: 'null' },
      { name: 'onDeleted', type: 'VoidCallback', defaultValue: 'null' },
    ],
  },

  {
    name: 'CircularProgressIndicator',
    description:
      'A circular progress indicator, which spins to indicate that the application is busy.',
    category: 'Data Display',
    docUrl:
      'https://api.flutter.dev/flutter/material/CircularProgressIndicator-class.html',
    code: `
import 'package:flutter/material.dart';

void main() => runApp(
  const MaterialApp(
    home: Scaffold(
      body: Center(
        child: CircularProgressIndicator(),
      ),
    ),
  ),
);`,
    properties: [
      { name: 'value', type: 'double', defaultValue: 'null (indeterminate)' },
      { name: 'backgroundColor', type: 'Color', defaultValue: 'null' },
      { name: 'strokeWidth', type: 'double', defaultValue: '4.0' },
    ],
  },
  {
    name: 'TextField',
    description: 'A text input field that allows users to enter and edit text.',
    category: 'Input Fields',
    docUrl: 'https://api.flutter.dev/flutter/material/TextField-class.html',
    code: `
import 'package:flutter/material.dart';

void main() => runApp(
  const MaterialApp(
    home: Scaffold(
      body: Padding(
        padding: EdgeInsets.all(16.0),
        child: TextField(
          decoration: InputDecoration(
            border: OutlineInputBorder(),
            labelText: 'Enter your name',
          ),
        ),
      ),
    ),
  ),
);`,
    properties: [
      {
        name: 'controller',
        type: 'TextEditingController',
        defaultValue: 'null',
      },
      {
        name: 'decoration',
        type: 'InputDecoration',
        defaultValue: 'InputDecoration()',
      },
      { name: 'keyboardType', type: 'TextInputType', defaultValue: 'null' },
      { name: 'obscureText', type: 'bool', defaultValue: 'false' },
    ],
  },
  {
    name: 'TextFormField',
    description: 'A TextField that integrates with a Form.',
    category: 'Input Fields',
    docUrl: 'https://api.flutter.dev/flutter/material/TextFormField-class.html',
    code: `
import 'package:flutter/material.dart';

void main() => runApp(
  MaterialApp(
    home: Scaffold(
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Form(
          child: TextFormField(
            decoration: const InputDecoration(
              labelText: 'Enter something',
            ),
            validator: (value) {
              if (value == null || value.isEmpty) {
                return 'Please enter some text';
              }
              return null;
            },
          ),
        ),
      ),
    ),
  ),
);`,
    properties: [
      {
        name: 'controller',
        type: 'TextEditingController',
        defaultValue: 'null',
      },
      {
        name: 'decoration',
        type: 'InputDecoration',
        defaultValue: 'InputDecoration()',
      },
      {
        name: 'validator',
        type: 'FormFieldValidator<String>',
        defaultValue: 'null',
      },
    ],
  },
  {
    name: 'InputDecoration',
    description:
      'The visual decoration for a Material Design text field, such as labels, icons, and borders.',
    category: 'Input Fields',
    docUrl:
      'https://api.flutter.dev/flutter/material/InputDecoration-class.html',
    code: `
import 'package:flutter/material.dart';

void main() => runApp(
  const MaterialApp(
    home: Scaffold(
      body: Padding(
        padding: EdgeInsets.all(16.0),
        child: TextField(
          decoration: InputDecoration(
            icon: Icon(Icons.person),
            hintText: 'What do people call you?',
            labelText: 'Name *',
          ),
        ),
      ),
    ),
  ),
);`,
    properties: [
      { name: 'icon', type: 'Widget', defaultValue: 'null' },
      { name: 'labelText', type: 'String', defaultValue: 'null' },
      { name: 'hintText', type: 'String', defaultValue: 'null' },
      { name: 'border', type: 'InputBorder', defaultValue: 'null' },
    ],
  },
  {
    name: 'Form',
    description:
      'An optional container for grouping and validating multiple form fields.',
    category: 'Input Fields',
    docUrl: 'https://api.flutter.dev/flutter/widgets/Form-class.html',
    code: `
import 'package:flutter/material.dart';

void main() => runApp(
  MaterialApp(
    home: Scaffold(
      body: MyCustomForm(),
    ),
  ),
);

class MyCustomForm extends StatefulWidget {
  @override
  _MyCustomFormState createState() => _MyCustomFormState();
}

class _MyCustomFormState extends State<MyCustomForm> {
  final _formKey = GlobalKey<FormState>();

  @override
  Widget build(BuildContext context) {
    return Form(
      key: _formKey,
      child: Column(
        children: <Widget>[
          TextFormField(
            validator: (value) {
              if (value == null || value.isEmpty) {
                return 'Please enter some text';
              }
              return null;
            },
          ),
          ElevatedButton(
            onPressed: () {
              if (_formKey.currentState!.validate()) {
                ScaffoldMessenger.of(context).showSnackBar(
                  const SnackBar(content: Text('Processing Data')),
                );
              }
            },
            child: const Text('Submit'),
          ),
        ],
      ),
    );
  }
}`,
    properties: [
      { name: 'key', type: 'GlobalKey<FormState>', defaultValue: 'null' },
      { name: 'child', type: 'Widget', defaultValue: 'required' },
    ],
  },
  // 4. Lists Views & Slivers
  {
    name: 'ListView',
    description: 'A scrollable list of widgets arranged linearly.',
    category: 'List Views',
    docUrl: 'https://api.flutter.dev/flutter/widgets/ListView-class.html',
    code: `
import 'package:flutter/material.dart';

void main() => runApp(
  MaterialApp(
    home: Scaffold(
      body: ListView(
        children: const <Widget>[
          ListTile(title: Text('Item 1')),
          ListTile(title: Text('Item 2')),
          ListTile(title: Text('Item 3')),
        ],
      ),
    ),
  ),
);`,
    properties: [
      {
        name: 'children',
        type: 'List<Widget>',
        defaultValue: 'const <Widget>[]',
      },
      { name: 'scrollDirection', type: 'Axis', defaultValue: 'Axis.vertical' },
      { name: 'itemExtent', type: 'double', defaultValue: 'null' },
    ],
  },
  {
    name: 'GridView',
    description: 'A scrollable, 2D array of widgets.',
    category: 'List Views',
    docUrl: 'https://api.flutter.dev/flutter/widgets/GridView-class.html',
    code: `
import 'package:flutter/material.dart';

void main() => runApp(
  MaterialApp(
    home: Scaffold(
      body: GridView.count(
        crossAxisCount: 2,
        children: List.generate(10, (index) {
          return Center(
            child: Text(
              'Item \$index',
            ),
          );
        }),
      ),
    ),
  ),
);`,
    properties: [
      {
        name: 'gridDelegate',
        type: 'SliverGridDelegate',
        defaultValue: 'required',
      },
      {
        name: 'children',
        type: 'List<Widget>',
        defaultValue: 'const <Widget>[]',
      },
      { name: 'scrollDirection', type: 'Axis', defaultValue: 'Axis.vertical' },
    ],
  },
  {
    name: 'CustomScrollView',
    description:
      'A ScrollView that creates custom scroll effects using slivers.',
    category: 'List Views',
    docUrl:
      'https://api.flutter.dev/flutter/widgets/CustomScrollView-class.html',
    code: `
import 'package:flutter/material.dart';

void main() => runApp(
  const MaterialApp(
    home: Scaffold(
      body: CustomScrollView(
        slivers: <Widget>[
          SliverAppBar(
            title: Text('CustomScrollView'),
            floating: true,
            expandedHeight: 200,
          ),
          SliverList(
            delegate: SliverChildBuilderDelegate(
              (context, index) => ListTile(title: Text('Item #\$index')),
              childCount: 50,
            ),
          ),
        ],
      ),
    ),
  ),
);`,
    properties: [
      {
        name: 'slivers',
        type: 'List<Widget>',
        defaultValue: 'const <Widget>[]',
      },
      { name: 'scrollDirection', type: 'Axis', defaultValue: 'Axis.vertical' },
    ],
  },
  {
    name: 'SliverList',
    description:
      'A sliver that places multiple box children in a linear array along the main axis.',
    category: 'Slivers',
    docUrl: 'https://api.flutter.dev/flutter/widgets/SliverList-class.html',
    code: `
import 'package:flutter/material.dart';

void main() => runApp(
  const MaterialApp(
    home: Scaffold(
      body: CustomScrollView(
        slivers: <Widget>[
          SliverList(
            delegate: SliverChildBuilderDelegate(
              (BuildContext context, int index) {
                return Container(
                  color: index.isEven ? Colors.amber[300] : Colors.blue[300],
                  height: 100.0,
                  child: Center(
                    child: Text('Item \$index'),
                  ),
                );
              },
              childCount: 20,
            ),
          ),
        ],
      ),
    ),
  ),
);`,
    properties: [
      {
        name: 'delegate',
        type: 'SliverChildDelegate',
        defaultValue: 'required',
      },
    ],
  },
  {
    name: 'SliverGrid',
    description: 'A Material Design alert dialog.',
    category: 'Slivers',
    docUrl: 'https://api.flutter.dev/flutter/widgets/SliverGrid-class.html',
    code: `
import 'package:flutter/material.dart';

void main() => runApp(
  const MaterialApp(
    home: Scaffold(
      body: CustomScrollView(
        slivers: <Widget>[
          SliverGrid(
            gridDelegate: SliverGridDelegateWithMaxCrossAxisExtent(
              maxCrossAxisExtent: 200.0,
              mainAxisSpacing: 10.0,
              crossAxisSpacing: 10.0,
              childAspectRatio: 4.0,
            ),
            delegate: SliverChildBuilderDelegate(
              (BuildContext context, int index) {
                return Container(
                  alignment: Alignment.center,
                  color: Colors.teal[100 * (index % 9)],
                  child: Text('Grid Item \$index'),
                );
              },
              childCount: 20,
            ),
          ),
        ],
      ),
    ),
  ),
);`,
    properties: [
      {
        name: 'gridDelegate',
        type: 'SliverGridDelegate',
        defaultValue: 'required',
      },
      {
        name: 'delegate',
        type: 'SliverChildDelegate',
        defaultValue: 'required',
      },
    ],
  },

  // 5. Theming & Effects
  {
    name: 'Theme',
    description:
      'Applies a theme to descendant widgets. A theme describes the colors and typographic choices for an application.',
    category: 'Theming',
    docUrl: 'https://api.flutter.dev/flutter/material/Theme-class.html',
    code: `
import 'package:flutter/material.dart';

void main() => runApp(
  MaterialApp(
    theme: ThemeData(
      brightness: Brightness.dark,
      primaryColor: Colors.lightBlue[800],
    ),
    home: Scaffold(
      appBar: AppBar(
        title: const Text('Theme Example'),
      ),
      body: const Center(
        child: Text('This app uses a dark theme.'),
      ),
    ),
  ),
);`,
    properties: [
      { name: 'data', type: 'ThemeData', defaultValue: 'required' },
      { name: 'child', type: 'Widget', defaultValue: 'required' },
    ],
  },
  {
    name: 'ThemeData',
    description:
      'Defines the configuration of the overall visual Theme for a MaterialApp or a widget subtree.',
    category: 'Theming',
    docUrl: 'https://api.flutter.dev/flutter/material/ThemeData-class.html',
    code: `
import 'package:flutter/material.dart';

void main() => runApp(
  MaterialApp(
    theme: ThemeData(
      colorScheme: ColorScheme.fromSeed(seedColor: Colors.purple),
      useMaterial3: true,
    ),
    home: Scaffold(
      appBar: AppBar(title: const Text('ThemeData Example')),
      body: const Center(child: Text('Buttons will be purple!')),
      floatingActionButton: FloatingActionButton(
        onPressed: () {},
        child: const Icon(Icons.add),
      ),
    ),
  ),
);`,
    properties: [
      { name: 'colorScheme', type: 'ColorScheme', defaultValue: 'null' },
      { name: 'brightness', type: 'Brightness', defaultValue: 'null' },
      { name: 'primaryColor', type: 'Color', defaultValue: 'null' },
      { name: 'useMaterial3', type: 'bool', defaultValue: 'false' },
      { name: 'textTheme', type: 'TextTheme', defaultValue: 'null' },
    ],
  },
  {
    name: 'MediaQuery',
    description:
      'Establishes a subtree in which media queries resolve to the given data.',
    category: 'Theming',
    docUrl: 'https://api.flutter.dev/flutter/widgets/MediaQuery-class.html',
    code: `
import 'package:flutter/material.dart';

void main() => runApp(const MyApp());

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        body: Builder(
          builder: (context) {
            final screenSize = MediaQuery.of(context).size;
            return Center(
              child: Text('Screen width: \${screenSize.width.toStringAsFixed(2)}'),
            );
          },
        ),
      ),
    );
  }
}`,
    properties: [
      { name: 'data', type: 'MediaQueryData', defaultValue: 'required' },
      { name: 'child', type: 'Widget', defaultValue: 'required' },
    ],
  },
  {
    name: 'ColorScheme',
    description:
      'A set of 30 colors based on the Material spec that can be used to configure the color properties of most components.',
    category: 'Theming',
    docUrl: 'https://api.flutter.dev/flutter/material/ColorScheme-class.html',
    code: `
import 'package:flutter/material.dart';

void main() => runApp(
  MaterialApp(
    theme: ThemeData(
      colorScheme: const ColorScheme.light(
        primary: Colors.green,
        secondary: Colors.red,
      ),
    ),
    home: Scaffold(
      appBar: AppBar(title: const Text('ColorScheme')),
      body: const Center(child: Text('Primary color is green')),
      floatingActionButton: FloatingActionButton(
        onPressed: () {},
        child: const Icon(Icons.add),
      ),
    ),
  ),
);`,
    properties: [
      { name: 'primary', type: 'Color', defaultValue: 'required' },
      { name: 'secondary', type: 'Color', defaultValue: 'required' },
      { name: 'surface', type: 'Color', defaultValue: 'required' },
      { name: 'background', type: 'Color', defaultValue: 'required' },
      { name: 'brightness', type: 'Brightness', defaultValue: 'required' },
    ],
  },
  {
    name: 'BackdropFilter',
    description:
      'A widget that applies a filter to the existing painted content and then paints the child.',
    category: 'Effects',
    docUrl: 'https://api.flutter.dev/flutter/widgets/BackdropFilter-class.html',
    code: `
import 'dart:ui';
import 'package:flutter/material.dart';

void main() => runApp(
  const MaterialApp(
    home: Scaffold(
      body: Stack(
        fit: StackFit.expand,
        children: <Widget>[
          Text('0' * 10000),
          Center(
            child: ClipRect(
              child: BackdropFilter(
                filter: ImageFilter.blur(sigmaX: 5.0, sigmaY: 5.0),
                child: Container(
                  width: 200.0,
                  height: 200.0,
                  decoration: BoxDecoration(color: Colors.grey.shade200.withOpacity(0.5)),
                  child: const Center(child: Text('Frosted Glass')),
                ),
              ),
            ),
          ),
        ],
      ),
    ),
  ),
);`,
    properties: [
      { name: 'filter', type: 'ImageFilter', defaultValue: 'required' },
      { name: 'child', type: 'Widget', defaultValue: 'null' },
    ],
  },
  {
    name: 'BoxShadow',
    description:
      'A shadow cast by a box. The BoxShadow is not a widget but a class used in BoxDecoration.',
    category: 'Effects',
    docUrl: 'https://api.flutter.dev/flutter/painting/BoxShadow-class.html',
    code: `
import 'package:flutter/material.dart';

void main() => runApp(
  MaterialApp(
    home: Scaffold(
      body: Center(
        child: Container(
          height: 200,
          width: 200,
          decoration: BoxDecoration(
            color: Colors.white,
            boxShadow: [
              BoxShadow(
                color: Colors.grey.withOpacity(0.5),
                spreadRadius: 5,
                blurRadius: 7,
                offset: const Offset(0, 3),
              ),
            ],
          ),
          child: const Center(child: Text('I have a shadow')),
        ),
      ),
    ),
  ),
);`,
    properties: [
      { name: 'color', type: 'Color', defaultValue: 'const Color(0xFF000000)' },
      { name: 'offset', type: 'Offset', defaultValue: 'Offset.zero' },
      { name: 'blurRadius', type: 'double', defaultValue: '0.0' },
      { name: 'spreadRadius', type: 'double', defaultValue: '0.0' },
    ],
  },
  {
    name: 'Opacity',
    description: 'A widget that makes its child partially transparent.',
    category: 'Effects',
    docUrl: 'https://api.flutter.dev/flutter/widgets/Opacity-class.html',
    code: `
import 'package:flutter/material.dart';

void main() => runApp(
  const MaterialApp(
    home: Scaffold(
      body: Center(
        child: Opacity(
          opacity: 0.5,
          child: Text('This text is semi-transparent'),
        ),
      ),
    ),
  ),
);`,
    properties: [
      { name: 'opacity', type: 'double', defaultValue: 'required' },
      { name: 'child', type: 'Widget', defaultValue: 'null' },
    ],
  },
  {
    name: 'Transform',
    description:
      'A widget that applies a perspective transformation to its child.',
    category: 'Effects',
    docUrl: 'https://api.flutter.dev/flutter/widgets/Transform-class.html',
    code: `
import 'package:flutter/material.dart';

void main() => runApp(
  MaterialApp(
    home: Scaffold(
      body: Center(
        child: Transform.rotate(
          angle: -0.2,
          child: Container(
            padding: const EdgeInsets.all(8.0),
            color: Colors.blue,
            child: const Text('This is rotated!'),
          ),
        ),
      ),
    ),
  ),
);`,
    properties: [
      { name: 'transform', type: 'Matrix4', defaultValue: 'required' },
      { name: 'origin', type: 'Offset', defaultValue: 'null' },
      { name: 'alignment', type: 'AlignmentGeometry', defaultValue: 'null' },
      { name: 'child', type: 'Widget', defaultValue: 'null' },
    ],
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
