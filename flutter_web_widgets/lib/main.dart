// lib/main.dart

import 'package:flutter/material.dart';
import 'package:flutter_web_widgets/examples/appbar_example.dart';
import 'package:flutter_web_widgets/examples/scaffold_example.dart';
import 'package:flutter_web_widgets/examples/sliverappbar_example.dart';
// ... zid l'widgets l'khrin hna

// 2. Créer l'Map Registry dyalek
final Map<String, WidgetBuilder> examples = {
  "scaffold": (context) => const ScaffoldExample(),
  "appbar": (context) => const AppBarExample(),
  "sliverappbar": (context) => const SliverAppBarExample(),
  // ... zid les clés o l'widgets l'khrin hna
};

void main() {
  // 3. 9ra l'URL men l'navigateur
  final uri = Uri.base;

  // 4. Jbed l'valeur dyal paramètre 'example'
  final String? exampleName = uri.queryParameters['example'];

  // 5. L9a l'widget l'monassib f l'Map
  final WidgetBuilder? widgetBuilder = examples[exampleName];

  Widget homeWidget;

  if (widgetBuilder != null) {
    // Ila l9ina l'widget, n'affichiwh
    homeWidget = Builder(builder: widgetBuilder);
  } else {
    // Ila l'paramètre makaynch wla ghalet, n'affichiw message
    homeWidget = const Scaffold(
      body: Center(
        child: Text(
          'Example not found.\nPlease specify an example using "?example=widget_name"',
          textAlign: TextAlign.center,
        ),
      ),
    );
  }

  // 6. Lancer l'application b l'widget li khtarina
  runApp(MaterialApp(debugShowCheckedModeBanner: false, home: homeWidget));
}
