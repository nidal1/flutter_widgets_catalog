import 'package:flutter/material.dart';

class ScaffoldExample extends StatelessWidget {
  const ScaffoldExample({super.key});

  @override
  Widget build(BuildContext context) {
    // The MaterialApp is necessary for the Scaffold to function correctly,
    // providing theme and layout direction.
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: Scaffold(
        appBar: AppBar(title: const Text('Scaffold Example')),
        body: const Center(child: Text('Hello, world!')),
      ),
    );
  }
}
