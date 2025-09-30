import 'package:flutter/material.dart';

class ThemeDataExample extends StatelessWidget {
  const ThemeDataExample({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
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
    );
  }
}
