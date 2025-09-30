import 'package:flutter/material.dart';

class ThemeExample extends StatelessWidget {
  const ThemeExample({super.key});

  @override
  Widget build(BuildContext context) {
    return Theme(
      data: ThemeData(
        brightness: Brightness.dark,
        primaryColor: Colors.lightBlue[800],
      ),
      child: Scaffold(
        appBar: AppBar(title: const Text('Theme Example')),
        body: const Center(child: Text('This app uses a dark theme.')),
      ),
    );
  }
}
