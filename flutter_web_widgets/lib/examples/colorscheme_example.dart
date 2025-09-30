import 'package:flutter/material.dart';

class ColorSchemeExample extends StatelessWidget {
  const ColorSchemeExample({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
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
    );
  }
}
