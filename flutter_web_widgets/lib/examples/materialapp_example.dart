import 'package:flutter/material.dart';

class MaterialAppExample extends StatelessWidget {
  const MaterialAppExample({super.key});

  @override
  Widget build(BuildContext context) {
    // This widget is the root of the application, so we just show a simple
    // message. The main app structure is already a MaterialApp.
    return const Scaffold(
      body: Center(child: Text('This is the root MaterialApp widget.')),
    );
  }
}
